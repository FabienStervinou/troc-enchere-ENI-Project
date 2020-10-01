import Vue from 'vue'
import axios from 'axios'
// import config from '../config/index'

const HEADER_ACCESS_NAME = 'Authorization'

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin': '*',
}

const instance = axios.create({
  headers,
  baseURL: process.env.NODE_ENV
})

const getAccessToken = () => '<YOUR_TOKEN>'

instance.interceptors.request.use(
  async config => {
    const accessToken = getAccessToken()
    if (accessToken) config.headers[HEADER_ACCESS_NAME] = `Bearer ${accessToken}`
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => response,
  async (error) => {
    Vue.$toast.error(error)
    // redirect to error page
    // return API message response for all call in the App
    return Promise.reject(error)
  }
)

Vue.prototype.$resources = instance

export default instance