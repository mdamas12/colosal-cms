<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pa-sm">
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
        <br />

            <h5 class="text-primary text-weight-bolder q-ma-none">
              <!-- #{{this.$router.currentRoute.params.id}} -->
            <q-btn color="green-3" label="Detalle" style="color:#9E9E9E" @click="$router.push({ name : 'ProductsDetail'/* , params : {contact : contact }  */})" />

            </h5>
            <div class="form-section" style="padding: 20px">
              <!-- <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="product.name"
                  label="Nombre"
                  lazy-rules
                />
                <q-input  
                  outlined
                  v-model="product.description"
                  label="Nombre"
                  lazy-rules
                />
              </q-form> -->
              <q-form ref="myForm">
                <q-input  
                  v-model="product.name"
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
                        <!-- <q-badge color="secondary" multi-line>
                          
                        </q-badge> -->
                          <q-select
                          v-model="product.category"
                          :options= "optionsCategories"
                          label="Categoria"
                          option-value="id"
                          option-label="name"
                          map-options
                          color="red-10"
                          outlined 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat  color="indigo-10" icon="add" @click="showAddCategory = true" />
                        </div>
                         <div class="col-md-5 col-xs-12">
                          <q-select
                          v-model="product.brand"
                          :options= "optionsBrands"
                          label="Marca"
                          option-value="id"
                          option-label="name"
                          map-options
                          outlined
                          color="red-10"  
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat  color="indigo-10" icon="add"  @click="showAddBrand = true" />
                        </div>
                    </div>
                  </div>      
                </div>
                <br>
                   <q-input
                   v-model= "product.description" label="Descripción"
                   color="red-10"
                   outlined
                   />
                   <!-- <br> -->
                       <!-- <q-file
                        v-model="product.image"
                        label="Imagen de Portada"
                       >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file> -->
                      <br>
                    <div class="row justify-around">
                      <div class="col-4 text-center">
                        <h7>Imagen de Portada</h7>
                        <q-card class="my-card">
                      <q-img
                          v-bind:src="product.image" v-bind:alt="product.name"
                      >
                       <div class="absolute-bottom text-subtitle2 text-center">
                          Title
                        </div>
                      </q-img>
                    </q-card>
                      </div>
                      <div class="col-4">
                        <q-file
                        label="Cambiar Imagen"
                        color="red-10"
                        outlined
                        >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                        </q-file>
                      </div>
                    </div>  
                      
                   
                      <br>
                     <div class="row">
                       <div class="col">
                         <div class="row">
                            <div class="col-md-3 col-xs-12">
                              <q-input
                              v-model="product.price"
                                label="Precio"
                                type="decimal"
                                color="red-10"
                                outlined 
                              />
                            </div>
                            <div class="col"></div>
                            <div class="col-md-3 col-xs-12">
                          <q-select
                            v-model="product.coin"
                            :options= "optionsMoneda"
                              label="Moneda"
                              outlined
                              color="red-10" 
                          />
                       </div>
                       <div class="col"></div>
                        <div class="col-md-3 col-xs-12">
                          <q-input
                            v-model.number="product.quantity"
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
            </div>       
            <div class="row justify-end">
              <q-btn
                type="submit"
                label="Eliminar"
                class="q-mt-md"
                color="indigo-10"
                @click="deleteProduct()"
                style="margin=10px"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
              
              <q-btn
                type="submit"
                label="Guardar"
                class="q-mt-md"
                color="red-10"
                @click="updateProducto()"
                style="margin=10px"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
                <!-- <div class="row">
                  <div class="col">
                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                          <q-select
                          v-model= "productFeature"
                          :options= "optionsFeatures"
                          label="Caracteristicas"
                          option-value="id"
                          option-label="name"
                          map-options 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat icon="add" @click="showAddFeatures = true" />
                        </div>
                    </div>
                  </div>      
                </div>
                <q-dialog
                persistent
                v-model="showAddFeatures" >
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
              </q-dialog> -->
        </div>
      </div>
    <!-- </div> -->
  </q-page>
</template>

<script lang="js">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'
import axios from 'axios'

export default Vue.extend({
  data () {
    var productCategory  = null
    var productBrand = null
    return {
      value: [],
      text: '',
      product: {
        id: this.$router.currentRoute.params.id,
        name: null,
        description: null,
        image: null,
        price: null,
        coin: null,
        quantity: null,
        category: null,
        brand: null
      },
       optionsMoneda: [
        'USD', 'BsS'
      ],
      optionsBrands: [],
      optionsCategories: [],
      valueBrands: '',
      valueCategories: '',
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
    this.onRequest()
  },
  methods: {
    onInit(id){
      let subscription = ProductsService.getProduct(id).subscribe( {
        next: data => {
          this.product = data
          console.log(data)
        },
        complete: () => console.log('[complete]'),
      })
    },
    onRequest(){
     let subscription = BrandsService.getBrands(this.limit, this.offset).subscribe({
        next: (data) => {
          this.optionsBrands = data.results
        },
      })
      let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data) => {
         this.optionsCategories = data.results
        },
      })
    },
    updateProducto(){
      var prueba = new FormData();
      prueba.append("name", this.product.name);
      prueba.append("description", this.product.description);
      prueba.append("image", this.product.image);
      prueba.append("price", this.product.price);
      prueba.append("coin", this.product.coin);
      prueba.append("brand", this.product.brand);
      prueba.append("category", this.product.category);
      prueba.append("quantity", this.product.quantity);

      console.log(this.product.id)

        var subscription = ProductsService.updateProduct(prueba, this.product.id).subscribe( {
        next: () => {
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => console.log('[complete]'),
      })

    },
    backToProducts(){
      this.$router.back();
    }
  },
})
</script>
