<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row col-xs-12 q-pb-xl">
          <div class="col">
            <h5 class="text-indigo-10 text-weight-bolder q-ma-none">
              Usuarios
            </h5>
            <small class="text-subtitle2 text-grey-6 q-mb-none" >Existen {{this.count}} usuarios almacenados</small>
            <!--<q-skeleton v-else type="text" width="50%" animation="fade" />-->
          </div>
          <div class="col">
              <q-btn color="red-10" label="Crear usuario" class="float-right q-pa-xs" @click="$router.push({ name : 'UserCreate'/* , params : {contact : contact }  */})"/>
          </div>
        </div>

        <div class="q-pa-md">
          <q-input outlined bottom-slots v-model="text" label="Buscar" counter>
            <template v-slot:before>
              <q-icon name="account_circle" />
            </template>

            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>

            <!-- <template v-slot:hint>
              Field hint
            </template> -->
          </q-input>
          <q-table
            :loading="loading"
            :data="this.rows"
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
import User from '../../models/users/User'
import UsersPagination from '../../models/users/UsersPagination'
import UsersService from '../../services/users/users.service'

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
        { name: 'name', align: 'left', label: 'Nombre', field: 'name', sortable: false },
        { name: 'username', align: 'left', label: 'Usuario', field: 'username', sortable: false },
        { name: 'email', align: 'left', label: 'Correo', field: 'email', sortable: false },
        { name: 'date', align: 'left', label: 'Fecha creada', field: 'date', sortable: false },
        { name: 'is_superuser', align: 'left', label: 'Super Usuario', field: 'is_superuser', format: val => val? 'Sí': 'No', sortable: false }
      ],
      rows: [{
        // last_login: "string",
        id: 0,
        is_superuser: false,
        username: "",
        name: "",
        email: "",
        // is_staff: true,
        // is_active: true,
        date_joined: "string",
      }]
    }
  },
  mounted () {
    const vm = this;
    vm.onRequest();
    vm.pagination.rowsNumber = vm.count;
  },
  methods: {
    onRequest(){
      console.log("pagination.page == "+ this.pagination.page);
      this.pagination.currentPage = this.pagination.page;
      this.offset = this.limit * (this.pagination.page - 1);
      this.table.splice(0,1);
      console.log(this.table);
      console.log(`UsersService.getUsers(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);
      this.loading = true;
      let subscription = UsersService.getUsers(this.limit, this.offset).subscribe({
        next: data => {
          for (let i = 0; i < data.results.length; i++) {
            this.rows.push({
              id: data.results[i].id,
              is_superuser: data.results[i].is_superuser,
              username: data.results[i].username,
              name: String(data.results[i].first_name +' '+data.results[i].last_name),
              email: data.results[i].email,
              // is_staff: true,
              // is_active: true,
              date: data.results[i].date_joined.substring(0,10)
            })
          }
          console.log(this.rows)
          this.count = data.count
          this.numberOfPages = Math.ceil(this.count / this.limit);
          this.loading = false;
        },
        complete: () => console.log('[complete]'),
      })
      
    },   
    onRowClick (evt, row){
      //console.log(`/users/detail/${row.id}`);
      this.$router.push({path: `/users/detail/${row.id}`})
    },
  },
})
</script>