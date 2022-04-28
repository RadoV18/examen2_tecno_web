<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <Header class="bar-header"/>
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
