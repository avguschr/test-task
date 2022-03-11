<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
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
    <div v-if="error" class="alert alert-danger col-6" role="alert">
      {{error}}
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'search-component',
  data () {
    return ({
      text: '',
    })
  },
  computed: {
    ...mapGetters({error: 'gallery/search/error', photo: 'gallery/random/photo'})
  },
  methods: {
    ...mapActions({search: 'gallery/search/search'}),
    searchPhotos() {
      if (this.text) {
        this.search({text: this.text, page: 1})
        this.text = ''
      }
    }
  }
}
</script>
<style>
  
</style>