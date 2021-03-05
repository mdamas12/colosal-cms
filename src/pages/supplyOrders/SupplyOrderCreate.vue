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
                  <q-btn color="red-10" label="Crear Orden" class="q-pa-xs float-right" @click="createSupplyOrder()"/>
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

export default Vue.extend({
  data () {
    return {
      order: {
        purchase: {
          date: "",
          description: "",
          invoice: "",
          coin: "",
          amount: "",
          provider: 0,
        },
        detail : [
          {
            product: 0,
            purchase_price: 0,
            purchase_quantity: 0,
            purchase_received: 0,
            status: ""
          }
        ]
      },
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
          console.log(response.data.results);
          for (let i = 0; i < response.data.results.length; i++) {
            this.productOptions.push(response.data.results[i].name);
            this.productIndex.push(response.data.results[i].id);
          }
          // for (let i = 0; i < data.results.length; i++) {
          //   this.productOptions.push(data.results[i].name);
          //   this.productIndex.push(data.results[i].id);
          // }
        })
        .catch((error) => {
          console.log(error);
        })
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
    createSupplyOrder(){
      console.log("productNameModel[0] = "+this.productNameModel[0]);
      console.log("");
      this.order.purchase.provider = this.supplierOptions.indexOf(this.supplierNameModel) >= -1? this.supplierIndex[this.supplierOptions.indexOf(this.supplierNameModel)]: null;
      for (let i = 0; i < this.order.detail.length; i++) {
        this.order.detail[i].product = this.productOptions.indexOf(this.productNameModel[i]) >= -1? this.productIndex[this.productOptions.indexOf(this.productNameModel[i])]: null; 
      }
      console.log("JSON.stringify(this.order): \n"+JSON.stringify(this.order));
      let subscription = SupplyOrdersService.createSupplyOrder(this.order).subscribe( {
        next: () => {
          setTimeout(() => this.backToSupplyOrders(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToSupplyOrders(){
      this.$router.back();
    },
    isValidRef (val) {
      const emailPattern = /^(?=[0-9#]{1,15}$)/;
      return emailPattern.test(val) || 'Número de referencia inválido';
    },
    isGreaterThanZero (val) {
      return parseNumber(val) != NaN && parseNumber(val) > 0 ? !!val : 'Número debe ser mayor que cero';
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
