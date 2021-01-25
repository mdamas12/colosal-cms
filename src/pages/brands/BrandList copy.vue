<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row col-xs-12 q-pb-xl">
          <div class="col">
            <h5 class="text-primary text-weight-bolder q-ma-none">
              Marcas
            </h5>
            <small class="text-subtitle2 text-grey-6 q-mb-none" >Tienes 5 marcas</small>
            <!--<q-skeleton v-else type="text" width="50%" animation="fade" />-->
          </div>
          <div class="col">
              <q-btn color="primary" label="Crear marca" class="float-right" @click="$router.push({ name : 'BrandCreate'/* , params : {contact : contact }  */})"/>
          </div>
        </div>

        <!-- <q-card bordered class="my-card" >
          <q-input dark dense standout v-model="text" input-class="text-left" @input="searchContact($event)">
            <template v-slot:prepend>
              <q-icon color="primary" v-if="text === ''" name="search" />
              <q-icon color="primary" v-else name="clear" class="cursor-pointer" @click="text = ''" v-on:click="clear"/>
            </template>
          </q-input>
        </q-card> -->

        <!-- <q-card class="shadow-6" style="margin-top:20px">
          <q-card-section>
            <div class="q-pa-md">
              <q-list>
                <q-item-label header>Nombre</q-item-label>
                <div v-for="(brand, index) in this.visibleBrands.results" :key="index" highlight separator>
                  <q-item clickable v-ripple @click="$router.push({ name : 'BrandDetail'/* , params : {contact : contact }  */})">
                    <q-item-section avatar>
                      <q-avatar color="primary" text-color="white" size="34px">
                        {{brand.name.slice(0,1)}}
                      </q-avatar>
                    </q-item-section>
                    <q-item-section no-wrap>
                      <q-item-label>{{brand.name}}</q-item-label>
                      <div v-if="brand.supplier">
                        <q-item-label caption lines="1">{{brand.supplier}}</q-item-label>
                      </div>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat round color="primary" icon="delete" />
                    </q-item-section>
                  </q-item>
                </div>
              </q-list>
             </div>
          </q-card-section>



          <div class="q-pa-lg flex flex-center">
            <q-pagination
              v-model="current"
              :max="5"
              :direction-links="true"
              :boundary-links="true"
              :to-fn="page => (updatePage(page))"
              icon-first="skip_previous"
              icon-last="skip_next"
              icon-prev="fast_rewind"
              icon-next="fast_forward"
              
            >
            </q-pagination>
          </div>
        </q-card> -->

        <div class="q-pa-md">
          <q-table
            title="Marcas"
            :data="rows"
            :columns="columns"
            row-key="name"
            :pagination.sync="pagination"
            hide-pagination
            @row-click="onRowClick"
          />

          <div class="row justify-center q-mt-md">
            <q-pagination
              v-model="pagination.page"
              color="grey-8"
              :max="pagesNumber"
              size="sm"
            />
          </div>
        </div>
        
      </div>
      <!--<q-card-section class="flex flex-center">
        <empty-view v-if="loaded && documents.length == 0" icon="mdi-folder-outline" message="Todavía no tienes liquidaciones disponibles" />
      </q-card-section>-->
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import Vue from 'vue'
import Brand from '../../models/brands/Brand'
import BrandsPagination from '../../models/brands/BrandsPagination'
import BrandsService from '../../services/brands/brands.service'

export default Vue.extend({
  meta: {
    title: 'Categories - List'
  },
  data(){    
    return {
      loading: false,
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        rowsPerPage: 25
        // rowsNumber: xx if getting data from a server
      },
      limit: 25,
      offset: 0,
      count: null,
      currentPage: 1,
      numberOfPages: null,
      columns: [
        {
          name: 'desc',
          required: true,
          label: "id",
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: false
        },
        { name: 'nombre', align: 'center', label: 'Nombre', field: 'name', sortable: false },
        { name: 'proveedor', align: 'center', label: 'Proveedor', field: 'supplier', sortable: false },
      ],
      rows: []
    }
  },
  beforeMount: function(){
    // this.updateVisibleBrands();
  },
  mounted () {
    const vm = this;
    vm.onRequest();
  },
  methods: {
    onRequest(){
      this.loading = true;
      this.pagination.currentPage = this.pagination.page;
      this.pagination.offset = this.pagination.limit * this.pagination.page;
      let subscription = BrandsService.getBrands(this.pagination.limit, this.pagination.offset).subscribe({
        next: data => {
          this.rows = data.results
          this.loading = false;
        },
        complete: () => console.log('[complete]'),
      })
    },   
    onRowClick (evt, row){
      //console.log(`/brands/detail/${row.id}`);
      this.$router.push({path: `/brands/detail/${row.id}`})
    },
  },
  watch: {
    page: function(){
      if (this.pagination.page == this.pagination.currentPage){
        return
      }
      this.onRequest();
    },
  },
  computed: {
    pagesNumber () {
      if (this.pagination.count != null)
        return Math.ceil(this.pagination.count / this.pagination.limit)
      return 0
    }
  }
})
</script>