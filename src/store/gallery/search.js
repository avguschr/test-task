import axios from "axios"

const search = () => ({
  namespaced: true,
  state: {
    result: {}
  },
  actions: {
    async search(context, text) {
      const headers = { "Content-Type": "application/json" };
      await axios({
        method: "get",
        headers,
        url: `https://api.unsplash.com/search/photos?query=${text}&client_id=pxE-MVqupeYHZcUI9Sri7m-Q2LNKSmfrsE21KarirtA`,
      })
        .then((result) => {
          this.result = result.data.results
        })
        .catch((e) => console.log(e));
      context.commit("search", this.result);
    }
  },
  mutations: {
    search(state, data) {
      state.result = data
    }
  },
  getters: {
    photos: state => state.result
  }
})

export default search