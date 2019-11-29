<template>
  <section id="cv" class="portfolio-block cv" style="padding-top: 100px;">
    <div class="container">
      <div class="education group">
        <div class="heading"><h2 class="text-center">Education</h2></div>
        <div class="item">
          <div class="row">
            <div class="col-md-6">
              <h3>High School</h3>
              <h4 class="organization">Lycée Lucien Herr, Altkirch 68130</h4>
            </div>
            <div class="col-6">
              <span class="period">09/2012 - 05/2015</span>
            </div>
          </div>
          <p class="text-muted">
            BAC S - SI : Engineering Science with option ISN (Computer Science
            and Digital Science)
          </p>
        </div>
        <div class="item">
          <div class="row">
            <div class="col-md-6">
              <h3><strong>License Professionnelle Informatique</strong></h3>
              <h4 class="organization">UHA 4.0, Mulhouse 68200</h4>
            </div>
            <div class="col-md-6">
              <span class="period">09/2018 - Today</span>
            </div>
          </div>
          <p class="text-muted">
            Learning practical knowledge through enterprise projects. Learning
            theorical knowledge on need.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 col-xl-10 offset-xl-3 mx-auto">
          <div class="text-center skills portfolio-info-card mt-5">
            <h1>Skills</h1>
            <div class="row mb-3">
              <div class="col">
                <h2>Front-end</h2>
                <h3>HTML</h3>
                <div
                  class="progress"
                  data-bs-hover-animate="pulse"
                  style="height: 6px;"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 85%;"
                  >
                    <span class="sr-only">85%</span>
                  </div>
                </div>
                <h3>JavaScript</h3>
                <div
                  class="progress"
                  data-bs-hover-animate="pulse"
                  style="height: 6px;"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 75%;"
                  >
                    <span class="sr-only">75%</span>
                  </div>
                </div>
                <h3>Angular, React</h3>
                <div
                  class="progress"
                  data-bs-hover-animate="pulse"
                  style="height: 6px;"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 65%;"
                  >
                    <span class="sr-only">65%</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <h2>Back-end</h2>
                <h3>PHP</h3>
                <div
                  class="progress"
                  data-bs-hover-animate="pulse"
                  style="height: 6px;"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 95%;"
                  >
                    <span class="sr-only">95%</span>
                  </div>
                </div>
                <h3>Symfony 4</h3>
                <div
                  class="progress"
                  data-bs-hover-animate="pulse"
                  style="height: 6px;"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 85%;"
                  >
                    <span class="sr-only">85%</span>
                  </div>
                </div>
                <h3><strong>Relational Database (MySql, Postresql)</strong></h3>
                <div
                  class="progress"
                  data-bs-hover-animate="pulse"
                  style="height: 6px;"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 85%;"
                  >
                    <span class="sr-only">85%</span>
                  </div>
                </div>
              </div>
            </div>
            <h2>Software</h2>
            <h3>Python</h3>
            <div
              class="progress"
              data-bs-hover-animate="pulse"
              style="height: 6px;"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 65%;"
              >
                <span class="sr-only">65%</span>
              </div>
            </div>
            <h3>Java</h3>
            <div
              class="progress mb-3"
              data-bs-hover-animate="pulse"
              style="height: 6px;"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 45%;"
              >
                <span class="sr-only">45%</span>
              </div>
            </div>
            <h2>Others</h2>
            <h3>Leading Scrum projects</h3>
            <div
              class="progress mb-3"
              data-bs-hover-animate="pulse"
              style="height: 6px;"
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 70%;"
              >
                <span class="sr-only">70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import $ from "jquery";
// import PersonIcon from "vue-ionicons/dist/ios-person";
// import AtIcon from "vue-ionicons/dist/ios-at";
import Contact from "./CV/Contact";
import Hobbies from "./CV/Hobbies";

$("#BiblIrimas").on("shown.bs.modal", function() {
  $(this)
    .find("iframe")
    .attr("src", "https://biblirimas.herokuapp.com/");
});
$("#Credo-CEP").on("shown.bs.modal", function() {
  $(this)
    .find("iframe")
    .attr("src", "https://credo-cep.herokuapp.com/");
});

export default {
  name: "CV",
  components: {
    Hobbies,
    Contact
    // PersonIcon,
    // AtIcon
  }
};
</script>

<style scoped/>
