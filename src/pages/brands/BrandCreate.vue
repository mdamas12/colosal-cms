<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Marca
                </h5>
            </div>

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="brand.name"
                  label="Nombre"
                  color="dark"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el nombre de la marca nueva']"
                />
              </q-form>
            </div>  

            <q-btn color="red-10" label="Crear Marca" class="q-pa-xs q-mt-md q-mr-md float-right" @click="checkBrand()"/>

        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import BrandsService from '../../services/brands/brands.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      brand : {
        name: ''
      },
    }
  },
  methods: {
    showNotif (message: string, color: string) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    checkBrand(){
      if (this.brand.name === ""){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      console.log("everything in order. Creating user...");
      this.createBrand();
    },
    createBrand(){
      Loading.show()
      let subscription = BrandsService.createBrand(this.brand).subscribe( {
        complete: () => {
          Loading.hide()
          this.$router.back();
          this.showNotif("Marca creada exitosamente", 'indigo-10');
          setTimeout(() => this.$router.back, 1000);
        }
      })
    },
  }
})
</script>
