<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row col-xs-12 q-pb-xl">
          <div class="col-md-8 col-sm-12">
            <h4 class="text-indigo-10 text-weight-bolder q-ma-none">
              Productos  
            </h4>
            <small v-if="count > 0" class="text-subtitle2 text-blue-grey-7 q-mb-none" >Existen {{this.count}} productos almacenados</small>
            <!--<q-skeleton v-else type="text" width="50%" animation="fade" />-->
          </div>
          <div class="col-md-4 col-sm-12">
              <!--<q-btn color="indigo-10" label="Editar producto" class="float-right" @click="$router.push({ name : 'ProductsEdit'/* , params : {contact : contact }  */})"/>-->
              <q-btn color="red-10" label="Crear producto" class="float-right" @click="$router.push({ name : 'ProductsCreate'/* , params : {contact : contact }  */})"/>
          </div>
        </div>

        <div>
          <q-input outlined bottom-slots v-model="text" label="Buscar">
            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="col-md-12 col-xs-12 q-pt-lg">
            <q-table
              :loading="loading"
              :data="this.rows"
              :columns="columns"
              row-key="name"
              :pagination.sync="pagination"
              hide-pagination
              @row-click="onRowClick"
            />

          <div class="row justify-center q-mt-md" v-if="numberOfPages > 1">
            <q-pagination
              v-model="pagination.page"
              color="indigo-10"
              :max="this.numberOfPages"
              size="sm"
              @click="onRequest()"
            />
          </div>


          <!--<div class="container">
            <div class="q-pa-md row items-start q-gutter-md">
              <div class="col" v-for="product of products" v-bind:key="product.id">
                <q-card class="my-card shadow-7">
                    <img v-bind:src="product.image" v-bind:alt="product.name">
                    <q-list>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="indigo-10" name="app_registration" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Nombre</q-item-label>
                          <q-item-label caption>{{product.name}}</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="red-10" name="description" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Descripción</q-item-label>
                          <q-item-label caption>{{product.description}}</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="purple" name="credit_card" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Precio</q-item-label>
                          <q-item-label caption>{{product.price}}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="green" name="monetization_on" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Moneda</q-item-label>
                          <q-item-label caption>{{product.coin}}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="blue-grey" name="format_list_numbered" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Cantidad</q-item-label>
                          <q-item-label caption>{{product.quantity}}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="orange-10" name="grid_view" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Marca</q-item-label>
                          <q-item-label caption>{{product.brand.name}}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon color="amber" name="category" />
                        </q-item-section>

                        <q-item-section>
                          <q-item-label>Categoría</q-item-label>
                          <q-item-label caption>{{product.category.name}}</q-item-label>
                        </q-item-section>
                      </q-item>
                      </q-list>
                    <q-card-actions align="around">
                      <q-btn flat color="indigo-10" @click="detailProduct(product.id)">Detalle</q-btn>
                      <q-btn flat color="purple">Galeria</q-btn>
                      <q-btn flat color="secondary">Editar</q-btn>
                      <q-btn flat color="red-10">Eliminar</q-btn>
                    </q-card-actions> 
                 </q-card>
              </div>
            </div>-->
          </div>
        </div>       
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'

export default Vue.extend({
  meta: {
    title: 'Products - List'
  },
  data(){    
    return {
      text: '',
      products: [],
      product: {},
      page: 1,
      pages: 1,
      loading: false,
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        rowsPerPage: 25,
        rowsNumber: 0
      },
      table: [0], 
      limit: 25,
      offset: 0,
      count: 0,
      currentPage: 1,
      numberOfPages: 0,
      columns: [
        {
          name: 'desc',
          required: true,
          label: "ID",
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: false,
       
        },
        { name: 'nombre', align: 'center', label: 'Nombre', field: 'name', sortable: true },
        { name: 'descripcion', align: 'center', label: 'Descripción', field: 'description', sortable: false },
        { name: 'price', align: 'center', label: 'Precio', field: 'price', sortable: false, },
        { name: 'coin', align: 'center', label: 'Moneda', field: 'coin', sortable: false },
        { name: 'quantity', align: 'center', label: 'Cantidad', field: 'quantity', sortable: false  },
        { name: 'category', align: 'center', label: 'Categoria', field: row => row.category.name, sortable: false  },
        { name: 'brand', align: 'center', label: 'Marca', sortable: false, field: row => row.brand.name },
      ], 
      rows: []
    }
  },
  mounted () {
    const vm = this;
    vm.onRequest();
    vm.pagination.rowsNumber = vm.count;
    // this.onInit(this.$router.currentRoute.params.id);
  },
  methods: {
    onRequest(){
      this.loading = true;
      //console.log("pagination.page == "+ this.pagination.page);
      this.pagination.currentPage = this.pagination.page;
      this.offset = this.limit * (this.pagination.page - 1);
      this.table.splice(0,1);
     // console.log(this.table);
      this.table.splice(0,0,1);
     // console.log(`ProductsService.getProducts(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);
      let subscription = ProductsService.getProducts(this.limit, this.offset).subscribe({
        next: data => {
          console.log(data)
          this.rows.splice(0, this.rows.length, ...data.results);
          //console.log(this.rows)
          this.count = data.count
          this.numberOfPages = Math.ceil(this.count / this.limit);
          this.loading = false;
        },
        complete: () => console.log('[complete]'),
      });
      let subscription3 = ProductsService.getAllProducts().subscribe({
        next: data => {
          this.products = data.results
          //console.log(data)
        }
      }); 
    },   
    onRowClick (evt, row){
      //console.log(`/categories/detail/${row.id}`);
      this.$router.push({path: `/products/edit/${row.id}`})
    },
    
    detailProduct(id){
      let subscription = ProductsService.getProduct(id).subscribe( {
        next: data => {
          this.product = data
          //console.log(data)
        },
        complete: () => console.log('[complete]'),
      })
     // console.log(this.product.id)
    //  this.$router.push({path: `/products/detail/${this.product.id}`})
    }
  },
})
</script>
