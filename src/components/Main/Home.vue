<template>
  <section id="home" class="portfolio-block block-intro">
    <div class="container">
      <div
        class="avatar"
        style="height: 175px;width: 175px;"
        :style="{ 'background-image': 'url(\'' + avatar + '\')' }"
      ></div>
      <div class="about-me">
        <p v-html="about_me">
          {{ about_me }}
        </p>
        <a
          class="btn btn-outline-primary"
          role="button"
          href="#"
          v-scroll-to="'#hire-me'"
          >Hire me</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      avatar: "https://i.imgur.com/YA40gTI.jpg",
      about_me:
        "Hello! I am <strong>Thomas Tosch</strong>. I am studying web and\n" +
        "          software development. I have passion for my line of work."
    };
  }
};
</script>

<style scoped />
