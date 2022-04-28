<template>
<<<<<<< HEAD
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>Periodico La Paz</v-toolbar-title>
=======
  <v-container >
    <v-toolbar class="background-primary" flat>
      <v-toolbar-title class="text-white">
        <router-link class="text-white no-decoration" to="/">Periódico La Paz</router-link>
      </v-toolbar-title>
>>>>>>> d0e5ad33df71ccec8f7330ccebb5cc95c1f1bc6c

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
