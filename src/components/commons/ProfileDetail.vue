<template>
  <div class="row bg-white" v-if="profile">
    <div class="col-12 bg-primary" style="height:210px;">
      <q-btn
        round
        flat
        @click="$emit('close')"
        color="white"
        icon="close"
        class="float-right q-mr-md q-mt-md"
      />

      <q-card class="my-card q-ma-md" style="top:50px;">
        <q-card-section class="" style="height:60px;">
          <q-avatar size="100px" color="grey-6" class="absolute fixed-center" style="top: 0;">
            <img :src="profile.foto" />
          </q-avatar>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <div class="text-subtitle1">
            {{ profile.first_name}}
          </div>
         <!-- <div class="text-black">
            {{ profile.cargo }}
          </div>-->
          <div class="text-subtitle1 text-primary q-mt-md">
            <q-btn no-caps flat @click="logout">Cerrar sesión</q-btn>
          </div>
        </q-card-section>

        <q-separator />
      </q-card>
    </div>
    <div class="col-12 q-mt-lg">
      <q-list separator class="q-pt-lg">
        <q-item>
          <q-item-section>
            <q-item-label caption>Email</q-item-label>
            <q-item-label>{{profile.email}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import router from 'src/router'
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      /* profile: {
        nombre: '',
        apellidoPaterno: '',
        foto: '',
        apellidoMaterno: '',
        email: ''
      } */
    }
  },
  methods:{
    logout(){
      localStorage.removeItem("token")
      this.$router.push('/Login')
    }
  },
  props: ['profile']
})
</script>
