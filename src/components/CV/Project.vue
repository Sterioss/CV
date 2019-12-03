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
          ><img class="img-icon" src="heroku-logo-stroke-purple.svg" />
          <h3>{{ name }}</h3></span
        >
      </a>
      <h4 class="organization">PHP - Symfony 4.2</h4>
      <h4 class="organization">Leader</h4>
    </div>
    <div class="col-md-6">
      <span class="period">11/2018 - 01/2019</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    name: String
  }
};
</script>

<style scoped />
