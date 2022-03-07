<template>
    <div v-if="weather">
        {{weather}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'weather-component',
    computed: {
        ...mapGetters({weather: 'home/getWeather/weather'}),
    }
}
</script>
<style>
    
</style>