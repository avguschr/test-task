<template>
  <div class="container">
  <div v-if="Object.keys(photos).length" class="row row-cols-3">
    <div v-for="(photo, index) in photos" :key="index">
      <card class="col mb-5" :url=photo.urls.raw :desc=photo.description :author=photo.user.name />
    </div>
    </div>
  <div v-else class="row d-flex justify-content-center">
    <div class="col-6">
      <img :src="photo.urls.raw" alt="placeholder" />
    </div>
  </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import Card from './Card'
export default {
  name: 'collection-component',
  components: {
    Card
  },
  computed: {
    ...mapGetters({photos: 'gallery/search/photos', photo: 'gallery/random/photo'})
  },
  methods: {
    ...mapActions({random: 'gallery/random/random'})
  },
  created() {
    this.random()
  }
}
</script>
<style>
  img {
    width: 100%;
  }
</style>