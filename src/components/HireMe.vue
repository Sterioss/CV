<template>
  <section id="hire-me" class="portfolio-block hire-me">
    <div class="container">
      <div class="heading"><h2>Hire Me</h2></div>
      <form id="hire-form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label
          ><input
            class="form-control"
            type="email"
            id="email"
            name="email"
            v-model="$v.form.email.$model"
          />
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.form.message.$error }"
        >
          <label for="message">Message</label
          ><textarea
            class="form-control"
            id="message"
            name="message"
            v-model="$v.form.message.$model"
          />
          <div class="invalid-feedback" v-if="!$v.form.message.required">
            Field is required
          </div>
          <div class="invalid-feedback" v-if="!$v.form.message.minLength">
            Name must have at least
            {{ $v.form.message.$params.minLength.min }} letters.
          </div>
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-6 offset-xl-3 button">
              <button class="btn btn-primary btn-block" type="submit">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "HireMe",
  data() {
    return {
      form: {
        email: null,
        message: null
      }
    };
  },
  methods: {
    onSubmit() {}
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
