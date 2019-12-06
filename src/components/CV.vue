<template>
  <section id="cv" class="portfolio-block cv" style="padding-top: 100px;">
    <div class="container">
      <Projects />
      <Educations />
      <Skills />
      <div class="group"></div>
      <section>
        <div
          class="col-md-6 col-xl-5 offset-lg-2 offset-xl-3 align-self-center mx-auto"
        >
          <Contact />
        </div>
      </section>
      <Hobbies />
    </div>
  </section>
</template>

<script>
import Skills from "./CV/Skills";
const Contact = () => import("./CV/Contact");
const Hobbies = () => import("./CV/Hobbies");
const Projects = () => import("./CV/Projects");
const Educations = () => import("./CV/Educations");

export default {
  name: "CV",
  components: {
    Skills,
    Educations,
    Projects,
    Hobbies,
    Contact
  }
};
</script>

<style scoped />
