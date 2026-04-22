import axios from 'axios';

const api = axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com",
    baseURL: "http://localhost:8888",
    setTimeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
})
export default api; 