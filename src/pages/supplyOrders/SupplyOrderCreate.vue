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
                  <q-btn color="red-10" label="Crear Orden" class="q-pa-xs float-right" :loading="loading" @click="checkSupplyOrder()"/>
                </div>
            </div>

            <div class="q-pa-lg">
              <div class="row q-mb-md">
                <div class="col q-mr-md">
                  <q-input  
                    outlined
                    v-model="order.purchase.invoice"
                    label="Referencia"
                    color="dark"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar el No. de referencia']"
                  />
                </div>
                <div class="col">
                  <q-input  
                    outlined
                    v-model="order.purchase.date"
                    type="date"
                    color="dark"
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
                    color="dark"
                    label="Descripción"
                  />
                </div>
                <div class="col">
                   <q-select
                      ref="supplierNameModel"
                      v-model= "order.purchase.provider"
                      :options= "supplierOptions"
                      outlined
                      color="red-10"
                      label="Proveedor"
                      option-value="id"
                      option-label="name"
                      map-options
                      lazy-rules
                      :rules="[
                        val => val !== null && val !== '' || 'Debe seleccionar un Proveedor'
                      ]"> 
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
                  color="dark"
                  v-model="order.purchase.amount"
                  label="Costo total"
                  mask="#.##"
                  fill-mask="0"
                  :prefix="order.purchase.coin"
                  reverse-fill-mask
                  input-class="text-right"
                  :rules="[val => !!val || 'Debe ingresar el monto total', isGreaterThanZero]"
                />
                </div>
              </div>
              <br/>
              <q-separator inset/>
              <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm q-mt-md" style="margin-top:-3px">
                  Detalle de Productos
              </h5>

              <div class="q-gutter-md">
                <div v-for="(item, index) in order.detail" :key="item.product.id">
                  <div class="row justify-evenly items-center">
                        <div class="col-md-4">
                          <q-select
                            outlined
                            color="dark"
                            v-model="item.product"
                            option-value="id"
                            option-label="name"
                            label="Producto"
                            :options="productOptions"
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
                          <div class="col-md-3 q-mx-sm">
                          <q-input
                            v-model.number="item.purchase_price"
                            label="Precio"
                            mask="#.##"
                            color="dark"
                            fill-mask="0"
                            reverse-fill-mask
                            input-class="text-right"
                            outlined
                            :rules="[val => !!val || 'Ingresar el costo del producto', isGreaterThanZero]"
                          />
                        </div>
                        <div class="col-md-3">
                          <q-input
                            v-model.number="item.purchase_quantity"
                            color="dark"
                            type="number"
                            label="Ctd. Comprada"
                            outlined
                            :rules="[val => !!val || 'Ingresar la cantidad comprada', isGreaterThanZero]"
                          />
                        </div>
                       </div>
                        <div class="row justify-evenly items-center">
                        <div class="col-md-4">
                          <q-input
                            v-model.number="item.purchase_Received"
                            color="dark"
                            type="number"
                            label="Ctd. Recibida"
                            outlined
                            :rules="[val => !!val || 'Ingresar la cantidad Recibida', isGreaterThanZero]"
                         
                          />
                        </div>
                        <div class="col-md-3">
                          <q-select outlined v-model="item.status" color="dark" :options="statusOptions" label="Estatus" :rules="[val => !!val || 'Ingresar el costo del producto']"/>
                        </div>
                  
                    <div class="col-3">   
                        <q-btn flat  color="red-10" label="Eliminar Producto" icon="delete" @click="removeProduct(index)"/>
                    </div> 
                  </div>

                  <div class="row q-my-lg">
                    <div class="col-md-12">
                      <q-separator inset />
                    </div>
                    
                  
                
                  </div>
                  <br/>
                 
              </div>  
              <q-btn push color="blue-8"  icon="add" label="Agregar Producto" @click="addProduct()" />
              
             </div>
        </div>
       </div>
     </div>
  </q-page>
</template>

