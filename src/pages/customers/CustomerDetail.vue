<template>
  <q-page>
    <div class="row q-pa-sm q-pl-lg q-pr-lg">
      <div class="col-md-12 col-xs-12 q-pa-sm">
        <div class="row">  
          <div >
            <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
          </div>
          <div v-if="customer.name != null">
            <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                Usuario: {{customer.name}}
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
                <br/>
              </q-form>
            </div>       
            <div class="row justify-end">
              <q-btn
                type="submit"
                label="Eliminar"
                class="q-mt-md"
                color="red"
                @click="deleteCustomer()"
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
                @click="updateCustomer()"
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
import CustomersService from '../../services/customers/customers.service'

export default Vue.extend({
  data () {
    return {
      text: '',
      customer : {
        fullname: '',
        email: '',
        phone: '',
        password:''
      },
      isPwd: true
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
  },
  methods: {
    onInit(id){
      let subscription = CustomersService.getCustomer(id).subscribe( {
        next: data => {
          this.customer = data
        },
        complete: () => console.log('[complete]'),
      })
    },
    updateCustomer(){
      let subscription = CustomersService.updateCustomer(this.customer).subscribe( {
        next: () => {
          setTimeout(() => this.backToCustomers(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    deleteCustomer(){
      let subscription = CustomersService.deleteCustomer(this.customer.id).subscribe( {
        next: () => {
          setTimeout(() => this.backToCustomers(), 500);
        },
        complete: () => console.log('[complete]'),
      })
    },
    backToCustomers(){
      this.$router.back();
    }
  },
  // watch: {
  //   this.customer => console.log(this.customer.name);
  // }
})
</script>
