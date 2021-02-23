<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Proveedor
                </h5>
            </div>

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="supplier.name"
                  label="Nombre"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.address"
                  label="Dirección"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.email"
                  label="Correo"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.number"
                  label="Número de Teléfono"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="supplier.agent"
                  label="Representante"
                />
                
              </q-form>
            </div>  

            <q-btn color="primary" label="Crear Proveedor" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createSupplier()"/>

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
    createSupplier(){
      let subscription = SuppliersService.createSupplier(this.supplier).subscribe( {
        next: () => {
          setTimeout(() => this.backToSuppliers(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToSuppliers(){
      this.$router.back();
    },
  }
})
</script>
