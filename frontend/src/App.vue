<template>
  <v-app>
    <v-app-bar
    app
    >
      <Header/>
    </v-app-bar>

    <router-view>

    </router-view>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  })
}
</script>

<style>
  .bar-header {
    margin-bottom: 2%;
  }
</style>
