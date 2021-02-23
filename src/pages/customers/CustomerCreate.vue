<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Crear Usuario
                </h5>
            </div>

            <div class="form-section" style="padding: 20px">
              <q-form ref="myForm">
                <q-input  
                  outlined
                  v-model="customer.fullname"
                  label="Nombre Completo"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="customer.email"
                  label="Email"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="customer.phone"
                  label="Teléfono"
                />
                <br/>
                <q-input  
                  outlined
                  v-model="customer.password"
                  label="Contraseña"
                />
                <br/>
                <q-input v-model="customer.password" outlined :type="isPwd ? 'password' : 'text'" label="Contraseña">
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                
              </q-form>
            </div>  

            <q-btn color="primary" label="Crear Usuario" class="q-pa-xs q-mt-md q-mr-md float-right" @click="createCustomer()"/>

        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomersService from '../../services/customers/customers.service'

export default Vue.extend({
  data () {
    return {
      customer : {
        fullname: '',
        email: '',
        phone: '',
        password:''
      },
      isPwd: true
    }
  },
  methods: {
    createCustomer(){
      let subscription = CustomersService.createCustomer(this.customer).subscribe( {
        next: () => {
          setTimeout(() => this.backToCustomers(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToCustomers(){
      this.$router.back();
    },
  }
})
</script>
