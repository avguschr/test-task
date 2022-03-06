import getCoords from "./getCoords";
import getWeather from "./getWeather";

const home = () => ({
  namespaced: true,
  modules: {
    getCoords: getCoords(),
    getWeather: getWeather()
  },
});

export default home;
