<template>
  <v-container>
    <br /><br /><br /><br/>
    <contactos/>
    <br /><br />
    <v-row>
      <info/><info/>
    </v-row>
    <br/>
  </v-container>
</template>

<script>
import Contactos from "../components/FormComponent.vue";
import Info from "../components/InfoComponent.vue";
export default {
  name: "ContactosView",
  components: {
    Contactos,
    Info,
  },
  props: {
    
  },
  data: () => ({}),
};
</script>
