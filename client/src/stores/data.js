import { defineStore } from 'pinia';

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        money: 5,
        title: 'Welcome to the game',
    }),
    actions: {
        increaseMoney(amount) {
            this.money += amount
        },
        decreaseMoney(amount) {
            this.money -= amount
        }
    },
    persist: true,
    });

