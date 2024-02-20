import axios from "axios";
import {userStore} from "@/stores/index.js";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

axiosClient.interceptors.request.use(config => {
    const _store = userStore();
    config.headers.Authorization = "Bearer " + _store.token;
    return config;
});

export default axiosClient;