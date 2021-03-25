<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">
          <div class="column items-end">
            <div class="col">
              <div class="row">
                <q-btn color="red-10" label="Crear compra" class="q-pa-xs q-ma-md float-right" @click="$router.push({path: 'sales/create'})"/>
              </div>
            </div>
          </div>
        <div class="q-pa-md">
          <q-input outlined bottom-slots v-model="text" label="Buscar" counter>
            <template v-slot:before>
              <q-icon name="account_circle" />
            </template>

            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>

            <!-- <template v-slot:hint>
              Field hint
            </template> -->
          </q-input>
          <q-tabs
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab class="text-red" name="validate" label="Por validar">
              <div v-if="toValidate.length > 0">
                <q-badge rounded color="red" :label="toValidate.length" floating class="q-mb-xl" />
              </div>
            </q-tab>
            <q-tab class="text-indigo-10" name="deliver" label="Por entregar">
              <div v-if="toDeliver.length > 0">
                <q-badge rounded color="indigo-10" :label="toDeliver.length" floating />
              </div>
            </q-tab>
            <q-tab class="text-green" name="processed" label="Procesado" />
          </q-tabs>

          <div class="q-gutter-y-sm">
            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="jump-up"
              transition-next="jump-down"
              class="text-center"
              keep-alive
            >
              <q-tab-panel name="validate">
                <q-table
                  title="Por Validar"
                  :data="toValidate"
                  :columns="columns1"
                  row-key="id"
                  :loading="!isValidateFetched"
                >

                  <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.label }}
                      </q-th>
                    </q-tr>
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td auto-width>
                        <q-btn size="sm" color="red-10" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
                      </q-td>
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                      <!-- <q-tr :props="props" class="cursor-pointer" @click.native="$router.push({ path: `/sales/detail/${props.row._id}`})"></q-tr> -->
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="column items-end">
                          <div class="row">
                            <q-btn flat round color="red-10" icon="delete" class="q-mr-sm float-right" @click="confirmDelete(props.row)" />
                            <!-- <q-btn flat round color="black" icon="edit" class="q-mr-md float-right" @click="$router.push({ path: `/sales/detail/${props.row.id}`})"/> -->
                            <q-btn color="indigo-10" label="Validar" class="q-mr-xs q-pa-xs float-right" @click="changeSaleStatus(props.row, 'POR ENTREGAR')" />
                            <q-btn color="green" label="Procesar" class="float-right" @click="changeSaleStatus(props.row, 'PROCESADA')" />
                          </div>
                        </div>
                      </q-td>
                    </q-tr>
                  </template>

                </q-table>
              </q-tab-panel>

              <q-tab-panel name="deliver">
                <q-table
                  title="Por Entregar"
                  :data="toDeliver"
                  :columns="columns2"
                  row-key="id"
                  :loading="!isDeliverFetched"
                >

                  <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.label }}
                      </q-th>
                    </q-tr>
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td auto-width>
                        <q-btn size="sm" color="indigo-10" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
                      </q-td>
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                      <!-- <q-tr :props="props" class="cursor-pointer" @click.native="$router.push({ path: `/sales/detail/${props.row._id}`})"></q-tr> -->
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="column items-end">
                          <div class="row">
                            <q-btn flat round color="red-10" icon="delete" class="q-mr-sm float-right" @click="confirmDelete(props.row)" />
                            <!-- <q-btn flat round color="black" icon="edit" class="q-mr-md float-right" @click="$router.push({ path: `/sales/detail/${props.row.id}`})"/> -->
                            <q-btn color="indigo-10" label="Regresar" class="q-mr-xs q-pa-xs float-right" @click="changeSaleStatus(props.row, 'POR VALIDAR')" />
                            <q-btn color="green" label="Procesar" class="float-right" @click="changeSaleStatus(props.row, 'PROCESADA')" />
                          </div>
                        </div>
                      </q-td>
                    </q-tr>
                  </template>

                </q-table>
              </q-tab-panel>

              <q-tab-panel name="processed">
                <q-table
                  title="Procesado"
                  :data="processed"
                  :columns="columns3"
                  row-key="id"
                  :loading="!isProcessedFetched"
                >

                  <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.label }}
                      </q-th>
                    </q-tr>
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td auto-width>
                        <q-btn size="sm" color="green" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
                      </q-td>
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        {{ col.value }}
                      </q-td>
                      <!-- <q-tr :props="props" class="cursor-pointer" @click.native="$router.push({ path: `/sales/detail/${props.row._id}`})"></q-tr> -->
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props">
                      <q-td colspan="100%">
                        <div class="column items-end">
                          <div class="row">
                            <q-btn flat round color="red-10" icon="delete" class="q-mr-sm float-right" @click="confirmDelete(props.row)" />
                            <!-- <q-btn flat round color="black" icon="edit" class="q-mr-md float-right" @click="$router.push({ path: `/sales/detail/${props.row.id}`})"/> -->
                            <q-btn color="green" label="REGRESAR" class="float-right" @click="changeSaleStatus(props.row, 'POR ENTREGAR')" />
                          </div>
                        </div>
                      </q-td>
                    </q-tr>
                  </template>

                </q-table>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import { Loading } from "quasar";
import SalesService from  '../../services/sales/sales.service'

