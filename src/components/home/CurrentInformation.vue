<template>
    <div>
        <p>Today's {{ getDate }}</p>
        <p>It's {{ getTime }} now</p>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import { format } from "date-fns";
export default {
    name: 'current-inormation',
    props: ['date', 'city'],
    computed: {
    ...mapGetters({ weather: "home/getWeather/weather", coords: "home/getCoords/coords" }),
    getDate() {
        return format(this.date, "MMMM dd yyyy");
    },
    getTime() {
        return format(this.date, "H:mm:ss");
    },
    }
}
</script>
<style>
    
</style>