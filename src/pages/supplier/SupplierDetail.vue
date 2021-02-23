<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="row">  
          <div >
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="supplier.name != null">
            <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                Proveedor: {{supplier.name}}
            </h5>
          </div>
          <br />
        </div>
            <!-- <q-form >
              <q-item>
                <q-item-section side>
                  <q-avatar v-if="user.foto" size="100px">
                    <img :src="user.foto">
                  </q-avatar>
                </q-item-section>
                <q-item-section style="margin-left:10px">
                  <q-item-label ><b>{{user.nombre}}</b></q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-if="user.email">
                <q-item-section caption >
                  <q-item-label caption>Email</q-item-label>
                  <q-item-label ><b>{{user.email}}</b></q-item-label>
                </q-item-section>

                <q-item-section side horizontal>
                  <q-btn round color="primary" icon="mail_outline" v-on:click.prevent="openUrl('mailto:' +user.email)"/>
                </q-item-section>

              </q-item>

              <q-separator spaced inset v-if="user.email"/>

              <q-item v-if="user.celular">
                <q-item-section>
                  <q-item-label caption>Celular</q-item-label>
                  <q-item-label ><b>+562 {{user.celular}}</b></q-item-label>
                </q-item-section>

                <q-item-section side horizontal>
                  <q-btn round color="primary" icon="phone" v-on:click.prevent="openUrl('tel:+562' +user.celular)" />
                </q-item-section>

              </q-item>

              <q-separator spaced inset v-if="user.celular"/>
            </q-form> -->

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="supplier.name"
                  label="Nombre"
                  lazy-rules
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.address"
                  label="Dirección"
                  lazy-rules
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.email"
                  label="Correo"
                  lazy-rules
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.number"
                  label="Número de Teléfono"
                  lazy-rules
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.agent"
                  label="Representante"
                  lazy-rules
                />
                <br/>
              </q-form>
            </div>       
            <div class="row justify-end">
              <q-btn
                type="submit"
                label="Eliminar"
                class="q-mt-md"
                color="red"
                @click="deleteSupplier()"
                style="margin=10px"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
              
              <q-btn
                type="submit"
                label="Guardar"
                class="q-mt-md"
                color="primary"
                @click="updateSupplier()"
                style="margin=10px"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
          
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="js">
import Vue from 'vue'
import SuppliersService from '../../services/suppliers/suppliers.service'

export default Vue.extend({
  data () {
    return {
      text: '',
      supplier: {
        id: this.$router.currentRoute.params.id,
        name: null,
        address: null,
        email: null,
        number: null,
        agent: null,
      }
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
  },
  methods: {
    onInit(id){
      let subscription = SuppliersService.getSupplier(id).subscribe( {
        next: data => {
          this.supplier = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    updateSupplier(){
      let subscription = SuppliersService.updateSupplier(this.supplier).subscribe( {
        next: () => {
          setTimeout(() => this.backToSuppliers(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    deleteSupplier(){
      let subscription = SuppliersService.deleteSupplier(this.supplier.id).subscribe( {
        next: () => {
          setTimeout(() => this.backToSuppliers(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToSuppliers(){
      this.$router.back();
    }
  },
  // watch: {
  //   this.supplier => console.log(this.supplier.name);
  // }
})
</script>
