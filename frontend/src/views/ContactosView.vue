<template>
  <v-container>
    <br /><br /><br /><br/>
    <contactos/>
    <br /><br />
    <v-row>
      <info/><media/>
    </v-row>
    <br/>
  </v-container>
</template>

<script>
import Contactos from "../components/FormComponent.vue";
import Info from "../components/InfoComponent.vue";
import Media from "../components/MediaComponent.vue";
export default {
  name: "ContactosView",
  components: {
    Contactos,
    Info,
    Media,
  },
  props: {
    
  },
  data: () => ({}),
};
</script>
