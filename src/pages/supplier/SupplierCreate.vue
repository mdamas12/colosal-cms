<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Proveedor
                </h5>
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
            <q-btn color="red-10" label="Crear Proveedor" class="q-pa-xs q-mt-md q-mr-md float-right" :loading="loading" @click="checkSupplier()"/>
        </div>
      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import SuppliersService from '../../services/suppliers/suppliers.service'

export default Vue.extend({
  data () {
    return {
      loading: false,
      supplier : {
        name: '',
        address: '',
        email: '',
        number:'',
        agent:''
      }
    }
  },
  methods: {
    showNotif (message: string, color: string) {
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
      this.createSupplier();
    },
    createSupplier(){
      this.loading = true;
      let subscription = SuppliersService.createSupplier(this.supplier).subscribe( {
        next: () => {
          this.loading = false;
          this.showNotif("Usuario creado exitosamente", 'indigo-10');
          setTimeout(() => this.backToSuppliers(), 1000);
        },
        complete: () => console.log('[complete]'),
      })
    },
    isValidEmail (val: string) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Correo inválido';
    },
    isValidPhone (val: string) {
      const emailPattern = /^(?=[0-9+-]{1,15}$)/;
      return emailPattern.test(val) || 'Teléfono inválido';
    },
    backToSuppliers(){
      this.$router.back();
    },
  }
})
</script>
