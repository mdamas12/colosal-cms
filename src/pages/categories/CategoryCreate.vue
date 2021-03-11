<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
          <div class="row">
              <div class="col" style="max-width:40px;">
                  <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
              </div>
              <div class="col2">
                <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Categoría
                </h5>
              </div>
              <div class="col">
                <q-btn color="red-10" label="Crear Categoría" class="q-pa-xs q-mt-xs q-mr-md float-right" @click="createCategory()"/>
              </div>
          </div>

          <div class="q-ma-md">
            <div class="row justify-between items-center">
              <div class="col-9 justify-evenly">
                <div class="row q-my-sm">
                  <q-input  
                    outlined
                    v-model="category.name"
                    label="Nombre"
                    color="dark"
                  />
                </div>
                <div class="row items-center q-my-sm">
                  <q-file 
                    outlined 
                    clearable 
                    counter 
                    v-model="category.image"        
                    :filter="checkFileType"
                    @rejected="onRejected"
                    @input="getImage"
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
              <div class="col-2">
                <div v-if="category.image !== null">
                  <q-img :src="preview" style="max-width: 150px" />
                </div>
              </div>
            </div>
          </div>
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
      preview: null,
      uploading: null
    }
  },

  computed: {
    isUploading () {
      return this.uploading !== null
    }
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
    getImage(e){
      let reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = e => {
        this.preview = e.target.result;
      }
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
