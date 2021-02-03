import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://ezwellness-backend.herokuapp.com'
})

export default api;