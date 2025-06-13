import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:1111",
    baseURL: "https://react-js-project-server.onrender.com",
    withCredentials: true,
})

export default api;