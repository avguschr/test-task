<template>
  <div :class="$style.content">
    <a :class="$style.photoLink" data-bs-toggle="modal" :href="'#' + id">
      <p>Open photo</p>
      <img :class="$style.preview" :src="url" class="mb-3" />
    </a>
    <h2 v-if="desc">{{ desc.split(".")[0] }}</h2>
    <p><span>Author:</span> {{ author }}</p>
    <modal :photo="raw" :id="id" />
  </div>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  props: ["url", "desc", "author", "id", "raw"],
  name: "card-component",
  components: {
    Modal,
  },
};
</script>
<style module>
.content span {
  font-family: quicksand;
  font-weight: bold;
}
.photoLink {
  position: relative;
}

.photoLink p {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  opacity: 0;
  color: #fff;
  font-size: 1.5rem;
}
.photoLink:hover p {
  animation: text linear 1s;
  opacity: 1;
}
.preview {
  max-height: 20rem;
  object-fit: cover;
}

@keyframes text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
