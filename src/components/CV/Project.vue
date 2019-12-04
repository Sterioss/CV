<template>
  <div class="row">
    <div class="col-md-6">
      <a
        href="#BiblIrimas"
        data-target="#BiblIrimas"
        data-placement="top"
        data-toggle="tooltip"
        title="Click to display on Heroku !"
        ><span class="modal-icon" data-target="#BiblIrimas" data-toggle="modal"
          ><img
            alt="heroku icon"
            class="img-icon"
            src="../../assets/heroku-logo-stroke-purple.svg"
          />
          <h3>{{ name }}</h3></span
        >
      </a>
      <h4 class="organization" v-for="tag in tags" :key="tag.id">
        {{ tag.text }}
      </h4>
    </div>
    <div class="col-md-6">
      <span class="period">{{ interval.start }} - {{ interval.end }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    name: String,
    tags: {
      type: Array,
      default() {
        return [];
      }
    },
    interval: Object
  }
};
</script>

<style scoped />
