<template>
  <section id="hire-me" class="portfolio-block hire-me">
    <div class="container">
      <div class="heading"><h2>Hire Me</h2></div>
      <b-form id="hire-form" @submit.stop.prevent="onSubmit">
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            name="email"
            type="email"
            v-model="$v.form.email.$model"
            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
          />
          <b-form-invalid-feedback v-if="!$v.form.email.required">
            This field is required.
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.email.email">
            Must be a valid email.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Message" label-for="message">
          <b-textarea
            id="message"
            name="message"
            v-model="$v.form.message.$model"
            :state="$v.form.message.$dirty ? !$v.form.message.$error : null"
          />
          <b-form-invalid-feedback v-if="!$v.form.message.required">
            This field is required.
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.message.minLength">
            Must have at least
            {{ $v.form.message.$params.minLength.min }} letters.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
          <b-form-row>
            <b-col md="6" offset-xl="3" class="button">
              <b-btn
                type="submit"
                variant="primary"
                block
                :disabled="$v.form.$invalid"
              >
                Hire Me
              </b-btn>
            </b-col>
          </b-form-row>
        </b-form-group>
      </b-form>
    </div>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "HireMe",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
        message: null
      }
    };
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      this.toast();
      if (this.$v.form.$anyError) {
        return;
      }
      return 1;
    },
    toast() {
      this.$bvToast.toast(`This is toast number`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: true
      });
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(10)
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
