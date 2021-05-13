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
                  v-model="feature.name"
                  label="Nombre"
                  color="dark"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el nombre de la característica nueva']"
                />
              </q-form>
            </div>       
            <div class="row justify-end">
              <q-btn
                type="submit"
                label="Eliminar"
                class="q-mt-md q-pa-xs q-mr-sm"
                color="red-10"
                @click="confirmDelete()"
                :loading="loading2"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
              
              <q-btn
                type="submit"
                label="Guardar"
                class="q-mt-md q-pa-xs q-mr-md"
                color="indigo-10"
                @click="checkFeature()"
                :loading="loading1"
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

<script>
import Vue from 'vue'
import FeaturesService from '../../services/features/features.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      text: '',
      feature: {
        id: this.$router.currentRoute.params.id,
        name: null
      },
      loading1: false,
      loading2: false
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
  },
  methods: {
    onInit(id){
      Loading.show()
      let subscription = FeaturesService.getFeature(id).subscribe( {
        next: data => {
          Loading.hide()
          this.feature = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    checkFeature(){
      if (this.loading1 || this.loading2){
        return
      };
      if (this.feature.name === ""){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      console.log("everything in order. Creating feature...");
      this.updateFeature();
    },
    updateFeature(){
      this.loading1 = true;
      let subscription = FeaturesService.updateFeature(this.feature).subscribe( {
        complete: () => {
          console.log('[feature updated]');
          this.loading1 = false;
          this.showNotif("Cambios guardados exitosamente", 'indigo-10');
          setTimeout(() => this.backToFeatures(), 1000);
        }
      })
    },
    deleteFeature(){
      this.loading2 = true;
      let subscription = FeaturesService.deleteFeature(this.feature.id).subscribe( {
        complete: () => {
          this.loading2 = false;
          console.log('[feature Deleted]')
          this.showNotif("Característica Eliminada", 'indigo-10');
          setTimeout(() => this.backToFeatures(), 1000);
        }
      })
    },
    confirmDelete () {
      if (this.loading1 || this.loading2){
        return
      }
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar esta característica?',
        cancel: true,
        persistent: true,
        color: 'red-10'
      }).onOk(() => {
        this.deleteFeature();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
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
