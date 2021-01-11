<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pt-lg">
        <div class="row col-xs-12 q-pb-xl">
          <div class="col">
            <h5 class="text-primary text-weight-bolder q-ma-none">
              Productos
            </h5>
            <small class="text-subtitle2 text-grey-6 q-mb-none" >Tienes 5 productos</small>
            <!--<q-skeleton v-else type="text" width="50%" animation="fade" />-->
          </div>
          <div class="col">
              <q-btn color="primary" label="Crear producto" class="float-right" @click="$router.push({ name : 'ProductsCreate'/* , params : {contact : contact }  */})"/>
          </div>
        </div>

        <q-card bordered class="my-card" >
          <q-input dark dense standout v-model="text" input-class="text-left" @input="searchContact($event)">
            <template v-slot:prepend>
              <q-icon color="primary" v-if="text === ''" name="search" />
              <q-icon color="primary" v-else name="clear" class="cursor-pointer" @click="text = ''" v-on:click="clear"/>
            </template>
          </q-input>
        </q-card>

        <q-card class="shadow-6" style="margin-top:20px">
          <q-card-section>
            <div class="q-pa-md">
              <q-list>
                <q-item clickable v-ripple @click="$router.push({ name : 'ProductsDetail'/* , params : {contact : contact }  */})">
                  <q-item-section>List item</q-item-section>
                </q-item>
                <q-separator />
              </q-list>
             </div>
          </q-card-section>

          <div class="q-pa-lg flex flex-center">
            <q-pagination
              v-model="current"
              :max="5"
              :direction-links="true"
              :boundary-links="true"
              icon-first="skip_previous"
              icon-last="skip_next"
              icon-prev="fast_rewind"
              icon-next="fast_forward"
            >
            </q-pagination>
          </div>
        </q-card>
      </div>
      <!--<q-card-section class="flex flex-center">
        <empty-view v-if="loaded && documents.length == 0" icon="mdi-folder-outline" message="Todavía no tienes liquidaciones disponibles" />
      </q-card-section>-->
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  meta: {
    title: 'Categories - List'
  },
  data () {
    return {
      text: '',
      current: 3
    }
  }
})
</script>
