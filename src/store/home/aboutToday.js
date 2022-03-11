import axios from "axios";

const aboutToday = () => ({
  namespaced: true,
  state: {
    data: {},
  },
  actions: {
    async aboutToday(context) {
      const headers = { "Content-Type": "application/json" };
      await axios({
        method: "get",
        headers,
        url: `https://api.nasa.gov/planetary/apod?api_key=NZnTHlgtL24FRhjxyZE4jVGkNXH40NjE7Jn7K9bU`,
      })
        .then((result) => {
          this.data = result.data;
        })
        .catch((e) => console.log(e));
      context.commit("aboutToday", this.data);
    },
  },
  mutations: {
    aboutToday(state, data) {
      state.data = data;
    },
  },
  getters: {
    data: (state) => state.data,
  },
});

export default aboutToday;
