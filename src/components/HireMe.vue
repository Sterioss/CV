<template>
  <section id="hire-me" class="portfolio-block hire-me">
    <div class="container">
      <div class="heading"><h2>Hire Me</h2></div>
      <form id="hire-form" method="post" action="">
        <div class="form-group">
          <label for="email">Email</label
          ><input class="form-control" type="email" id="email" name="email" />
        </div>

        <div class="form-group">
          <label for="message">Message</label
          ><textarea class="form-control" id="message" name="message" />
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-md-6 offset-xl-3 button">
              <button class="btn btn-primary btn-block" type="submit">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "HireMe"
};
</script>

<style scoped></style>
