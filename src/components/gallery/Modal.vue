<template>
  <div>
    <div
      class="modal fade"
      :id="id"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img :src="photo" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-component",
  props: ["photo", "id"],
};
</script>
<style></style>
