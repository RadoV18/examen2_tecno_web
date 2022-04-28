<template>
  <v-app>
    <v-app-bar :class="'background-primary'" app>
      <Header />
    </v-app-bar>

    <router-view> </router-view>

    <v-footer class="no-padding background-secondary">
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
