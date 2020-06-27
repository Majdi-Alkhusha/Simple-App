/* import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
 */

import Vue from 'vue'
import axios from 'axios' 
const axiosInstance = axios.create({ 
  baseURL: 'https://jsonplaceholder.typicode.com' 
})
export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
export { axiosInstance }