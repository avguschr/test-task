<template>
  <div v-if="weather">
    <p>{{weather.name}}</p>
    <div class="row">
    <div class="col-4">
    <i :class="icons[weather.weather[0].icon]"></i>
    </div>
    <div class="col-6">
    <p>{{ weather.weather[0].description }}</p>
    <p>{{ weather.main.temp }}&deg;</p>
    <p>Feels like {{ weather.main.feels_like }}&deg;</p>
    </div>
    </div>
    <i class="fa-solid fa-smoke"></i>
    <p>Wind speed {{ weather.wind.speed }} m/s</p>
  </div>
</template>
<script>

export default {
  name: "weather-component",
  props: ['weather', ],
  data() {
    return {
      icons: {
        '01d': 'fa-solid fa-sun morning',
        '01n': 'fa-solid fa-moon morning',
        '02d': 'fa-solid fa-cloud-sun',
        '02n': 'fa-solid fa-moon-cloud',
        '03d': 'fa-solid fa-cloud',
        '03n': 'fa-solid fa-cloud',
        '04d': 'fa-solid fa-cloud',
        '04n': 'fa-solid fa-cloud',
        '09d': 'fa-solid fa-cloud-drizzle',
        '09n': 'fa-solid fa-cloud-drizzle',
        '10d': 'fa-solid fa-cloud-showers-heavy',
        '10n': 'fa-solid fa-cloud-showers-heavy',
        '11d': 'fa-solid fa-cloud-bolt',
        '11n': 'fa-solid fa-cloud-bolt',
        '13d': 'fa-solid fa-snowflake',
        '13n': 'fa-solid fa-snowflake',
        '50d': 'fa-solid fa-cloud-fog',
        '50n': 'fa-solid fa-cloud-fog'
      }
    }
  },
  methods: {
    insertIcon() {
      // switch (this.weather.weather[0].icon) {
      //   case '01d':
      //     this.icon = 'circle-fill.svg'
      //     break
      //   case '01n':
      //     this.icon = 'circle-fill.svg'
      //     break
      //   case '02d':
      //     this.icon = 'cloud.svg'
      //     break
      //   case '02n':
      //     this.icon = 'cloud.svg'
      //     break
      //   case '03d':
      //     this.icon = 'clouds.svg'
      //   case '03n':
      //     this.icon = 'clouds.svg'
      //   case '04d':
      //     this.icon = 'clouds-fill.svg'
      //   case '05d':
      //     this.icon = 'cloud-drizzle.svg'
      //   case '06d':
      //     this.icon = 'cloud-rain-heavy.svg'
      //   case '07d':
      //     this.icon = ''
      }
    }
  }

</script>
<style module>
  .icon {
    width: 150px;
  }
  i {
    font-size: 100px;
    color: #45455c;
  }

</style>
