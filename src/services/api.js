import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'https://my-json-server.typicode.com/JohnSalgado/reactjs-rocketshoes',
})

export default api
