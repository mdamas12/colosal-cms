<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-ma-sm">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col" style="max-width:40px;">
                  <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <div class="col2">
                  <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                      Nueva Venta
                  </h5>
                </div>
              </div>

              <div class="row">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Información de Compra
                </h6>
              </div>
              
            </div>
            <div class="column items-end">
              <div class="col">
                <div class="row">
                  <q-btn color="red-10" :loading="loading" label="Crear compra" class="q-pa-xs float-right" @click="createSale()">
                    <template v-slot:loading>
                      <q-spinner-facebook /> 
                    </template>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>

          <div class="q-ma-sm">
            <div class="row q-ma-bg">
              <div class="col">               
                <q-select
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  v-model="clientNameModel"
                  label="Cliente"
                  stack-label
                  :loading="searchingClient"
                  :hint="clientHint"
                  :options="options"
                  @filter="filterFn"
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0"></div>
                  </template>
                </q-select>           
              </div>
              <div class="col q-mx-sm">               
                <q-input  
                  outlined
                  v-model="sale.description"
                  autogrow
                  label="Descripción"
                />
              </div>
            </div>
            <br/>
            <q-separator inset class="q-my-md"/>
            <div class="row q-ma-bg">
              <div class="col2">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Información de Pago
                </h6>
              </div>
            </div>

            <div class="row q-ma-bg">
              <div class="col">               
                <q-select
                  outlined
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  v-model="bankNameModel"
                  label="Banco"
                  stack-label
                  :options="options3"
                  @filter="filterFn3"
                >
                  <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0"></div>
                  </template>
                </q-select>              
              </div>
              <div class="col q-mx-sm">               
                <q-select
                  outlined
                  v-model="sale.coin"
                  :options="currencyOptions"
                  label="Moneda"
                  stack-label
                >
                  <template v-slot:prepend>
                    <q-icon name="money" />
                  </template>
                </q-select>           
              </div>
              <div class="col">               
                <q-select
                  outlined
                  v-model="sale.payment_type"
                  :options="paymentOptions"
                  label="Forma de Pago"
                  stack-label
                >
                </q-select>           
              </div>
            </div>
            <br/>
            <q-separator inset class="q-my-md"/>
            <div class="row q-ma-bg">
              <div class="col2">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Productos Adquiridos
                </h6>
              </div>
            </div>

            <div class="row q-mx-md">
              <div class="col">
                <div v-for="(item, index) in this.sale_detail">
                  <div class="row q-mb-md">
                    <div class="col-8">
                      <q-select
                        outlined
                        use-input
                        hide-selected
                        fill-input
                        :loading="searchingProducts[index]"
                        :hint="productHint[index]"
                        v-model="productNameModel[index]"
                        input-debounce="0"
                        label="Producto"
                        :options="options2"
                        @filter="filterFn2"
                        @input="getProductInfo(productNameModel[index], index)"
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
                    <div class="col-2 q-mx-auto">
                      <q-input
                        type="number"
                        v-model.number="sale_detail[index].quantity"
                        label="Cantidad"
                        outlined
                        lazy-rules
                        :rules="[val => !!val || 'Ingresar cantidad comprada', isGreaterThanZero]"
                      />
                    </div>
                    <div class="col-1 self-center">
                      <div class="row">
                        <q-btn flat round color="indigo-10" icon="delete" @click="removeProduct(index)"/>
                      </div>
                    </div>
                  </div>
                </div>
                <q-btn flat round color="indigo-10" icon="add" @click="addProduct()"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import SalesService from '../../services/sales/sales.service'
import ProductsService from '../../services/products/products.service'
import PaymentsService from '../../services/payments/payments.service'
import { Loading } from 'quasar';

