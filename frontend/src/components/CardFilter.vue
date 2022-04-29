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
</style>