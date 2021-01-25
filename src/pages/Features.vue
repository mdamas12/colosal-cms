<template>
  <div class="row justify-center">
    <div class="col container-page">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  meta: {
    title: 'Features'
  },
  data () {
    return {
      text: ''
    }
  }
})
</script>
