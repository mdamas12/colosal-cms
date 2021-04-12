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
                    Crear Usuario
                </h5>
              </div>
              <div class="col">
                <q-btn color="red-10" label="Crear Usuario" class="q-pa-xs q-mr-md float-right" :loading="loading" @click="checkUser()"/>
              </div>
          </div>

            <div class="row q-ma-md">
              <div class="col">
                <q-input  
                  outlined
                  v-model="user.first_name"
                  label="Nombre"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el nombre']"
                />
              </div>
              <div class="col q-ml-md">
                <q-input  
                  outlined
                  v-model="user.last_name"
                  label="Apellido"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el apellido']"
                />
              </div>
            </div>
            <div class="row q-ma-md">
              <div class="col">
                <q-input  
                  outlined
                  v-model="user.username"
                  label="Usuario"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el nombre de usuario']"
                />
              </div>
              <div class="col q-ml-md">
                <q-input  
                  outlined
                  ref="email"
                  type="email"
                  v-model="user.email"
                  label="Correo"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el correo', isValidEmail]"
                />
              </div>
            </div>
            <div class="row q-ma-md justify-between">
              <div class="col-6">
                <q-input 
                  v-model="user.password" 
                  outlined
                  ref="password"
                  :type="isPwd ? 'password' : 'text'" 
                  label="Contraseña" 
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar una contraseña', isValidPassword]"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <!-- <div class="col-2 q-mx-auto">
                <q-toggle
                  v-model="user.is_staff"
                  checked-icon="check"
                  color="indigo-10"
                  label="Personal"
                />
              </div> -->
              <div class="col-4">
                <q-toggle
                  v-model="user.is_superuser"
                  checked-icon="check"
                  color="red-10"
                  label="Super Usuario"
                  left-label
                />
              </div>
            </div>  
        </div>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import UsersService from '../../services/users/users.service'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {
      user : {
        // last_login: "string",
        is_superuser: false,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        // is_staff: true,
        // is_active: true,
        // date_joined: "string",
      },
      isPwd: true,
      loading: false
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
    checkUser(){
      if (this.user.first_name === "" || this.user.last_name === "" || this.user.username === "" || this.user.email === "" || this.user.password === ""){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      if (!(this.$refs.email as Vue & { validate: () => boolean }).validate()|| !(this.$refs.password as Vue & { validate: () => boolean }).validate()){
        this.showNotif("Existen campos por corregir", 'red-10');
        return;
      }
      console.log("everything in order. Creating user...");
      this.loading = true;
      this.createUser();
    },
    createUser(){
      let subscription = UsersService.createUser(this.user).subscribe( {
        complete: () => {
          console.log('[user Created]');
          this.loading = false;
          this.showNotif("Usuario creado exitosamente", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      });
    },
    isValidEmail (val: string) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Correo inválido';
    },
    isValidPassword (val: string) {
      return val.length > 8 ? !!val: 'Contraseña debe ser mayor a 8 caracteres';
    },
    backToUsers(){
      this.$router.back();
    },
  }
})
</script>
