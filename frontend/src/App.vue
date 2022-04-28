<template>
  <v-app>
<<<<<<< HEAD
    <v-app-bar :class="'background-primary'" app>
=======
    <v-app-bar
    :class="'background-primary'"
    app
    >
>>>>>>> e268a221e93f8dbf6faaa80c36165a1b25c99288
      <Header />
    </v-app-bar>

    <router-view> </router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
}
</script>

<style lang='sass'>
@import './scss/main.scss'
</style>
