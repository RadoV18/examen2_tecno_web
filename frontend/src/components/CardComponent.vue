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

    <v-card-title>{{title}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="3.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">• {{title}}</div>

      <div>
        {{desc}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
      </v-chip-group>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'CardComponent',
  data: () => ({
    loading: false,
    selection: 1
  }),
  props: {
    title: String,
    imageLink: String,
    text: {
      type: String,
      default: ''
    },
    desc: String,
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }

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
