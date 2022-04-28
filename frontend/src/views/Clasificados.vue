<template>
    <v-container>
        <div class="card-container">
            <card imageLink="img1.jpg"  text="Casa Uno"/>
            <card imageLink="img2.jpg"  text="Casa Dos"/>
            <card imageLink="img3.jpg"  text="Casa Tres"/>
            <card imageLink="img4.jpg"  text="Casa Cuatro"/>



            <card imageLink="https://remax.azureedge.net/userimages/120/L_c62cefe031de4d3aa2d23259ee6ba152.jpg"/>
            <card imageLink="https://remax.azureedge.net/userimages/120/L_c62cefe031de4d3aa2d23259ee6ba152.jpg"/>
            <card imageLink="https://remax.azureedge.net/userimages/120/L_dab8aefa7a3d4770a8ce70d912dc1040.jpg"/>
  

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
