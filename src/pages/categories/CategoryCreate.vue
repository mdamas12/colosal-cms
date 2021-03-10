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

            <div class="q-ma-md">
              <div class="row q-my-sm">
                <q-input  
                  outlined
                  v-model="category.name"
                  label="Nombre"
                  lazy-rules
                  color="dark"
                />
              </div>
              <div class="row q-my-sm">
                <q-file 
                  outlined 
                  clearable 
                  counter 
                  v-model="category.image"        
                  :filter="checkFileType"
                  @rejected="onRejected"
                >
                  <template v-slot:prepend>
                    <q-icon name="attach_file" />
                  </template>
                  
                  <template v-slot:hint>
                    Field hint
                  </template>
                </q-file>
              </div>
            </div>  
            <q-btn color="red-10" label="Crear Categoría" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createCategory()"/>

        </div>

      </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import CategoriesService from '../../services/categories/categories.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      category : {
        name: '',
        image: null,
      },
      uploading: null
    }
  },

  computed: {
    isUploading () {
      return this.uploading !== null
    },
  },
  methods: {
    createCategory(){
      Loading.show();
      const fd = new FormData();
      fd.append('image', this.category.image, this.category.image.name);
      console.log(this.category.image.name);
      let subscription = CategoriesService.createCategory(this.category).subscribe( {
        next: () => {
          Loading.hide()
          this.$router.back();
        },
        complete: () => console.log('[complete]'),
      })
    },
    checkFileType (files) {
      return files.filter(file => file.type === 'image/png')
    },

    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `El archivo seleccionado no es de tipo .png`
      })
    }
  }
})
</script>
