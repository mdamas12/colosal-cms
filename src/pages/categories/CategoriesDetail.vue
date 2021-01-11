<template>
  <q-page>
      <div class="col-md-12 col-xs-12 q-pa-sm">

        <div class="q-pa-sm">
            <div class="row">
                <div class="col2">
                    <q-btn flat round icon="keyboard_backspace" style="color:#9E9E9E" @click="$router.back()" />
                </div>
                <h5 class="vertical-top col2 text-primary text-weight-bolder q-pa-sm" style="margin-top:-3px">
                    Detalle categoria
                </h5>
            </div>
        </div>

        <q-item v-if="category.name">
          <q-item-section caption >
            <q-item-label caption>Categoria</q-item-label>
            <q-item-label ><b>{{category.name}}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset v-if="category.description"/>

        <q-item v-if="category.name">
          <q-item-section caption >
            <q-item-label caption>Descripcion</q-item-label>
            <q-item-label ><b>{{category.description}}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset v-if="category.description"/>

      </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['category'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    openUrl (url : string) {
      location.href = url
    }
  }
})
</script>
