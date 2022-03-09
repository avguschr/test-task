<template>
  <div :class="$style.content">
    <h1 class="mb-5">{{ data.title }}</h1>
    <img :class="$style.image" class="mb-3" :src="data.url" />
    <p>{{ data.explanation }}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "about-today",
  methods: {
    ...mapActions({ aboutToday: "home/aboutToday/aboutToday" }),
  },
  computed: {
    ...mapGetters({ data: "home/aboutToday/data" }),
  },
  created() {
    this.aboutToday();
  },
};
</script>
<style module>
.image {
  width: 100%;
}
</style>
