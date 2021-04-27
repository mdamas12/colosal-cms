<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="q-pa-sm">
            <div class="row">  
          <div>
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="product.name != null">
            <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                #{{this.$router.currentRoute.params.id}}: {{product.name}} 
            </h5>
          </div>

          <div class="col">
              <!--<q-btn color="indigo-10" label="Editar producto" class="float-right" @click="$router.push({ name : 'ProductsEdit'/* , params : {contact : contact }  */})"/>-->
              <q-btn color="red-10" label="Eliminar producto" class="float-right" @click="confirmDelete"/>
          </div>
        </div>
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md  q-mx-lg">
              <div class="form-section">
                <q-form ref="myForm">
                  <q-input
                    ref="product.name"  
                    v-model= "product.name"
                    label="Nombre"
                     maxlength="20"
                    color="red-10"
                    outlined
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                  />
                  <br>
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div class="col">
                            <q-select
                              ref= "product.category"
                              v-model= "product.category"
                              :options= "optionsCategories"
                              outlined
                              color="red-10"
                              label="Categoría"
                              option-value="id"
                              option-label="name"
                              map-options
                              lazy-rules
                              :rules="[
                                val => val !== null && val !== '' || 'Debe seleccionar una categoria'
                              ]"
                             > 
                              <template v-slot:append>
                                <q-btn round dense flat icon="add" @click.stop="showAddCategory = true" />
                              </template>
                            </q-select>
                        </div>
                        <div class="col q-ml-md">
                            <q-select
                              ref="product.brand"
                              v-model= "product.brand"
                              :options= "optionsBrands"
                              label="Marca"
                              outlined
                              color="red-10"
                              option-value="id"
                              option-label="name"
                              map-options
                              :rules="[
                                val => val !== null && val !== '' || 'Debe seleccionar una marca'
                              ]"
                              >
                              <template v-slot:append>
                                <q-btn round dense flat icon="add" @click.stop="showAddBrand = true" />
                              </template>
                            </q-select>
                        </div>
                      </div>
                    </div>      
                  </div>
                  <br>
                    <q-input
                      ref="product.description"
                      v-model= "product.description"
                       maxlength="30"
                      label="Descripción"
                      outlined
                      color="red-10"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                    />
                  <br>

         <!-- image -->
              <div class="row items-center q-my-sm">
                <div class="col-10">
                  <q-file 
                    outlined 
                    clearable 
                    counter 
                    v-model="product.image"        
                    @input="getImage(product.image)"
                  >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                  </q-file>
                </div>
                <div class="col-2">
                <div v-if="product.image !== null">
                  <q-img :src="preview" style="max-width: 150px" />
                </div>
               </div>
               </div>
                  <br>
                      <div class="row">
                        <div class="col">
                          <div class="row">
                              <q-input
                                ref="produc.price"
                                class="col"
                                v-model= "product.price"
                                label="Precio"
                                mask="#.##"
                                fill-mask="0"
                                reverse-fill-mask
                                input-class="text-right"
                                outlined
                                color="red-10"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']" 
                              />

                              <q-select
                                  class="col q-mx-md"
                                  ref="product.coin"
                                  v-model= "product.coin"
                                  :options= "optionsMoneda"
                                  label="Moneda"
                                  outlined
                                  color="red-10"
                                  lazy-rules
                                  :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']" 
                                />

                              <q-input
                                class="col"
                                ref="product.quantity"
                                v-model= "product.quantity"
                                type="number"
                                min="0"
                                label="Cantidad"
                                outlined
                                color="red-10"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'No debe dejar el campo vacio']"
                              />
                          </div>
                        </div>
                      </div> 
                </q-form>

                <q-dialog
                  persistent
                  v-model="showAddCategory" >
                  <q-card style="max-width:100%; width:350px">
                    <q-toolbar class="bg-indigo-10 text-white">
                      <q-toolbar-title>
                        Categoría
                      </q-toolbar-title>
                      <q-btn 
                      flat
                      icon="close"
                      round
                      v-close-popup
                      />
                    </q-toolbar>
                    <q-card-section>
                      <q-input
                      label="Ingrese nueva categoría"
                      v-model= "newCategoryName.name"
                      color="grey-10"/>
                    </q-card-section>
                    <q-card-actions align="right">
                      <q-btn flat color="red-10" @click="addCategorie()">Agregar </q-btn>  
                    </q-card-actions>
                  </q-card>
                </q-dialog>

                <q-dialog
                persistent
                v-model="showAddBrand" >
                <q-card style="max-width:100%; width:350px">
                  <q-toolbar class="bg-indigo-10 text-white">
                    <q-toolbar-title>
                      Marca
                    </q-toolbar-title>
                    <q-btn 
                    flat
                    icon="close"
                    round
                    v-close-popup
                    />
                  </q-toolbar>
                  <q-card-section>
                    <q-input
                    label="Ingrese nueva marca"
                    v-model= "newBrandName.name"
                    color="grey-10"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color=red-10 @click="addBrand()">Agregar</q-btn> 
                  </q-card-actions>
                </q-card>
                </q-dialog>
                <q-dialog
                persistent
                v-model="showAddFeature" >
                <q-card style="max-width:100%; width:350px">
                  <q-toolbar class="bg-indigo-10 text-white">
                    <q-toolbar-title>
                      Característica
                    </q-toolbar-title>
                    <q-btn 
                    flat
                    icon="close"
                    round
                    v-close-popup
                    />
                  </q-toolbar>
                  <q-card-section>
                    <q-input
                    label= "Ingrese nueva característica"
                    v-model= "newFeatureName.name"
                    color="grey-10"/>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat color="red-10" @click="addFeature()">Agregar</q-btn>
                  </q-card-actions>
                </q-card>
                </q-dialog>
                
               
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md">
                    Caracteristicas del producto
                </h6>
                <div class="row q-mt-md" v-for="(detailp, index) in product.detail_product" :key="detailp.id">
                    <div class="col">
                        <q-select
                            class="col q-mx-md"
                                v-model= "detailp.characteristic"
                                :options= "optionsFeatures"
                                label="Caracteristica"
                                outlined
                                color="red-10"
                                option-value="id"
                                option-label="name"
                                map-options 
                                >
                                <template v-slot:append>
                                    <q-btn round dense flat icon="add" @click.stop="showAddFeature = true" />
                                </template>
                        </q-select>
                    </div>
                    <div class="col q-ml-md">
                        <q-input
                            v-model="detailp.description"
                            color="red-10"
                            outlined
                            label="valor">
                        </q-input>
                    </div>
                    <div class="col">
                      <q-btn class="q-ml-md q-mt-sm" round color="primary" icon="close" @click="removeCharacteristic(detailp.id, index)" /> 
                   </div>   

                </div>
                <br>
                <div class="row q-mt-md" v-for="(item,index) in featuresNews" :key="item.id">
                  <div class="col">
                    <q-select
                      v-model= "item.characteristic"
                      :options= "optionsFeatures"
                      outlined
                      color="red-10"
                      label="Caracteristica"
                      option-value="id"
                      option-label="name"
                      map-options >
                      <template v-slot:append>
                        <q-btn round dense flat icon="add" @click.stop="showAddFeature = true" />
                      </template>
                    </q-select>
                  </div>
                  <div class="col q-ml-md">
                    <q-input
                    label="Valor"
                    v-model= "item.description"
                    color="red-10"
                    outlined>
                    </q-input>
                  </div>     
                  <div class="col">
                      <q-btn class="q-ml-md q-mt-sm" round color="primary" icon="close" @click="removeCharacteristicNew(index)" /> 
                  </div>    
                </div>
                <br>
                <q-btn color="secondary" label="Agregar Características" class="q-pa-xs q-mt-md q-mr-md float-right" @click="pushDetail()"/>
              
              <!-- Galeria de imagenes -->
                  <div class="col-12">
                         <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-md">
                            Galeria de imagenes
                        </h6>
                    </div>

                  <div class="row items-center q-my-sm" v-for="(image,index ) in gallery" :key="image.id">
             
                    <div class="col-6">
                      <q-file 
                        outlined 
                        clearable 
                        counter 
                        v-model="image.file"        
                        @input="getImageGallery(image.file, index)"
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file>
                    </div>
                    <div class="col-4">
                    <div v-if="image.image !== null">
                      <q-img :src="gallery[index].image" style="max-width: 150px" />
                    </div>
                  </div>
                   <div class="col-2">
                      <q-btn class="q-ml-md q-mt-sm" round color="primary" icon="close" @click="removeGallery(image.id,index)" /> 
                  </div> 
                  </div>          
            
                <br>
              
                <div class="row" v-for="(itemI,index) in galleryNew" :key="itemI.id"> 
                  <div class="col-6">
                          
                          <q-file
                              label="Imagen Galeria"
                              color="indigo-10"
                              outlined
                               v-model="itemI.image"        
                               @rejected="onRejected"
                               @input="getPreview(itemI.image,index)">
                          <template v-slot:prepend>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                  </div>
                   <div class="col-4" v-if="itemI.image !== null">
                      <q-img :src="galleryNew[index].preview" style="max-width: 150px" />
                   </div>
                    <div class="col-2">
                      <q-btn class="q-ml-md q-mt-sm" round color="primary" icon="close" @click="removeGalleryNew(index)" /> 
                  </div> 
                </div>
              </div>
              <q-btn color="red-10" label="Guardar Cambios" class="q-pa-xs q-mt-md q-mr-md float-right" @click="updateProduct()"/>
             <q-btn color="red-10" label="Agregar Imágenes" class="q-pa-xs q-mt-md q-mr-md float-right" @click="pushImagenes()"  />  
            </form>
        </div>
        <br><br>
      </div>
  </q-page>
