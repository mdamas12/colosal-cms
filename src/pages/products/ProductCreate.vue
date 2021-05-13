<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat class="text-indigo-10" round icon="keyboard_backspace" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Producto
                </h5>
            </div>
            <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md  q-mx-lg">
              <div class="form-section">
                <q-form ref="myForm">
                  <q-input  
                    ref="productName"
                    v-model= "productName"
                    label="Nombre"
                    maxlength="20"
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
                              ref="productCategory"
                              v-model= "productCategory"
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
                              ]"> 
                              <template v-slot:append>
                                <q-btn round dense flat icon="add" @click.stop="showAddCategory = true" />
                              </template>
                            </q-select>
                        </div>
                        <div class="col q-ml-md">
                            <q-select
                              ref="productBrand"
                              v-model= "productBrand"
                              :options= "optionsBrands"
                              label="Marca"
                              outlined
                              color="red-10"
                              option-value="id"
                              option-label="name"
                              map-options
                              lazy-rules
                              :rules="[
                                val => val !== null && val !== '' || 'Debe seleccionar una marca'
                              ]">
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
                      ref="productDescription"
                      v-model= "productDescription"
                      label="Descripción"
                      maxlength="30"
                      outlined
                      color="red-10"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                      />
                    <br>
                     <div class="row">
                       <div class="col-md-6">
                        <q-file
                          ref="productImage"
                          v-model= "productImage"
                          label="Imagen de Portada"
                          color="indigo-10"
                          outlined
                          lazy-rules
                          @input="getImage(product.image)"
                          :rules="[
                            val => val !== null && val !== '' || 'Debe seleccionar una imagen'
                          ]"
                        >
                          <template v-slot:prepend>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                        <br>
                        </div>
                      <div class="col-10">
                        <div v-if="product.image !== null">
                          <q-img :src="preview" style="max-width: 150px" />
                        </div>
                      </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="row">
                              <q-input
                                class="col"
                                ref="productPrice"
                                v-model= "productPrice"
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
                                  ref="productCoin"
                                  class="col q-mx-md"
                                  v-model= "productCoin"
                                  :options= "optionsMoneda"
                                  label="Moneda"
                                  outlined
                                  color="red-10" 
                                  lazy-rules
                                  :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                                />

                              <q-input
                                class="col"
                                ref="productQuantity"
                                v-model= "productQuantity"
                                type="number"
                                min="0"
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
                      v-model= "newCategoryName.name"
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
                    v-model= "newBrandName.name"
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
                    v-model= "newFeatureName.name"
                    color="grey-10"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color="red-10" @click="addFeature()">Agregar</q-btn>
                  </q-card-actions>
                </q-card>
                </q-dialog>
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
                <br>
                
                <div class="row" v-for="(itemI,index) in images" :key="itemI.id">
               
                  <div class="col-md-6 col-xs-12">
                          <q-file
                              v-model= "itemI.image"
                              label="Imagen Galeria"
                              color="indigo-10"
                              outlined>
                          <template v-slot:append>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                  </div>
                  <div class="col">
                      <q-btn class="q-ml-md q-mt-sm" round color="primary" icon="close" @click="removeImege(index)" /> 
                  </div>  
                </div>
                 <br>
              </div>
              <div class="row">
              <q-btn color="indigo-10" type="submit" label="Crear Producto" class="q-pa-xs q-mt-md q-mr-md "/>
              <q-btn color="secondary" label="Agregar Características" class="q-pa-xs q-mt-md q-mr-md " @click="pushDetail()"/>
              <q-btn color="red-10" label="Agregar Imágenes" class="q-pa-xs q-mt-md q-mr-md " @click="pushImagenes()"/>
             </div>
            </form>
        </div>
      </div>
  </q-page>
</template>


<script >
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import FeaturesService from '../../services/features/features.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'
import axios from 'axios'
import Characteristic from 'src/models/features/Feature'
import { Loading } from "quasar";
import { get } from 'http'

