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
                  lazy-rules
                  color="dark"
                />
              </q-form>
            </div>  

            <q-btn color="red-10" label="Crear Marca" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createBrand()"/>

        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import BrandsService from '../../services/brands/brands.service'

export default Vue.extend({
  data () {
    return {
      brand : {
        name: ''
      }
    }
  },
  methods: {
    createBrand(){
      let subscription = BrandsService.createBrand(this.brand).subscribe( {
        next: () => {
          setTimeout(() => this.backToBrands(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToBrands(){
      this.$router.back();
    },
  }
})
</script>
