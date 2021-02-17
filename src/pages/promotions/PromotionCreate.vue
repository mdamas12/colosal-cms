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
                      Crear Promoción
                  </h5>
                </div>
                <div class="col">
                  <q-btn color="red-10" label="Crear Promoción" class="q-pa-xs float-right" @click="createPromotion()"/>
                </div>
            </div>

						<div class="q-gutter-md">
              <q-form ref="myForm">
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <q-input  
                          outlined
                          v-model="promotion.name"
                          label="Nombre"
                        />
                        <br/>
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
                <br/>
                <q-input  
                  outlined
                  v-model="promotion.description"
                  autogrow
                  label="Descripción"
                />
                <br/><br/>

                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col-2">
                        <q-select outlined v-model="promotion.coin" :options="currencyOptions" label="Moneda"/>
                      </div>
                      <div class="col-2 q-mx-md">
                        <q-input
                          outlined
                          v-model="promotion.price"
                          label="Costo total"
                          mask="#.##"
                          fill-mask="0"
                          :prefix="promotion.coin"
                          reverse-fill-mask
                          input-class="text-right"
                        />
                      </div>
                      <div class="col">
                        <q-select
                          outlined
                          v-model="promotion.category"
                          use-input
                          hide-selected
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
                    </div>
                  </div>
                </div>
                
              </q-form>
              <br/>
              <q-separator inset/>
              <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md">
                  Detalle de Productos
              </h5>
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
import Vue from 'vue'
import PromotionsService from '../../services/promotions/promotions.service'
import CategoriesService from '../../services/categories/categories.service'
import ProductsService from '../../services/products/products.service'
import axios from 'axios'

export default Vue.extend({
  data () {
    return {
      promotion: {
        name: "",
        description: "",
        //image: null,
        price: 0,
        coin: "",
        quantity: 0,
        category: 0
      },
      detail : [
        {
          quantity: 1,
          product: 0,
        }
      ],
      categoryOptions: [],
      categoryIndex: [],
      options: [],
      productOptions: [],
      productIndex: [],
      options2: [],
      currencyOptions: ["USD", "BS"],
      statusOptions: ["COMPLETE"],
      categoryNameModel: "",
      productNameModel: [""]
    }
  },
  mounted(){
    let vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      let subscription = CategoriesService.getCategories(25,0).subscribe({
        next : data =>{
          for (let i = 0; i < data.results.length; i++) {
            this.categoryOptions.push(data.results[i].name);
            this.categoryIndex.push(data.results[i].id);
          }
        },
        complete: () => {console.log("[complete]\ncategoryOptions: "+this.categoryOptions+"\ncategoryIndex: "+this.categoryIndex)}
      });
      let subscription2 = ProductsService.getAllProducts().subscribe({
        next: data => {
          console.log(data.results);
          for (let i = 0; i < data.results.length; i++) {
            this.productOptions.push(data.results[i].name);
            this.productIndex.push(data.results[i].id);
          }
          // for (let i = 0; i < data.results.length; i++) {
          //   this.productOptions.push(data.results[i].name);
          //   this.productIndex.push(data.results[i].id);
          // }
        },

        complete: () => {console.log("[complete]\nproductOptions: "+this.productOptions+"\nproductIndex: "+this.productIndex)}
      });
    },
    addProduct(){
      this.detail.push({
        quantity: 1,
        product: 0,
      });
      this.productNameModel.push("");
      console.log('this.productNameModel.length: '+this.productNameModel.length);
    },
    removeProduct(index){
      if (this.detail.length > 1){
        this.detail.splice(index,1);
        this.productNameModel.splice(index,1)
      }
    },
    createPromotion(){
      this.promotion.category = this.categoryOptions.indexOf(this.categoryNameModel) >= -1? this.categoryIndex[this.categoryOptions.indexOf(this.categoryNameModel)]: null;
      for (let i = 0; i < this.detail.length; i++) {
        this.detail[i].product = this.productOptions.indexOf(this.productNameModel[i]) >= -1? this.productIndex[this.productOptions.indexOf(this.productNameModel[i])]: null; 
      }
      /* const vm = this
      console.log("JSON.stringify(this.promotion): \n"+JSON.stringify(this.promotion));
      var reader = new FileReader()
      reader.readAsDataURL(this.promotion.image)
      reader.onload = () => {
        let iconBase64 = reader.result
        this.promotion.image = iconBase64;
      */  
        let subscription = PromotionsService.createPromotion(this.promotion, this.detail).subscribe( {
          next: () => {
            setTimeout(() => this.backToPromotions(), 500);
          },
          complete: () => console.log('[complete]'),
        })
      //}
    },
    backToPromotions(){
      this.$router.back();
    },
    filterFn (val, update) {
      // call abort() at any time if you can't retrieve data somehow
      setTimeout(() => {
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
      },1500)
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
          
        })
      }, 1500)
    },
  }
})
</script>
