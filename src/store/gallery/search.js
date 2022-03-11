import axios from "axios"

const search = () => ({
  namespaced: true,
  state: {
    result: {},
    error: ''
  },
  actions: {
    async search(context, object) {
      const headers = { "Content-Type": "application/json" };
      await axios({
        method: "get",
        headers,
        url: `https://api.unsplash.com/search/photos?page=${object.page}&query=${object.text}&client_id=pxE-MVqupeYHZcUI9Sri7m-Q2LNKSmfrsE21KarirtA`,
      })
        .then((result) => {
          this.result = result.data
        })
        .catch((e) => console.log(e));
        localStorage.setItem('search', object.text)
      context.commit("search", this.result);
    }
  },
  mutations: {
    search(state, data) {
      state.result = data
      if (state.result.results.length) {
        state.error = ''
      } else {
        state.error = 'Nothing was found :('
        localStorage.removeItem('search')
      }
    }
  },
  getters: {
    photos: state => state.result,
    error: state => state.error
  }
})

export default search