import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://project3-api-frontend.herokuapp.com/'
})

export default api;