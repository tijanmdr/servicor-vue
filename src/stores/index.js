import {defineStore} from 'pinia';
import axiosClient from "../axios.js";

const baseURI = "http://localhost:8000/api/";
export const userStore = defineStore('user', {
    state: () => ({
        user: '',
        token: localStorage.getItem('_token')
    }),
    actions: {
        async login(user) {
            const res = await axiosClient.post('login', user)
                .then(({data}) => {
                    if (data.status) {
                        let d = new Date();
                        d = new Date(d.getTime() + 14 * 24 * 60 * 60 * 1000);
                        document.cookie = "_token=" + data.data.token + "; expires=" + d.toUTCString() + "; path=/";
                        // localStorage.setItem('_token', data.data.token)
                    }
                }).catch((err) => {
                    console.log(err);
                });
            return res
        }
    }
});
