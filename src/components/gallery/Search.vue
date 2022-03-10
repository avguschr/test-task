<template>
  <div class="d-flex justify-content-center">
    <form class="mb-3 d-flex flex-column align-items-center" method="get">
      <div class="form-group">
        <label class="mb-3" for="search">Search photos</label>
        <input
          @keypress.enter="searchPhotos"
          v-model="text"
          type="text"
          class="form-control mb-3"
          id="search"
          placeholder="Search..."
        />
      </div>
      <button class="btn btn-primary" @click.prevent="searchPhotos">
        Search
      </button>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'search-component',
  data () {
    return ({
      text: '',
      page: 1
    })
  },
  methods: {
    ...mapActions({search: 'gallery/search/search'}),
    searchPhotos() {
      if (this.text) {
        this.search(this.text)
        this.text = ''
      }
    }
  }
}
</script>
<style>
  
</style>