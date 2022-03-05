import getCoords from "./getCoords";

const home = () => ({
  namespaced: true,
  modules: {
    getCoords: getCoords(),
  },
});

export default home;
