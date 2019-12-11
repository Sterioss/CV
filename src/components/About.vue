<template>
  <section id="about" class="portfolio-block block-intro">
    <div class="container">
      <div class="row">
        <div class="col"><h1 class="mb-5">About me</h1></div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-9 mx-auto">
          <hr />
          <p class="border rounded p-2" v-html="about.message">
            {{ about.message }}
          </p>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      about: {
        message:
          "Hello, my name is Thomas, I'm 22 yo and I'm currently studying\n" +
          "            computer science.<br />Currently I'm in my second year but I've been\n" +
          "            coding before geting here. Even before doing ISN (computer science\n" +
          "            option) in High School. Actually I started beign passionate about\n" +
          "            code in middle school.<br />I'm mostly interested in code but can\n" +
          "            still manage in network and systems.<br /><br />I led multiple teams\n" +
          "            in SCRUM projects so far and learnt from each occurence. Some\n" +
          "            projects were more challenging but most of the time I kept balance\n" +
          "            with my private life.<br />I'm a fast learner when it comes to new\n" +
          "            technology and very interested in refactoring in my own code.<br /><br />Next\n" +
          "            year I'll start doing a Mastery in computer science to complete my\n" +
          "            practical knowledge with complementary theorical knowledge.<br /><br />Thank\n" +
          "            you for reading this resume page.<br />Made with passion.<br /><br />Thomas"
      }
    };
  }
};
</script>

<style scoped></style>
