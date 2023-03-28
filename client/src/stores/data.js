import { defineStore } from 'pinia';

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        // General data
        exp: 0,
        money: 5,
        // Mission data
        progressValue: 0,
        autoJob: false,
    }),
    actions: {
        increaseMoney(amount) {
            this.money += amount
        },

        increaseJobProgress(amount, reward) {
            this.autoJob = true
            console.log(this.autoJob)
            if (this.progressValue >= 100) {
                this.progressValue = 0
                this.money += reward
            } else {
                this.progressValue += amount
            }
            if (this.autoJob == true && !this.jobInterval) { 
                this.jobInterval = setInterval(() => {
                    if (this.progressValue >= 100) {
                        this.progressValue = 0
                        this.money += reward
                    } else {
                        this.progressValue += amount
                    }
                }, 1000)
            }
        },
    },
    persist: true,
});

