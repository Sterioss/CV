<template>
  <div class="work-experience group">
    <div class="heading">
      <h2 class="text-center">PROJECTS Experience</h2>
    </div>
    <div v-for="project in projects" :key="project.id" class="item">
      <ProjectModal />
      <Project
        :name="project.name"
        :tags="project.tags"
        :interval="project.interval"
      />
      <ProjectDescription :description="project.description" />
    </div>
  </div>
</template>

<script>
import ProjectModal from "./ProjectModal";
import Project from "./Project";
import ProjectDescription from "./ProjectDescription";
export default {
  name: "Projects",
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
            "    home page.",
          tags: [
            { id: 1, text: "PHP - Symfony 4.2" },
            { id: 2, text: "Leader" }
          ],
          interval: {
            start: "11/2018",
            end: "01/2019"
          }
        },
        {
          id: 2,
          name: "Credo-CEP",
          description:
            "Another university was in need of our help for a project. Cresat needed\n" +
            "            3 solutions fiting their needs.<br />The first one 'CEP' is meant to get\n" +
            "            witness reports on French Polynesia nuclear weapons testing conducted by\n" +
            "            the government of France.<br />Articles were published as well with\n" +
            "            pagination and filters.<br />",
          tags: [
            { id: 1, text: "PHP - Symfony 4.2" },
            { id: 2, text: "Leader" }
          ],
          interval: {
            start: "01/2019",
            end: "02/2019"
          }
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
            "            application.<br />",
          tags: [
            { id: 1, text: "PHP - Symfony 4.3 - Api-Platform - Angular 7" },
            { id: 2, text: "Leader" }
          ],
          interval: {
            start: "04/2019",
            end: "05/2019"
          }
        },
        {
          id: 4,
          name: "Bons-cadeaux",
          description:
            "  Current project I'm leading again with a team of 4.<br />Our client\n" +
            "            brought us an idea about an application providing 'gift-card' to local\n" +
            "            merchants centralized in our system.<br />Clients could buy them\n" +
            "            directly from us and merchants could get subscription/packs to withdraw",
          tags: [
            {
              id: 1,
              text: "PHP - Symfony 4.3 - Api-Platform - React Material"
            },
            { id: 2, text: "Leader" }
          ],
          interval: {
            start: "06/2019",
            end: "07/2019"
          }
        }
      ]
    };
  },
  components: { ProjectDescription, Project, ProjectModal }
};
</script>

<style scoped />
