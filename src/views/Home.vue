<template>
  <div :class="[$style.background, date.getHours() < 18 ? $style.morning : $style.night]">
    <div class="container">
          <p :class="$style.red">{{ getDate }}</p>
    <p>{{ getTime }}</p>
    <p>{{weather}}</p>
    <weather />
    <form method="get">
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          v-model="city"
          type="text"
          class="form-control"
          id="city"
        />
      </div>
      <button class="btn btn-warning" @click.prevent="getCoords(city)">Выбрать</button>
      <button @click.prevent="getWeather(getCoordinates)">fghghf</button>
    </form>  
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Weather from '../components/home/Weather'
export default {
  name: "home-page",
  components: {
    Weather
  },
  data() {
    return {
      date: new Date(),
      city: "Tomsk",
      coords: JSON.parse(localStorage.getItem('coords'))
    };
  },
  methods: {
    ...mapActions({getCoords: 'home/getCoords/getCoords', getWeather: 'home/getWeather/getWeather'}),
    ...mapGetters({weather: 'home/getCoords/weather'})
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
