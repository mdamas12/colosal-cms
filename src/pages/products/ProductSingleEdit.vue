<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="q-pa-sm">
            <div class="row">  
          <div>
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="product.name != null">
            <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                #{{this.$router.currentRoute.params.id}}: {{product.name}}
            </h5>
          </div>
        </div>
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md  q-mx-lg">
              <div class="form-section">
                <q-form ref="myForm">
                  <q-input
                    ref="product.name"  
                    v-model= "product.name"
                    label="Nombre"
                    color="red-10"
                    outlined
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                  />
                  <br>
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div class="col">
                            <q-select
                              ref= "product.category"
                              v-model= "product.category"
                              :options= "optionsCategories"
                              outlined
                              color="red-10"
                              label="Categoría"
                              option-value="id"
                              option-label="name"
                              map-options
                              lazy-rules
                              :rules="[
                                val => val !== null && val !== '' || 'Debe seleccionar una categoria'
                              ]"
                             > 
                              <template v-slot:append>
                                <q-btn round dense flat icon="add" @click.stop="showAddCategory = true" />
                              </template>
                            </q-select>
                        </div>
                        <div class="col q-ml-md">
                            <q-select
                              ref="product.brand"
                              v-model= "product.brand"
                              :options= "optionsBrands"
                              label="Marca"
                              outlined
                              color="red-10"
                              option-value="id"
                              option-label="name"
                              map-options
                              :rules="[
                                val => val !== null && val !== '' || 'Debe seleccionar una marca'
                              ]"
                              >
                              <template v-slot:append>
                                <q-btn round dense flat icon="add" @click.stop="showAddBrand = true" />
                              </template>
                            </q-select>
                        </div>
                      </div>
                    </div>      
                  </div>
                  <br>
                    <q-input
                      ref="product.description"
                      v-model= "product.description"
                      label="Descripción"
                      outlined
                      color="red-10"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                    />
                  <br>

                  <!--REVISAR TEMA DE IMAGEN, ACA LA BINDEO PARA PODER RECIBIRLA EN LA VISTA, SIN EMBARGO RECURSO 404
                      AGREGAR EL Q-FLE CUANDO SE SOLUCIONE EL PROBLEMA ------------------------------------------------->
                        <q-img v-bind:src="product.image"></q-img>
                  <!-- ------------------------------------------------------------------------------------------------->
                        <br>
                      <div class="row">
                        <div class="col">
                          <div class="row">
                              <q-input
                                ref="produc.price"
                                class="col"
                                v-model= "product.price"
                                label="Precio"
                                mask="#.##"
                                fill-mask="0"
                                reverse-fill-mask
                                input-class="text-right"
                                outlined
                                color="red-10"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']" 
                              />

                              <q-select
                                  class="col q-mx-md"
                                  ref="product.coin"
                                  v-model= "product.coin"
                                  :options= "optionsMoneda"
                                  label="Moneda"
                                  outlined
                                  color="red-10"
                                  lazy-rules
                                  :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']" 
                                />

                              <q-input
                                class="col"
                                ref="product.quantity"
                                v-model= "product.quantity"
                                type="number"
                                label="Cantidad"
                                outlined
                                color="red-10"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                              />
                          </div>
                        </div>
                      </div> 
                </q-form>

                <q-dialog
                  persistent
                  v-model="showAddCategory" >
                  <q-card style="max-width:100%; width:350px">
                    <q-toolbar class="bg-indigo-10 text-white">
                      <q-toolbar-title>
                        Categoría
                      </q-toolbar-title>
                      <q-btn 
                      flat
                      icon="close"
                      round
                      v-close-popup
                      />
                    </q-toolbar>
                    <q-card-section>
                      <q-input
                      label="Ingrese nueva categoría"
                      v-model= "newCategoryName"
                      color="grey-10"/>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat color="red-10" @click="addCategorie()">Agregar</q-btn>
                    </q-card-actions>
                  </q-card>
                </q-dialog>

                <q-dialog
                persistent
                v-model="showAddBrand" >
                <q-card style="max-width:100%; width:350px">
                  <q-toolbar class="bg-indigo-10 text-white">
                    <q-toolbar-title>
                      Marca
                    </q-toolbar-title>
                    <q-btn 
                    flat
                    icon="close"
                    round
                    v-close-popup
                    />
                  </q-toolbar>
                  <q-card-section>
                    <q-input
                    label="Ingrese nueva marca"
                    v-model= "newBrandName"
                    color="grey-10"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color=red-10 @click="addBrand()">Agregar</q-btn>
                  </q-card-actions>
                </q-card>
                </q-dialog>
                <q-dialog
                persistent
                v-model="showAddFeature" >
                <q-card style="max-width:100%; width:350px">
                  <q-toolbar class="bg-indigo-10 text-white">
                    <q-toolbar-title>
                      Característica
                    </q-toolbar-title>
                    <q-btn 
                    flat
                    icon="close"
                    round
                    v-close-popup
                    />
                  </q-toolbar>
                  <q-card-section>
                    <q-input
                    label= "Ingrese nueva característica"
                    v-model= "newFeatureName"
                    color="grey-10"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color="red-10" @click="addFeature()">Agregar</q-btn>
                  </q-card-actions>
                </q-card>
                </q-dialog>
                <div class="row q-mt-md" v-for="detailp in product.detail_product" :key="detailp.id">
                    <div class="col">
                        <q-select
                            class="col q-mx-md"
                                v-model= "detailp.characteristic['id']"
                                :options= "optionsFeatures"
                                label="Caracteristica"
                                outlined
                                color="red-10"
                                option-value="id"
                                option-label="name"
                                map-options 
                                >
                                <template v-slot:append>
                                    <q-btn round dense flat icon="add" @click.stop="showAddFeature = true" />
                                </template>
                        </q-select>
                    </div>
                    <div class="col q-ml-md">
                        <q-input
                            v-model="detailp.description"
                            color="red-10"
                            outlined
                            label="valor">
                        </q-input>
                    </div>
                </div>
                <br>
                
                <div class="row q-mt-md" v-for="(item,index) in items" :key="item.id">
                  <div class="col">
                    <q-select
                      v-model= "item.characteristic"
                      :options= "optionsFeatures"
                      outlined
                      color="red-10"
                      label="Caracteristica"
                      option-value="id"
                      option-label="name"
                      map-options >
                      <template v-slot:append>
                        <q-btn round dense flat icon="add" @click.stop="showAddFeature = true" />
                      </template>
                    </q-select>
                  </div>
                  <div class="col q-ml-md">
                    <q-input
                    label="Valor"
                    v-model= "item.description"
                    color="red-10"
                    outlined>
                    </q-input>
                  </div>     
                  <div class="col">
                      <q-btn class="q-ml-md q-mt-sm" round color="primary" icon="close" @click="removeCharacteristic(index)" /> 
                  </div>    
                </div>

                <div class="row" v-for="itemI in images" :key="itemI.id">
                  <div class="col-md-6 col-xs-12">
                          <q-file
                              v-model= "productImages"
                              label="Imagen Galeria"
                              color="indigo-10"
                              outlined>
                          <template v-slot:prepend>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                  </div>
                </div>
              </div>
              <q-btn color="red-10" label="Guardar Cambios" class="q-pa-xs q-mt-md q-mr-md float-right" @click="updateProduct()"/>
              <q-btn color="secondary" label="Agregar Características" class="q-pa-xs q-mt-md q-mr-md float-right" @click="pushDetail()"/>
              <!--<q-btn color="red-10" label="Agregar Imágenes" class="q-pa-xs q-mt-md q-mr-md float-right" @click="pushImagenes()"/>-->
            </form>
        </div>
        <br><br>
      </div>
  </q-page>
