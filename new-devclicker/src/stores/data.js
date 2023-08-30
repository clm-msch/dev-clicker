import { defineStore } from 'pinia';
// import { collection, onSnapshot, doc, setDoc, addDoc, updateDoc, orderBy, query,  } from "firebase/firestore"
// import { db } from '.././js/firebase.js'
// import { useAuthStore } from "../stores/auth"
// let collectionRef
// let querySnapshot

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        contentCardsFront: [
            {
                id: 1,
                sec: false,
                name: "HTML",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681859649/skill-icons_html_usbxmc.svg",
                effect: "ajoute +1 au clic",
                expEffect: 1,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 10,
                priceIncrease: 10,
                quantity: 0,
            },
            {
                id: 2,
                sec: true,
                name: "CSS",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_css_jippit.svg",
                effect: "ajoute +1 par seconde",
                expEffect: 1,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 100,
                priceIncrease: 15,
                quantity: 0,
            },
            {
                id: 3,
                sec: false,
                name: "JavaScript",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_javascript_ymxsma.svg",
                effect: "ajoute +10 au clic",
                expEffect: 10,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 1000,
                priceIncrease: 1000,
                quantity: 0,
            },
            {
                id: 4,
                sec: true,
                name: "Tailwind CSS",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_tailwindcss_bpyogi.svg",
                effect: "ajoute +100 par seconde",
                expEffect: 100,
                description: "Framework CSS qui fournit une bibliothèque de classes prêtes à l'emploi pour faciliter la mise en forme des pages Web.",
                price: 5000,
                priceIncrease: 5000,
                quantity: 0,
            },
            {
                id: 5,
                sec: false,
                name: "Vue.js",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_vuejs_t5pp0w.svg",
                effect: "ajoute +1 k par clic",
                expEffect: 1000,
                description: "Framework JavaScript permettant de créer des applications Web interactives et dynamiques.",
                price: 50000,
                priceIncrease: 10000,
                quantity: 0,
            },
            {
                id: 6,
                sec: false,
                name: "Vite",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_vite_xxscpc.svg",
                effect: "ajoute +5 k par clic",
                expEffect: 5000,
                description: "Outil de construction rapide pour les applications Web modernes, basé sur JavaScript.",
                price: 500000,
                priceIncrease: 500000,
                quantity: 0,
            },
        ],
        contentCardsBack: [
            {
                id: 1,
                sec: false,
                name: "Node.js",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_nodejs_vhmhcm.svg",
                effect: "ajoute +10 k au clic",
                expEffect: 10000,
                description: "Environnement d'exécution JavaScript côté serveur, qui permet d'exécuter du code JavaScript en dehors du navigateur.",
                price: 1000000,
                priceIncrease: 500000,
                quantity: 0,
            },
            {
                id: 2,
                sec: false,
                name: "Express.js",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860540/skill-icons_expressjs_ndpwpu.svg",
                effect: "ajoute +50 k par clic",
                expEffect: 50000,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 5000000,
                priceIncrease: 5000000,
                quantity: 0,
            },
            {
                id: 3,
                sec: true,
                name: "Prisma",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_prisma_xi5xdp.svg",
                effect: "ajoute +500 k au seconde",
                expEffect: 500000,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 50000000,
                priceIncrease: 50000000,
                quantity: 0,
            },
            {
                id: 4,
                sec: false,
                name: "MongoDB",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_mongodb_ye9ja4.svg",
                effect: "ajoute +1 M par clic",
                expEffect: 1000000,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 100000000,
                priceIncrease: 100000000,
                quantity: 0,
            },
            {
                id: 5,
                sec: true,
                name: "Docker",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_docker_jituey.svg",
                effect: "ajoute +10 M par seconde",
                expEffect: 10000000,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 500000000,
                priceIncrease: 500000000,
                quantity: 0,
            },
            {
                id: 6,
                sec: false,
                name: "Vercel",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_vercel_mdqqa3.svg",
                effect: "ajoute +50 M par clic",
                expEffect: 50000000,
                description: "Une plateforme cloud qui permet de déployer et de gérer des applications Web statiques et dynamiques, ainsi que des fonctions serverless.",
                price: 5000000000,
                priceIncrease: 5000000000,
                quantity: 0,
            },
        ],
        contentCardsMissions: [
            {
                id: 1,
                name: "Unito",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg",
                description: "Création d'un site vitrine pour un plombier.",
                salaire: 50,
                ifApply1: false,
                requires: ["HTML", "CSS", "JavaScript"]
            },
            {
                id: 2,
                name: "Devwork",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg",
                description: "Création d'une Web App de gestion de projet.",
                salaire: 150,
                ifApply2: false,
                requires: ["JavaScript", "TailwindCSS", "Vue.js"]
            },
            {
                id: 3,
                name: "Crea",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/crea_hbrcko.svg",
                description: "Création d'un dashboard pour un site e-commerce.",
                salaire: 200,
                ifApply3: false,
                requires: ["TailwindCSS", "Vue.js", "Vite"]
            },
            {
                id: 4,
                name: "Devwork",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg",
                description: "Refonte d'une Web App de gestion des stocks.",
                salaire: 500,
                ifApply4: false,
                requires: ["Node.js", "Express.js", "Prisma"]
            },
            {
                id: 5,
                name: "Mars",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/mars_f5ar4j.svg",
                description: "Création d'une REST API pour une application mobile.",
                salaire: 1000,
                ifApply5: false,
                requires: ["Express.js", "Prisma", "MongoDB"]
            },
            {
                id: 6,
                name: "Unito",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg",
                description: "Création d'une web-app de partage de données en grande quantité.",
                salaire: 5000,
                ifApply6: false,
                requires: ["MongoDB", "Docker", "Vercel"]
            },
        ],
        workplaces: [
            {
                id: 1,
                name: "Petit bureau",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/workplace_ep64rc.svg",
                description: "Un petit bureau dans une cave, assez délabré et petit. (5 employés)",
                price : "100 k ",
            },
            {
                id: 2,
                name: "Moyen Bureau",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/workplace_ep64rc.svg",
                description: "Un bureau de taille moyenne, avec un peu plus de confort. (50 employés)",
                price : "500 k ",
            },
            {
                id: 3,
                name: "Grand Bureau",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/workplace_ep64rc.svg",
                description: "Un grand bureau, avec une belle vue sur la ville. (100 employés)",
                price : "2,5 M ",
            },
        ],
        servers : [
            {
                id: 1,
                name: "Serveurs d'occasion",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/server_hqqiqd.svg",
                description: "A beaucoup servi à d'autres entreprises.",
                price : "50 k ",
            },
            {
                id: 2,
                name: "Serveurs neufs",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/server_hqqiqd.svg",
                description: "Des serveurs neufs, qui n'ont jamais servi.",
                price : "100 k ",
            },
            {
                id: 3,
                name: "Serveurs surpuissants",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1683329169/server_hqqiqd.svg",
                description: "Concus pour écraser la concurence.",
                price : "1 M ",
            },
        ],



        /*
            CodeView
        */
        exp: 10000,
        clickTotal: 0,
        expAdd: 1,
        expAddSec: 0,
        dataContentLoaded: false,
        ifFront: true,
        ifBack: false,
        whatStack: 'Front-end',
        /*
            MissionsView
        */
        money: 100000,
        progressValue1: 1,
        progressValue2: 1,
        progressValue3: 1,
        progressValue4: 1,
        progressValue5: 1,
        progressValue6: 1,
        ifApply1: true,
        ifApply2: true,
        ifApply3: true,
        ifApply4: true,
        ifApply5: true,
        ifApply6: true,
        /*
            InvestView
        */
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
        /*
            InvestView
        */
        trophiesFront1: false,
        trophiesFront2: false,
        trophiesFront3: false,
        trophiesFront4: false,
        trophiesFront5: false,
        trophiesFront6: false,
        trophiesPopFront1: false,
        trophiesPopFront2: false,
        trophiesPopFront3: false,
        trophiesPopFront4: false,
        trophiesPopFront5: false,
        trophiesPopFront6: false,

        trophiesBack1: false,
        trophiesBack2: false,
        trophiesBack3: false,
        trophiesBack4: false,
        trophiesBack5: false,
        trophiesBack6: false,
        trophiesPopBack1: false,
        trophiesPopBack2: false,
        trophiesPopBack3: false,
        trophiesPopBack4: false,
        trophiesPopBack5: false,
        trophiesPopBack6: false,

        // trophiesClick1: false,
        // trophiesClick2: false,
        // trophiesClick3: false,
        // trophiesClick4: false,
        // trophiesClick5: false,
        // trophiesClick6: false,
    }),
    actions: {
        // init() {
        //     this.initContentData()
        //     let dataContentLoaded = false
        // },
        // async initContentData() {
        //     dataContentLoaded = false
        //     const storeAuth = useAuthStore()
        //     if (dataContentLoaded === false) {
        //         await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "1"), {
        //             id: 1,
        //             sec: false,
        //             name: "HTML",
        //             image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681859649/skill-icons_html_usbxmc.svg",
        //             effect: "ajoute +1 au clic",
        //             expEffect: 1,
        //             description: "Langage de balisage utilisé pour créer des pages Web.",
        //             price: 10,
        //             priceIncrease: 10,
        //             quantity: 0,
        //         });
        //         await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "2"), {
        //             id: 2,
        //             sec: true,
        //             name: "CSS",
        //             image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_css_jippit.svg",
        //             effect: "ajoute +1 par seconde",
        //             expEffect: 1,
        //             description: "Langage de balisage utilisé pour créer des pages Web.",
        //             price: 100,
        //             priceIncrease: 15,
        //             quantity: 0,
        //         });
        //         await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "3"), {
        //             id: 3,
        //             sec: false,
        //             name: "JavaScript",
        //             image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_javascript_ymxsma.svg",
        //             effect: "ajoute +10 au clic",
        //             expEffect: 10,
        //             description: "Langage de balisage utilisé pour créer des pages Web.",
        //             price: 1000,
        //             priceIncrease: 1000,
        //             quantity: 0,
        //         });
        //         await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "4"), {
        //             id: 4,
        //             sec: true,
        //             name: "Tailwind CSS",
        //             image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_tailwindcss_bpyogi.svg",
        //             effect: "ajoute +100 par seconde",
        //             expEffect: 100,
        //             description: "Framework CSS qui fournit une bibliothèque de classes prêtes à l'emploi pour faciliter la mise en forme des pages Web.",
        //             price: 5000,
        //             priceIncrease: 5000,
        //             quantity: 0,
        //         });
        //         await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "5"), {
        //             id: 5,
        //             sec: false,
        //             name: "Vue.js",
        //             image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_vuejs_t5pp0w.svg",
        //             effect: "ajoute +1 k par clic",
        //             expEffect: 1000,
        //             description: "Framework JavaScript permettant de créer des applications Web interactives et dynamiques.",
        //             price: 50000,
        //             priceIncrease: 10000,
        //             quantity: 0,
        //         });
        //         await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "6"), {
        //             id: 6,
        //             sec: false,
        //             name: "Vite",
        //             image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_vite_xxscpc.svg",
        //             effect: "ajoute +5 k par clic",
        //             expEffect: 5000,
        //             description: "Outil de construction rapide pour les applications Web modernes, basé sur JavaScript.",
        //             price: 500000,
        //             priceIncrease: 500000,
        //             quantity: 0,
        //         });
        //         dataContentLoaded = true
        //     }
        // },

        // async getContentFront() {
        //     const storeAuth = useAuthStore()
        //     collectionRef = collection(db, "UserData", storeAuth.user.email, "contentCardsFront")
        //     querySnapshot = query(collectionRef, orderBy("order", "asc"))

        //     onSnapshot(collectionRef, (querySnapshot) => {
        //         let contentCardsFront = []
        //         querySnapshot.forEach((doc) => {
        //             let contentFront = {
        //                 id: doc.id,
        //                 sec: doc.data().sec,
        //                 name: doc.data().name,
        //                 image: doc.data().image,
        //                 effect: doc.data().effect,
        //                 expEffect: doc.data().expEffect,
        //                 description: doc.data().description,
        //                 price: doc.data().price,
        //                 priceIncrease: doc.data().priceIncrease,
        //                 quantity: doc.data().quantity,
        //             }
        //             contentCardsFront.push(contentFront)
        //         })
        //         this.contentCardsFront = contentCardsFront
        //     })
        // },
        increaseExp() {
            this.exp += this.expAdd
            this.clickTotal += 1
        },
        increaseExpSec() {
            setInterval(() => {
                this.exp += this.expAddSec
            }, 1000)
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
        // async buyCodeFront(id) {
        //     const storeAuth = useAuthStore()
        //     collectionRef = collection(db, "UserData", storeAuth.user.email, "contentCardsFront")
        //     const card = this.contentCardsFront.find(card => card.id === id)
        //     if (this.exp >= card.price && card.sec == false) {
        //         this.exp -= card.price
        //         this.expAdd += card.expEffect
        //         card.quantity++
        //         card.price += card.priceIncrease
        //         await updateDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", id), {
        //             quantity: card.quantity,
        //             price: card.price,
        //         })
        //     }
        //     if (this.exp >= card.price && card.sec == true) {
        //         this.exp -= card.price
        //         this.expAddSec += card.expEffect
        //         card.quantity++
        //         card.price += card.priceIncrease
        //         await updateDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", id), {
        //             quantity: card.quantity,
        //             price: card.price,
        //         })
        //     }
        // },
        buyCodeFront(id) {
            // const storeAuth = useAuthStore()
            // collectionRef = collection(db, "UserData", storeAuth.user.email, "contentCardsFront")
            const card = this.contentCardsFront.find(card => card.id === id)
            if (this.exp >= card.price && card.sec == false) {
                this.exp -= card.price
                this.expAdd += card.expEffect
                card.quantity++
                card.price += card.priceIncrease
            }
            if (this.exp >= card.price && card.sec == true) {
                this.exp -= card.price
                this.expAddSec += card.expEffect
                card.quantity++
                card.price += card.priceIncrease
            }
        },
        buyCodeBack(id) {
            const card = this.contentCardsBack.find(card => card.id === id)
            if (this.exp >= card.price && card.sec == false) {
                this.exp -= card.price
                this.expAdd += card.expEffect
                card.quantity++
                card.price += card.priceIncrease
            }
            if (this.exp >= card.price && card.sec == true) {
                this.exp -= card.price
                this.expAddSec += card.expEffect
                card.quantity++
                card.price += card.priceIncrease
            }
        },
        applyToMission1() {
            const card = this.contentCardsFront.find(card => card.id === 3)
            if (card.quantity >= 1) {
                this.ifApply1 = false
            }
        },
        incrementMission1() {
            const autoIncrement1 = true
            if (autoIncrement1 == true && !this.interval1) {
                this.interval1 = setInterval(() => {
                    this.progressValue1 += 5
                    if (this.progressValue1 >= 95) {
                        this.progressValue1 = 0
                        this.money += 50
                    }
                }, 1000)
            }
            if (this.progressValue1 >= 100) {
                this.progressValue1 = 0
                this.money += 50
            } else {
                this.progressValue1 += 5
            }
        },
        applyToMission2() {
            const card = this.contentCardsFront.find(card => card.id === 5)
            if (card.quantity >= 1) {
                this.ifApply2 = false
            }
        },
        incrementMission2() {
            const autoIncrement2 = true
            if (autoIncrement2 == true && !this.interval2) {
                this.interval2 = setInterval(() => {
                    this.progressValue2 += 4
                    if (this.progressValue2 >= 95) {
                        this.progressValue2 = 0
                        this.money += 150
                    }
                }, 1000)
            }
            if (this.progressValue2 >= 100) {
                this.progressValue2 = 0
                this.money += 150
            } else {
                this.progressValue2 += 4
            }
        },
        applyToMission3() {
            const card = this.contentCardsFront.find(card => card.id === 6)
            if (card.quantity >= 1) {
                this.ifApply3 = false
            }
        },
        incrementMission3() {
            const autoIncrement3 = true
            if (autoIncrement3 == true && !this.interval3) {
                this.interval3 = setInterval(() => {
                    this.progressValue3 += 3
                    if (this.progressValue3 >= 95) {
                        this.progressValue3 = 0
                        this.money += 200
                    }
                }, 1000)
            }
            if (this.progressValue3 >= 100) {
                this.progressValue3 = 0
                this.money += 200
            } else {
                this.progressValue3 += 3
            }
        },
        applyToMission4() {
            const card = this.contentCardsBack.find(card => card.id === 3)
            if (card.quantity >= 1) {
                this.ifApply4 = false
            }
        },
        incrementMission4() {
            const autoIncrement4 = true
            if (autoIncrement4 == true && !this.interval4) {
                this.interval4 = setInterval(() => {
                    this.progressValue4 += 2
                    if (this.progressValue4 >= 95) {
                        this.progressValue4 = 0
                        this.money += 500
                    }
                }, 1000)
            }
            if (this.progressValue4 >= 100) {
                this.progressValue4 = 0
                this.money += 500
            } else {
                this.progressValue4 += 2
            }
        },
        applyToMission5() {
            const card = this.contentCardsBack.find(card => card.id === 4)
            if (card.quantity >= 1) {
                this.ifApply5 = false
            }
        },
        incrementMission5() {
            const autoIncrement5 = true
            if (autoIncrement5 == true && !this.interval5) {
                this.interval5 = setInterval(() => {
                    this.progressValue5 += 1
                    if (this.progressValue5 >= 95) {
                        this.progressValue5 = 0
                        this.money += 1000
                    }
                }, 1000)
            }
            if (this.progressValue5 >= 100) {
                this.progressValue5 = 0
                this.money += 1000
            } else {
                this.progressValue5 += 1
            }
        },
        applyToMission6() {
            const card = this.contentCardsBack.find(card => card.id === 6)
            if (card.quantity >= 1) {
                this.ifApply6 = false
            }
        },
        incrementMission6() {
            const autoIncrement6 = true
            if (autoIncrement6 == true && !this.interval6) {
                this.interval6 = setInterval(() => {
                    this.progressValue6 += 0.5
                    if (this.progressValue6 >= 95) {
                        this.progressValue6 = 0
                        this.money += 5000
                    }
                }, 1000)
            }
            if (this.progressValue6 >= 100) {
                this.progressValue6 = 0
                this.money += 5000
            } else {
                this.progressValue6 += 0.5
            }
        },
        activeTrophiesFront1() {
            const card = this.contentCardsFront.find(card => card.id === 1)
            if (card.quantity >= 5 && !this.trophiesFront1) {
                this.trophiesFront1 = true
                this.expAdd += 10
                this.trophiesPopFront1 = true
                if (this.trophiesPopFront1 == true) {
                    setTimeout(() => {
                        this.trophiesPopFront1 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesFront2() {
            const card = this.contentCardsFront.find(card => card.id === 2)
            if (card.quantity >= 10 && !this.trophiesFront2) {
                this.trophiesFront2 = true
                this.expAddSec += 15
                this.trophiesPopFront2 = true
                if (this.trophiesPopFront2 == true) {
                    setTimeout(() => {
                        this.trophiesPopFront2 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesFront3() {
            const card = this.contentCardsFront.find(card => card.id === 3)
            if (card.quantity >= 10 && !this.trophiesFront3) {
                this.trophiesFront3 = true
                this.expAdd += 20
                this.trophiesPopFront3 = true
                if (this.trophiesPopFront3 == true) {
                    setTimeout(() => {
                        this.trophiesPopFront3 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesFront4() {
            const card = this.contentCardsFront.find(card => card.id === 4)
            if (card.quantity >= 5 && !this.trophiesFront4) {
                this.trophiesFront4 = true
                this.expAddSec += 500
                this.trophiesPopFront4 = true
                if (this.trophiesPopFront4 == true) {
                    setTimeout(() => {
                        this.trophiesPopFront4 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesFront5() {
            const card = this.contentCardsFront.find(card => card.id === 5)
            if (card.quantity >= 10 && !this.trophiesFront5) {
                this.trophiesFront5 = true
                this.expAdd += 3000
                this.trophiesPopFront5 = true
                if (this.trophiesPopFront5 == true) {
                    setTimeout(() => {
                        this.trophiesPopFront5 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesFront6() {
            const card = this.contentCardsFront.find(card => card.id === 6)
            if (card.quantity >= 10 && !this.trophiesFront6) {
                this.trophiesFront6 = true
                this.expAdd += 10000
                this.trophiesPopFront6 = true
                if (this.trophiesPopFront6 == true) {
                    setTimeout(() => {
                        this.trophiesPopFront6 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesBack1() {
            const card = this.contentCardsBack.find(card => card.id === 1)
            if (card.quantity >= 5 && !this.trophiesBack1) {
                this.trophiesBack1 = true
                this.expAdd += 20000
                this.trophiesPopBack1 = true
                if (this.trophiesPopBack1 == true) {
                    setTimeout(() => {
                        this.trophiesPopBack1 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesBack2() {
            const card = this.contentCardsBack.find(card => card.id === 2)
            if (card.quantity >= 10 && !this.trophiesBack2) {
                this.trophiesBack2 = true
                this.expAddSec += 100000
                this.trophiesPopBack2 = true
                if (this.trophiesPopBack2 == true) {
                    setTimeout(() => {
                        this.trophiesPopBack2 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesBack3() {
            const card = this.contentCardsBack.find(card => card.id === 3)
            if (card.quantity >= 10 && !this.trophiesBack3) {
                this.trophiesBack3 = true
                this.expAdd += 1000000
                this.trophiesPopBack3 = true
                if (this.trophiesPopBack3 == true) {
                    setTimeout(() => {
                        this.trophiesPopBack3 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesBack4() {
            const card = this.contentCardsBack.find(card => card.id === 4)
            if (card.quantity >= 5 && !this.trophiesBack4) {
                this.trophiesBack4 = true
                this.expAddSec += 5000000
                this.trophiesPopBack4 = true
                if (this.trophiesPopBack4 == true) {
                    setTimeout(() => {
                        this.trophiesPopBack4 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesBack5() {
            const card = this.contentCardsBack.find(card => card.id === 5)
            if (card.quantity >= 10 && !this.trophiesBack5) {
                this.trophiesBack5 = true
                this.expAdd += 20000000
                this.trophiesPopBack5 = true
                if (this.trophiesPopBack5 == true) {
                    setTimeout(() => {
                        this.trophiesPopBack5 = false
                    }, 5000)
                }
            }
        },
        activeTrophiesBack6() {
            const card = this.contentCardsBack.find(card => card.id === 6)
            if (card.quantity >= 10 && !this.trophiesBack6) {
                this.trophiesBack6 = true
                this.expAdd += 100000000
                this.trophiesPopBack6 = true
                if (this.trophiesPopBack6 == true) {
                    setTimeout(() => {
                        this.trophiesPopBack6 = false
                    }, 5000)
                }
            }
        },
        resetAll() {
            localStorage.clear()
            window.location.reload()
        }
    },
    getters: {
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
    // persist: true,
});

