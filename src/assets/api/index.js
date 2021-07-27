import axios from 'axios'

const baseURL="http://localhost:3000/"

export default {
  getRole() {
    return axios.get(baseURL+'role').then(res=>res.data)
  },
  postRole(x) {
    return axios.post(baseURL+'role',x).then(res=>res.data)
  },
  getMenu(x) {
    return axios.get(baseURL+'menu',{params:x}).then(res=>res.data)
  },
  getPermissions(x) {
    return axios.get(baseURL+'permissions',{params:x}).then(res=>res.data)
  },
  postPermissions(x) {
    return axios.post(baseURL+'permissions',x).then(res=>res.data)
  },
  getRouter(x) {
    return axios.get(baseURL+'router',{params:x}).then(res=>res.data)
  }
}