<template>
  <v-container>
    <br /><br /><br />
    <contactos/>
  </v-container>
</template>

<script>
import Contactos from "../components/FormComponent.vue";
export default {
  name: "ContactosView",
  components: {
    Contactos,
  },
  props: {
    
  },
  data: () => ({}),
};
</script>
