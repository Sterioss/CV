<template>
  <div class="work-experience group">
    <div class="heading">
      <h2 class="text-center">PROJECTS Experience</h2>
    </div>
    <div v-for="project in projects" :key="project.id" class="item">
      <ProjectModal />
      <Project :name="project.name" />
      <ProjectDescription :description="project.description" />
    </div>
    <!--    <div class="item">-->
    <!--      <div class="modal" id="Credo-CEP" tabindex="-1" role="dialog">-->
    <!--        <div class="modal-frame modal-dialog" role="document">-->
    <!--          <div class="modal-content h-100">-->
    <!--            <div class="modal-header">-->
    <!--              <h5 class="modal-title">Credo-CEP</h5>-->
    <!--              <button-->
    <!--                type="button"-->
    <!--                class="close"-->
    <!--                data-dismiss="modal"-->
    <!--                aria-label="Close"-->
    <!--              >-->
    <!--                <span aria-hidden="true">&times;</span>-->
    <!--              </button>-->
    <!--            </div>-->
    <!--            <div class="modal-body">-->
    <!--              <iframe-->
    <!--                name="Framename"-->
    <!--                src="about:blank"-->
    <!--                width="100%"-->
    <!--                height="100%"-->
    <!--                frameborder="0"-->
    <!--                scrolling="auto"-->
    <!--                class="frame-area"-->
    <!--              >-->
    <!--              </iframe>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="row">-->
    <!--        <div class="col-6">-->
    <!--          <a-->
    <!--            href="#Credo-CEP"-->
    <!--            data-placement="top"-->
    <!--            data-toggle="tooltip"-->
    <!--            title="Click to display on Heroku !"-->
    <!--            ><span-->
    <!--              class="modal-icon"-->
    <!--              data-target="#Credo-CEP"-->
    <!--              data-toggle="modal"-->
    <!--              ><img class="img-icon" src="heroku-logo-stroke-purple.svg" />-->
    <!--              <h3>-->
    <!--                Credo-CEP-->
    <!--              </h3></span-->
    <!--            ></a-->
    <!--          >-->
    <!--          <h4 class="organization">PHP - Symfony 4.2</h4>-->
    <!--          <h4 class="organization">Leader</h4>-->
    <!--        </div>-->
    <!--        <div class="col-md-6">-->
    <!--          <span class="period">01/2019 - 02/2019</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <p class="text-muted">-->
    <!--        Another university was in need of our help for a project. Cresat needed-->
    <!--        3 solutions fiting their needs.<br />The first one 'CEP' is meant to get-->
    <!--        witness reports on French Polynesia nuclear weapons testing conducted by-->
    <!--        the government of France.<br />Articles were published as well with-->
    <!--        pagination and filters.<br />-->
    <!--      </p>-->
    <!--    </div>-->
    <!--    <div class="item">-->
    <!--      <div class="modal" id="Credo-Inond" tabindex="-1" role="dialog">-->
    <!--        <div class="modal-frame modal-dialog" role="document">-->
    <!--          <div class="modal-content h-100">-->
    <!--            <div class="modal-header">-->
    <!--              <h5 class="modal-title">Credo-Inond</h5>-->
    <!--              <button-->
    <!--                type="button"-->
    <!--                class="close"-->
    <!--                data-dismiss="modal"-->
    <!--                aria-label="Close"-->
    <!--              >-->
    <!--                <span aria-hidden="true">&times;</span>-->
    <!--              </button>-->
    <!--            </div>-->
    <!--            <div class="modal-body">-->
    <!--              <iframe-->
    <!--                name="Framename"-->
    <!--                src="framepage.htm"-->
    <!--                width="100%"-->
    <!--                height="100%"-->
    <!--                frameborder="0"-->
    <!--                scrolling="auto"-->
    <!--                class="frame-area"-->
    <!--              >-->
    <!--              </iframe>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="row">-->
    <!--        <div class="col-md-6">-->
    <!--          <a-->
    <!--            href="#Credo-Inond"-->
    <!--            data-placement="top"-->
    <!--            data-toggle="tooltip"-->
    <!--            title="Click to display on Heroku !"-->
    <!--            ><span-->
    <!--              class="modal-icon"-->
    <!--              data-target="#Credo-Inond"-->
    <!--              data-toggle="modal"-->
    <!--              ><img class="img-icon" src="heroku-logo-stroke-purple.svg" />-->
    <!--              <h3>-->
    <!--                Credo-Inond-->
    <!--              </h3></span-->
    <!--            ></a-->
    <!--          >-->
    <!--          <h4 class="organization">-->
    <!--            PHP - Symfony 4.3 - Api-Platform - Angular 7-->
    <!--          </h4>-->
    <!--          <h4 class="organization">Leader</h4>-->
    <!--        </div>-->
    <!--        <div class="col-md-6">-->
    <!--          <span class="period">04/2019 - 05/2019</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <p class="text-muted">-->

    <!--      </p>-->
    <!--    </div>-->
    <!--    <div class="item">-->
    <!--      <div class="modal" id="bons-cadeaux" tabindex="-1" role="dialog">-->
    <!--        <div class="modal-frame modal-dialog" role="document">-->
    <!--          <div class="modal-content h-100">-->
    <!--            <div class="modal-header">-->
    <!--              <h5 class="modal-title">Bons-cadeaux</h5>-->
    <!--              <button-->
    <!--                type="button"-->
    <!--                class="close"-->
    <!--                data-dismiss="modal"-->
    <!--                aria-label="Close"-->
    <!--              >-->
    <!--                <span aria-hidden="true">&times;</span>-->
    <!--              </button>-->
    <!--            </div>-->
    <!--            <div class="modal-body">-->
    <!--              <iframe-->
    <!--                name="Framename"-->
    <!--                src="framepage.htm"-->
    <!--                width="100%"-->
    <!--                height="100%"-->
    <!--                frameborder="0"-->
    <!--                scrolling="auto"-->
    <!--                class="frame-area"-->
    <!--              >-->
    <!--              </iframe>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="row">-->
    <!--        <div class="col-md-6">-->
    <!--          <a-->
    <!--            href="#bons-cadeaux"-->
    <!--            data-placement="top"-->
    <!--            data-toggle="tooltip"-->
    <!--            title="Click to display on Heroku !"-->
    <!--            ><span-->
    <!--              class="modal-icon"-->
    <!--              data-target="#bons-cadeaux"-->
    <!--              data-toggle="modal"-->
    <!--              ><img class="img-icon" src="heroku-logo-stroke-purple.svg" />-->
    <!--              <h3>-->
    <!--                Bons-Cadeaux-->
    <!--              </h3></span-->
    <!--            ></a-->
    <!--          >-->
    <!--          <h4 class="organization">-->
    <!--            PHP - Symfony 4.3 - Api-Platform - React Material-->
    <!--          </h4>-->
    <!--          <h4 class="organization">Leader</h4>-->
    <!--        </div>-->
    <!--        <div class="col-md-6">-->
    <!--          <span class="period">06/2019 - 07/2019</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <p class="text-muted">-->

    <!--        gift cards.<br /><br />-->
    <!--      </p>-->
    <!--    </div>-->
  </div>
