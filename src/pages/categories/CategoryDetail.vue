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
                      Editar categoría
                  </h5>
                </div>
                <div class="col">
                <q-btn flat color="red-10" label="Eliminar" class="q-pa-xs q-mr-xs float-right" :loading="loading2" @click="confirmDelete()"/>
                </div>
                <div class="col" style="max-width:110px;">
              <q-btn color="red-10" label="Guardar" class="q-pa-xs q-mr-md float-right" :loading="loading1" @click="updateCategory()"/>
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
                    ref="image"
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
                    
                    <template v-slot:hint>
                      Field hint
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
      id : this.$router.currentRoute.params.id,
      name: '',
      image: null,
      preview: null,
      uploading: null,
      loading1: false, 
      loading2: false
    }
  },
  beforeMount(){
    this.onInit();
  },
  methods: {
    onInit(){
      Loading.show()
      let subscription = CategoriesService.getCategory(this.id).subscribe( {
        next: data => {
          this.name = data.name;                                                    // recibir el nombre del servicio
          // console.log(data)
          var imageUrl = encodeURI(data.image);                                     // data.image es un string, convertir a URL
          // console.log(imageUrl);
          fetch(imageUrl)                                                           // convertir URL a blob
            .then(res => res.blob())
            .then(blob => {
              // Here's where you get access to the blob
              // And you can use it for whatever you want
              // Like calling ref().put(blob)

              // Here, I use it to make an image appear on the page
              const n = data.image.indexOf("categories/") + 11;                       // buscar el subíndice de la cadena donde empieza el nombre de la imagen (después de categories/)
              const imageName = data.image.substring(n);                              // guardar el nombre de la imagen en una variable
              const extension = imageName.substring(imageName.indexOf(".") + 1);      // guardar la extensión de la imagen en una variable
              // console.log(extension)
              const file = new File([blob], imageName, {type: `image/${extension}`}); // crear un archivo de la imagen pasándole los argumentos necesarios
              // console.log(file)
              this.image = file;                                                      // asignar el archivo al v-model
              this.getImage(file)                                                     // pasar el archivo al preview
            });
          Loading.hide()
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
    checkCategory(){
      if (this.loading1 || this.loading2){
        return
      };
      if (this.name === "" || this.image == null){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      console.log("everything in order. Creating user...");
      this.createCategory();
    },
    updateCategory(){
      this.loading1 = true;
      if (this.image !== null){
        const fd = new FormData();                                                      // el body de la solicitud se sube usando FormData
        fd.append('name', this.name);
        fd.append('image', this.image, this.image.name);
        let subscription = CategoriesService.updateCategory(this.id,fd).subscribe( {    // revisar encabezados de la solicitud para enviar FormData en el servicio
          complete: () => {
            console.log('[category updated]');
            this.loading1 = false;
            this.showNotif("Cambios guardados exitosamente", 'indigo-10');
            setTimeout(() => this.$router.back(), 1000);
          }
        });
      }
    },
    // checkFileType (files) {
    //   return files.filter(file => file.type === 'image/png')
    // },
    getImage(e){                                                                        // usado para convertir la imagen en base64 para mostrar por pantalla
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
    },
    confirmDelete () {
      let vm = this
      if (this.loading1 || this.loading2){
        return
      };
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar esta categoría?',
        cancel: true,
        persistent: true,
        color: 'red-10'
      }).onOk(() => {
        vm.deleteCategory();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deleteCategory(){
      this.loading2 = true;
      let subscription = CategoriesService.deleteCategory(this.id).subscribe( {
        next: () => {
          this.loading2 = false;
          console.log('[brand Deleted]')
          this.showNotif("Categoría Eliminada", 'indigo-10');
          setTimeout(() => this.$router.back(), 1000);
          //this.$router.back();
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToCategories(){
      this.$router.back();
    }
  },
  // watch: {
  //   this.category => console.log(this.category.name);
  // }
})
</script>
