import axios from 'axios'

const apiClient = axios.create ({
    baseURL: 'https://my-json-server.typicode.com/rene4561/real-world-vue-3-DB',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : application/json
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}