<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div >
          <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
        </div>

        <q-item>
          <q-item-section side>
            <q-avatar v-if="user.foto" size="100px">
              <img :src="user.foto">
            </q-avatar>
          </q-item-section>
          <q-item-section style="margin-left:10px">
            <q-item-label ><b>{{user.nombre}}</b></q-item-label>
            <!--<q-item-label caption caption v-if="contact.cargo">{{user.cargo}}</q-item-label>-->
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

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      text: '',
      user: {
        nombre: '',
        foto: '',
        email: '',
        celular: ''
      }
    }
  },
  methods: {
    openUrl (url : string) {
      location.href = url
    }
  }
})
</script>
