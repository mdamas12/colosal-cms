<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="row">  
          <div>
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="category.name != null">
            <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                #{{this.$router.currentRoute.params.id}}: {{category.name}}
            </h5>
          </div>
        </div>
        <br />
            <!-- <q-form >
              <q-item>
                <q-item-section side>
                  <q-avatar v-if="user.foto" size="100px">
                    <img :src="user.foto">
                  </q-avatar>
                </q-item-section>
                <q-item-section style="margin-left:10px">
                  <q-item-label ><b>{{user.nombre}}</b></q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-if="user.email">
                <q-item-section caption >
                  <q-item-label caption>Email</q-item-label>
                  <q-item-label ><b>{{user.email}}</b></q-item-label>
                </q-item-section>

                <q-item-section side horizontal>
                  <q-btn round color="primary" icon="mail_outline" v-on:click.prevent="openUrl('mailto:' +user.email)"/>
                </q-item-section>

              </q-item>

              <q-separator spaced inset v-if="user.email"/>

              <q-item v-if="user.celular">
                <q-item-section>
                  <q-item-label caption>Celular</q-item-label>
                  <q-item-label ><b>+562 {{user.celular}}</b></q-item-label>
                </q-item-section>

                <q-item-section side horizontal>
                  <q-btn round color="primary" icon="phone" v-on:click.prevent="openUrl('tel:+562' +user.celular)" />
                </q-item-section>

              </q-item>

              <q-separator spaced inset v-if="user.celular"/>
            </q-form> -->

            <!-- <h5 class="text-primary text-weight-bolder q-ma-none">
              #{{this.$router.currentRoute.params.id}}
            </h5> -->
            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="category.name"
                  label="Nombre"
                  lazy-rules
                  color="red-10"
                />
              </q-form>
            </div>       
            <div class="row justify-end">
              <q-btn
                type="submit"
                label="Eliminar"
                class="q-mt-md"
                color="indigo-10"
                @click="deleteCategory()"
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
                @click="updateCategory()"
                style="margin=10px"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
          
        </div>
      </div>
    <!-- </div> -->
  </q-page>
</template>

<script lang="js">
import Vue from 'vue'
import CategoriesService from '../../services/categories/categories.service'

export default Vue.extend({
  data () {
    return {
      text: '',
      category: {
        id: this.$router.currentRoute.params.id,
        name: null
      }
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
  },
  methods: {
    onInit(id){
      let subscription = CategoriesService.getCategory(id).subscribe( {
        next: data => {
          this.category = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    updateCategory(){
      let subscription = CategoriesService.updateCategory(this.category).subscribe( {
        next: () => {
          setTimeout(() => this.backToCategories(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    deleteCategory(){
      let subscription = CategoriesService.deleteCategory(this.category.id).subscribe( {
        next: () => {
          setTimeout(() => this.backToCategories(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToCategories(){
      this.$router.back();
    }
  },
  // watch: {
  //   this.category => console.log(this.category.name);
  // }
})
</script>
