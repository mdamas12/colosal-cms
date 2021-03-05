<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col" style="max-width:40px;">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <div class="col2">
                  <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                      Crear Compra a Proveedor
                  </h5>
                </div>
                <div class="col">
                <q-btn flat color="red-10" label="Eliminar" class="q-pa-xs q-mr-xs float-right" :loading="loading2" @click="confirmDelete()"/>
                </div>
                <div class="col" style="max-width:110px;">
              <q-btn color="red-10" label="Guardar" class="q-pa-xs q-mr-md float-right" :loading="loading1" @click="updateSupplyOrder()"/>
                </div>
            </div>

            <div class="q-pa-lg">
              <div class="row q-mb-md">
                <div class="col q-mr-md">
                  <q-input  
                    outlined
                    v-model="order.purchase.invoice"
                    label="Referencia"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar el No. de referencia']"
                  />
                </div>
                <div class="col">
                  <q-input  
                    outlined
                    v-model="order.purchase.date"
                    type="date"
                    hint="Fecha de Compra"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar la fecha de compra']"
                  >
                    <q-tooltip content-class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Fecha de compra</q-tooltip>
                  </q-input>
                </div>
              </div>
              <div class="row q-mb-lg">
                <div class="col q-mr-md">
                  <q-input  
                    outlined
                    v-model="order.purchase.description"
                    autogrow
                    label="Descripción"
                  />
                </div>
                <div class="col">
                  <q-select
                    outlined
                    v-model="supplierNameModel"
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    label="Proveedor"
                    :options="options"
                    @filter="filterFn"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar algún proveedor']"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
              </div>
              <div class="row">
                <div class="col q-mr-md">
                    <q-select outlined v-model="order.purchase.coin" :options="currencyOptions" label="Moneda" :rules="[val => !!val || 'Debe seleccionar alguna moneda']"/>
                </div>
                <div class="col"> 
                  <q-input
                  outlined
                  v-model="order.purchase.amount"
                  label="Costo total"
                  mask="#.##"
                  fill-mask="0"
                  :prefix="order.purchase.coin"
                  reverse-fill-mask
                  hint="Mask: #.##"
                  input-class="text-right"
                />
                </div>
              </div>
              
              <!-- <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="order.purchase.invoice"
                  label="Referencia"
                  style="width: 250px"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="order.purchase.date"
                  type="date"
                  hint="Fecha de Compra"
                  style="width: 250px"
                >
                <q-tooltip content-class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Fecha de compra</q-tooltip>
                </q-input>
                <br/>
                <q-input  
                  outlined
                  v-model="order.purchase.description"
                  autogrow
                  label="Descripción"
                  style="max-width: 300px"
                />
                <br/>
                <q-select
                  outlined
                  v-model="supplierNameModel"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  label="Proveedor"
                  :options="options"
                  @filter="filterFn"
                  style="width: 250px"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        No results
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <br/>
                <q-select outlined v-model="order.purchase.coin" :options="currencyOptions" label="Moneda" style="width: 250px"/>
                <br/>
                <q-input
                  outlined
                  v-model="order.purchase.amount"
                  label="Costo total"
                  mask="#.##"
                  fill-mask="0"
                  :prefix="order.purchase.coin"
                  reverse-fill-mask
                  hint="Mask: #.##"
                  input-class="text-right"
                  style="width: 250px"
                />
              </q-form> -->
              <br/>
              <q-separator inset/>
              <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm q-mt-md" style="margin-top:-3px">
                  Detalle de Productos
              </h5>
              <div class="q-gutter-md">
                <div v-for="(item, index) in this.order.detail">
                  <div class="row justify-evenly items-center">
                    <div class="col-10">
                      <div class="row q-mb-md">
                        <div class="col">
                          <q-select
                            outlined
                            v-model="productNameModel[index]"
                            use-input
                            hide-selected
                            fill-input
                            input-debounce="0"
                            label="Producto"
                            :options="options2"
                            @filter="filterFn2"
                            :rules="[val => !!val || 'Debe seleccionar algún producto']"
                          >
                            <template v-slot:no-option>
                              <q-item>
                                <q-item-section class="text-grey">
                                  No results
                                </q-item-section>
                              </q-item>
                            </template>
                          </q-select>
                        </div>
                        <div class="col q-mx-sm">
                          <q-input
                            v-model.number="order.detail[index].purchase_price"
                            label="Precio"
                            mask="#.##"
                            fill-mask="0"
                            reverse-fill-mask
                            input-class="text-right"
                            outlined
                          />
                        </div>
                        <div class="col">
                          <q-input
                            v-model.number="order.detail[index].purchase_quantity"
                            type="number"
                            label="Cantidad"
                            outlined
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col q-mr-md">
                          <q-input
                            v-model.number="order.detail[index].purchase_received"
                            type="number"
                            label="Unidades Recibidas"
                            outlined
                          />
                        </div>
                        <div class="col">
                          <q-select outlined v-model="order.detail[index].status" :options="statusOptions" label="Estatus"/>
                        </div>
                      </div>
                    </div>
                    <div class="col-1 self-center">
                      <div class="column items-center">
                        <q-btn flat round color="red-10" icon="delete" @click="removeProduct(index)"/>
                      </div>
                    </div>
                  </div>
                  <div class="row q-my-lg">
                    <q-separator inset />
                  </div>
                  <!-- <q-select
                    outlined
                    v-model="productNameModel[index]"
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    label="Producto"
                    :options="options2"
                    @filter="filterFn2"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                  <br/>
                  <q-input
                    v-model.number="order.detail[index].purchase_price"
                    label="Precio"
                    mask="#.##"
                    fill-mask="0"
                    reverse-fill-mask
                    input-class="text-right"
                    outlined
                    style="max-width: 200px"
                  />
                  <br/>
                  <q-input
                    v-model.number="order.detail[index].purchase_quantity"
                    type="number"
                    label="Cantidad"
                    outlined
                    style="max-width: 200px"
                  />
                  <br/>
                  <q-input
                    v-model.number="order.detail[index].purchase_received"
                    type="number"
                    label="Unidades Recibidas"
                    outlined
                    style="max-width: 200px"
                  />
                  <br/>
                  <q-select outlined v-model="order.detail[index].status" :options="statusOptions" label="Estatus" style="width: 250px"/>
                  <br/>
                  <q-btn flat round color="primary" icon="delete" @click="removeProduct(index)"/>
                  <q-separator /> -->
                </div>
              </div>
              <br/>
              <q-btn flat round color="indigo-10" icon="add" @click="addProduct()"/>
            </div> 
        </div>

      </div>
  </q-page>
