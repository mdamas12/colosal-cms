<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col" style="max-width:40px">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <div class="col2">
                  <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                      Crear Promoción
                  </h5>
                </div>
                <div class="col">
                  <q-btn color="red-10" label="Crear Promoción" :loading="loading" class="q-pa-xs float-right" @click="createPromotion()"/>
                </div>
            </div>

						<div class="q-mx-xs">
              <q-form ref="myForm">
                <div class="row">
                  <div class="col">
                    <div class="row q-mb-md">
                      <div class="col">
                        <q-input  
                          outlined
                          v-model="promotion.name"
                          label="Nombre"
                          lazy-rules
                          color="dark"
                          :rules="[val => !!val || 'Debe ingresar el nombre']"
                        />
                      </div>
                    </div>
                    <div class="row q-mb-lg">
                      <div class="col">
                        <q-input  
                          outlined
                          v-model="promotion.description"
                          label="Descripción"
                          color="dark"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-between items-center">
                    <div class="col-9 justify-evenly">
                      <!-- :filter="checkFileType" -->
                      <!-- <div class="row items-center q-my-sm">
                        <div class="col">
                        <q-file 
                          outlined 
                          clearable 
                          counter 
                          v-model="promotion.image"        
                          @rejected="onRejected"
                          @input="getImage"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                        </div>
                      </div>

                    </div>
                    <div class="col-2">
                      <div v-if="image !== null">
                        <q-img :src="preview" style="max-width: 150px" />
                      </div> -->
                    </div>
                  </div>
                  <!-- <div class="col q-ml-md">
                    <q-file
                      v-model="promotion.image"
                      label="Imagen de Portada"
                      color="indigo-10"
                      outlined
                      lazy-rules
                      :rules="[
                        val => val !== null && val !== '' || 'Debe seleccionar una imagen'
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                  </div> -->
                </div>
                 
                <div class="row q-mb-md">
                  <div class="col">
                    <q-select outlined v-model="promotion.coin" color="dark" :options="currencyOptions" label="Moneda"/>
                  </div>
                  <div class="col q-ml-sm">
                    <q-input
                      outlined
                      v-model.number="promotion.price"
                      label="Precio"
                      mask="#.##"
                      fill-mask="0"
                      ref="price"
                      color="dark"
                      :prefix="promotion.coin"
                      reverse-fill-mask
                      input-class="text-right"
                      :rules="[val => !!val || 'Ingrese el precio', isGreaterThanZero]"
                    />
                  </div>
                </div>

                <div class="row q-mb-xl">
                  <div class="col">
                    <q-select
                      outlined
                      v-model="categoryNameModel"
                      use-input
                      hide-selected
                      color="dark"
                      fill-input
                      input-debounce="0"
                      label="Categoría"
                      :options="options"
                      @filter="filterFn"
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
                  <div class="col-2 q-ml-sm">
                    <q-input
                      v-model.number="promotion.quantity"
                      type="number"
                      label="Existencias"
                      outlined
                      color="dark"
                    />
                  </div>
                </div>
                
              </q-form>
              <q-separator inset/>
              <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-px-md">
                  Detalle de Productos
              </h5>
              <div class="q-gutter-md">
                <div v-for="(item, index) in this.detail">
                  <div class="row q-mb-md">
                    <div class="col-8">
                      <q-select
                        outlined
                        use-input
                        hide-selected
                        fill-input
                        color="dark"
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
                        v-model.number="detail[index].quantity"
                        label="Cantidad"
                        outlined
                        color="dark"
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
              </div>
              <q-btn flat round color="indigo-10" icon="add" @click="addProduct()"/>
            </div>  
        </div>

      </div>
  </q-page>
</template>

<script>
//@js-check
import _ from 'lodash'
import Vue from 'vue'
import PromotionsService from '../../services/promotions/promotions.service'
import CategoriesService from '../../services/categories/categories.service'
import ProductsService from '../../services/products/products.service'
import { Loading } from 'quasar'

