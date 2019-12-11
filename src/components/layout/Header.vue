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
          <li class="nav-item" role="presentation">
            <a class="nav-link active" href="#home">Home</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#cv">CV</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#hire-me">Hire me</a>
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
        { id: 1, name: "", link: "" },
        { id: 2, name: "", link: "" },
        { id: 3, name: "", link: "" }
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
