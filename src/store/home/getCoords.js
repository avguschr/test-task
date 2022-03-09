import axios from "axios";

const getCoords = () => ({
  namespaced: true,
  state: {
    coords: {},
    error: ''
  },
  actions: {
    async getCoords(context, city) {
      const headers = { "Content-Type": "application/json" };
      await axios({
        method: "get",
        headers,
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=305bc8eb077a1be825aaed58269d86cf`,
      })
        .then((result) => {
          this.coords = {
            lat: result.data[0].lat,
            lon: result.data[0].lon,
          };
        })
        .catch((e) => console.log(e));
      context.commit("saveCoords", this.coords);
    },
  },
  mutations: {
    saveCoords(state, data) {
      state.coords = data;
      if (state.coords) {
        localStorage.setItem("coords", JSON.stringify(data))
        state.error = ""
      } else {
        state.error = 'You entered the name of the city incorrectly!'
      }
      //   console.log(JSON.parse(localStorage.getItem('coords')).lat)
    },
  },
  getters: {
    coords: (state) => state.coords,
    error: (state) => state.error
  },
});

export default getCoords;