</template>


<script lang="ts">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'
import FeaturesService from '../../services/features/features.service'
import axios from 'axios'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    var productFeature : any = null
    var productBrand : any = null
    var productCategory : any = null
    return {
      product : {
        id: this.$router.currentRoute.params.id,
        name: null,
        description: null,
        image: null,
        price: null,
        coin: null,
        quantity: null,
        category: null,
        brand: null,
        detail_product: new Array()
      },
      productName: '',
      productBrand,
      productCategory,
      productFeature,
      productDescription: '',
      productImage: null,
      productImages: null,
      productPrice:null,
      productCoin:null,
      productQuantity:null,
      optionsBrands: [],
      optionsCategories: [],
       optionsMoneda: [
        'USD', 'BsS'
      ],
      items:new Array(),
      item:{
      //  characteristic: null,
      //  description: ''
      },
      images: new Array(),
      selectedFile: null,
      newCategoryName: '',
      newBrandName: '',
      detailProduct: new Array(),
      productDetail: '',
      newFeatureName: '',
      optionsFeatures: [],
      valueFeatures: '',
      limit: 25,
      offset: 0,
      showAddFeature: false,
      showAddCategory: false,
      showAddBrand: false,
      detailPrueba: {
        producto: null,
        characteristic: null,
        description: ''
      },
      
 

    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
    this.onRequest()
  },

  methods: {
    onInit(id: any){
        let subscription = ProductsService.getProduct(id).subscribe( {
            next: (data:any) => {
              console.log(data)
            this.product = data
            },
            complete: () => console.log('[complete]'),
        })
    }, 
    onRequest(){
       let subscription = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data: any) => {
          this.optionsFeatures = data.results
        },
      })
      let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data: any) => {
          this.optionsCategories = data.results
        },
      })
      let subscription3 = BrandsService.getBrands(this.limit, this.offset).subscribe({
        next: (data: any) => {
          this.optionsBrands = data.results
        },
      })
    },
    addFeature(){
      let subscription2 = FeaturesService.createFeature(this.newFeatureName).subscribe({
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('completado'),
      })
    },

    prueba(){
      var prueba = {
        product: this.$router.currentRoute.params.id,
        characteristic: this.productFeature.id,
        description: this.productDetail
      }
      this.detailProduct.push(prueba)
       console.log(this.detailProduct)

      this.productFeature = "",
      this.productDetail = ""
    },
   
    productos(){
      {
        axios.get('http://localhost:8000/panel/products/product-detail/1/')
        .then((response: { data: any })=>{
          console.log(response.data)
        })
        .catch((error: any)=>{
          console.log(error)
        })
      }
    },
    onSubmit () {
      this.$refs.product.name.validate()
      this.$refs.product.category.validate()
      this.$refs.product.brand.validate()
      this.$refs.product.description.validate()
      this.$refs.product.image.validate()
      this.$refs.product.price.validate()
      this.$refs.product.coin.validate()
      this.$refs.product.quantity.validate()

      if (this.$refs.product.name.hasError || 
          this.$refs.product.category.hasError ||
          this.$refs.product.brand.hasError ||
          this.$refs.product.description.hasError ||
          this.$refs.product.image.hasError ||
          this.$refs.product.price.hasError ||
          this.$refs.product.coin.hasError ||
          this.$refs.product.quantity.hasError) {
        this.formHasError = true
      }else {
        this.updateProduct()
      }
    },
    updateProduct(){
     let vm = this
    //   var reader = new FileReader()
    //   reader.readAsDataURL(vm.productImage)
    //   reader.onload = () => {
    //     let iconBase64 = reader.result
        let product = {
          id: vm.product.id,
          name: vm.product.name,
          description : vm.product.description,
        //   image : iconBase64,
          price : vm.product.price,
          coin : vm.product.coin,
          brand : vm.product.brand,
          category : vm.product.category,
          quantity : vm.product.quantity,
          detail : vm.product.detail_product,
        }
                var features = []
                var new_features = []

        for(let item of vm.product.detail_product){
          features.push({
            "id" : item.id,  
            "feature" : (item.characteristic['id'].id !=null)?item.characteristic['id'].id:item.characteristic['id'],
            "description" : item.description
          })
        }

        for(let item of vm.items){
          new_features.push({
            "feature" : item.characteristic.id,
            "description" : item.description
          })
        }

        let dataPost = {
          "product" : product,
          "features" : features,
          "new_features" : new_features
        }

        Loading.show()
        console.log(dataPost)
        var subscription = ProductsService.updateProduct(dataPost, this.product.id).subscribe({
        next: () => {
          Loading.hide()
          setTimeout(() => this.backToProducts(), 500);
        },
          complete: () => {},
        })
    //   }
    //    reader.onerror = function (error) {
    //     this.$q.notify({
    //       color: 'negative',
    //       message: error
    //     })
    //   }
    },
    pushDetail() {
      this.item = {
        characteristic: null,
        description: ''
      };

      this.items.push(this.item);
     
    },
    removeCharacteristic(position){
        this.items.splice(position,1)
    },
    backToProducts(){
      this.$router.back();
    }
  }
})
</script>
