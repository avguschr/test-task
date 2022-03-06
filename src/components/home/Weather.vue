<template>
    <div>
        <p>Температура</p>
        <p>Описание</p>
        {{weather}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'weather-component',
    methods: {
        ...mapGetters({
            weather: 'home/getWeather/weather'
        })
    }
}
</script>
<style>
    
</style>