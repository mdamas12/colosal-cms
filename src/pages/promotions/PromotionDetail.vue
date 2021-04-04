<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col" style="max-width:40px;">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                  </div>
                  <div class="col2">
                    <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                        Editar Promoción
                    </h5>
                  </div>
                </div>
              </div>
              <div class="column items-end" v-if="fetched">
                <div class="col">
                  <div class="row">
                    <q-btn flat color="red-10" label="Eliminar" class="q-pa-xs q-mr-xs float-right" @click="confirmDelete()"/>
                    <q-btn color="red-10" label="Guardar" class="q-pa-xs float-right" @click="updatePromotion()"/>
                  </div>
                </div>
              </div>
            </div>

						<div class="q-mx-xs">
              <q-form ref="myForm">
                <div class="row q-mb-md">
                  <div class="col">
                    <div class="row">
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
                    <q-input  
                      outlined
                      v-model="promotion.description"
                      autogrow
                      color="dark"
                      label="Descripción"
                    />
                  </div>
                </div>

                <div class="row q-mb-md">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <q-select outlined v-model="promotion.coin" color="dark" :options="currencyOptions" label="Moneda"/>
                      </div>
                      <div class="col q-ml-sm">
                        <q-input
                          outlined
                          v-model.number="promotion.price"
                          label="Costo total"
                          mask="#.##"
                          fill-mask="0"
                          color="dark"
                          :prefix="promotion.coin"
                          reverse-fill-mask
                          input-class="text-right"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row q-mb-md">
                  <div class="col">
                    <q-select
                      outlined
                      v-model="categoryNameModel"
                      use-input
                      hide-selected
                      fill-input
                      color="dark"
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
              <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md">
                  Detalle de Productos
              </h5>
              <div v-if="savedProductDetail.length > 0">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md">
                    Productos Guardados
                </h6>
                <div class="q-gutter-md">
                  <div v-for="(item, index) in this.savedProductDetail">
                    <div class="row q-my-md">
                      <div class="col">
                        <div class="row">
                          <div class="col-8">
                            <q-input
                              outlined
                              v-model="savedproductNameModel[index]"
                              disable
                              hide-selected
                              fill-input
                              color="dark"
                              input-debounce="0"
                              label="Producto"
                            />
                          </div>
                          <div class="col-2 q-mx-auto">
                            <q-input
                              v-model.number="savedProductDetail[index].quantity"
                              type="number"
                              label="Cantidad"
                              color="dark"
                              outlined
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
                  </div>
                </div>
                <q-separator inset/>
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md">
                    Productos Nuevos
                </h6>
              </div>
              <div class="q-gutter-md">
                <div v-for="(item, index) in this.detail">
                  <div class="row q-my-md">
                    <div class="col">
                      <div class="row">
                        <div class="col-8">
                          <q-select
                            outlined
                            v-model="productNameModel[index]"
                            use-input
                            hide-selected
                            fill-input
                            color="dark"
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
                        </div>
                        <div class="col-2 q-mx-auto">
                          <q-input
                            v-model.number="detail[index].quantity"
                            type="number"
                            label="Cantidad"
                            color="dark"
                            outlined
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
      promotionId: this.$router.currentRoute.params.id,
      promotion: {
        name: "",
        description: "",
        image: null,
        price: 0,
        coin: "",
        quantity: 0,
        category: 0
      },
      detail : [
        {
          quantity: 0,
          product: 0,
        }
      ],
      loading1: false,
      loading2: false,
      fetched: false,
      categoryOptions: [],
      categoryIndex: [],
      options: [],
      productIndex: [],
      productOptions: [{
        id: 0,
        name: '',
        price: 0
      }],
      options2: [],
      currencyOptions: ["USD", "BS"],
      statusOptions: ["COMPLETE"],
      categoryNameModel: "",
      savedproductNameModel: [],
      savedProductDetail: [
        {
          id: 0,
          quantity: 0,
          product: 0,
        }
      ],
      productNameModel: [],
    }
  },
  mounted(){
    let vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      this.detail.pop()
      this.productOptions.pop()
      this.savedProductDetail.pop()
      Loading.show();
      CategoriesService.getAllCategories().subscribe({
        next : data =>{
          for (let i = 0; i < data.length; i++) {
            this.categoryOptions.push(data[i].name);
            this.categoryIndex.push(data[i].id);
          }
        },
        complete: () => {console.log("[complete]\ncategoryOptions: "+this.categoryOptions+"\ncategoryIndex: "+this.categoryIndex)}
      })
      PromotionsService.getPromotion(this.promotionId).subscribe({
        next: data =>{
          console.log(data)
          this.promotion.name = data.name;
          this.promotion.description = data.description;
          this.promotion.image = data.image;
          this.promotion.price = data.price;
          this.promotion.coin = data.coin;
          this.promotion.quantity = data.quantity;
          this.promotion.category = data.category.id;
          this.categoryNameModel = data.category.name
          this.savedProductDetail.splice(0,1)
          console.log(this.savedProductDetail)
          for (let i = 0; i < data.promotion_detail.length; i++) {
            this.savedProductDetail.push({
              id: data.promotion_detail[i].id,
              product: data.promotion_detail[i].product.id,
              quantity: data.promotion_detail[i].quantity
            });
            this.savedproductNameModel.push(data.promotion_detail[i].product.name)
            console.log(this.savedProductDetail)
          }
        },
        complete: () => {
          this.fetched = true;
          Loading.hide()
        }
      })
    },
    addProduct(){
      this.detail.push({
        quantity: 0,
        product: 0,
      });
      this.productNameModel.push('');
      console.log('this.productNameModel.length: '+this.productNameModel.length);
    },
    getProductInfo(item, index){
      console.log('user input: ' + item + '\nposition: ' + this.productOptions.indexOf(item))
      if (this.productOptions.indexOf(item) >= 0){
        this.detail[index].product = this.productIndex[this.productOptions.indexOf(item)]
      }
      console.log(this.detail)
    },
    removeSavedProduct(index){
      this.savedProductDetail.splice(index,1);
      this.savedproductNameModel.splice(index,1)
    },
    removeProduct(index){
      if (this.detail.length > 1){
        this.detail.splice(index,1);
        this.productNameModel.splice(index,1)
      }
    },
    updatePromotion(){
      if (this.promotion.name === ''){
        this.showNotif("Proveer nombre de promoción", 'red-10')
        return
      }
      if (this.promotion.coin === ''){
        this.showNotif("Especificar el tipo de moneda", 'red-10')
        return
      }
      if (!this.promotion.price > 0){
        this.showNotif("Añadir el precio de la promo", 'red-10')
        return
      }
      // console.log(this.categoryOptions)
      // console.log(`this.categoryNameModel: ${this.categoryNameModel}\n!this.categoryOptions.indexOf(${this.categoryNameModel}) >= 0: ${!this.categoryOptions.indexOf(this.categoryNameModel) >= 0}`)
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
      this.promotion.category = this.categoryIndex[this.categoryOptions.indexOf(this.categoryNameModel)]
      this.loading = true
      PromotionsService.updatePromotion(this.promotion, this.savedProductDetail, this.detail, this.promotionId).subscribe({
        complete: () => {
          this.loading = false
          this.showNotif("Promoción creada exitosamente", 'indigo-10')
          setTimeout(this.$router.back(),1000)
        }
      })
      //}
    },
    confirmDelete () {
      if (this.loading1 || this.loading2){
        return
      }
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar esta promoción?',
        cancel: true,
        persistent: true,
        color: 'red-10'
      }).onOk(() => {
        this.deletePromotion();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deletePromotion(){
      this.loading2 = true;
      PromotionsService.deletePromotion(this.promotionId).subscribe({
        next: () => {
          this.loading2 = false;
          console.log('[user Deleted]')
          this.showNotif("Promoción Eliminada exitosamente", 'indigo-10');
          setTimeout(() => this.$router.push({path: '/Promotions'}), 1000);
        }
      })
    },
    backToPromotions(){
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
      // setTimeout(() => {
        update(() => {
          if (val === '') {
            this.options = this.categoryOptions;
          }
          else {
            const needle = val.toLowerCase()
            this.options = this.categoryOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
            console.log("val: "+val)
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
          console.log(data.results)
          console.log(data.results.length)
          this.productOptions.splice(0, this.productOptions.length)
          this.productIndex.splice(0, this.productIndex.length)
          if (data.results.length > 0) {
            for (let i = 0; i < data.results.length; i++) {
              this.productOptions.push(data.results[i].name);
              this.productIndex.push(data.results[i].id);
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
    },
    backToPromotions(){
      this.$router.push({path:"promotions/"});
    }
  },
  created: function() {
    this.debouncedGetProducts = _.debounce(this.getProducts, 500)
  }
})
</script>
