<template>
  <div class="modal" id="BiblIrimas" tabindex="-1" role="dialog">
    <div class="modal-frame modal-dialog" role="document">
      <div class="modal-content h-100">
        <div class="modal-header">
          <h5 class="modal-title">BiblIrimas</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <iframe
            name="Framename"
            src="about:blank"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="auto"
            class="frame-area"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal"
};
</script>

<style scoped></style>