</template>

<script>
import ProjectModal from "./ProjectModal";
import Project from "./Project";
import ProjectDescription from "./ProjectDescription";
export default {
  name: "Projects",
  components: { ProjectDescription, Project, ProjectModal },
  data: function() {
    return {
      projects: [
        {
          id: 1,
          name: "BiblIrimas",
          description:
            "The Irimas laboratory was in need for a solution to annualy merge every\n" +
            "    publications into a single document.<br />We developed as a team of 5 person\n" +
            "    a php application which could answer the client's need.<br />It required\n" +
            "    file upload of .bib (LaTex) format, which would be processed into a MySQL DB\n" +
            "    for later use.<br />An administration was put in place to manage users and\n" +
            "    stored data. All recent approved imports were shown at our application's\n" +
            "    home page."
        },
        {
          id: 2,
          name: "Credo-CEP",
          description:
            "Another university was in need of our help for a project. Cresat needed\n" +
            "            3 solutions fiting their needs.<br />The first one 'CEP' is meant to get\n" +
            "            witness reports on French Polynesia nuclear weapons testing conducted by\n" +
            "            the government of France.<br />Articles were published as well with\n" +
            "            pagination and filters.<br />"
        },
        {
          id: 3,
          name: "Credo-Inond",
          description:
            " Following Credo-CEP, 'Inond' was another project coming from\n" +
            "            Cresat.&nbsp;<br />It's purpose is to get historical data about floods\n" +
            "            in Alsace during the last century.<br />A map using (ngx)Leaflet was\n" +
            "            required to show location of those events.<br />During the project we\n" +
            "            decided that a new structure for our applications was a good idea. It\n" +
            "            took us 2 weeks to change from Symfony 4 to a REST API + fronts\n" +
            "            application.<br />"
        },
        {
          id: 4,
          name: "Bons-cadeaux",
          description:
            "  Current project I'm leading again with a team of 4.<br />Our client\n" +
            "            brought us an idea about an application providing 'gift-card' to local\n" +
            "            merchants centralized in our system.<br />Clients could buy them\n" +
            "            directly from us and merchants could get subscription/packs to withdraw"
        }
      ]
    };
  }
};
</script>

<style scoped />
