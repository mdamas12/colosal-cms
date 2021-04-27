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
                    #{{this.$router.currentRoute.params.id}}: {{product.name}}, 
                </h5>
              </div>
            </div>
   
            <div class="q-pa-md">
              <q-list dense bordered separator padding class="rounded-borders" v-for="detail_product in product.detail_product" :key="detail_product.id" >
                <q-item>
                  <q-item-section>
                    <q-item-label caption class="text-red-10 text-weight-bold">{{detail_product.characteristic['name']}}</q-item-label>
                    <q-item-label overline>{{detail_product.description}}</q-item-label>
                  </q-item-section>
                  <q-item-section>     
                      <q-btn label="Eliminar" flat color="red-10" @click="deleteDetail(detail_product.id)" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
        </div>
      </div>
  </q-page>
</template>


<script lang="ts">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import axios from 'axios'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
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
      detailPrueba: {
        producto: null,
        characteristic: null,
        description: ''
      },
      
 

    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
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

    deleteDetail(id:any){
     var subscription = ProductsService.deleteDetailProduct(id).subscribe({
        next: () => {
          Loading.hide()
          setTimeout(() => this.backToProducts(), 500);
        },
          complete: () => {},
        })
    },
    backToProducts(){
      this.$router.back();
    }
  }
})
</script>
