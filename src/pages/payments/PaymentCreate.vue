<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-ma-sm">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col" style="max-width:40px;">
                  <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <div class="col2">
                  <h5 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                      Nuevo Método de Pago
                  </h5>
                </div>
              </div>

              <div class="row">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Información del Titular
                </h6>
              </div>
              
            </div>
            <div class="column items-end">
              <div class="col">
                <div class="row">
                  <q-btn color="red-10" label="Crear compra" :loading="loading" class="q-pa-xs float-right" @click="checkPayment()">
                    <template v-slot:loading>
                      <q-spinner-facebook /> 
                    </template>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>

          <div class="q-mx-sm q-mb-lg">
            <div class="row q-mb-md">
              <div class="col-1">
                <q-select
                  outlined
                  v-model="id_type"
                  color="dark"
                  :options="id_options"
                  :rules="[val => !!val || 'Debe ingresar el tipo de documento']"
                /> 
              </div>
              <div class="col q-ml-xs q-mr-sm">               
                <q-input  
                  outlined
                  color="dark"
                  v-model="bank.owner_id"
                  label="No. identificación del titular"
                  :rules="[val => !!val || 'Debe ingresar el número de identificación']"
                />
              </div>
              <div class="col">
                <q-input
                  outlined
                  color="dark"
                  v-model="bank.account_owner"
                  label="Nombre del titular"
                  :rules="[val => !!val || 'Debe ingresar el nombre del banco']"
                />
              </div>
            </div>
            <div class="row q-mb-md">
              <div class="col q-ml-xs q-mr-sm">               
                <q-input  
                  outlined
                  color="dark"
                  v-model="bank.email"
                  label="Correo del titular"
                  ref="email"
                  :rules="[val => !!val || 'Debe ingresar el correo', isValidEmail]"
                />
              </div>
              <div class="col">
                <q-input
                  outlined
                  color="dark"
                  v-model="bank.phone"
                  label="Número de teléfono del titular"
                  ref="phone"
                  :rules="[val => !!val || 'Debe ingresar un número de telefono', isValidPhone]"
                />  
              </div>
            </div>

            <q-separator inset class="q-mt-lg"/>

            <div class="row q-mx-bg">
              <div class="col2">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm">
                    Información de la cuenta
                </h6>
              </div>
            </div>

            <div class="row q-mb-md">
              <div class="col">               
                <q-input
                  outlined
                  color="dark"
                  v-model="bank.name"
                  label="Banco"
                  :rules="[val => !!val || 'Debe ingresar el nombre del banco']"
                />         
              </div>
              <div class="col q-mx-sm">               
                <q-input
                  outlined
                  color="dark"
                  v-model="bank.account_number"
                  label="Número de cuenta"
                />         
              </div> 
              <div class="col">               
                <q-select outlined v-model="bank.currency" color="dark" :options="currencyOptions" label="Moneda" :rules="[val => !!val || 'Debe seleccionar el tipo de moneda']"/>
              </div>
            </div>
            <div class="row q-mx-bg">
              <div class="col2">
                <h6 class="vertical-top col2 text-indigo-10 text-weight-bolder q-pa-sm">
                    Métodos de pago
                </h6>
              </div>
            </div>
            <div class="q-gutter-sm" v-for="(item,index) in this.paymentOptions">
              <q-checkbox v-model="paymentValue[index]" :label="item" color="red-10" />
            </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import PaymentsService from '../../services/payments/payments.service'
import { Loading } from 'quasar';

export default Vue.extend({
  data () {
    return {
      loading: false,
      paymentValue: [false],
      paymentOptions: ['ZELLE', 'TRANSFERENCIA', 'PAGO MOVIL'],
      currencyOptions: ['USD', 'BS'],
      bank: {
        name: '',
        account_owner: '',
        account_number: '',
        owner_id: '',
        email: '',
        phone: '',
        currency: ''
      },
      method: [{
        payment_type: ''
      }],
      id_type: '',
      id_options: ['V', 'E', 'P', 'J', 'G']
    }
  },
  mounted(){
    let vm = this;
    this.paymentValue.pop()
    for (var i = 0; i < this.paymentOptions.length; i++){
      this.paymentValue.push(false)
    }
    console.log(this.paymentValue)
    vm.method.pop()
  },
  methods: {
    checkPayment() {
      if (this.bank.owner_id === '' || this.id_type === '' ||this.bank.account_owner === '' || this.bank.email === '' || this.bank.account_owner === ''){
        this.showNotif("Completar información del titular", 'red-10')
        return
      }
      if (this.bank.name === '' || this.bank.currency === ''){
        this.showNotif("Completar información de la cuenta", 'red-10')
        return
      }
      // if ((this.$refs.email as Vue & { validate: () => string }).validate() || (this.$refs.phone as Vue & { validate: () => string }).validate() || (this.$refs.accNumber as Vue & { validate: () => string }).validate()) {
      //   this.showNotif("Existen campos por corregir", 'red-10')
      //   return
      // }
      for (var i = 0; i < this.paymentOptions.length; i++){
        if (this.paymentValue[i]){
          this.method.push({payment_type: this.paymentOptions[i]})
        }
      }
      if (!(this.method.length > 0)){
        this.showNotif("Seleccionar al menos un método de pago", 'red-10')
        return
      }
      this.createPayment()
    },
    createPayment(){
      if (this.bank.account_number !== '')
        this.bank.account_number = this.id_type + this.bank.account_number
      console.log("everything in order. Creating payment...");
      this.loading = true;
      PaymentsService.createPayment({bank: this.bank, method: this.method}).subscribe({
        complete: () =>{
          this.loading = false;
          this.showNotif("Método de pago registrado exitosamente", 'indigo-10');
          setTimeout(() => this.$router.back(),1000);
        }
      });
    },
    showNotif (message: string, color: string) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
    isValidNumber (val: string) {
      const numberPattern = /^(?=[0-9]{1,20}$)/;
      return numberPattern.test(val) || 'Número inválido';
    },
    isValidPhone (val: string) {
      const phonePattern = /^(?=[0-9+-]{1,15}$)/;
      return phonePattern.test(val) || 'Teléfono inválido';
    },
    isValidEmail (val: string) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Correo inválido';
    }
  }
})
</script>
