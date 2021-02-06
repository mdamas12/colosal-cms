<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row col-xs-12 q-pb-xl">
          <div class="col">
            <h5 class="text-indigo-10 text-weight-bolder q-ma-none">
              Categorías
            </h5>
            <small class="text-subtitle2 text-grey-7 q-mb-none" >Existen {{this.count}} categorías almacenadas</small>
            <!--<q-skeleton v-else type="text" width="50%" animation="fade" />-->
          </div>
          <div class="col">
              <q-btn color="red-10" label="Crear categoría" class="float-right" @click="$router.push({ name : 'CategoryCreate'/* , params : {contact : contact }  */})"/>
          </div>
        </div>

        <div class="q-pa-md">
            <q-table
              title="Categorías"
              :loading="loading"
              :data="this.rows"
              :columns="columns"
              row-key="name"
              :pagination.sync="pagination"
              hide-pagination
              @row-click="onRowClick"
              card-class="bg-indigo-10 text-white"
            />

          <div class="row justify-center q-mt-md">
            <q-pagination
              v-model="pagination.page"
              color="indigo-10"
              :max="this.numberOfPages"
              size="sm"
              @click="onRequest()"
            />
          </div>
        </div>       
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import Vue from 'vue'
import CategoriesService from '../../services/categories/categories.service'

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
          label: "id",
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: false,
          headerClasses: 'bg-red-10 text-white',
          classes: 'bg-red-1 text-dark ellipsis',
        },
        { name: 'nombre', align: 'center', label: 'Nombre', field: 'name', sortable: false, headerClasses: 'bg-red-10 text-white',
          classes: 'bg-red-1 text-dark ellipsis', },
      ],
      rows: []
    }
  },
  mounted () {
    const vm = this;
    vm.onRequest();
    vm.pagination.rowsNumber = vm.count;
  },
  methods: {
    onRequest(){
      this.loading = true;
      console.log("pagination.page == "+ this.pagination.page);
      this.pagination.currentPage = this.pagination.page;
      this.offset = this.limit * (this.pagination.page - 1);
      this.table.splice(0,1);
      console.log(this.table);
      this.table.splice(0,0,1);
      console.log(`CategoriesService.getCategories(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);
      let subscription = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: data => {
          console.log(data)
          this.rows.splice(0, this.rows.length, ...data.results);
          console.log(this.rows)
          this.count = data.count
          this.numberOfPages = Math.ceil(this.count / this.limit);
          this.loading = false;
        },
        complete: () => console.log('[complete]'),
      })
      
    },   
    onRowClick (evt, row){
      //console.log(`/categories/detail/${row.id}`);
      this.$router.push({path: `/categories/detail/${row.id}`})
    },
  },
})
</script>