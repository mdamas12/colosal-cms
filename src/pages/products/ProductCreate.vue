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
                  v-model= "product.nameProducto"
                  label="Nombre"
                  lazy-rules
                />
                <br>
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col-md-5 col-xs-12">
                        <q-badge color="secondary" multi-line>
                          Model: "{{ category.id }}"
                        </q-badge>
                          <q-select
                          v-model= "category.id"
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
                          v-model= "product.valueBrands"
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
                   v-model= "product.description" label="Descripción"
                   />
                   <br>
                       <q-file v-model= "product.image" label="Imagen de Portada">
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
                              v-model= "product.precio"
                                label="Precio"
                                type="decimal" 
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col-md-3 col-xs-12">
                          <q-select
                            v-model= "product.moneda"
                            :options= "optionsMoneda"
                              label="Moneda" 
                          />
                       </div>
                       <div class="col"></div>
                        <div class="col-md-3 col-xs-12">
                          <q-input
                            v-model.number= "product.modelCantidad"
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
                   v-model= "category.name"/>
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
                   v-model= "brand.name"/>
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

export default Vue.extend({
  data () {
    return {
      product: {

      },
      category: {
        name: ''
      },
      brand: {
        name: ''
      },
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
      let subscription = BrandsService.createBrand(this.brand).subscribe({
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('completado'),
      })
    },
    addCategorie(){
      let subscription = CategoriesService.createCategory(this.category).subscribe({
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('completado'),
      })
    },
    createPrueba(){
      console.log(this.product)
    },
    createProduct(){
      let subscription = ProductsService.createProduct(this.product).subscribe( {
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToProducts(){
      this.$router.back();
    }
  }
})
</script>
