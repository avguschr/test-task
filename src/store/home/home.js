import aboutToday from "./aboutToday";
import getCoords from "./getCoords";
import getWeather from "./getWeather";

const home = () => ({
  namespaced: true,
  modules: {
    getCoords: getCoords(),
    getWeather: getWeather(),
    aboutToday: aboutToday(),
  },
});

export default home;
