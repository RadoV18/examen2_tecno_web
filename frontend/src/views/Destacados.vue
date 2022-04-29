<template>
  <div class="app">
      <div align="center" justify="space-around">
        <h1>Destacados de hoy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nemo ipsa
            recusandae officia, et eaque obcaecati reprehenderit rem. Molestiae
            consequatur magnam recusandae molestias nam magni quas explicabo
            doloribus, odit ducimus.
          </p>
      </div>
      <carousel>
        <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
          <img :src="slide" :alt="slide">
        </carousel-slide>
      </carousel>
      <div align="center" justify="space-around">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nemo ipsa
            recusandae officia, et eaque obcaecati reprehenderit rem. Molestiae
            consequatur magnam recusandae molestias nam magni quas explicabo
            doloribus, odit ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nemo ipsa
            recusandae officia, et eaque obcaecati reprehenderit rem. Molestiae
            consequatur magnam recusandae molestias nam magni quas explicabo
            doloribus, odit ducimus.
          </p>
          <div class="card">
            <card imageLink="img10.jpg"  text="Noticia fotografia"/>
            <card imageLink="img11.jpg"  text="Noticia musical"/>
            <card imageLink="img12.jpg"  text="Noticia marchas LGBT+"/>

            <card imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/USAF_photographer.jpg/1200px-USAF_photographer.jpg"/>
            <card imageLink="https://img2.rtve.es/imagenes/duki/1622195490606.jpg"/>
            <card imageLink="https://th.bing.com/th/id/R.279c91748973055eb856d5d3244141bb?rik=iUuC3v8XnpXgoQ&pid=ImgRaw&r=0"/>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Carousel from '../components/carousel/Carousel'
import CarouselSlide from '../components/carousel/CarouselSlide'
import Card from '../components/CardNoticia.vue'

export default {
  name: 'DestacadosNoticias',
  data: () => ({}),
  data() {
    return {
      slides: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/USAF_photographer.jpg/1200px-USAF_photographer.jpg',
        'https://img2.rtve.es/imagenes/duki/1622195490606.jpg',
        'https://th.bing.com/th/id/R.279c91748973055eb856d5d3244141bb?rik=iUuC3v8XnpXgoQ&pid=ImgRaw&r=0',
        'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/23103940/marcha-LGBT-Rio-de-Janeiro-1.jpg',
        'https://th.bing.com/th/id/OIP.lnp6IcVSLLI7Bk_Y4mUEDQHaEO?pid=ImgDet&rs=1'
      ],
    }
  },
  components: {
    Header,
    Carousel: Carousel,
    CarouselSlide: CarouselSlide,
    Card
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