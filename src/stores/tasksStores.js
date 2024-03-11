import { defineStore } from 'pinia';
import axiosClient from '../axios.js';
import { reactive } from 'vue';

export const tasksStores = defineStore('tasks', {
    state: () => ({
        task: {},
        tasks: []
    }),
    getters: {},
    actions: {
        flushTaskBag() {
            this.task = {};
        },
        flushTasksBag() {
            this.tasks = [];
        }
    }
});
