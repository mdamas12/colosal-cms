<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Categoría
                </h5>
            </div>

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="category.name"
                  label="Nombre"
                  lazy-rules
                  color="dark"
                />
              </q-form>
            </div>  

            <q-btn color="red-10" label="Crear Categoría" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createCategory()"/>

        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoriesService from '../../services/categories/categories.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      category : {
        name: ''
      }
    }
  },
  methods: {
    createCategory(){
      Loading.show()
      let subscription = CategoriesService.createCategory(this.category).subscribe( {
        next: () => {
          Loading.hide()
          this.$router.back();
        },
        complete: () => console.log('[complete]'),
      })
    },
  }
})
</script>
