import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    joke: {}
  },
  mutations: {
    setCategories (state, categories) {
      console.log(categories)
      state.categories = categories;
    },
    setJoke (state, joke) {
      state.joke = joke;
    }
  },
  actions: {
    loadCategories ({commit}) {
      axios.get('https://sv443.net/jokeapi/v2/categories')
          .then(res => {
            // let categories = res.data.categories
            commit('setCategories', res.data.categories)
          })
          .catch(err => console.log(err))
    },
    loadJoke ({commit}, category) {
      axios.get(`https://sv443.net/jokeapi/v2/joke/${category}`)
          .then(res => {
            // let categories = res.data.categories
            commit('setJoke', res.data)
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
