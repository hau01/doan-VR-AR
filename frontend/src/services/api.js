import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000'
})

export const fetchScenes = async () => {
  const response = await api.get('/api/scenes')
  return response.data
}

export default api
