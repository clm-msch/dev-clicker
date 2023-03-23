import { defineStore } from 'pinia';


export const useStore = defineStore("store",{
    state: () => ({
        count: 1,
    }),
    getters: {
        getCount(){
            return this.count;
        }
    }
    },
);
