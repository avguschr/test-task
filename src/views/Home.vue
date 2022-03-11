<template>
  <div
    :class="[$style.background, isMorning() ? $style.morning : $style.night]"
  >
    <div class="container pt-5 pb-5">
      <div
        :class="$style.content"
        class="row d-flex justify-content-between mb-2"
      >
        <div class="col-5 d-flex flex-column justify-content-between">
          <div>
            <div
              style="background: rgba(255, 255, 255, 0.8)"
              class="card border-0 p-4 mb-3"
            >
              <change-city />
            </div>
            <div
              style="background: rgba(255, 255, 255, 0.8)"
              class="mb-3 card border-0 p-4 d-flex justify-content-center"
            >
              <current-information :date="date" />
            </div>
            <div
              style="background: rgba(255, 255, 255, 0.8)"
              class="card border-0 p-4 mb-3"
            >
              <weather />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <img
              v-if="isMorning()"
              src="../../public/assets/images/morning.svg"
              alt="morning"
            />
            <img
              v-else
              src="../../public/assets/images/night.svg"
              alt="night"
            />
          </div>
        </div>
        <div class="col-6">
          <div
            style="background: rgba(255, 255, 255, 0.8)"
            class="card border-0 p-4"
          >
            <about-today />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Weather from "../components/home/Weather";
import ChangeCity from "../components/home/ChangeCity";
import CurrentInformation from "../components/home/CurrentInformation";
import AboutToday from "../components/home/AboutToday";
export default {
  name: "home-page",
  components: {
    Weather,
    ChangeCity,
    CurrentInformation,
    AboutToday,
  },
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    ...mapActions({ getWeather: "home/getWeather/getWeather" }),
    isMorning() {
      return this.date.getHours() < 18 && this.date.getHours() > 5;
    },
  },
  created() {
    this.getWeather(
      localStorage.coords
        ? JSON.parse(localStorage.coords)
        : { lon: 84.9523, lat: 56.4887 }
    );
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

.content {
  position: relative;
  z-index: 99;
}

img {
  width: 100%;
}
</style>
