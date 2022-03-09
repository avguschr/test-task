<template>
  <div>
    <form method="get">
      <div class="form-group">
        <label class="mb-3" for="exampleFormControlInput1">Change city</label>
        <input v-model="city" type="text" class="form-control mb-3" id="city" />
      </div>
      <button class="btn btn-primary" @click.prevent="getCoordinates">Select</button>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "change-city",
  data() {
    return {
      city: "",
    };
  },
  methods: {
    ...mapActions({ getCoords: "home/getCoords/getCoords", getWeather: "home/getWeather/getWeather" }),
    async getCoordinates() {
      if (this.city !== '') {
        await this.getCoords(this.city)
        await this.getWeather(this.coords)
      }
      this.city = ''
    }
  },
  computed: {
    ...mapGetters({coords: "home/getCoords/coords"})
  }
};
</script>
<style>
</style>
