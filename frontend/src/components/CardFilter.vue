<template>  
  <div class="category__container">
    <div class="filters">
      <div class="filters__button">
        <h3>Filtros</h3>
      </div>
      <div class="filters__content">
        <ul>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category === 'all' }"
            @click="$emit('update-category','all')"
          >
            <span>Todos</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category === 'inmueble' }"
            @click="$emit('update-category','inmueble')"
          >
            <span>Inmuebles</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category === 'productos' }"
            @click="$emit('update-category','productos')"
          >
            <span>Compra y Venta de Productos</span>
          </li>
          <li
            class="filters__element"
            :class="{ 'filters__element--active': category === 'servicios' }"
            @click="$emit('update-category','servicios')"
          >
            <span>Servicios</span>
          </li>
          

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryFilter',
  props: {
    category: String
  }
}
</script>

<style>
.category__container {
  width: 20%;
}
.filters__button {
  text-align: center;
  padding: 2rem 0;
}
.filters__element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
}
.filters__element span {
  line-height: 4rem;
  vertical-align: middle;
  text-align: center;
}
.filters__element--active {
  background: #3fb984;
  color: #001e26;
}
.filters__element:hover {
  background: #30475e;
  color: white;
  cursor: pointer;
}
.filters__element--active:hover {
  background: #3fb984;
  color: #001e26;
}
</style>