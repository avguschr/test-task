<template>
  <div class="container">
    <div v-if="Object.keys(photos).length" class="row row-cols-3">
      <div v-for="(photo, index) in photos.results" :key="index">
        <card
          class="col mb-5"
          :raw="photo.urls.raw"
          :id="photo.id"
          :url="photo.urls.small"
          :desc="photo.description"
          :author="photo.user.name"
        />
      </div>
    </div>
    <div v-else class="row d-flex justify-content-center">
      <div class="col-6">
        <img :src="photo.urls.small" alt="placeholder" />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-1 d-flex justify-content-between">
        <i
          class="fa-solid fa-circle-arrow-left pag"
          v-if="page > 1"
          @click.prevent="backward"
        ></i>
        <i
          v-if="page < photos.total_pages"
          @click.prevent="forward(photos.total_pages)"
          class="fa-solid fa-circle-arrow-right pag"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Card from "./Card";
export default {
  name: "collection-component",
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      photos: "gallery/search/photos",
      photo: "gallery/random/photo",
    }),
  },
  methods: {
    ...mapActions({
      random: "gallery/random/random",
      search: "gallery/search/search",
    }),
    forward(max) {
      if (this.page < max) {
        this.page = this.page + 1;
        this.search({ text: localStorage.getItem("search"), page: this.page });
      }
    },
    backward() {
      if (this.page > 1) {
        this.page = this.page - 1;
        this.search({ text: localStorage.getItem("search"), page: this.page });
      }
    },
  },
  async created() {
    await this.random();
  },
};
</script>
<style>
.pag {
  font-size: 2rem;
  cursor: pointer;
  transition: color linear 0.3s;
}
.pag:hover {
  color: #45455c;
}
</style>
