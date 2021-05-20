<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row">
          <div class="col">
            <h5 class="text-indigo-10 text-weight-bolder q-ma-none">
              Header
            </h5>
            <!--<q-skeleton v-else type="text" width="50%" animation="fade" />-->
          </div>
          <div class="col">
              <q-btn color="red-10" label="Subir Imagen" class="float-right q-pa-xs" @click="$router.push({ name : 'HeaderCreate'/* , params : {contact : contact }  */})"/>
          </div>
        </div>
     </div>
    <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row">
            <div class="col-4" v-for="(slide) in header" :key="slide.id"> 
                <div class="q-pa-md">
                    <q-card class="my-card" @click="GoToDetail(slide.id)" style="cursor:pointer;">
                     <q-img :src="slide.image" style="max-width: 150%" />
                    <q-card-section>

                        <div class="visible"  v-if="slide.status == true"> Imagen Visible en la Web </div>
                        <div class="no-visible"  v-if="slide.status == false">Imagen No Visible en la Web </div>
                    </q-card-section>
                    </q-card>
               </div>
           </div>
      </div>
     </div>
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import HeaderService from '../../services/header/header.service'
import { Loading } from "quasar";

export default Vue.extend({
  meta: {
    title: 'Header - List'
  },
  data(){    
    return {
      loading: false,
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        rowsPerPage: 25,
        rowsNumber: 0,
      },

       header : []
  
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
      //console.log("pagination.page == "+ this.pagination.page);
      this.pagination.currentPage = this.pagination.page;
      this.offset = this.limit * (this.pagination.page - 1);
     // console.log(`PaymentsService.getPayments(limit: ${this.limit}, this.pagination.offset: ${this.offset})`);
      let subscription = HeaderService.getListImages(this.limit, this.offset).subscribe({
        next: data => {
          //console.log(data)
          this.header = data
          this.count = data.count
          this.numberOfPages = Math.ceil(this.count / this.limit);
          this.loading = false;
        },
        complete: () => console.log('[complete]'),
      })
      
    },
    GoToDetail (id){
       
      //console.log(`/payments/detail/${row.id}`);
      this.$router.push({name : 'HeaderDetail', params : {id : id}})
    },
  },
})
</script>
<style>

.visible{
    color:blue;
    margin: 5px;
    padding: 5px;
    text-align: center;
    font-size: .8rem;
    font-weight: 700;
}

.no-visible{
    color:darkred;
    margin: 5px;
    padding: 5px;
    text-align: center;
    font-size: .8rem;
    font-weight: 700;
}

</style>