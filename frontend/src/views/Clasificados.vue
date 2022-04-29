<template>
    <v-row>
        <card-filter :category="this.selectedCategory" @update-category="selectedOption" />
        <div class="card-container">
            <card v-for="item in displayImages" :key="item.id" :id="item.id" :imageLink="item.src" :text="item.txt" :desc="item.descripcion" />
        </div>
    </v-row>
</template>

<script>
import Card from '../components/CardComponent.vue';
import CardFilter from '../components/CardFilter.vue';

export default {
  name: 'ClasificadosPeriodico',
  components: {
    Card, 
    CardFilter,
  },
  methods: {
      selectedOption(cat){
          console.log(cat);
          this.selectedCategory = cat;
      }
  },
  computed: {
      displayImages: function(){
        return this.imgArray.filter((img) => this.selectedCategory === 'all' ? true : img.category === this.selectedCategory);
      }
  },
  data () {
      return {
          selectedCategory: 'all',
          imgArray: [
              {
                  id:'1',
                  src:'img1.jpg',
                  txt:'Casa Uno',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble'
              },
              {
                  id:'2',
                  src:'img2.jpg',
                  txt:'Casa Dos',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble' 
              },
              {
                  id:'3',
                  src:'img3.jpg',
                  txt:'Casa Tres',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble' 
              },
              {
                  id:'4',
                  src:'img4.jpg',
                  txt:'Casa Cuatros',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble' 
              },
              {
                  id:'5',
                  src:'rocola1.jpg',
                  txt:'Objeto Uno',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              },   
              {
                  id:'6',
                  src:'cel1.jpg',
                  txt:'Objeto Dos',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              }, 
              {
                  id:'7',
                  src:'ropa1.jpg',
                  txt:'Objeto Tres',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              },  
              {
                  id:'8',
                  src:'disco1.jpg',
                  txt:'Objeto Cuatro',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              },   
              {
                  id:'9',
                  src:'limpieza.jpg',
                  txt:'Servicio Cuatro',
                  descripcion:'Ofrecemos los mejores servicios a los mejores precios dentro de la economia boliviana dentro de todos',
                  category: 'servicios'  
              }, 
              {
                  id:'10',
                  src:'profesor.jpg',
                  txt:'Servicio Cuatro',
                  descripcion:'Ofrecemos los mejores servicios a los mejores precios dentro de la economia boliviana dentro de todos',
                  category: 'servicios'  
              },
              {
                  id:'11',
                  src:'carpinteria.jpg',
                  txt:'Servicio Cuatro',
                  descripcion:'Ofrecemos los mejores servicios a los mejores precios dentro de la economia boliviana dentro de todos',
                  category: 'servicios'  
              },                            

          ]
      }
  }
}

</script>

<style>
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 5%;
    }
</style>