export default Vue.extend({
  data () {
    return {
      tab: 'validate',
      text: '',
      isValidateFetched: false,
      isDeliverFetched: false,
      isProcessedFetched: false,
      toValidate: [{
        description: "",
        customer: {},
        created: "",
        bank: {},
        payment_type: "",
        coin : "",
        amount: 0,
      }],
      toDeliver: [{
        description: "",
        customer: {},
        created: "",
        bank: {},
        payment_type: "",
        coin : "",
        amount: 0,
      }],
      processed: [{
        description: "",
        customer: {},
        created: "",
        bank: {},
        payment_type: "",
        coin : "",
        amount: 0,
      }], 
      columns1: [
        {
          name: 'id',
          required: true,
          label: 'Referencia',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`},
        { name: 'coin', label: 'Moneda', field: 'coin' },
        { name: 'amount', label: 'Monto', field: 'amount' },
      ],
      columns2: [
        {
          name: 'id',
          required: true,
          label: 'Referencia',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`},
        { name: 'coin', label: 'Moneda', field: 'coin' },
        { name: 'amount', label: 'Monto', field: 'amount' },
      ],
      columns3: [
        {
          name: 'id',
          required: true,
          label: 'Referencia',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'customer', label: 'Cliente', field: row => row.customer, format: val => `${val.email}`, sortable: true},
        { name: 'created', label: 'Fecha', field: row => row.created, format: val => `${val}`},
        { name: 'payment_type', label: 'Forma de Pago', field: 'payment_type', sortable: true },
        { name: 'bank', label: 'Banco', sortable: true, field: row => row.bank, format: val => `${val.name}`},
        { name: 'coin', label: 'Moneda', field: 'coin' },
        { name: 'amount', label: 'Monto', field: 'amount' },
      ]
    }
  },
  mounted (){
    const vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      this.toValidate.pop();
      this.toDeliver.pop();
      this.processed.pop();
      // busca de ventas por validar
      SalesService.getSalesByStatus(1).subscribe({
        next: data => {
          console.log(data);
          for (let i = 0; i < data.length; i++){
            this.toValidate.push({id: data[i].id, customer: data[i].customer, created: data[i].created.substring(0,10),payment_type: data[i].payment_type, bank: data[i].bank, coin: data[i].coin, amount: data[i].amount, status: data[i].status});
          };
        },
        complete: () => {
          console.log("[completed]")
          this.isValidateFetched = true
            console.log(JSON.stringify(this.toValidate) + JSON.stringify(this.toDeliver) + JSON.stringify(this.processed))
        }
      })
    },
    changeSaleStatus(sale, value){
      // console.log("Entró a changeSaleStatus("+sale.id+","+value+")\nsale.status: "+ sale.status);
      let subscription = SalesService.updateSaleStatus(sale.id, value).subscribe({
        complete: () => {
          if (sale.status === 'POR VALIDAR'){
            this.toValidate.splice(this.toValidate.indexOf(sale),1);
          }else if (value === 'POR ENTREGAR'){
            this.toDeliver.splice(this.toDeliver.indexOf(sale),1);
          }else if(value === 'PROCESADA'){
            this.processed.splice(this.processed.indexOf(sale),1);
          }
          // console.log("Pasó de estar: ",sale.status);
          sale.status = value;
          // console.log("a estar: ",sale.status);
          if (value === 'POR ENTREGAR' && this.isDeliverFetched){
            this.toDeliver.splice(0, 0, sale);
          }else if((value === 'PROCESADA')  && this.isProcessedFetched){
            this.processed.splice(0, 0, sale);
          }else if(value === 'POR VALIDAR'){
            this.toValidate.splice(0, 0, sale);
          }
          console.log("[sale updated]");
        }
      });
    },
    confirmDelete (sale) {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar esta venta?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteSale(sale);
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deleteSale(sale){
      console.log("about to be deleted: ")
      let subscription = SalesService.deleteSale(sale.id).subscribe({
        complete: () => {
          if (sale.status === 'POR VALIDAR'){
            this.toValidate.splice(this.toValidate.indexOf(sale),1);
          }else if (value === 'POR ENTREGAR'){
            this.toDeliver.splice(this.toDeliver.indexOf(sale),1);
          }else if(value === 'PROCESADA'){
            this.processed.splice(this.processed.indexOf(sale),1);
          }
        }
      })
    },
  },
  watch: {
    tab: function(){
      if (this.tab === 'deliver' && !this.isDeliverFetched) {
        console.log('current tab: ' + this.tab + '\nwas it fetched?: ' + this.isDeliverFetched)
        SalesService.getSalesByStatus(2).subscribe({
          next: data => {
            console.log(data);
            for (let i = 0; i < data.length; i++){
              this.toDeliver.push({id: data[i].id, customer: data[i].customer, created: data[i].created.substring(0,10),payment_type: data[i].payment_type, bank: data[i].bank, coin: data[i].coin, amount: data[i].amount, status: data[i].status});
            }
          },
          complete: () => {
            this.isDeliverFetched = true
            console.log(JSON.stringify(this.toValidate) + JSON.stringify(this.toDeliver) + JSON.stringify(this.processed))
          }
        })
      }else if (this.tab === 'processed' && !this.isProcessedFetched){
        console.log('current tab: ' + this.tab + '\nwas it fetched?: ' + this.isProcessedFetched)
        // busqueda de ventas procesadas
        SalesService.getSalesByStatus(3).subscribe({
          next: data => {
            console.log(data);
            for (let i = 0; i < data.length; i++){
              this.processed.push({id: data[i].id, customer: data[i].customer, created: data[i].created.substring(0,10),payment_type: data[i].payment_type, bank: data[i].bank, coin: data[i].coin, amount: data[i].amount, status: data[i].status});
              // console.log("toValidate: "+this.toValidate+"\ntoDeliver: "+this.toDeliver+"\nprocessed: "+this.processed);
            };
          },
          complete: () => {          
            this.isProcessedFetched = true
            console.log(JSON.stringify(this.toValidate) + JSON.stringify(this.toDeliver) + JSON.stringify(this.processed))
          }
        })
      }
    }
  }
})
</script>
