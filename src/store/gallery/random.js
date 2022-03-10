import axios from "axios"

const random = () => ({
  namespaced: true,
  state: {
    result: {}
  },
  actions: {
    async random(context) {
      const headers = { "Content-Type": "application/json" };
      await axios({
        method: "get",
        headers,
        url: `https://api.unsplash.com/photos/random/?client_id=pxE-MVqupeYHZcUI9Sri7m-Q2LNKSmfrsE21KarirtA`,
      })
        .then((result) => {
          this.result = result.data
        })
        .catch((e) => console.log(e));
      context.commit("random", this.result);
    }
  },
  mutations: {
    random(state, data) {
      state.result = data
    }
  },
  getters: {
    photo: state => state.result
  }
})

export default random