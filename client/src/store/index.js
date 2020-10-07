import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000/api';


export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    users: [],
    item: []
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null  
    },
    createItem(state, item) {
      state.item = item
    }
  },
  actions: {
    register(context, data) { 
      return new Promise((resolve, reject) => {
        axios.post('/users/register', {
          username: data.username,
          email: data.email,
          password: data.password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    destroyToken(context) { 
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/users/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(err => {
              //In case inject key on localStorage
              localStorage.getItem('access_token')
              context.commit('destroyToken')
              reject(err)
            })
        })
      } 
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/users/login', {
          email: credentials.email,
          password: credentials.password
        })
          .then(response => {
            const token = response.data.token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    }, 
    createItem(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/item/', {
          nameItem: credentials.nameItem,
          description: credentials.description,
          startDateAuction: credentials.startDateAuction,
          endDateAuction: credentials.endDateAuction,
          startingPrice: credentials.startingPrice,
          sellPrice: credentials.startingPrice,
          statePrice: 0,
        })
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
        })
      })
    }
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
  },
  modules: {}
});
