<template>
    <v-container>
        <div class="card-container">
            <card imageLink="https://remax.azureedge.net/userimages/120/L_9c6cecfddfb44d729b81aa46e92595f7.jpg"
                text="Hola MUNDO"
            />
            <card />
            <card />
            <card />
        </div>

    </v-container>
</template>

<script>
import Card from '../components/CardComponent.vue'
export default {
  name: 'ClasificadosPeriodico',
  components: {
    Card
  },
  props: {
    imageLink: String,
    text: String
  },
  data: () => ({})
}

</script>

<style>
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 5%;
    }

</style>
