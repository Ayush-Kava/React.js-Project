import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:1111",
    baseURL: "https://your-backend.onrender.com",
    withCredentials: true,
})

export default api;