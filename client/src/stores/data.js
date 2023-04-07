import { defineStore } from 'pinia';

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        // General data
        // exp: -2,
        exp: 10000000,
        money: 100000,
        closedTuto: false,
        // Code data
        isAnimated: true,
        amount: 1,
        amountSec: 0,
        whatStack: 'Front-end',
        ifBack: false,
        ifFront: true,
        // front
        htmlPrice: 10,
        cssPrice: 100,
        jsPrice: 1000,
        tailwindPrice: 5000,
        vuePrice: 50000,
        vitePrice: 100000,
        // back
        nodePrice: 1000000,
        expressPrice: 5000000,
        prismaPrice: 10000000,
        mongoPrice: 50000000,
        dockerPrice: 500000000,
        vercelPrice: 1000000000,
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
        totalStock: 0,
        totalValueStock: 0,

        UTOstock: 0,
        UTOprice: 100,
        MRSstock: 0,
        MRSprice: 400,
        CRAstock: 0,
        CRAprice: 600,
        DWRKstock: 0,
        DWRKprice: 2500,

        newNumberUTO: 0,
        sumUTO: 0,
        fluctuatedSumUTO: 0,
        intervalIdUTO: null,

        newNumberMRS: 0,
        sumMRS: 0,
        fluctuatedSumMRS: 0,
        intervalIdMRS: null,

        newNumberCRA: 0,
        sumCRA: 0,
        fluctuatedSumCRA: 0,
        intervalIdCRA: null,

        newNumberDWRK: 0,
        sumDWRK: 0,
        fluctuatedSumDWRK: 0,
        intervalIdDWRK: null,
        // Company data
        companyName: null,
        ifCompany: false,
        ifCampanyName: false,
        ifProject1: false,
        ifProject2: false,
        autoProject1: false,
        autoProject2: false,
        progressValueProject1: 0,
        progressValueProject2: 0,

        devFrontJunior: 0,
        devFrontSenior: 0,
        devBackJunior: 0,
        devBackSenior: 0,
        devFullJunior: 0,
        devFullSenior: 0,

        server1: 0,
        server2: 0,

        // Amazitruc data
        switch: 0,
        head: 0,
        pc: 0,
        car: 0,
        // Achivement data
        htmlAchivement1: false,
        htmlAchivement2: false,
        htmlAchivement3: false,
        htmlAchivement4: false,
        htmlAchivement5: false,
        htmlAchivement6: false,
        htmlAchivement7: false,
        htmlAchivementActive1: false,
        htmlAchivementActive2: false,
        htmlAchivementActive3: false,
        htmlAchivementActive4: false,
        htmlAchivementActive5: false,
        htmlAchivementActive6: false,
        htmlAchivementActive7: false,

        nodeAchivement1: false,
        nodeAchivement2: false,
        nodeAchivement3: false,
        nodeAchivement4: false,
        nodeAchivement5: false,
        nodeAchivement6: false,
        nodeAchivement7: false,
        nodeAchivementActive1: false,
        nodeAchivementActive2: false,
        nodeAchivementActive3: false,
        nodeAchivementActive4: false,
        nodeAchivementActive5: false,
        nodeAchivementActive6: false,
        nodeAchivementActive7: false,

        clickAchivement1: false,
        clickAchivement2: false,
        clickAchivement3: false,
        clickAchivement4: false,
        clickAchivement5: false,
        clickAchivement6: false,
        clickAchivement7: false,
        clickAchivementActive1: false,
        clickAchivementActive2: false,
        clickAchivementActive3: false,
        clickAchivementActive4: false,
        clickAchivementActive5: false,
        clickAchivementActive6: false,
        clickAchivementActive7: false,

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
        affectCompanyName(name) {
            this.companyName = name
        },
        changeStack() {
            if (this.whatStack == 'Front-end') {
                this.whatStack = 'Back-end'
                this.ifBack = true
                this.ifFront = false
            } else {
                this.whatStack = 'Front-end'
                this.ifBack = false
                this.ifFront = true
            }
        },
        closeTuto() {
            this.closedTuto = true
        },
        // Job actions
        activeJob1() {
            if (this.jsPrice >= 2000) {
                this.ifJob1 = true
            }
        },
        activeJob2() {
            if (this.vuePrice >= 55000) {
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
        // Project actions
        activeProject1() {
            if (this.devFrontJunior >= 2 && this.devBackJunior >= 1 && this.devFullJunior >= 1 && this.server1 >= 1) {

                this.ifProject1 = true
            }
        },
        activeProject2() {
            if (this.devFrontJunior >= 6 && this.devBackJunior >= 3 && this.devFullJunior >= 2 && this.server2 >= 1) {

                this.ifProject2 = true
            }
        },
        increaseProjectProgress1(amount, reward) {
            this.autoProject1 = true
            if (this.progressValueProject1 >= 100) {
                this.progressValueProject1 = 0
                this.money += reward
            } else {
                this.progressValueProject1 += amount
            }
            if (this.autoProject1 == true && !this.jobProjectInterval1) {
                this.jobProjectInterval1 = setInterval(() => {
                    if (this.progressValueProject1 >= 100) {
                        this.progressValueProject1 = 0
                        this.money += reward
                    } else {
                        this.progressValueProject1 += amount
                    }
                }, 1000)
            }
        },
        increaseProjectProgress2(amount, reward) {
            this.autoProject2 = true
            if (this.progressValueProject2 >= 100) {
                this.progressValueProject2 = 0
                this.money += reward
            }
            else {
                this.progressValueProject2 += amount
            }
            if (this.autoProject2 == true && !this.jobProjectInterval2) {
                this.jobProjectInterval2 = setInterval(() => {
                    if (this.progressValueProject2 >= 100) {
                        this.progressValueProject2 = 0
                        this.money += reward
                    } else {
                        this.progressValueProject2 += amount
                    }
                }, 1000)
            }
        },

        //Recrut actions
        recrutDevFrontJun() {
            if (this.money >= 500) {
                this.money -= 500
                this.devFrontJunior += 1
            }
        },
        recrutDevBackJun() {
            if (this.money >= 1000) {
                this.money -= 1000
                this.devBackJunior += 1
            }
        },
        recrutDevFullJun() {
            if (this.money >= 1500) {
                this.money -= 1500
                this.devFullJunior += 1
            }
        },

        // Server actions
        buyServer1() {
            if (this.money >= 500) {
                this.money -= 500
                this.server1 += 1
            }
        },
        buyServer2() {
            if (this.money >= 1500) {
                this.money -= 1500
                this.server2 += 1
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
        // Amazitruc
        buySwitch() {
            if (this.money >= 300) {
                this.money -= 300
                this.switch += 1
            }
        },
        buyHead() {
            if (this.money >= 150) {
                this.money -= 150
                this.head += 1
            }
        },
        buyPc() {
            if (this.money >= 5000) {
                this.money -= 5000
                this.pc += 1
            }
        },
        buyCar() {
            if (this.money >= 350000) {
                this.money -= 350000
                this.car += 1
            }
        },

        // Achivement actions
        htmlAchivement() {
            if (this.htmlPrice == 60) {
                this.htmlAchivement1 = true
                this.amount += 10
                this.htmlAchivementActive1 = true
            }
            if (this.htmlAchivement1 == true) {
                setTimeout(() => {
                    this.htmlAchivement1 = false
                }, 5000)
            }
        },
        cssAchivement() {
            if (this.cssPrice == 1100) {
                this.htmlAchivement2 = true
                this.amountSec += 15
                this.htmlAchivementActive2 = true
                console.log('css achivement')
            }
            if (this.htmlAchivement2 == true) {
                setTimeout(() => {
                    this.htmlAchivement2 = false
                }, 5000)
            }
        },
        jsAchivement() {
            if (this.jsPrice == 11000) {
                this.htmlAchivement3 = true
                this.amount += 20
                this.htmlAchivementActive3 = true
            }
            if (this.htmlAchivement3 == true) {
                setTimeout(() => {
                    this.htmlAchivement3 = false
                }, 5000)
            }
        },
        tailwindAchivement() {
            if (this.tailwindPrice == 30000) {
                this.htmlAchivement4 = true
                this.htmlAchivementActive4 = true
                this.amountSec += 500
            }
            if (this.htmlAchivement4 == true) {
                setTimeout(() => {
                    this.htmlAchivement4 = false
                }, 5000)
            }
        },
        vueAchivement() {
            if (this.vuePrice == 105000) {
                this.htmlAchivement5 = true
                this.htmlAchivementActive5 = true
                this.amount += 3000
            }
            if (this.htmlAchivement5 == true) {
                setTimeout(() => {
                    this.htmlAchivement5 = false
                }, 5000)
            }
        },
        viteAchivement() {
            if (this.vitePrice == 600000) {
                this.htmlAchivement6 = true
                this.htmlAchivementActive6 = true
                this.amount += 10000
            }
            if (this.htmlAchivement6 == true) {
                setTimeout(() => {
                    this.htmlAchivement6 = false
                }, 5000)
            }
        },
        totalAchivement() {
            if (this.htmlAchivement6 == true) {
                this.htmlAchivement7 = true
                this.htmlAchivementActive7 = true
                this.amount += 100000

            }
            if (this.htmlAchivement7 == true) {
                setTimeout(() => {
                    this.htmlAchivement7 = false
                }, 5000)
            }
        },
        affectIfCompany() {
            if (this.exp >= 1000000) {
                this.ifCompany = true
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
        nodePriceFormat() {
            return this.nodePrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        expressPriceFormat() {
            return this.expressPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        prismaPriceFormat() {
            return this.prismaPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        mongoPriceFormat() {
            return this.mongoPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        dockerPriceFormat() {
            return this.dockerPrice.toLocaleString(
                undefined,
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 4,
                    notation: "compact"
                }
            )
        },
        vercelPriceFormat() {
            return this.vercelPrice.toLocaleString(
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
        totalValueStock() {
            return this.fluctuatedSumUTO + this.fluctuatedSumMRS + this.fluctuatedSumCRA + this.fluctuatedSumDWRK
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

