import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000/api';

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    users: [],
    userId: parseInt(localStorage.getItem('userId')) || null,
    item: [],
  },
  mutations: {
    //Item
    retrieveItem(state, item) {
      state.item = item
    },
    createItem(state, item) {
      state.item = item
    },
    //Token
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null  
    },
    //UserId
    retrieveUserId(state, userId) {
      state.userId = userId
    },
    destroyUserId(state) {
      state.userId = null
    },
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
              localStorage.removeItem('userId')
              context.commit('destroyToken')
              context.commit('destroyUserId')
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
            const userId = response.data.userId

            localStorage.setItem('access_token', token)
            localStorage.setItem('userId', userId)
            context.commit('retrieveUserId', userId)
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
        axios.post('/item', {
          nameItem: credentials.nameItem,
          description: credentials.description,
          startDateAuction: credentials.startDateAuction,
          endDateAuction: credentials.endDateAuction,
          startingPrice: credentials.startingPrice,
          sellPrice: credentials.startingPrice,
          statePrice: 0,
          userId: credentials.userId,
        })
          .then(response => {
            const item = response.data
            context.commit('retrieveItem', item),
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
    userId(state) {
      return parseInt(state.userId)
    },
  },
  modules: {}
});
