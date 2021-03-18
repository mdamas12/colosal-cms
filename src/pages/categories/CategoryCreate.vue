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
                    Editar Categoría
                </h5>
              </div>
              <div class="col">
                <q-btn color="red-10" label="Crear Categoría" class="q-pa-xs q-mt-xs q-mr-md float-right" @click="checkCategory()"/>
              </div>
          </div>

          <div class="q-ma-md">
            <div class="row justify-between items-center">
              <div class="col-9 justify-evenly">
                <div class="row q-my-sm">
                  <q-input  
                    outlined
                    v-model="name"
                    label="Nombre"
                    color="dark"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar el nombre']"
                  />
                </div>
                <!-- :filter="checkFileType" -->
                <div class="row items-center q-my-sm">
                  <q-file 
                    outlined 
                    clearable 
                    counter 
                    v-model="image"        
                    @rejected="onRejected"
                    @input="getImage"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </div>

              </div>
              <div class="col-2">
                <div v-if="image !== null">
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
      name: '',
      image: null,
      preview: null,
      uploading: null
    }
  },
  methods: {
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    checkCategory(){
      if (this.name === "" || this.image == null){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      console.log("everything in order. Creating user...");
      this.createCategory();
    },
    createCategory(){
      Loading.show();
      if (this.image !== null){
        const fd = new FormData();
        fd.append('name', this.name);
        fd.append('image', this.image, this.image.name);
        let subscription = CategoriesService.createCategory(fd).subscribe( {
          complete: () => {
            Loading.hide()
            this.$router.back();
          }
        });
      }
    },
    // checkFileType (files) {
    //   return files.filter(file => file.type === 'image/png')
    // },
    getImage(e){
      console.log(e);
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
