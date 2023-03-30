import { defineStore } from 'pinia';

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        // General data
        exp: 0,
        money: 0,
        // Code data
        isAnimated: false,
        amount: 1,
        amountSec: 0,
        htmlPrice: 10,
        cssPrice: 100,
        jsPrice: 1000,
        tailwindPrice: 5000,
        vuePrice: 10000,
        vitePrice: 100000,
        // Mission data
        progressValue1: 0,
        progressValue2: 0,
        progressValue3: 0,
        autoJob1: false,
        autoJob2: false,
        autoJob3: false,
        autoJob4: false,
        ifJob1: false,
        ifJob2: false,
        ifJob3: false,
        ifJob4: false,
        // Invest data
        UTOstock: 0,
        UTOprice: 20,
        MRSstock: 0,
        MRSprice: 40,
        CRAstock: 0,
        CRAprice: 60,
        DWRKstock: 0,
        DWRKprice: 25,
        // Achivement data
        htmlAchivement1: false,
        htmlAchivement2: false,
        htmlAchivement3: false,
        htmlAchivement4: false,

    }),
    actions: {
        increaseExp() {
            this.isAnimated = true
            this.exp += this.amount
            setTimeout(() => {
                this.isAnimated = false
            }, 500)
        },

        increaseMoney(amount) {
            this.money += amount
        },

        // Job actions
        activeJob1() {
            if (this.jsPrice >= 2000) {
                this.ifJob1 = true
            }
        },
        activeJob2() {
            if (this.vuePrice >= 15000) {
                this.ifJob2 = true
            }
        },
        activeJob3() {
            if (this.vitePrice >= 150000) {
                this.ifJob3 = true
            }
        },
        increaseJobProgress1(amount, reward) {
            this.autoJob1 = true
            if (this.progressValue1 >= 100) {
                this.progressValue1 = 0
                this.money += reward
            } else {
                this.progressValue1 += amount
            }
            if (this.autoJob1 == true && !this.jobInterval1) {
                this.jobInterval1 = setInterval(() => {
                    if (this.progressValue1 >= 100) {
                        this.progressValue1 = 0
                        this.money += reward
                    } else {
                        this.progressValue1 += amount
                    }
                }, 1000)
            }
        },
        increaseJobProgress2(amount, reward) {
            this.autoJob2 = true
            if (this.progressValue2 >= 100) {
                this.progressValue2 = 0
                this.money += reward
            } else {
                this.progressValue2 += amount
            }
            if (this.autoJob2 == true && !this.jobInterval2) {
                this.jobInterval2 = setInterval(() => {
                    if (this.progressValue2 >= 100) {
                        this.progressValue2 = 0
                        this.money += reward
                    } else {
                        this.progressValue2 += amount
                    }
                }, 1000)
            }
        },
        increaseJobProgress3(amount, reward) {
            this.autoJob3 = true
            if (this.progressValue3 >= 100) {
                this.progressValue3 = 0
                this.money += reward
            } else {
                this.progressValue3 += amount
            }
            if (this.autoJob3 == true && !this.jobInterval3) {
                this.jobInterval3 = setInterval(() => {
                    if (this.progressValue3 >= 100) {
                        this.progressValue3 = 0
                        this.money += reward
                    } else {
                        this.progressValue3 += amount
                    }
                }, 1000)
            }
        },
        increaseJobProgress4(amount, reward) {
            this.autoJob4 = true
            if (this.progressValue4 >= 100) {
                this.progressValue4 = 0
                this.money += reward
            } else {
                this.progressValue4 += amount
            }
            if (this.autoJob4 == true && !this.jobInterval4) {
                this.jobInterval4 = setInterval(() => {
                    if (this.progressValue3 >= 100) {
                        this.progressValue3 = 0
                        this.money += reward
                    } else {
                        this.progressValue4 += amount
                    }
                }, 1000)
            }
        },

        // Invest actions
        buyUTO() {
            if (this.money >= this.UTOprice) {
                this.money -= this.UTOprice
                this.UTOstock += 1
            }
        },
        buyMRS() {
            if (this.money >= this.MRSprice) {
                this.money -= this.MRSprice
                this.MRSstock += 1
            }
        },
        buyCRA() {
            if (this.money >= this.CRAprice) {
                this.money -= this.CRAprice
                this.CRAstock += 1
            }
        },
        buyDWRK() {
            if (this.money >= this.DWRKprice) {
                this.money -= this.DWRKprice
                this.DWRKstock += 1
            }
        },
        sellAllStock() {
            this.money += this.UTOstock * this.UTOprice
            this.money += this.MRSstock * this.MRSprice
            this.money += this.CRAstock * this.CRAprice
            this.money += this.DWRKstock * this.DWRKprice
            this.UTOstock = 0
            this.MRSstock = 0
            this.CRAstock = 0
            this.DWRKstock = 0
        },
        sellUTO() {
            this.money += this.UTOstock * this.UTOprice
            this.UTOstock = 0
        },
        sellMRS() {
            this.money += this.MRSstock * this.MRSprice
            this.MRSstock = 0
        },
        sellCRA() {
            this.money += this.CRAstock * this.CRAprice
            this.CRAstock = 0
        },
        sellDWRK() {
            this.money += this.DWRKstock * this.DWRKprice
            this.DWRKstock = 0
        },

        // Achivement actions
        htmlAchivement() {
            if (this.htmlPrice == 60) {
                this.htmlAchivement1 = true
                this.amount += 10
            } if (this.htmlPrice == 310) {
                this.htmlAchivement2 = true
                this.amount += 15
            } if (this.htmlPrice == 510) {
                this.htmlAchivement3 = true
                this.amount += 20
            } if (this.htmlPrice == 1010) {
                this.htmlAchivement4 = true
                this.amount += 25
            }

            if (this.htmlAchivement1 == true || this.htmlAchivement2 == true) {
                setTimeout(() => {
                    this.htmlAchivement1 = false
                    this.htmlAchivement2 = false
                    this.htmlAchivement3 = false
                    this.htmlAchivement4 = false
                }, 15000)
            }
        },
    },
    getters: {
        expFormat() {
            return this.exp.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        amountFormat() {
            return this.amount.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        amountSecFormat() {
            return this.amountSec.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        moneyFormat() {
            return this.money.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        htmlPriceFormat() {
            return this.htmlPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        cssPriceFormat() {
            return this.cssPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        jsPriceFormat() {
            return this.jsPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        tailwindPriceFormat() {
            return this.tailwindPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        vuePriceFormat() {
            return this.vuePrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        vitePriceFormat() {
            return this.vitePrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        increaseExpSec() {
            setInterval(() => {
                this.exp += this.amountSec
            }, 1000)
        },
        totalStock() {
            return this.UTOstock + this.MRSstock + this.CRAstock + this.DWRKstock
        },
        totalCRA() {
            return this.CRAstock * this.CRAprice
        },
        totalMRS() {
            return this.MRSstock * this.MRSprice
        },
        totalUTO() {
            return this.UTOstock * this.UTOprice
        },
        totalDWRK() {
            return this.DWRKstock * this.DWRKprice
        },

    },
    persist: true,
});

