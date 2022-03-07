import axios from 'axios'

const getWeather = () => ({
    namespaced: true,
    state: {
        weather: {}
    },
    actions: {
        async getWeather(context, coords) {
            const headers = { "Content-Type": "application/json" }
            await axios({
                method: 'get',
                headers,
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=305bc8eb077a1be825aaed58269d86cf&units=metric&lang=ru`
            })
            .then(result => {
                this.weather = result.data
                // console.log(result.data)
            })
            .catch(e => console.log(e))
            context.commit('getWeather', this.weather)
        }
    },
    mutations: {
        getWeather(state, data) {
            state.weather = data
            console.log(this.weather)
        }
    },
    getters: {
        weather(state) {
            return state.weather
        }
    }
})

export default getWeather