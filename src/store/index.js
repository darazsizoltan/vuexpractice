import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    joke: "kiskutya"
  },
  mutations: {
    setCategories (categories) {
      this.state.categories = categories;
    },
    setJoke (joke) {
      this.state.joke = joke;
    }
  },
  actions: {
    loadCategories ({commit}) {
      axios.get('https://sv443.net/jokeapi/v2/categories')
          .then(res => {
            let categories = res.data.categories
            commit(categories)
          })
          .catch(err => console.log(err))
    }
  },
  modules: {
  },
  getters: {
    getCategories: state => {
      return state.categories;
    },
    getJoke: state => {
      return state.joke
    }
  }
})
