<template>
  <div :class="$style.content" v-if="weather">
    <p :class="$style.name">{{ weather.name }}</p>
    <div class="row">
      <div class="col-4 d-flex align-items-center">
        <i :class="icons[weather.weather[0].icon]"></i>
      </div>
      <div
        class="col-6 d-flex flex-column justify-content-start justify-content-center"
      >
        <p>{{ weather.weather[0].description }}</p>
        <span>{{ weather.main.temp }}&deg;</span>
        <p>
          Feels like <span>{{ weather.main.feels_like }}&deg;</span>
        </p>
      </div>
    </div>
    <i class="fa-solid fa-smoke"></i>
    <p>Wind speed {{ weather.wind.speed }} m/s</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "weather-component",
  data() {
    return {
      icons: {
        "01d": "fa-solid fa-sun morning",
        "01n": "fa-solid fa-moon morning",
        "02d": "fa-solid fa-cloud-sun",
        "02n": "fa-solid fa-moon-cloud",
        "03d": "fa-solid fa-cloud",
        "03n": "fa-solid fa-cloud",
        "04d": "fa-solid fa-cloud",
        "04n": "fa-solid fa-cloud",
        "09d": "fa-solid fa-cloud-drizzle",
        "09n": "fa-solid fa-cloud-drizzle",
        "10d": "fa-solid fa-cloud-showers-heavy",
        "10n": "fa-solid fa-cloud-showers-heavy",
        "11d": "fa-solid fa-cloud-bolt",
        "11n": "fa-solid fa-cloud-bolt",
        "13d": "fa-solid fa-snowflake",
        "13n": "fa-solid fa-snowflake",
        "50d": "fa-solid fa-cloud-fog",
        "50n": "fa-solid fa-cloud-fog",
      },
    };
  },
  computed: {
    ...mapGetters({ weather: "home/getWeather/weather" })
  },

};
</script>
<style module>
.content i {
  font-size: 7rem;
  color: #577095;
}
.content p {
  font-size: 1.3rem;
  margin: 0;
}

.content .name,
.content span {
  color: #577095;
  font-size: 2rem;
}
</style>
