<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title>Periodico La Paz</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-item>
        <v-btn text>
          <router-link to="/">Destacados</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/galeria">servicios</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/requerimiento">Clasificados</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/contacto">Contáctanos</router-link>
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
