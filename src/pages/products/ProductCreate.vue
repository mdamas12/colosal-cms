<template>
  <q-page>
      <!-- <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Producto
                </h5>
            </div>
            <div class="row">
              <div class="col-6">
                  <q-input class="q-pa-sm" v-model="nombre" label="Nombre" />
                  <q-btn color="primary" label="Crear producto" @click="saveProduct(index)" class="q-pa-xs q-mt-md q-mr-md float-right" />
              </div>
            </div>
            <br><br>
            <div class="row">
              <div class="col">
                <q-card class="row"
                flat-bordered v-for="(item, index) in products" :key="index">  
                  <q-card-section class="col" 
                  v-html="item.texto">
                  </q-card-section>
                  <q-btn flat color="red" @click="deletedProduct(index)">Eliminar</q-btn>
                </q-card>
                <div class="flex flex-center" v-if="products.length == 0">
                    <h6>Sin productos</h6>  
                </div>
              </div>
            </div>
        </div>  
      </div> -->
      <br>
      <div class="row q-pa-md">
        <div class="col">
          <h6>Prueba API</h6>
          <q-btn color="blue-4" @click="fetch()">Consultar</q-btn>
        </div>
      </div>
      <br><br>
      <div class="row q-pa-md">
        <div class="col">
          <q-input class="q-pa-sm" v-model="name" label="Nombre" />
                  <q-btn color="primary" label="Crear producto" @click="saveMarca()" class="q-pa-xs q-mt-md q-mr-md float-right" />
        </div>
      </div>
        <br>
        <div class="q-pa-md" style="max-width: 350px">
          <!-- <div v-for="brand of brands" v-bind:key="brand.id">
            {{ brand }}
          </div> -->

    <q-list bordered separator>
      <q-item clickable v-ripple v-for="brand in brands" :key="brand.id">
        <q-item-section>{{ brand.name }}</q-item-section>
        <q-btn flat color="info" label="Edit"/>
        <q-btn flat color="red" label="Delete"/>
      </q-item>
    </q-list>
  </div>
      
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Brand from '../../models/Brand'

const API = 'http://localhost:8000/'; 

export default Vue.extend({
  data () {
    
    return {
      name: '',
      brands: [],
      products: [
        {texto: 'Iphone', estado:false},
      ],
      options: [],
      value: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: (row:any) => row.name,
          format: (val:any) => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      ],
      data:[
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ]
    }
  },
  mounted: function(){

  },
  methods: {
  saveProduct () {
    this.products.push({
      texto:this.name,
      estado: false
    })
    this.name = ''
    this.$q.notify({
      message: 'Producto creado con exito',
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done'
    })
  },
  deletedProduct(index: any){
   
    this.$q.dialog({
        title: 'Cuidado',
        message: 'Realmente quieres eliminar el producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
         this.products.splice(index, 1)
         this.$q.notify({
           message: 'Producto eliminado',
           color: 'red-4'
         })
      })
  },
  fetch () {
    {
      axios.get('http://localhost:8000/panel/brands/')
        .then((response) => {
          this.brands = response.data.results
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
  }
},
saveMarca: function(){
  {
    axios.post('http://localhost:8000/panel/brands/',{
      name: this.name,
    })
    .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        }) 
  }
  this.name = ''
  this.$q.notify({
      message: 'Marca creada con exito',
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done'
    })
}
  }
})
</script>
