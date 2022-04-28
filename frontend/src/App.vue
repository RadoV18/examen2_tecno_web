<template>
  <v-app>
    <v-app-bar
    :class="'background-primary'"
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

<style lang="sass">
@import "./scss/main.scss"
</style>
