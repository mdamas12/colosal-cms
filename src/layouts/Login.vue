<template>
  <q-layout style="background: radial-gradient(circle, #0013DB 0%, #00096B 100%); height: 100vh;" view="lHh lpr lFf" container class="shadow-2 rounded-borders">    
    <q-page-container style="height: 100vh;">
      <!-- <transition name="slide" mode="out-in"> -->
        <div class="column items-center justify-center" style="height: 100vh;">
            <q-card class="q-pa-md" style="width: 33vw;">
              <q-card-section>
                <div class="row justify-center q-mr-md q-my-md">
                    <q-img src="~assets/logo-colosal-gris.png" :ratio="1" style="width: 100px"/>
                </div>
                <div class="row justify-center q-ma-lg">
                  <div class="text-h6 text-grey q-mt-md">Panel Administrativo</div>
                </div>
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <div class="row q-ma-md q-mt-lg  items-center justify-center">
                  <div class="col items-center justify-center">
                    <q-input  
                      outlined
                      ref="username"
                      type="text"
                      v-model="username"
                      label="Usuario"
                      lazy-rules
                      :rules="[val => !!val || 'Debe ingresar el correo']"
                    />
                  </div>    
                </div>
                <div class="row q-ma-md items-center justify-center">
                  <div class="col items-center justify-center">
                    <q-input 
                      outlined
                      v-model="password" 
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
                  
                </div>
                <div class="row items-center justify-center">
                  <q-btn color="red-10" label="INICIAR SESIÓN" class="q-pa-sm q-px-lg q-my-lg q-mx-md" :loading="loading" @click="checkUser()"/>
                </div>
              </q-card-section>
            <!-- <div class="col self-center">    
              <q-card-section>
                <div class="col-1 self-center">
                  <q-icon name="img:~assets/logo-colosal-gris.png" height='200' width='200'/>
                </div>
                <div class="text-h6 color-grey">Panel Administrativo</div>

              </q-card-section>
            </div>

            <q-card-section>
              <div class="col-6 q-ma-sm">
                <q-input  
                  ref="username"
                  type="text"
                  v-model="username"
                  label="Correo"
                  lazy-rules
                  :rules="[val => !!val || 'Debe ingresar el correo']"
                />
              </div>
              <div class="col-6 q-ma-sm">
                <q-input 
                  v-model="password" 
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
              <div class="col-3">
                <q-btn color="red-10" label="Acceder" class="q-pa-xs q-mx-md float-right" :loading="loading" @click="checkUser()"/>
              </div>
            </q-card-section> -->
          
          </q-card>
        </div>
      <!-- </transition> -->
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthService from '../services/auth/auth.service'

export default Vue.extend({
  name: 'Login',
  data () {
    return {
      isPwd: true,
      loading: false,
      username: '',
      password: ''
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
      if (this.username === "" || this.password === ""){
        this.showNotif("Faltan campos por completar", 'red-10');
        return;
      };
      if (this.$refs.username.hasError || this.$refs.password.hasError){
        this.showNotif("Existen campos por corregir", 'red-10');
        return;
      }
      console.log("everything in order. Creating user...");
      this.loading = true;
      this.login();
    },
    login(){
      let subscription = AuthService.login({username: this.username, password: this.password}).subscribe( {
        complete: () => {
          console.log('[login successful]');
          this.loading = false;
        },
        error:() => {
          this.showNotif("Nombre de usuario o contraseña inválidos", 'red-10');
        }
      });
    },
    isValidPassword (val: string) {
      return val.length > 8 ? !!val: 'Contraseña debe ser mayor a 8 caracteres';
    }
  }
})
</script>
