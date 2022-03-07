<template>
  <div>
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
</template>
<script>
export default {
  name: 'change-city',
  data() {
    return {
      city: ''
    }
  }
}
</script>
<style>
  
</style>