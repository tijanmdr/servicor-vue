import axios from 'axios';
import {userStore} from '@/stores/index.js';
import {onBeforeMount} from "vue";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

axiosClient.interceptors.request.use((config) => {
    const _store = userStore();
    config.headers.Authorization = 'Bearer ' + _store.token;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const _store = userStore();
    if (error.response.status === 401) {
        _store.logout();
    }
});

export default axiosClient;
