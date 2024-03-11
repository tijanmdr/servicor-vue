import {defineStore} from 'pinia';
import axiosClient from "../axios.js";
import {reactive} from "vue";

export const userStore = defineStore('user', {
    state: () => ({
        user: {},
        token: localStorage.getItem('_token'),
        response: {},
        error: false,
        errorMessage: ""
    }), getters: {
        getMenu() {
            if (this.token !== null) {
                return reactive([
                    {name: 'Home', url: '/'},
                    {name: 'About Us', url: '/about'},
                    {name: 'Logout', url: '/logout'}
                ]);
            } else {
                return reactive([
                    {name: 'Home', url: '/'},
                    {name: 'About Us', url: '/about'},
                    {name: 'Login', url: '/login'},
                ]);
            }
        }
    },
    actions: {
        async login(user) {
            const res = await axiosClient.post('login', user)
                .then(({data}) => {
                    this.response = data;
                    if (data.status) {
                        let d = new Date();
                        d = new Date(d.getTime() + 14 * 24 * 60 * 60 * 1000);
                        this.token = data.data.token;
                        document.cookie = "_token=" + data.data.token + "; expires=" + d.toUTCString() + "; path=/";
                        localStorage.setItem('_token', data.data.token);
                        window.location.href="/"
                    } else {
                        this.error = true
                        this.errorMessage = data.message
                    }
                }).catch((err) => {
                    console.log(err);
                });
        }, async logout() {
            document.cookie = "_token=null; expires=1992-03-06T11:16:00.000Z; path=/";
            localStorage.removeItem('_token');
            this.token = null
            window.location.href="/"
        }, flushErrorBag () {
            this.error = false
            this.errorMessage = ''
        }
    }
});
