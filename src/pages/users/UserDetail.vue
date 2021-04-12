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
                    Editar Usuario
                </h5>
              </div>
              <div class="col">
                <q-btn color="red-10" label="Guardar" class="q-pa-xs q-mr-md float-right" :loading="loading1" @click="checkUser()"/>
                <q-btn flat color="red-10" label="Eliminar" class="q-pa-xs q-mr-xs float-right" :loading="loading2" @click="confirmDelete()"/>
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
                  disable
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el correo', isValidEmail]"
                />
              </div>
            </div>
            <div class="row q-ma-md">
              <div class="col-4">
                <q-toggle
                  v-model="user.is_superuser"
                  checked-icon="check"
                  color="red-10"
                  label="Super Usuario"
                  left-label
                  disable
                />
              </div>
            </div>  
        </div>

      </div>
  </q-page>
</template>


<script>
import { Loading } from 'quasar';
import Vue from 'vue'
import UsersService from '../../services/users/users.service'

export default Vue.extend({
  data () {
    return {
      user : {
        // last_login: "string",
        id: this.$router.currentRoute.params.id,
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
      loading1: false,
      loading2: false
    }
  },
  beforeMount(){
    this.onInit(this.$router.currentRoute.params.id);
    Loading.show();
  },
  methods: {
    onInit(id){
      let subscription = UsersService.getUser(id).subscribe( {
        next: data => {
          this.user = data
        },
        complete: () => {
          console.log('[complete]'),
          Loading.hide();
        }
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
    checkUser(){
      if (this.loading1 || this.loading2){
        return
      }
      if (this.user.first_name === "" || this.user.last_name === "" || this.user.username === ""){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      console.log("everything in order. Creating user...");
      this.updateUser();
    },
    updateUser(){
      this.loading1 = true;
      let subscription = UsersService.updateUser(this.user).subscribe( {
        complete: () => {
          console.log('[user updated]');
          this.loading1 = false;
          this.showNotif("Cambios guardados exitosamente", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      });
    },
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Correo inválido';
    },
    isValidPassword (val) {
      return val.length > 8 ? !!val: 'Contraseña debe ser mayor a 8 caracteres';
    },
    backToUsers(){
      this.$router.back();
    },
    confirmDelete () {
      if (this.loading1 || this.loading2){
        return
      }
      this.$q.dialog({
        title: 'Confirmar',
        message: '¿Está seguro de querer eliminar este usuario?',
        cancel: true,
        persistent: true,
        color: 'red-10'
      }).onOk(() => {
        this.deleteUser();
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    deleteUser(){
      this.loading2 = true;
      let subscription = UsersService.deleteUser(this.user.id).subscribe( {
        complete: () => {
          this.loading2 = false;
          console.log('[user Deleted]')
          this.showNotif("Usuario Eliminado", 'indigo-10');
          setTimeout(() => this.backToUsers(), 1000);
        }
      })
    }
  },
  // watch: {
  //   this.user => console.log(this.user.name);
  // }
})
</script>
