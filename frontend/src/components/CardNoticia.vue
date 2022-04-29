<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <div class="flex-container">
     <h2>{{text}}</h2>
    </div>
    <v-img
      height="250"
      :src="require(`@/assets/img/${imageLink}`)"
    ></v-img>

    <v-card-title>Noticia</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="3"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>
      </v-row>
    </v-card-text>


    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Ir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardNoticia',
  data: () => ({
    loading: false,
    selection: 1
  }),
  props: {
    imageLink: String,
    text: String,
  },
}
</script>

<style>
  .flex-container {
    display: flex;
    margin: 0 auto;
  }
  .flex-container h2 {
    margin: 0 auto;

  }
</style>
