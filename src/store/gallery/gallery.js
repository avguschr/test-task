import random from './random'
import search from './search'

const gallery = () => ({
  namespaced: true,
  modules: {
    search: search(),
    random: random(),
  },
})

export default gallery