<script>
//@js-check
import _ from 'lodash'
import Vue from 'vue'
import SupplyOrdersService from '../../services/supplyOrders/supply-orders.service'
import SuppliersService from '../../services/suppliers/suppliers.service'
import ProductsService from '../../services/products/products.service'

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
        detail : []
      },
      supplier : null,
      supplierHint:'',
      supplierQuery:'',
      searchingSupplier: false,
      loading: false,
      supplierOptions: [],
      supplierIndex: [],
      options: [],
      productOptions: [],
      productIndex: [],
      productPrices: [],
      options2: [],
      currencyOptions: ["USD", "BS"],
      statusOptions: ["COMPLETE"],
      supplierNameModel: "",
      productNameModel: [],
      limit: 25,
      offset: 0
    }
  },
  mounted (){
    const vm = this;
    vm.onRequest();
  },
  methods: {

  onRequest(){
      let subscription = SuppliersService.getSuppliers(this.limit, this.offset).subscribe({
          next: (data) => {
             //console.log(data)
            this.supplierOptions = data.results
          },
      })

      let subscription2 = ProductsService.getAllProducts(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.productOptions = data.results
        },
      })
  },
    getSuppliers(){

        let subscription = SuppliersService.getSuppliers(this.limit, this.offset).subscribe({
          next: (data) => {
            // console.log(data)
            this.supplierOptions = data.results
          },
      })
    },
    addProduct(){
      this.order.detail.push({
        product: 0,
        purchase_price: 0,
        purchase_quantity: 0,
        purchase_Received: 0,
        status: ""
      });
      //this.productNameModel.push("");
    },
    //  settear todo para que el producto se escriba en el modelo de sale_detail
    getProductInfo(item, index){
      if (this.productOptions.indexOf(item) >= 0){
        this.order.detail[index].product = this.productIndex[this.productOptions.indexOf(item)]
        this.order.detail[index].purchase_price = parseFloat(this.productPrices[this.productOptions.indexOf(item)])
      }
      console.log(this.order.detail)
    },
    removeProduct(index){
      if (this.order.detail.length > 0){
        this.order.detail.splice(index,1);
        this.productNameModel.splice(index,1)
      }
    },
    checkSupplyOrder(){
     
     
      if (this.order.purchase.date === ''){  
        this.showNotif("Ingresar fecha de compra", 'red-10');
        return;
      };
      if (this.order.purchase.provider == 0 ){  
        this.showNotif("Ingresar proveedor", 'red-10');
        return;
      };
  

      if (this.order.purchase.coin === ''){
        this.showNotif("Seleccionar tipo de moneda", 'red-10');
        return;
      };
      if (this.order.purchase.amount === ''){
        this.showNotif("Proveer monto total", 'red-10');
        return;
      };
      if (this.order.detail.length == 0){
         this.showNotif(`Debe ingresar productos a la orden`, 'red-10');
          return;
      }
      for (var i=0; i < this.order.detail.length; i++) {

           if (!this.order.detail[i].product){
          this.showNotif(`Especificar un producto`, 'red-10');
          return;
        }
    
        if (!this.order.detail[i].purchase_price > 0){
          this.showNotif(`Especificar el costo`, 'red-10');
          return;
        }
        if (!this.order.detail[i].purchase_quantity > 0){
          this.showNotif(`Especificar cantidad`, 'red-10');
          return;
        }
        if (!this.order.detail[i].purchase_quantity < 0){
          this.showNotif(`Especificar cantidad Recibida`, 'red-10');
          return;
        }
      }
  
      this.createSupplyOrder()
    },
    createSupplyOrder(){
      
      //console.log("JSON.stringify(this.order): \n"+JSON.stringify(this.order))
      //this.loading = true
      SupplyOrdersService.createSupplyOrder(this.order).subscribe({
        complete: () => {
         // this.loading = false;
          this.showNotif("Compra creada exitosamente", 'indigo-10');
          //setTimeout(this.$router.back(),1000);
        }
      })
    },
    backToSupplyOrders(){
      this.$router.back();
    },
    isGreaterThanZero (val) {
      return parseNumber(val) != NaN && parseNumber(val) > 0 ? !!val : 'Número debe ser mayor que cero';
    },
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    filterFn (val, update) {
      update (() => {
        if (val === ''){
          this.supplierHint = 'Ingrese el correo del suppliere'
          return
        }
        this.supplierHint = 'Esperando a que termine de escribir'
        this.supplierQuery = val
        this.debouncedGetSupplier()
      })
    },
    getSuppliers(){
      this.searchingSupplier = true
      this.supplierHint = 'Solicitando...'
      SuppliersService.searchSuppliers(this.supplierQuery).subscribe({
        next: data => {
          console.log(data)
          this.supplierOptions.splice(0, this.supplierOptions.length)
          this.supplierIndex.splice(0, this.supplierIndex.length);
          if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
              this.supplierOptions.push(data[i].name);
              this.supplierIndex.push(data[i].id);
              this.supplierHint = 'Recibido'
            }
            this.options = this.supplierOptions
          }else{
            this.supplierHint = 'No se encontraron resultados'
          }        
        },
        complete: () => {
          this.searchingSupplier = false        
        }
      })
    },
    setSupplier(){
      this.order.purchase.provider = this.supplierOptions.indexOf(this.supplierNameModel) >= 0 ? this.supplierIndex[this.supplierOptions.indexOf(this.supplierNameModel)]: null;
    },
    filterFn2 (val, update) {
      update (() => {
        if (val === ''){
          return
        }
        this.productQuery = val
        this.debouncedGetProducts()
      })
    },
    getProducts(){
      ProductsService.searchProducts(this.productQuery).subscribe({
        next: data => {
          console.log(data.results)
          console.log(data.results.length)
          this.productOptions.splice(0, this.productOptions.length)
          this.productIndex.splice(0, this.productIndex.length)
          if (data.results.length > 0) {
            for (let i = 0; i < data.results.length; i++) {
              this.productOptions.push(data.results[i].name);
              this.productIndex.push(data.results[i].id);
              this.productPrices.push(data.results[i].price)
            }
            this.options2 = this.productOptions
            console.log(this.productOptions)
          }       
        },
        complete: () => {
          console.log('[complete]')
        }
      })
    },
    isGreaterThanZero (val) {
      return val > 0 ? !!val: 'Ingresar cantidad comprada';
    }
  },
  created: function() {
    this.debouncedGetSupplier = _.debounce(this.getSuppliers, 500)
    this.debouncedGetProducts = _.debounce(this.getProducts, 500)
  }
})
</script>
