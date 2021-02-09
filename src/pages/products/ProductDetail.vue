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
            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <div class="row justify-evenly">
                  <div class="col">
                    <div class="row">
                      <div class="col-md-5 col-xs-12">
                          <q-select
                          v-model= "productFeature"
                          :options= "optionsFeatures"
                          label="Caracteristicas"
                          option-value="id"
                          option-label="name"
                          map-options
                          outlined
                          color="red-10" 
                          >
                          </q-select>
                      </div>
                        <div class="col">
                        <q-btn round dense flat color="indigo-10" icon="add" @click="showAddFeature = true" />
                        </div>
                        <div class="col-md-5 col-xs-12">
                        <q-input  
                          v-model= "productDetail"
                          label="Valor"
                          lazy-rules
                          outlined
                          color="dark"
                        />    
                        </div>            
                    </div>
                  </div>      
                </div>
                <br>
              </q-form>

              <q-dialog
                persistent
                v-model="showAddFeature" >
                <q-card style="max-width:100%; width:350px">
                  <q-toolbar class="bg-indigo-10 text-white">
                    <q-toolbar-title>
                      Caracteristicas
                    </q-toolbar-title>
                    <q-btn 
                    flat
                    icon="close"
                    color="indigo-10"
                    round
                    v-close-popup
                    />
                  </q-toolbar>
                  <q-card-section>
                    <q-input
                    label="Ingrese nueva caracteristica"
                    v-model= "newFeatureName"
                    color="dark"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color="red-10" @click="addFeature()">Agregar</q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>  
            <q-btn color="red-10" label="Crear Detalle" class="q-pa-xs q-mt-md q-mr-md float-right" @click="prueba()"/>
            <!-- <q-btn color="secondary" label="Añadir" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createDetailProduct()"/> -->
        </div>
        <!-- <q-btn label="Prueba" color="red-10" @click="prueba()"/> -->
        <br><br>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xs-12">
                
            </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import FeaturesService from '../../services/features/features.service'
import axios from 'axios'

export default Vue.extend({
  data () {
    var productFeature : any = null
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
        brand: null
      },
      detailProduct: new Array(),
      productDetail: '',
      productFeature,
      newFeatureName: '',
      optionsFeatures: [],
      valueFeatures: '',
      limit: 25,
      offset: 0,
      showAddFeature: false,
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
            this.product = data
            console.log(data)
            },
            complete: () => console.log('[complete]'),
        })
    }, 
    onRequest(){
       let subscription2 = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data: any) => {
          // console.log(data)
          this.optionsFeatures = data.results
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
        axios.get('http://localhost:8000/panel/features/')
        .then((response: { data: any })=>{
          console.log(response.data)
        })
        .catch((error: any)=>{
          console.log(error)
        })
      }
    },
    backToProducts(){
      this.$router.back();
    }
  }
})
</script>
