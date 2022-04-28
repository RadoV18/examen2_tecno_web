<template>
  <v-container>
    <br /><br /><br />
    <v-row align="center" justify="space-around">
      <h1>Servicios</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nemo ipsa
        recusandae officia, et eaque obcaecati reprehenderit rem. Molestiae
        consequatur magnam recusandae molestias nam magni quas explicabo
        doloribus, odit ducimus.
      </p>
    </v-row>
    <br><br><br><br>
    <v-row align="center" justify="space-around">
      <form style="width:600px" method="POST">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Nombre de la empresa"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          label="titulo"
          required
        ></v-text-field>
        <v-text-field
          label="descripcion"
          required
        ></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="tipo de servicio"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-btn class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </v-row>
    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "ServiciosPeriodico",

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
  }),
  computed: {
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Selecciona una opcion");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("El nombre debe ser de mas de 10 caracteres de largo");
      !this.$v.name.required && errors.push("Nombre es requerido");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Debe ser un email valido");
      !this.$v.email.required && errors.push("email es requerido");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
    },
  },
};
</script>
