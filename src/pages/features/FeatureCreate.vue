<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Característica
                </h5>
            </div>

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="feature.name"
                  label="Nombre"
                  lazy-rules
                />
              </q-form>
            </div>  

            <q-btn color="primary" label="Crear Característica" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createFeature()"/>

        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import FeaturesService from '../../services/features/features.service'

export default Vue.extend({
  data () {
    return {
      feature : {
        name: ''
      }
    }
  },
  methods: {
    createFeature(){
      let subscription = FeaturesService.createFeature(this.feature).subscribe( {
        next: () => {
          setTimeout(() => this.backToFeatures(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToFeatures(){
      this.$router.back();
    },
  }
})
</script>
