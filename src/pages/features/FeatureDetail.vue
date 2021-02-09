<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="row">  
          <div >
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="feature.name != null">
            <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                #{{this.$router.currentRoute.params.id}}: {{feature.name}}
            </h5>
          </div>
          <br />
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

            <h5 class="text-primary text-weight-bolder q-ma-none">
              #{{this.$router.currentRoute.params.id}}
            </h5>
            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="feature.name"
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
                @click="deleteFeature()"
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
                @click="updateFeature()"
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
import FeaturesService from '../../services/features/features.service'

export default Vue.extend({
  data () {
    return {
      text: '',
      feature: {
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
      let subscription = FeaturesService.getFeature(id).subscribe( {
        next: data => {
          this.feature = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    updateFeature(){
      let subscription = FeaturesService.updateFeature(this.feature).subscribe( {
        next: () => {
          setTimeout(() => this.backToFeatures(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    deleteFeature(){
      let subscription = FeaturesService.deleteFeature(this.feature.id).subscribe( {
        next: () => {
          setTimeout(() => this.backToFeatures(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToFeatures(){
      this.$router.back();
    }
  },
  // watch: {
  //   this.feature => console.log(this.feature.name);
  // }
})
</script>
