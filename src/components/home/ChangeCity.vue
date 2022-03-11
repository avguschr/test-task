<template>
  <div>
    <form class="mb-3" method="get">
      <div class="form-group">
        <label class="mb-3" for="city">Change city</label>
        <input
          @keypress.enter="getCoordinates"
          v-model="city"
          type="text"
          class="form-control mb-3"
          id="city"
          placeholder="Write a city name"
        />
      </div>
      <button class="btn btn-primary" @click.prevent="getCoordinates">
        Select
      </button>
    </form>
    <div v-if="error" class="alert alert-danger" role="alert">
    {{error}}
    </div>
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
    ...mapActions({
      getCoords: "home/getCoords/getCoords",
      getWeather: "home/getWeather/getWeather",
    }),
    async getCoordinates() {
      if (this.city !== "") {
        await this.getCoords(this.city);
        if (this.coords) {
          await this.getWeather(this.coords);
        }
      }
      this.city = "";
    },
  },
  computed: {
    ...mapGetters({ coords: "home/getCoords/coords", error: "home/getCoords/error" }),
  },
};
</script>
<style>
.btn {
  font-family: quicksand;
}
</style>
