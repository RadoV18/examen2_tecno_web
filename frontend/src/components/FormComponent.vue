script<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Campo Obligatorio.']"
            :error-messages="errorMessages"
            label="Nombre Completo:"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[
              () => !!email || 'Campo Obligatorio.',
            ]"
            label="Correo Electrónico:"
            required
          ></v-text-field>
          <v-text-field
            ref="phone"
            v-model="phone"
            :rules="[() => !!phone || 'Campo Obligatorio.']"
            label="Celular:"
            required
          ></v-text-field>
          <v-text-field
            ref="subject"
            v-model="subject"
            :rules="[() => !!subject || 'Campo Obligatorio.']"
            label="Asunto:"
            required
          ></v-text-field>
          <v-textarea 
            ref="message"
            v-model="message" 
            :rules="[() => !!message || 'Campo Obligatorio.']"
            label="Mensaje:"
            required
            >
          </v-textarea>
        </v-card-text>
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
import axios from 'axios';
export default {
  data: () => ({
    errorMessages: "",
    name: null,
    email: null,
    phone: null,
    subject: null,
    message: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
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
      if(!this.formHasErrors) {
        let postData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          message: this.message
        };
        console.log(postData);
        axios.post('http://localhost:3001/api/contact-us-forms', postData)
          .then(res => {
            if(res.status === 201) {
              // mostrar alert
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
  },
};
</script>
