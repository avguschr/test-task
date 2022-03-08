<template>
  <div
    :class="[
      $style.background,
      date.getHours() < 18 ? $style.morning : $style.night,
    ]"
  >
    <div class="container pt-5">
      <div
        :class="$style.content"
        class="row d-flex justify-content-between mb-2"
      >
        <div
          style="background: rgba(255, 255, 255, 0.8)"
          class="item col-5 card border-0 p-2 d-flex justify-content-center"
        >
          <p>Today's {{ getDate }}</p>
          <p>It's {{ getTime }} now</p>
        </div>
        <div
          style="background: rgba(255, 255, 255, 0.8)"
          class="col-6 card border-0 p-2"
        >
          <change-city />
        </div>
      </div>
      <div class="row">
        <div
          style="background: rgba(255, 255, 255, 0.8)"
          class="col-5 card border-0 p-2"
        >
          <weather />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { format } from "date-fns";
import Weather from "../components/home/Weather";
import ChangeCity from "../components/home/ChangeCity";
export default {
  name: "home-page",
  components: {
    Weather,
    ChangeCity,
  },
  data() {
    return {
      date: new Date(),
      coords: ''
    };
  },
  methods: {
    ...mapActions({ getWeather: "home/getWeather/getWeather" }),
  },
  computed: {
    getDate() {
      return format(this.date, "MMMM dd yyyy");
    },
    getTime() {
      return format(this.date, "H:mm:ss");
    },
    getCoordinates() {
      return this.coords;
    },
  },
  created() {
    this.getWeather(
        localStorage.coords
          ? JSON.parse(localStorage.coords)
          : { lon: 84.9523, lat: 56.4887 })
  },
};
</script>
<style module>
.morning {
  background: #b8d8e3;
}
.night {
  background: #45455c;
}

.background {
  height: 100vh;
}

.content {
  position: relative;
  z-index: 99;
}

</style>
