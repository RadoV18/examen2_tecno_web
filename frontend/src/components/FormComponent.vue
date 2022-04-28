script<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Campo obligatorio']"
            :error-messages="errorMessages"
            label="Nombre Completo"
            placeholder="Ignacio Agramont"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[
              () => !!email || 'Campo obligatorio',
            ]"
            label="Email"
            placeholder="email@email.com"
            required
          ></v-text-field>
          <v-text-field
            ref="phone"
            v-model="phone"
            :rules="[() => !!phone || 'Campo Obligatorio']"
            label="Celular"
            required
            placeholder="77788899"
          ></v-text-field>
          <v-text-field
            ref="subject"
            v-model="subject"
            :rules="[() => !!subject || 'Campo Obligatorio']"
            label="Asunto"
            required
            placeholder="Asunto de la solicitud"
          ></v-text-field>
          <v-textarea 
            ref="Mensaje"
            v-model="Mensaje" 
            :rules="[() => !!Mensaje || 'Campo Obligatorio']"
            label="Mensaje"
            required
            placeholder="Mensaje de la solicitud"
            >
          </v-textarea>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    errorMessages: "",
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>
