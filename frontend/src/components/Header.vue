<template>
  <v-container class="on-top">
    <v-toolbar class="background-primary" flat>
      <v-toolbar-title class="text-white">
        <router-link class="text-white no-decoration header__title" to="/">
          <img class="header__image" :src="require('@/assets/img/illimani.png')" alt="illimani"/><span>Periódico "La Paz"</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-item>
        <v-btn text>
          <router-link class="text-white no-decoration hover-underline" to="/">Destacados</router-link>
        </v-btn>

        <v-btn text>
          <router-link class="text-white no-decoration hover-underline" to="/servicios">servicios</router-link>
        </v-btn>

        <v-btn text>
          <router-link class="text-white no-decoration hover-underline" to="/clasificados">Clasificados</router-link>
        </v-btn>

        <v-btn text>
          <router-link class="text-white no-decoration hover-underline" to="/contacto">Contáctanos</router-link>
        </v-btn>
      </v-toolbar-item>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: 'HeaderPrincipal',
  data: () => ({})
}
</script>

<style scoped>
.header__image {
  height: 64px;
}

.header__title {
  display: flex;
}

.header__title span {
  margin-left: 1rem;
  line-height: 64px;
  vertical-align: middle
}
</style>
