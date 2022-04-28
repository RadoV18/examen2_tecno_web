<template>
  <v-container >
    <v-toolbar class="background-primary" flat>
      <v-toolbar-title class="text-white">
        <router-link class="text-white no-decoration" to="/">Periódico La Paz</router-link>
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
