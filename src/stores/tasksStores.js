import {defineStore} from 'pinia';
import axiosClient from '../axios.js';
import {reactive} from 'vue';

export const tasksStores = defineStore('tasks', {
    state: () => ({
        service: reactive({}),
        services: reactive([]),
        searchText: '',
    }),
    getters: {
        // getTasksList =
    },
    actions: {
        flushTaskBag() {
            this.service = {};
        },
        flushTasksBag() {
            this.services = [];
        }, async searchService(slug) {
            const services = await axiosClient.get('search/' + slug)
                .then(({data}) => {
                    if (data.status) {
                        this.services = data.data.data;
                    }
                });
        }, async getService(slug) {
            const services = await axiosClient.get('service/' + slug)
                .then(({data}) => {
                    if (data.status) {
                        console.log(data);
                        this.service = data.data;
                    }
                });
        }
    }
});