</template>

<script>
//@js-check
import Vue from 'vue'
import SupplyOrdersService from '../../services/supplyOrders/supply-orders.service'
import SuppliersService from '../../services/suppliers/suppliers.service'
import axios from 'axios'
import { Loading } from 'quasar'

export default Vue.extend({
  data () {
    return {
      loading1: false,
      loading2: false,
      order: {
        purchase: {
          date: "",
          description: "",
          invoice: "",
          coin: "",
          amount: "",
          provider: 0,
        },
        detail : []
      },
      supplyOrderId: this.$router.currentRoute.params.id,
      supplierOptions: [],
      supplierIndex: [],
      options: [],
      productOptions: [],
      productIndex: [],
      options2: [],
      currencyOptions: ["USD", "BS"],
      statusOptions: ["COMPLETE"],
      supplierNameModel: "",
      productNameModel: []
    }
  },
  mounted(){
    const vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      Loading.show()
      let subscription = SuppliersService.getSuppliers(25,0).subscribe({
        next : data =>{
          for (let i = 0; i < data.results.length; i++) {
            this.supplierOptions.push(data.results[i].name);
            this.supplierIndex.push(data.results[i].id);
          }
        },
        complete: () => {console.log("[complete]\nsupplierOptions: "+this.supplierOptions+"\nsupplierIndex: "+this.supplierIndex)}
      })
      let subscription2 = axios.get("http://localhost:8000/panel/products/?limit=25&offset=0")
        .then((response) => {
          for (let i = 0; i < response.data.results.length; i++) {
            this.productOptions.push(response.data.results[i].name);
            this.productIndex.push(response.data.results[i].id);
          }
        })
        .catch((error) => {
          console.log(error);
        })
      let subscription3 = SupplyOrdersService.getSupplyOrder(this.supplyOrderId).subscribe({
        next: data =>{
          console.log(data)
          this.order.purchase.date = data.date;
          this.order.purchase.description = data.description;
          this.order.purchase.invoice = data.invoice;
          this.order.purchase.coin = data.coin;
          this.order.purchase.amount = data.amount;
          this.order.purchase.provider = data.provider.id;
          this.supplierNameModel = data.provider.name;
          for (let i = 0; i < data.PurchaseDetail.length; i++) {
            this.order.detail.push({
              product: data.PurchaseDetail[i].product.id,
              purchase_price: data.PurchaseDetail[i].purchase_price,
              purchase_quantity: data.PurchaseDetail[i].purchase_quantity,
              purchase_received: data.PurchaseDetail[i].purchase_Received,
              status: data.PurchaseDetail[i].status
            })
            this.productNameModel.push(data.PurchaseDetail[i].product.name)
          }
        },
        complete: () => {
          this.Loading.hide();
        }
      });
    },
    addProduct(){
      this.order.detail.push({
        //  product: 0,
        //  purchase_price: 0,
        //  purchase_quantity: 0,
        //  purchase_Received: 0,
        //  status: ""
        product: 0,
        purchase_price: 0,
        purchase_quantity: 0,
        purchase_received: 0,
        status: ""
      });
      this.productNameModel.push("");
    },
    removeProduct(index){
      if (this.order.detail.length > 1){
        this.order.detail.splice(index,1);
        this.productNameModel.splice(index,1)
      }
    },
    updateSupplyOrder(){
      if (this.loading1 || this.loading2){
        return
      }
      console.log("productNameModel[0] = "+this.productNameModel[0]);
      console.log("");
      this.order.purchase.provider = this.supplierOptions.indexOf(this.supplierNameModel) >= -1? this.supplierIndex[this.supplierOptions.indexOf(this.supplierNameModel)]: null;
      for (let i = 0; i < this.order.detail.length; i++) {
        this.order.detail[i].product = this.productOptions.indexOf(this.productNameModel[i]) >= -1? this.productIndex[this.productOptions.indexOf(this.productNameModel[i])]: null; 
      }
      console.log("JSON.stringify(this.order): \n"+JSON.stringify(this.order));
      this.loading1 = true;
      let subscription = SupplyOrdersService.updateSupplyOrder(this.order, this.supplyOrderId).subscribe( {
        next: () => {
          setTimeout(() => this.backToSupplyOrders(), 500);
        },
        complete: () => {
          console.log('[supply order updated]');
          this.loading1 = false;
          this.showNotif("Cambios guardados exitosamente", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      })
    },
    confirmDelete () {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar esta orden de compra?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteSupplyOrder();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deleteSupplyOrder(){
      this.loading2 = true;
      let subscription = SupplyOrdersService.deleteSupplyOrder(this.supplyOrderId).subscribe( {
        complete: () => {
          this.loading2 = false;
          console.log('[supplier Deleted]')
          this.showNotif("Usuario Eliminado", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      });
    },
    backToSupplyOrders(){
      this.$router.back();
    },
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    filterFn (val, update) {
      // call abort() at any time if you can't retrieve data somehow
      setTimeout(() => {
        update(() => {
          if (val === '') {
            this.options = this.supplierOptions;
          }
          else {
            const needle = val.toLowerCase()
            this.options = this.supplierOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
            console.log("val: "+val)
          }
          // console.log()
          // if (this.supplierNameModel !== null && this.options.indexOf(this.supplierNameModel)!== -1) {
          //   this.order.purchase.provider = this.supplierIndex[this.supplierOptions.indexOf(this.supplierNameModel)];
          //   console.log("order.purchase provider id: "+ this.order.purchase.provider);
          // }
        })
      }, 1500)
    },
    filterFn2 (val, update) {
      // call abort() at any time if you can't retrieve data somehow
      setTimeout(() => {
        update(() => {
          if (val === '') {
            this.options2 = this.productOptions;
          }
          else {
            const needle = val.toLowerCase()
            this.options2 = this.productOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
            console.log("val: "+val)
          }
          // console.log()
          // if (this.supplierNameModel !== null && this.options.indexOf(this.supplierNameModel)!== -1) {
          //   this.purchase.provider = this.supplierIndex[this.supplierOptions.indexOf(this.supplierNameModel)];
          //   console.log("purchase provider id: "+ this.purchase.provider);
          // }
        })
      }, 1500)
    },
  }
})
</script>
