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
                    Imagen para header
                </h5>
              </div>
              <div class="col">
                <q-btn color="red-10" label="Subir Imagen" class="q-pa-xs q-mt-xs q-mr-md float-right" @click="checkImage()"/>
              </div>
          </div>

          <div class="q-ma-md">
            <p class="sugerencia"><b>Sugerencia:</b> La imagen de tener unas dimensiones de 1366 X 426 Pixeles y en formato .PNG</p>
            <div class="row justify-between items-center">
              <div class="col-10 justify-evenly">
                <div class="row items-center q-my-sm">
                  <div class="col">
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
                <q-checkbox v-model="status" label="Visible" color="blue" />
              </div>
              <div class="col-5">
                <div v-if="image !== null">
                  <q-img :src="preview" style="max-width: 500px; margin: 10px 0;" />
                </div>
              </div>
            </div>
            <div class="row justify-between items-center">
              <div class="col-10 justify-evenly">
                     <q-input  
                      outlined
                      v-model="title"
                      label="Titulo"
                      color="dark"
                      lazy-rules
                      :rules="[val => !!val || 'Debe ingresar Titulo ']"
                    />
              </div>
            </div>
            <div class="row justify-between items-center">
              <div class="col-10 justify-evenly">
                     <q-input  
                      outlined
                      v-model="span"
                      label="span"
                      color="dark"
                      lazy-rules
                      :rules="[val => !!val || 'Debe ingresar span']"
                    />
              </div>
            </div>

            <div class="row justify-between items-center">
              <div class="col-10 justify-evenly">
                     <q-input  
                      outlined
                      v-model="action_title"
                      label="Titulo para el boton"
                      color="dark"
                      lazy-rules
                      :rules="[val => !!val || 'Debe ingresar un titulo']"
                    />
              </div>
            </div>

            <div class="row justify-between items-center">
              <div class="col-10 justify-evenly">
                  <q-select outlined v-model="action_link" :options="options" label="Link" />
              </div>
            </div>

          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import HeaderService from '../../services/header/header.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      name: '',
      image: null,
      preview: null,
      uploading: null,
      status : true,
      title:"",
      span:"",
      action_title:"",
      action_link: null,
      options: [
        'productos', 'promociones'
      ]
     
    }
  },
  methods: {
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    checkImage(){
      if ( this.image == null){
        this.showNotif("debes escoger una imagen", 'red-10');
        return;
      };
      this.UploadImage();
    },
    UploadImage(){
     
        Loading.show();
        const new_image = new FormData();

        new_image.append('image', this.image, this.image.name);
        new_image.append('status', this.status);
        new_image.append('title', this.title);
        new_image.append('span', this.span);
        new_image.append('action_title', this.action_title);
        new_image.append('action_link', this.action_link);
        let subscription = HeaderService.uploadImage(new_image).subscribe( {
          next: resp =>{
            this.showNotif(resp, 'blue-8');
          },
          complete: () => {
            Loading.hide()
            setTimeout(() => this.$router.back(), 1000);
          }
        });
      
    },
   
    getImage(e){
      //console.log(e);
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
<style>
.sugerencia{
    color:darkslategray;
    size: 0.5rem;
}
</style>
