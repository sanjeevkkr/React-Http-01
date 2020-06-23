import axios from 'axios';

// this will override the default global setting
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'Auth Token from Instance';

//instance.interceptors.request...

export default instance;