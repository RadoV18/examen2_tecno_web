<template>
    <v-row>
        <card-filter :category="this.selectedCategory" @update-category="selectedOption" />
        <div class="card-container">
            <card v-for="item in displayImages" :key="item.id" :id="item.id" :title="item.title" :imageLink="item.src" :desc="item.descripcion" />
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
                  title: 'Casa en Venta',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble'
              },
              {
                  id:'2',
                  src:'img2.jpg',
                  txt:'Casa Dos',
                  title: 'Departamento en Alquiler',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble' 
              },
              {
                  id:'3',
                  src:'img3.jpg',
                  title: 'Casa en Venta',
                  txt:'Casa Tres',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble' 
              },
              {
                  id:'4',
                  src:'img4.jpg',
                  txt:'Casa Cuatros',
                  title: 'Casa en alquiler',
                  descripcion: 'Se vende el inmueble más grandioso de toda la vida, contamos con la mejor ubicación del mundo entero. ',
                  category: 'inmueble' 
              },
              {
                  id:'5',
                  src:'rocola1.jpg',
                  txt:'Objeto Uno',
                  title: 'Radio en Venta',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              },   
              {
                  id:'6',
                  src:'cel1.jpg',
                  txt:'Objeto Dos',
                  title: 'Venta de Celulares',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              }, 
              {
                  id:'7',
                  src:'ropa1.jpg',
                  title: 'Venta de Ropa',
                  txt:'Objeto Tres',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              },  
              {
                  id:'8',
                  src:'disco1.jpg',
                  title: 'CDs en Venta',
                  txt:'Objeto Cuatro',
                  descripcion:'Vendemos los mejores productos al mejor precio, econonmicos, modernos y totalmente buenos',
                  category: 'productos'  
              },   
              {
                  id:'9',
                  src:'limpieza.jpg',
                  txt:'Servicio Cuatro',
                  title: 'Serivicio de Limpieza',
                  descripcion:'Ofrecemos los mejores servicios a los mejores precios dentro de la economia boliviana dentro de todos',
                  category: 'servicios'  
              }, 
              {
                  id:'10',
                  src:'profesor.jpg',
                  title: 'Profesor de Matemáticas',
                  txt:'Servicio Cuatro',
                  descripcion:'Ofrecemos los mejores servicios a los mejores precios dentro de la economia boliviana dentro de todos',
                  category: 'servicios'  
              },
              {
                  id:'11',
                  src:'carpinteria.jpg',
                  title: 'Carpintero',
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