export default Vue.extend({
  data () {
    return {
      promotion: {
        name: '',
        description: '',
        // image: null,
        price: 0,
        coin: '',
        quantity: 0,
        category: 0
      },
      detail : [
        {
          quantity: 0,
          product: 0,
        }
      ],
      preview: null,
      uploading: null,
      loading: false,
      categoryOptions: [],
      categoryIndex: [],
      options: [],
      productOptions: [{
        id: 0,
        name: '',
        price: 0
      }],
      productIndex: [],
      options2: [],
      currencyOptions: ['USD', 'BS'],
      statusOptions: ['COMPLETE'],
      categoryNameModel: '',
      productNameModel: ['']
    }
  },
  mounted(){
    let vm = this
    vm.onRequest()
  },
  methods: {
    onRequest(){
      this.productOptions.pop()
      Loading.show()
      CategoriesService.getAllCategories().subscribe({
        next : data =>{
          for (let i = 0; i < data.length; i++) {
            this.categoryOptions.push(data[i].name)
            this.categoryIndex.push(data[i].id)
          }
        },
        complete: () => { Loading.hide() }
      })
    },
    addProduct(){
      this.detail.push({
        quantity: 0,
        product: 0,
      })
      this.productNameModel.push('')
    },
    getProductInfo(item, index){
      console.log('user input: ' + item + '\nposition: ' + this.productOptions.indexOf(item))
      if (this.productOptions.indexOf(item) >= 0){
        this.detail[index].product = this.productIndex[this.productOptions.indexOf(item)]
      }
    },
    removeProduct(index){
      if (this.detail.length > 1){
        this.detail.splice(index,1)
        this.productNameModel.splice(index,1)
      }
    },
    createPromotion(){
      if (this.promotion.name === ''){
        this.showNotif("Proveer nombre de promoción", 'red-10')
        return
      }
      if (this.promotion.coin === ''){
        this.showNotif("Especificar el tipo de moneda", 'red-10')
        return
      }
      // if (this.promotion.image == null){
      //   this.showNotif("Faltan campos por completar", 'red-10')
      //   return
      // }
      if (!this.promotion.price > 0){
        this.showNotif("Añadir el precio de la promo", 'red-10')
        return
      }
      if (!(this.categoryOptions.indexOf(this.categoryNameModel) >= 0)){
        this.showNotif("Agregar categoría de la promo", 'red-10')
        return
      }
      for (var i = 0; i < this.detail.length; i++) {
        if (this.productNameModel[i] === ''){
          this.showNotif(`Seleccionar nombre del producto ${i}`, 'red-10')
          return
        }
        if (!this.detail[i].quantity > 0){
          this.showNotif(`Especificar cantidad de ${this.productNameModel[i]}s`, 'red-10')
          return
        }
      }
      // if (this.promotion.image === null){        // begin
        this.promotion.category = this.categoryIndex[this.categoryOptions.indexOf(this.categoryNameModel)]
        this.loading = true
        PromotionsService.createPromotion(this.promotion, this.detail).subscribe( {
          complete: () => {
            this.loading = false
            this.showNotif("Promoción creada exitosamente", 'indigo-10')
            setTimeout(this.$router.back(),1000)
          }
        })
      // }                                          // end
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
      // setTimeout(() => {
        update(() => {
          if (val === '') {
            this.options = this.categoryOptions
          }
          else {
            const needle = val.toLowerCase()
            this.options = this.categoryOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
          }
        })
      // },1500)
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
          this.productOptions.splice(0, this.productOptions.length)
          this.productIndex.splice(0, this.productIndex.length)
          if (data.results.length > 0) {
            for (let i = 0; i < data.results.length; i++) {
              this.productOptions.push(data.results[i].name)
              this.productIndex.push(data.results[i].id)
            }
            this.options2 = this.productOptions
          }       
        },
        complete: () => {
          console.log('[complete]')
        }
      })
    },
    // checkFileType (files) {
    //   return files.filter(file => file.type === 'image/png')
    // },
    // getImage(e){
    //   console.log(e)
    //   let reader = new FileReader()
    //   reader.readAsDataURL(e)
    //   reader.onload = e => {
    //     this.preview = e.target.result
    //   }
    // },
    // onRejected (rejectedEntries) {
    //   // Notify plugin needs to be installed
    //   // https://quasar.dev/quasar-plugins/notify#Installation
    //   this.$q.notify({
    //     type: 'negative',
    //     message: `El archivo seleccionado no es de tipo .png`
    //   })
    // },
    isGreaterThanZero (val) {
      return val > 0 ? !!val: 'Ingresar cantidad comprada'
    },
    backToPromotions(){
      this.$router.push({path:"/promotions"})
    }
  },
  created: function() {
    this.debouncedGetProducts = _.debounce(this.getProducts, 500)
  }
})
</script>