</template>


<script lang="ts">
import Vue from 'vue'
import ProductsService from '../../services/products/products.service'
import BrandsService from '../../services/brands/brands.service'
import CategoriesService from '../../services/categories/categories.service'
import FeaturesService from '../../services/features/features.service'
import axios from 'axios'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    var productFeature : any = null
    var productBrand : any = null
    var productCategory : any = null
    var image : any = null
    var preview : any = ''
    return {
      preview : '',
      product : {
        id: this.$router.currentRoute.params.id,
        name: null,
        description: null,
        image:image,
        price: null,
        coin: null,
        quantity: null,
        category: null,
        brand: null,
        detail_product: new Array(),
        picture: new Array()

      },
      picture_view : new Array(),
      productName: '',
      productBrand,
      productCategory,
      productFeature,
      productDescription: '',
      productImage: null,
      productImages: null,
      productPrice:null,
      productCoin:null,
      productQuantity:null,
      optionsBrands: [],
      optionsCategories: [],
       optionsMoneda: [
        'USD', 'BS'
      ],
      gallery:new Array(),
      itemGalleryNew : {},
      galleryNew:new Array(),
      item:{},
      featuresNews:new Array(),
      selectedFile: null,
      newCategoryName:{
        name: '',
      },
      newBrandName:{
        name: '',
      },
      newFeatureName:{
        name: ''
      },
      detailProduct: new Array(),
      productDetail: '',
      optionsFeatures: [],
      valueFeatures: '',
      limit: 25,
      offset: 0,
      showAddFeature: false,
      showAddCategory: false,
      showAddBrand: false,
      detailPrueba: {
        producto: null,
        characteristic: null,
        description: ''
      },
      
 

    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
    this.onRequest()
  },

  methods: {
    onInit(id: any){
       
        let subscription = ProductsService.getProduct(id).subscribe( {
            next: (data:any) => {
              //console.log(data)
              this.product = data
              var imageUrl = encodeURI(data.image);                                     // data.image es un string, convertir a URL
              // console.log(imageUrl);
              fetch(imageUrl)                                                           // convertir URL a blob
                .then(res => res.blob())
                .then(blob => {   
                  const n = data.image.indexOf("products/") + 9;                       // buscar el subíndice de la cadena donde empieza el nombre de la imagen (después de categories/)
                  const imageName = data.image.substring(n);                              // guardar el nombre de la imagen en una variable
                  const extension = imageName.substring(imageName.indexOf(".") + 1);      // guardar la extensión de la imagen en una variable
                  // console.log(extension)
                  const file = new File([blob], imageName, {type: `image/${extension}`}); // crear un archivo de la imagen pasándole los argumentos necesarios
                  // console.log(file)
                  this.product.image = file;                                                      // asignar el archivo al v-model
                  this.getImage(file);

              });
              for (let i = 0; i <  this.product.picture.length; i++) {            
                 var imageUrl = encodeURI(this.product.picture[i].image);                                          
                 fetch(imageUrl)                                                           
                    .then(res => res.blob())
                    .then(blob => {   
                      const n = this.product.picture[i].image.indexOf("products/") + 9;                       
                      const imageName = this.product.picture[i].image.substring(n);                             
                      const extension = imageName.substring(imageName.indexOf(".") + 1);     
                    
                       const file = new File([blob], imageName, {type: `image/${extension}`}); 
                        
                        this.gallery.push({
                          "id": this.product.picture[i].id,
                          "file" : file,
                          "image" : this.product.picture[i].image
                        })  
                                                                         
                  });           
              }
                console.log(this.gallery)
            },
            complete: () => console.log('[complete]'),
        })
    }, 
    onRequest(){
       let subscription = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data: any) => {
          this.optionsFeatures = data.results
        },
      })
      let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data: any) => {
          this.optionsCategories = data.results
        },
      })
      let subscription3 = BrandsService.getBrands(this.limit, this.offset).subscribe({
        next: (data: any) => {
          this.optionsBrands = data.results
        },
      })
    },
 
    onSubmit () {
      
      (this.$refs.product as any).name.validate()
      (this.$refs.product as any).category.validate()
      (this.$refs.product as any).brand.validate()
      (this.$refs.product as any).description.validate()
      (this.$refs.product as any).image.validate()
      (this.$refs.product as any).price.validate()
      (this.$refs.product as any).coin.validate()
      (this.$refs.product as any).quantity.validate()

      if ((this.$refs.product as any).name.hasError || 
          (this.$refs.product as any).category.hasError ||
          (this.$refs.product as any).brand.hasError ||
          (this.$refs.product as any).description.hasError ||
          (this.$refs.product as any).image.hasError ||
          (this.$refs.product as any).price.hasError ||
          (this.$refs.product as any).coin.hasError ||
          (this.$refs.product as any).quantity.hasError) {
        //this.formHasError = true
      }else {
       // this.updateProduct()
      }
    },
      getBrands(){
        let subscription = BrandsService.getBrands(this.limit, this.offset).subscribe({
        next: (data : any) => {
          // console.log(data)
          this.optionsBrands = data.results
        },
      })
    },
    getCategories(){
      let subscription2 = CategoriesService.getCategories(this.limit, this.offset).subscribe({
        next: (data : any) => {
          // console.log(data)
          this.optionsCategories = data.results
        },
      })

    },
    getFeatures(){
          let subscription = FeaturesService.getFeatures(this.limit, this.offset).subscribe({
        next: (data : any) => {
          // console.log(data)
          this.optionsFeatures = data.results
        },
      })
    },
    addBrand(){
      // this.showAddBrand = false
       //alert(this.newBrandName)
       //return
      let subscription = BrandsService.createBrand(this.newBrandName).subscribe({
        next: () => { 
          this.getBrands()
          this.showAddBrand = false
          this.newBrandName.name = ''
          //setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => {
          this.showNotif("Marca Agregada", "blue-8")
        }
      })
    },
    addCategorie(){
        const category_new = new FormData();
        category_new.append('name', this.newCategoryName.name);
        category_new.append('image', null);
      let subscription = CategoriesService.createCategory(category_new).subscribe({
        next: () => {
          //setTimeout(() => this.backToProducts(), 500);
          this.getCategories()
          this.showAddCategory = false
          this.newCategoryName.name = ''
        },
        complete: () => {
          this.showNotif("Categoria Agregada", "blue-8")
        }
      })
    },

    addFeature(){
      let subscription = FeaturesService.createFeature(this.newFeatureName).subscribe({
        next: () => {
           this.getFeatures();
           this.showAddFeature = false
           this.newFeatureName.name = '' 
        },
        complete: () => {
          this.showNotif("Caracteristica Agregada", "blue-8")
        }
      })
    },

    updateProduct(){

    
      const data_product = new FormData();
        
        data_product.append('name', this.product.name);
        data_product.append('description', this.product.description);
        data_product.append('image', this.product.image);
        data_product.append('price', this.product.price);
        data_product.append('coin', this.product.coin);
        data_product.append('brand', this.product.brand.id);
        data_product.append('category', this.product.category.id);
        data_product.append('quantity', this.product.quantity);
        
        let data_features = this.product.detail_product
        let data_features_news = this.featuresNews

      const gallery = new FormData();
        let i=0;
        for(let item of this.gallery){
          gallery.append('image['+i+']', item.file);
          gallery.append('id['+i+']', item.id);
          i++;
        }
       
      const gallery_news = new FormData();
        i=0;
        for(let item of this.galleryNew){
          gallery_news.append('image['+i+']', item.image);
          i++;
        }

        Loading.show()
        var subscription = ProductsService.updateProduct(data_product, this.product.id,data_features,data_features_news,gallery,gallery_news ).subscribe({
        next: () => {
          Loading.hide()
          this.showNotif("Producto Actualizado", "blue-8")
          setTimeout(() => this.backToProducts(), 500);
        },
          complete: () => {},
        })
 
    },
     confirmDelete() {
    
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar este Producto?',
        cancel: true,
        persistent: true,
        color: 'red-10'
      }).onOk(() => {
        this.deleteProduct();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deleteProduct(){
      Loading.show()
   
      let subscription = ProductsService.deleteProduct(this.product.id).subscribe({
        next: () => {

          Loading.hide()
          this.showNotif("Producto Eliminado Satisfactoriamente", "blue-8")
          setTimeout(() => this.backToProducts(), 500);
        },
        complete: () => {},
      })
    },
    pushDetail() {
      this.item = {
        characteristic: null,
        description: ''
      };

      this.featuresNews.push(this.item);
     
    },
    pushImagenes() {
      this.itemGalleryNew = {
        image : null,
        preview: ''
      };

      this.galleryNew.push(this.itemGalleryNew);
     
    },

    removeCharacteristic(feature_id : number, index : number){
        Loading.show()
        let subscription = ProductsService.deleteDetailProduct(feature_id).subscribe({
          next: (resp: any) => {
            Loading.hide()
            this.showNotif("Detalle Eliminado para este producto", "blue-8")
            this.product.detail_product.splice(index,1)
          },
          complete: () => {},
        })      
        
    },
    removeCharacteristicNew(index : number){
      this.featuresNews.splice(index,1)
    }, 

    removeGallery(gallery_id : number, index : number){
        Loading.show()
        let subscription = ProductsService.deleteGalleryProduct(gallery_id).subscribe({
          next: (resp: any) => {
            Loading.hide()
            this.showNotif("Foto Eliminada para este producto", "blue-8")
            this.gallery.splice(index,1)
          },
          complete: () => {},
        })      
        
    },
    removeGalleryNew(index : number){
      this.galleryNew.splice(index,1)
    },

    getImage(e: any){  
      //console.log(e)                                                    
      let reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = e => {
        this.preview = (e.target as any).result;
        //console.log(this.preview)
      }
    
      
    },
    getPreview(e: any, index : any){  
      //console.log(e)                                                               // usado para convertir la imagen en base64 para mostrar por pantalla
      let reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = e => {
        this.galleryNew[index].preview = (e.target as any).result;
        //console.log((e.target as any).result)
      }
    },

    getImageGallery(e: any, index : any){
                                                          
      let reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = e => {
        this.gallery[index].image = (e.target as any).result;
        //console.log((e.target as any).result)
      }

    },
      
     
  
    onRejected (rejectedEntries:any) {
      this.$q.notify({
        type: 'negative',
        message: `El archivo seleccionado no es de tipo .png`
      })
    },
    backToProducts(){
      this.$router.back();
    },
    showNotif(message : any, color : any) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
  }
})
</script>
