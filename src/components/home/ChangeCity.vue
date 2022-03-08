<template>
  <div>
    <form method="get">
      <div class="form-group">
        <label class="mb-3" for="exampleFormControlInput1">Change city</label>
        <input v-model="city" type="text" class="form-control mb-3" id="city" />
      </div>
      <button class="btn" @click.prevent="getCoords(city)">Выбрать</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "change-city",
  data() {
    return {
      city: "",
    };
  },
  methods: {
    ...mapActions({ getCoords: "home/getCoords/getCoords" }),
  },
};
</script>
<style></style>
