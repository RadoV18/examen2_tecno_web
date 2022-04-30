<template>
  <div class="app">
      <div align="center" justify="space-around">
        <h1>Destacados de Hoy</h1>
        <h3>
          Bienvenido al Periódico "La Paz".
        </h3>
        <h4>
          Somos la mejor fuente de noticias de Bolivia.
        </h4>
      </div>
      <carousel>
        <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
          <img :src="slide" :alt="slide">
        </carousel-slide>
      </carousel>
      <div align="center" justify="space-around" width="100%">
          <p>
            El Periodico "La Paz" es un medio de comunicación digital boliviano de
        ámbito nacional e internacional y temática generalista, nacido en
        noviembre de 2003 por iniciativa de su actual director.
            "Periódicos La Paz se caracteriza por su labor con la sociedad al ser un
      medio plural y una fuente confiable para la sociedad paceña."
          </p>
          <div class="card background-primary">
            <card imageLink="img13.jpg" text="Nacional" cardContent="En el MAS apuntan al 'a la democrática' opositora para elegir al Defensor, necesita 14 votos"/>
            <card imageLink="img14.jpg" text="Economía" cardContent="El Gobierno anuncia la reversión de tierras de Marinkovic y otros empresarios"/>
            <card imageLink="img15.jpg" text="Economía" cardContent="Empresarios calculan en $us 216 millones el efecto del aumento del salario mínimo de 4%"/>
          </div>
          <div class="card">
            <info/><media/>
          </div>
          <div class="card">
            <card imageLink="img10.jpg" text="Cultura" cardContent=""/>
            <card imageLink="img11.jpg" text="Música" cardContent=""/>
            <card imageLink="img12.jpg" text="Nacional" cardContent=""/>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Carousel from '../components/carousel/Carousel'
import CarouselSlide from '../components/carousel/CarouselSlide'
import Card from '../components/CardNoticia.vue'
import Info from '../components/InfoComponent.vue'
import Media from '../components/MediaComponent.vue'

export default {
  name: 'DestacadosNoticias',
  data: () => ({}),
  data() {
    return {
      slides: [
        'https://www.la-razon.com/wp-content/uploads/2022/04/29/19/Kempff-8.jpg',
        'https://www.la-razon.com/wp-content/uploads/2022/04/22/04/Diputados1.jpg',
        'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/23103940/marcha-LGBT-Rio-de-Janeiro-1.jpg',
        'https://www.la-razon.com/wp-content/uploads/2022/04/29/16/Marinkovi-ministro.jpg',
        'https://th.bing.com/th/id/R.279c91748973055eb856d5d3244141bb?rik=iUuC3v8XnpXgoQ&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.lnp6IcVSLLI7Bk_Y4mUEDQHaEO?pid=ImgDet&rs=1'
      ],
    }
  },
  components: {
    Header,
    Carousel: Carousel,
    CarouselSlide: CarouselSlide,
    Card,
    Info,
    Media
  }
}
</script>

<style>
    .app {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
    }
    .carousel {
        position: relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

    .card {
        display: flex;
        flex-direction: row;
        margin-top: 4%;
    }
</style>