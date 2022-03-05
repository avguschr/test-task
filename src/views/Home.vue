<template>
  <div :class="[date.getHours() < 18 ? $style.morning : $style.night]">
    <p :class="$style.red">{{ getDate }}</p>
    <p>{{ getTime }}</p>

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
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "home-page",
  data() {
    return {
      date: new Date(),
      city: "Tomsk",
    };
  },
  methods: {
    ...mapActions({getCoords: 'home/getCoords/getCoords'})
  },
  computed: {
    getDate() {
      return this.date.toISOString().split("T")[0];
    },
    getTime() {
      return this.date.toISOString().split("T")[1].split(".")[0];
    },
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
  background: darkblue;
}
</style>
