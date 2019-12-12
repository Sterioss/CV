<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg
    fixed-top bg-white portfolio-navbar gradient"
  >
    <div class="container">
      <button
        data-toggle="collapse"
        class="navbar-toggler"
        data-target="#navbarNav"
      >
        <span class="sr-only">Toggle navigation </span>
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav ml-auto">
          <li
            class="nav-item"
            role="presentation"
            v-for="nav_item in nav_items"
            :key="nav_item.id"
          >
            <a
              class="nav-link active"
              href="#"
              v-scroll-to="{ el: nav_item.link }"
              >{{ nav_item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      nav_items: [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "CV", link: "#cv" },
        { id: 3, name: "Hire me", link: "#hire-me" }
      ]
    };
  }
};
</script>

<style scoped>
.portfolio-navbar.navbar {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.gradient {
  background: linear-gradient(120deg, #7f70f5, #0ea0ff);
  color: #fff;
}
</style>
