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
          label="Correo"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="titulo"
          label="Título"
          required
          @input="$v.titulo.$touch()"
          @blur="$v.titulo.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="descripcion"
          label="Descripción"
          required
          @input="$v.descripcion.$touch()"
          @blur="$v.descripcion.$touch()"
        ></v-text-field>
        <!-- <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="tipo de servicio"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select> -->
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

import axios from 'axios';

export default {
  name: "ServiciosPeriodico",

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    // checkbox: {
    //   checked(val) {
    //     return val;
    //   },
    // },
  },

  data: () => ({
    name: "",
    email: "",
    descripcion: "",
    titulo: "",
    select: null,
    // items: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
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
      let postData = {
        name: this.$v.name.$model,
        email: this.$v.email.$model,
        title: this.titulo,
        description: this.descripcion,
      };
      axios.post('http://localhost:3001/api/service-forms', postData)
        .then(res => {
          if(res.status === 201) {
            // alert
          }
        })
        .catch(err => {
          // alert
        });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.titulo = "";
      this.descripcion = "";
      // this.select = null;
    },
  },
};
</script>
