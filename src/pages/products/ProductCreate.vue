<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Producto
                </h5>
            </div>
            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  v-model= "productName"
                  label="Nombre"
                  lazy-rules
                />
                <br>
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col-md-5 col-xs-12">
                        <q-badge color="secondary" multi-line>
                          
                        </q-badge>
                          <q-select
                          v-model= "productCategory"
                          :options= "optionsCategories"
                          label="Categoria"
                          option-value="id"
                          option-label="name"
                          map-options 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat icon="add" @click="showAddCategory = true" />
                        </div>
                         <div class="col-md-5 col-xs-12">
                          <q-select
                          v-model= "productBrand"
                          :options= "optionsBrands"
                          label="Marca"
                          option-value="id"
                          option-label="name" 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat icon="add"  @click="showAddBrand = true" />
                        </div>
                    </div>
                  </div>      
                </div>
                <br>
                   <q-input
                   v-model= "productDescription" label="Descripción"
                   />
                   <br>
                       <q-file v-model= "productImage" label="Imagen de Portada">
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
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col-md-3 col-xs-12">
                          <q-select
                            v-model= "productCoin"
                            :options= "optionsMoneda"
                              label="Moneda" 
                          />
                       </div>
                       <div class="col"></div>
                        <div class="col-md-3 col-xs-12">
                          <q-input
                            v-model.number= "productQuantity"
                            type="number"
                            label="Cantidad"
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
                  <q-toolbar class="bg-primary text-white">
                    <q-toolbar-title>
                      Categoria
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
                    label="Ingrese nueva categoria"
                    v-model= "newCategoryName"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color="primary" @click="addCategorie()">Agregar</q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>

              <q-dialog
              persistent
               v-model="showAddBrand" >
               <q-card style="max-width:100%; width:350px">
                 <q-toolbar class="bg-primary text-white">
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
                   v-model= "newBrandName"/>
                 </q-card-section>
                 <q-card-actions align="right">
                   <q-btn flat color="primary" @click="addBrand()">Agregar</q-btn>
                 </q-card-actions>
               </q-card>
              </q-dialog>
            </div>  
            <q-btn color="primary" label="Crear Producto" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createPrueba()"/>
        </div>
      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'
import Category from 'src/models/categories/Category'
import Product from 'src/models/products/Product'

export default Vue.extend({
  data () {
    var productCategory : any = null
    var productBrand : any = null
    return {
      productName: '',
      productBrand,
      productCategory,
      productDescription: '',
      productImage: null,
      productPrice:null,
      productCoin:null,
      productQuantity:null,
      newCategoryName: '',
      newBrandName: '',
      // model:
      selected: '', 
      optionsBrands: [],
      optionsCategories: [],
      valueBrands: '',
      valueCategories: '',
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
      modelCantidad: '',
      nameProducto: '', 
      moneda: '',
      image: ''
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
      }

      console.log(product)
    },
    createProduct(){
      /*let subscription = ProductsService.createProduct(this.product).subscribe( {
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('[complete]'),
      })*/
    },
    backToProducts(){
      this.$router.back();
    }
  }
})
</script>
