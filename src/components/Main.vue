<template>
  <main class="page lanidng-page">
    <section id="home" class="portfolio-block block-intro">
      <div class="container">
        <div
          class="avatar"
          style="background-image: url('https://i.imgur.com/YA40gTI.jpg');height: 175px;width: 175px;"
        ></div>
        <div class="about-me">
          <p>
            Hello! I am <strong>Thomas Tosch</strong>. I am studying web and
            software development. I have passion for my line of work.
          </p>
          <a class="btn btn-outline-primary" role="button" href="#hire-me"
            >Hire me</a
          >
        </div>
      </div>
    </section>
    <section class="portfolio-block skills">
      <div class="container">
        <div class="heading"><h2>Special Skills</h2></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card special-skill-item border-0">
              <div class="card-header bg-transparent border-0">
                <i class="icon ion-ios-star-outline"></i>
              </div>
              <div class="card-body">
                <h3 class="card-title">Project Management</h3>
                <p class="card-text">
                  Through my experience on school projects, I've been
                  experiencing and leading SCRUM teams. Making me a good
                  decisions maker and able to lead teams of 4-7 people.<br />Daily
                  meetings, Spring plannings, reviews, retrospectives...<br />
                  I'm also experienced in documenting the whole process.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card special-skill-item border-0">
              <div class="card-header bg-transparent border-0">
                <i class="icon ion-ios-lightbulb-outline"></i>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Deployment and Integration
                </h3>
                <p class="card-text">
                  I'm learning new technologies as they come : Docker and
                  Kubernetes..<br />
                  CI/CD with Travis or Gitlab..
                  <br />
                  I experienced those technologies in projects.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card special-skill-item border-0">
              <div class="card-header bg-transparent border-0">
                <i class="icon ion-ios-gear-outline"></i>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Constantly learning
                </h3>
                <p class="card-text">
                  So far I know PHP, Symfony, API-Platform very well as I did 4
                  projects using those technologies.<br />
                  I developed REST API with Angular / React fronts as well
                  meaning I can do well in HTML/CSS/JS/TS/JSX environments.
                  <br />I've done few Python projects as well. <br />I'm trying
                  to keep up with current technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style scoped></style>
