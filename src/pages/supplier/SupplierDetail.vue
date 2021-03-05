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
          <div class="form-section" style="padding: 20px">
              <div class="row">
                <div class="col q-mr-md">
                  <q-input  
                    outlined
                    v-model="supplier.name"
                    label="Nombre"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar el nombre']"
                  />
                </div>
                <div class="col">
                  <q-input  
                    outlined
                    v-model="supplier.email"
                    ref="email"
                    type="email"
                    label="Correo"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar un correo', isValidEmail]"
                  />
                </div>
              </div>
              <div class="row q-my-sm">
                <div class="col">
                  <q-input  
                    outlined
                    v-model="supplier.address"
                    label="Dirección"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar una dirección']"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col q-mr-md">
                  <q-input  
                    outlined
                    v-model="supplier.number"
                    label="Número de Teléfono"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar un número de telefono', isValidPhone]"
                  />
                </div>
                <div class="col">
                  <q-input  
                    outlined
                    v-model="supplier.agent"
                    label="Representante"
                    lazy-rules
                    :rules="[val => !!val || 'Debe ingresar el representante']"
                  />
                </div>
              </div>
            </div>
                  
            <div class="row items-end justify-end">
                <q-btn flat color="red-10" label="Eliminar" class="q-pa-xs q-mr-xs float-right" :loading="loading2" @click="confirmDelete()"/>
              <q-btn color="red-10" label="Guardar" class="q-pa-xs q-mr-md float-right" :loading="loading1" @click="checkSupplier()"/>
            </div>
          
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="js">
import Vue from 'vue'
import SuppliersService from '../../services/suppliers/suppliers.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      text: '',
      supplier: {
        id: this.$router.currentRoute.params.id,
        name: '',
        address: '',
        email: '',
        number: '',
        agent: '',
      },
      loading1: false,
      loading2: false
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
  },
  methods: {
    onInit(id){
      Loading.show()
      let subscription = SuppliersService.getSupplier(id).subscribe( {
        next: data => {
          Loading.hide()
          this.supplier = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    checkSupplier(){
      if (this.supplier.name === "" || this.supplier.address === "" || this.supplier.email === "" || this.supplier.number === "" || this.supplier.agent === ""){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      if (this.$refs.email.hasError){
        this.showNotif("Existen campos por corregir", 'red-10');
        return;
      }
      console.log("everything in order. Creating user...");
      this.loading = true;
      this.updateSupplier();
    },
    updateSupplier(){
      if (this.loading1 || this.loading2){
        return
      }
      this.loading1 = true;
      let subscription = SuppliersService.updateSupplier(this.supplier).subscribe( {
        complete: () => {
          console.log('[supplier updated]');
          this.loading1 = false;
          this.showNotif("Cambios guardados exitosamente", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      })
    },
    confirmDelete () {
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar este proveedor?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteSupplier();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deleteSupplier(){
      if (this.loading1 || this.loading2){
        return
      }
      this.loading2 = true;
      let subscription = SuppliersService.deleteSupplier(this.supplier.id).subscribe( {
        complete: () => {
          this.loading2 = false;
          console.log('[supplier Deleted]')
          this.showNotif("Usuario Eliminado", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      })
    },
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Correo inválido';
    },
    isValidPhone (val) {
      const emailPattern = /^(?=[0-9+-]{1,15}$)/;
      return emailPattern.test(val) || 'Teléfono inválido';
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
