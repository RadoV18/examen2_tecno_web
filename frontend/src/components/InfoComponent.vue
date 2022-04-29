<template>
  <v-card class="background-primary mx-auto" dark max-width="400">
    <v-card-title>
      <span class="text-h6 font-weight-light stroke-black">Editor en Jefe</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
      "Periódicos La Paz se caracteriza por su labor con la sociedad al ser un
      medio plural y una fuente confiable para la sociedad paceña."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar class="background-secondary">
          <v-img
            class="elevation-6"
            alt=""
            :src="require('@/assets/img/avataaars.png')"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Ignacio Agramont</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1"> mdi-heart </v-icon>
          <span class="subheading mr-2">300</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>