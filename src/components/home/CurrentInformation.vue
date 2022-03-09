<template>
  <div :class="$style.content">
    <p>
      Today's <span>{{ getDate }}</span>
    </p>
    <p>
      It's <span>{{ getTime }}</span> now
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";
export default {
  name: "current-inormation",
  props: ["date", "city"],
  computed: {
    ...mapGetters({
      weather: "home/getWeather/weather",
      coords: "home/getCoords/coords",
    }),
    getDate() {
      return format(this.date, "MMMM dd yyyy");
    },
    getTime() {
      return format(this.date, "H:mm:ss");
    },
  },
};
</script>
<style module>
.content p {
  margin: 0;
  font-size: 1.3rem;
}
.content span {
  color: #577095;
}
</style>
