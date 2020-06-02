import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const axiosInstance = axios.create({
  baseURL: 'https://sv443.net/jokeapi/v2/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default new Vuex.Store({
  state: {
    categories: [],
    joke: {}
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories;
    },
    setJoke (state, joke) {
      state.joke = joke;
    }
  },
  actions: {
    loadCategories ({commit}) {
      axiosInstance.get('categories')
          .then(res => {
            // let categories = res.data.categories
            commit('setCategories', res.data.categories)
          })
          .catch(err => console.log(err))
    },
    loadJoke ({commit}, payload) {
      axiosInstance.get( `joke/${payload.category}`, {params:{type: payload.type}})
          .then(res => {
            // let categories = res.data.categories
            commit('setJoke', res.data)
          })
          .catch(err => console.log(err))
    }
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
