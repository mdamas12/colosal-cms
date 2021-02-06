<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="row">  
          <div >
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="brand.name != null">
            <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                #{{this.$router.currentRoute.params.id}}: {{brand.name}}
            </h5>
          </div>
          <br />
        </div>
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

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="brand.name"
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
                @click="deleteBrand()"
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
                @click="updateBrand()"
                style="margin=10px"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
          
        </div>
      </div>
  </q-page>
</template>

<script lang="js">
import Vue from 'vue'
import BrandsService from '../../services/brands/brands.service'

export default Vue.extend({
  data () {
    return {
      text: '',
      brand: {
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
      let subscription = BrandsService.getBrand(id).subscribe( {
        next: data => {
          this.brand = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    updateBrand(){
      let subscription = BrandsService.updateBrand(this.brand).subscribe( {
        next: () => {
          setTimeout(() => this.backToBrands(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    deleteBrand(){
      let subscription = BrandsService.deleteBrand(this.brand.id).subscribe( {
        next: () => {
          setTimeout(() => this.backToBrands(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToBrands(){
      this.$router.back();
    }
  },
  // watch: {
  //   this.brand => console.log(this.brand.name);
  // }
})
</script>