export default Vue.extend({
  data () {
    return {
      paymentOptions: ['ZELLE', 'TRANSFERENCIA BS', 'PAGO MOVIL', 'EFECTIVO'],
      currencyOptions: ["USD", "BS"],
      clientHint:'',
      clientQuery:'',
      productQuery:'',
      searchingClient: false,
      productHint: [''],
      searchingProducts: [false],
      loading: false,
      sale: {
        description: "",
        customer: 0,
        bank: 0,
        payment_type: "",
        coin : ""
      },
      sale_detail:[{
        product: 0,
        quantity: 0,
        price: 0
      }],
      selectedProducts: [{
        id: 0,
        label: '',
        value: '',
        name: '',
        price: 0
      }],
      clientOptions: [{
        id: 0,
        name: ''
      }],
      bankOptions: [{
        id: 0,
        name: '',
      }],
      productOptions: [{
        id: 0,
        name: '',
        price: 0
      }],
      currentProductIndex: 0,
      clientIndex: [],
      options: [],
      productIndex: [],
      productPrices: [],
      options2: [],
      clientNameModel: "",
      productNameModel: [],
      bankIndex: [],
      options3: [],
      bankNameModel: ""
    }
  },
  mounted(){
    let vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      Loading.show();
      this.productOptions.pop();
      // let subscription2 = ProductsService.getAllProducts().subscribe({
      //   next: data2 => {
      //     this.productOptions.pop();
      //     for (let i = 0; i < data2.results.length; i++) {
      //       this.productOptions.push(data2.results[i].name);
      //       this.productIndex.push(data2.results[i].id);
      //       this.productPrices.push(data2.results[i].price);
      //     }
      //   },
      //   complete: () => {
      //     console.log('[complete]');
      //   }
      // });

      let subscription3 = PaymentsService.getPayments().subscribe({
        next: data3 => {
          this.bankOptions.pop();
          for (let i = 0; i < data3.length; i++) {
            this.bankOptions.push(data3[i].name);
            this.bankIndex.push(data3[i].id);
          }
        },
        complete: () => {
          console.log('[complete]');
          Loading.hide();
        }
      });
    },
    addProduct(){
      this.sale_detail.push({
        product: 0,
        price: 0,
        quantity: 0
      });
      this.productNameModel.push('');
    },
    //  settear todo para que el producto se escriba en el modelo de sale_detail
    getProductInfo(item, index){
      console.log('user input: ' + item + '\nposition: ' + this.productOptions.indexOf(item))
      if (this.productOptions.indexOf(item) >= 0){
        this.sale_detail[index].product = this.productIndex[this.productOptions.indexOf(item)]
        this.sale_detail[index].price = parseFloat(this.productPrices[this.productOptions.indexOf(item)])
      }
      console.log(this.sale_detail)
    },
    removeProduct(index){
      if (this.sale_detail.length > 1){
        this.sale_detail.splice(index,1);
        this.productNameModel.splice(index,1);
        this.productHint.splice(index,1)
        this.searchingProducts.splice(index,1)
      }
    },
    createSale(){
      if (this.clientNameModel === ""){
        this.showNotif("Proveer correo de cliente", 'red-10');
        return;
      };
      if (this.sale.coin === "" || this.sale.payment_type === ""){
        this.showNotif("Completar información de pago", 'red-10');
        return;
      };
      if (this.sale_detail.length == 0){
        this.showNotif("Debe agregar al menos un producto", 'red-10');
        return;
      };
      for (var i=0; i < this.sale_detail.length; i++) {
        if (this.productNameModel[i] === ""){
          this.showNotif(`Falta información del producto ${i}`, 'red-10');
          return;
        }
        if (this.sale_detail[i].quantity <= 0){
          this.showNotif(`Especificar cantidad de ${this.productNameModel[i]}s`, 'red-10');
          return;
        }
      };
      if (this.bankNameModel === ""){
        this.showNotif("Proveer nombre de banco", 'red-10');
        return;
      };
      this.sale.customer = this.clientOptions.indexOf(this.clientNameModel) >= -1? this.clientIndex[this.clientOptions.indexOf(this.clientNameModel)]: null;
      this.sale.bank = this.bankOptions.indexOf(this.bankNameModel) >= -1? this.bankIndex[this.bankOptions.indexOf(this.bankNameModel)]: null;

      // for (let i = 0; i < this.sale_detail.length; i++) {
      //   this.sale_detail[i].product = this.productOptions.indexOf(this.productNameModel[i]) >= -1? this.productIndex[this.productOptions.indexOf(this.productNameModel[i])]: null; 
      //   this.sale_detail[i].price = this.productOptions.indexOf(this.productNameModel[i]) >= -1? parseFloat(this.productPrices[this.productOptions.indexOf(this.productNameModel[i])]): null; 
      // }
      console.log("everything in order. Creating sale...");
      this.loading = true;
      let subscription = SalesService.createSale({sale: this.sale, sale_detail: this.sale_detail}).subscribe({
        complete: () =>{
          this.loading = false;
          this.showNotif("Venta creada exitosamente", 'indigo-10');
          setTimeout(this.$router.back(),1000);
        }
      });
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
      update (() => {
        if (val === ''){
          this.clientHint = 'Ingrese el correo del cliente'
          return
        }
        this.clientHint = 'Esperando a que termine de escribir'
        this.clientQuery = val
        this.debouncedGetClient()
      })
    },
    getClients(){
      this.searchingClient = true
      this.clientHint = 'Solicitando...'
      SalesService.searchUsers(this.clientQuery).subscribe({
        next: data => {
          console.log(data)
          this.clientOptions.splice(0, this.clientOptions.length)
          this.clientIndex.splice(0, this.clientIndex.length);
          if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
              this.clientOptions.push(data[i].email);
              this.clientIndex.push(data[i].id);
              this.clientHint = 'Recibido'
            }
            this.options = this.clientOptions
          }else{
            this.clientHint = 'No se encontraron resultados'
          }        
        },
        complete: () => {
          this.searchingClient = false        
        }
      })
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
    filterFn3 (val, update) {
      // call abort() at any time if you can't retrieve data somehow
      // setTimeout(() => {
        update(() => {
          if (val === '') {
            this.options3 = this.bankOptions;
          }
          else {
            const needle = val.toLowerCase()
            this.options3 = this.bankOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
            console.log("val: "+val)
          }
          
        })
      // }, 1500)
    },
    isGreaterThanZero (val) {
      return val > 0 ? !!val: 'Ingresar cantidad comprada';
    },
    backToSales(){
      this.$router.push({path:"sales/"});
    }
  },
  created: function() {
    this.debouncedGetClient = _.debounce(this.getClients, 500)
    this.debouncedGetProducts = _.debounce(this.getProducts, 500)
  }
})
</script>