export default Vue.extend({
  data () {
    var productCategory = null
    var productBrand = null
    var productFeature  = null
    return {
      product : {
      name: '',
      description: '',
      image: '',
      price: null,
      coin: '',
      category: null,
      brand: null,
      count: null
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
      newCategoryName:{
        name: '',
      },
      newBrandName:{
        name: '',
      },
      newFeatureName:{
        name: ''
      },
      selected: '', 
      optionsBrands: [],
      optionsCategories: [],
      optionsFeatures: [],
      valueBrands: '',
      valueCategories: '',
      valueFeatures: '',
      limit: 25,
      offset: 0,
      name: '',
      model: null,
      optionsMoneda: [
        'USD', 'BS'
      ],
      text: '',
      dense: false,
      denseOpts: false,
      precio: 0,
      description: '',
      showAddCategory: false,
      showAddBrand: false,
      showAddFeature: false,
      modelCantidad: '',
      nameProducto: '', 
      moneda: '',
      image: '',
      selectedFile: null,
      showInput: false,
     items:new Array(),
     item:{
     
      },
    images: new Array(),
    itemI:{},
    }
  },
  mounted (){
    const vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      let subscription = BrandsService.getBrands(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.optionsBrands = data.results
        },
      })
       let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.optionsCategories = data.results
        },
      })
      let subscription3 = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.optionsFeatures = data.results
        },
      })
    },
    getBrands(){
        let subscription = BrandsService.getBrands(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.optionsBrands = data.results
        },
      })
    },
    getCategories(){
      let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.optionsCategories = data.results
        },
      })

    },
    getFeatures(){
          let subscription = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data) => {
          // console.log(data)
          this.optionsFeatures = data.results
        },
      })
    },
    addBrand(){
      let subscription = BrandsService.createBrand(this.newBrandName).subscribe({
        next: () => { 
          this.getBrands()
          this.showAddBrand = false
          this.newBrandName = ''
          //setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => {
          this.showNotif("Marca Agregada", "blue-8")
        }
      })
    },
    addCategorie(){
        const category_new = new FormData();
        category_new.append('name', this.newCategoryName.name);
        category_new.append('image', null);
      let subscription = CategoriesService.createCategory(category_new).subscribe({
        next: () => {
          //setTimeout(() => this.backToProducts(), 500);
          this.getCategories()
          this.showAddCategory = false
          this.newCategoryName = ''
        },
        complete: () => {
          this.showNotif("Categoria Agregada", "blue-8")
        }
      })
    },
    addFeature(){
      let subscription = FeaturesService.createFeature(this.newFeatureName).subscribe({
        next: () => {
           this.getFeatures();
           this.showAddFeature = false
           this.newFeatureName = '' 
        },
        complete: () => {
          this.showNotif("Caracteristica Agregada", "blue-8")
        }
      })
    },
    onSubmit () {
      this.$refs.productName.validate()
      this.$refs.productCategory.validate()
      this.$refs.productBrand.validate()
      this.$refs.productDescription.validate()
      this.$refs.productImage.validate()
      this.$refs.productPrice.validate()
      this.$refs.productCoin.validate()
      this.$refs.productQuantity.validate()

      if (this.$refs.productName.hasError || 
          this.$refs.productCategory.hasError ||
          this.$refs.productBrand.hasError ||
          this.$refs.productDescription.hasError ||
          this.$refs.productImage.hasError ||
          this.$refs.productPrice.hasError ||
          this.$refs.productCoin.hasError ||
          this.$refs.productQuantity.hasError) {
        this.formHasError = true
      }else {
        this.createProduct()
      }
      
    },
    createProduct(){
      let vm = this
      const gallery = new FormData();
      const product = new FormData();
      const features = new FormData();
      product.append('name', vm.productName);
      product.append('description', vm.productDescription);
      product.append('image', vm.productImage);
      product.append('price', vm.productPrice);
      product.append('coin', vm.productCoin);
      product.append('brand', vm.productBrand.id);
      product.append('category', vm.productCategory.id);
      product.append('quantity', vm.productQuantity);

        //console.log(dataPost.product.get("name"))
        //Loading.show()
      let i=0;
      for(let item of vm.images){
        gallery.append('image['+i+']', item.image);
        i++;
      }
       
        //var subscription = ProductsService.createProduct(product,vm.items, images ).subscribe({
        console.log(product)
   
      let subscription = ProductsService.createProduct(product,vm.items, gallery).subscribe( {
          complete: () => {
            Loading.hide()
            this.$router.back();
          }
      });
    },
    productos(){
      {
        axios.get('http://localhost:8000/panel/features/')
        .then((response)=>{
          console.log(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    },
    showHide(){
      this.showInput = !this.showInput
    },
   getImage(e){  
      //console.log(e)                                                    
      let reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = e => {
        this.preview = (e.target).result;
        //console.log(this.preview)
      }
   },
    pushDetail() {
      this.item = {
        characteristic: null,
        description: ''
      };

      this.items.push(this.item);
     
    },

    pushImagenes(){
      this.itemI = {
        image: null
      };

      this.images.push(this.itemI);
    },

    backToProducts(){
      this.$router.back();
    },

    removeCharacteristic(position){
        this.items.splice(position,1)
    },

    removeImege(position){
        this.images.splice(position,1)
    },

    showNotif(message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
  }
})
</script>
