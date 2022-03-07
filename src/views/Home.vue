<template>
  <div :class="[$style.background, date.getHours() < 18 ? $style.morning : $style.night]">
    <div class="container">
    <p :class="$style.red">{{ getDate }}</p>
    <p>{{ getTime }}</p>
    <change-city />
    <weather />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Weather from '../components/home/Weather'
import ChangeCity from '../components/home/ChangeCity'
export default {
  name: "home-page",
  components: {
    Weather, ChangeCity
  },
  data() {
    return {
      date: new Date(),
      coords: JSON.parse(localStorage.getItem('coords'))
    };
  },
  methods: {
    ...mapActions({getCoords: 'home/getCoords/getCoords', getWeather: 'home/getWeather/getWeather'}),
  },
  computed: {
    getDate() {
      return this.date.toISOString().split("T")[0];
    },
    getTime() {
      return this.date.toISOString().split("T")[1].split(".")[0];
    },
    getCoordinates() {
      return this.coords
    }
  },
  created() {
    this.getWeather(localStorage.coords ? (JSON.parse(localStorage.coords)) : { "lon": 84.9523, "lat": 56.4887 })
  }
};
</script>
<style module>
.red {
  color: red;
}
.morning {
  background: yellow;
}
.night {
  background: blue;
}
.background {
  height: 100vh;
}
</style>
