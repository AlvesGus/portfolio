import axios from 'axios'

const api = axios.create({
  url: 'https://api.npoint.io/',
  params: { endpoint: 'docs/', key: 'a9d3c736c1a7e9428203' }
})

export default api
