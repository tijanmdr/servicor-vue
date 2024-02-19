import { defineStore } from 'pinia';
import axios from 'axios';

export const userStore = defineStore('user', {
    state: () => ({
        user: '',
        token: localStorage.getItem('_token')
    }),
    actions: {
        async login(user) {
            // const res = axios.post()
        }
    }
});
