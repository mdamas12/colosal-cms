<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Producto
                </h5>
            </div>
            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  v-model= "productName"
                  label="Nombre"
                  lazy-rules
                  color="red-10"
                  outlined
                />
                <br>
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col-md-5 col-xs-12">
                          <q-select
                          v-model= "productCategory"
                          :options= "optionsCategories"
                          outlined
                          color="red-10"
                          label="Categoría"
                          option-value="id"
                          option-label="name"
                          map-options 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat icon="add" color="indigo-10" @click="showAddCategory = true" />
                        </div>
                         <div class="col-md-5 col-xs-12">
                          <q-select
                          v-model= "productBrand"
                          :options= "optionsBrands"
                          label="Marca"
                          outlined
                          color="red-10"
                          option-value="id"
                          option-label="name"
                          map-options 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat icon="add" color="indigo-10"  @click="showAddBrand = true" />
                        </div>
                    </div>
                  </div>      
                </div>
                <br>
                   <q-input
                   v-model= "productDescription"
                   label="Descripción"
                   outlined
                   color="red-10"
                   />
                   <br>
                       <q-file
                        v-model= "productImage"
                        label="Imagen de Portada"
                        color="indigo-10"
                        outlined
                       >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file>
                      <br>
                     <div class="row">
                       <div class="col">
                         <div class="row">
                            <div class="col-md-3 col-xs-12">
                              <q-input
                              v-model= "productPrice"
                                label="Precio"
                                type="decimal"
                                outlined
                                color="red-10" 
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col-md-3 col-xs-12">
                          <q-select
                            v-model= "productCoin"
                            :options= "optionsMoneda"
                              label="Moneda"
                              outlined
                              color="red-10" 
                          />
                       </div>
                       <div class="col"></div>
                        <div class="col-md-3 col-xs-12">
                          <q-input
                            v-model.number= "productQuantity"
                            type="number"
                            label="Cantidad"
                            outlined
                            color="red-10"
                          />
                       </div>
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
              <br>

              <div class="row" v-for="item in items" :key="item.id">
                <div class="col-md-5 col-xs-12">
                          <q-select
                          v-model= "productFeature"
                          :options= "optionsFeatures"
                          outlined
                          color="red-10"
                          label="Caracteristicas"
                          option-value="id"
                          option-label="name"
                          map-options 
                          >
                          </q-select>
                </div>
                <div class="col">
                  <q-btn round flat color="indigo-10" icon="add"  @click="showAddFeature = true" />
                </div>
                <div class="col-md-5 col-xs-12">
                  <q-input
                  label="Valor"
                  v-model= "description"
                  color="red-10"
                  outlined
                  >
                  </q-input>
                </div>          
              </div>

              <div class="row" v-for="itemI in images" :key="itemI.id">
                <div class="col-md-6 col-xs-12">
                          <q-file
                        v-model= "productImages"
                        label="Imagen Galeria"
                        color="indigo-10"
                        outlined
                       >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file>
                </div>
              </div>
                          
 
            </div>
            
            <q-btn color="indigo-10" label="Crear Producto" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createProduct()"/>
            <q-btn color="secondary" label="Agregar Características" class="q-pa-xs q-mt-md q-mr-md float-right" @click="pushDetail()"/>
            <q-btn color="red-10" label="Agregar Imágenes" class="q-pa-xs q-mt-md q-mr-md float-right" @click="pushImagenes()"/>
            <q-btn color="purple" label="Prueba" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createPrueba()"/>
            

        </div>
        
      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import FeaturesService from '../../services/features/features.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'
import axios from 'axios'

export default Vue.extend({
  data () {
    var productCategory : any = null
    var productBrand : any = null
    var productFeature : any = null
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
      newCategoryName: '',
      newBrandName: '',
      newFeatureName: '',
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
        'USD', 'BsS'
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
      //  characteristic: null,
      //  description: ''
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
        next: (data: any) => {
          // console.log(data)
          this.optionsBrands = data.results
        },
      })
       let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data: any) => {
          // console.log(data)
          this.optionsCategories = data.results
        },
      })
      let subscription3 = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data: any) => {
          // console.log(data)
          this.optionsFeatures = data.results
        },
      })
    },
    addBrand(){
      let subscription = BrandsService.createBrand(this.newBrandName).subscribe({
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('completado'),
      })
    },
    addCategorie(){
      let subscription = CategoriesService.createCategory(this.newCategoryName).subscribe({
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('completado'),
      })
    },
    addFeature(){
      let subscription = FeaturesService.createFeature(this.newFeatureName).subscribe({
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    createPrueba(){

      var product = {
        name: this.productName,
        description:this.productDescription,
        image: this.productImage,
        price:this.productPrice,
        coin:this.productCoin,
        brand:this.productBrand.id,
        category:this.productCategory.id,
        quantity:this.productQuantity,
        detail:this.items
      }

      console.log(product)
    },
    
    createProduct(){
  
      var prueba:any = new FormData();
      prueba.append("name", this.productName);
      prueba.append("description", this.productDescription);
      prueba.append("image", this.productImage);
      prueba.append("price", this.productPrice);
      prueba.append("coin", this.productCoin);
      prueba.append("brand", this.productBrand.id);
      prueba.append("category", this.productCategory.id);
      prueba.append("quantity", this.productQuantity);

        var subscription = ProductsService.createProduct(prueba).subscribe( {
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('[complete]'),
      })

    },
    productos(){
      {
        axios.get('http://localhost:8000/panel/features/')
        .then((response: { data: any })=>{
          console.log(response.data)
        })
        .catch((error: any)=>{
          console.log(error)
        })
      }
    },
    showHide(){
      this.showInput = !this.showInput
    },
    pushDetail() {
      this.item = {
        characteristic: this.productFeature,
        description: this.description
      };

      this.items.push(this.item);
     
    },

    pushImagenes(){
      this.itemI = {
        images: this.productImages,
      };

      this.images.push(this.itemI);
    },

    backToProducts(){
      this.$router.back();
    }
  }
})
</script>
