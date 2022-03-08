<template>
  <div v-if="weather">
    {{ weather.weather[0].icon }}
    {{ weather.weather[0].description }} <br />
    {{ weather.main.temp }}&deg; <br />
    Feels like {{ weather.main.feels_like }}&deg; <br />
    Wind speed {{ weather.wind.speed }} m/s <br />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "weather-component",
  computed: {
    ...mapGetters({ weather: "home/getWeather/weather" }),
  },
};
</script>
<style></style>
