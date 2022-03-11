import axios from "axios";

const getPhoto = () => ({
  namespaced: true,
  state: {
    result: {},
  },
  actions: {
    async getPhoto(context, id) {
      const headers = { "Content-Type": "application/json" };
      await axios({
        method: "get",
        headers,
        url: `https://api.unsplash.com/photos/${id}/?client_id=pxE-MVqupeYHZcUI9Sri7m-Q2LNKSmfrsE21KarirtA`,
      })
        .then((result) => {
          this.result = result;
        })
        .catch((e) => console.log(e));
      context.commit("getPhoto", this.result);
    },
  },
  mutations: {
    getPhoto(state, data) {
      state.result = data;
    },
  },
  getters: {
    photo: (state) => state.result,
  },
});

export default getPhoto;
