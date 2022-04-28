<template>
  <v-app>
    <v-app-bar
    :class="'background-primary'"
    app
    >
<<<<<<< HEAD
      <Header />
=======
      <Header/>
>>>>>>> 4ff04b97406c0ea37fb76639b6b5f39e0e6e2d29
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

<style lang="sass">
@import "./scss/main.scss"
</style>
