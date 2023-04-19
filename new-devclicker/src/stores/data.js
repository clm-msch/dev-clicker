import { defineStore } from 'pinia';
import { collection, getDocs } from "firebase/firestore"
import { db } from '.././js/firebase.js'

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        contentCardsFront: [
            // {
            //     id: 1,
            //     sec: false,
            //     name: "HTML",
            //     image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681859649/skill-icons_html_usbxmc.svg",
            //     effect: "ajoute +1 au clic",
            //     expEffect: 1,
            //     description: "Langage de balisage utilisé pour créer des pages Web.",
            //     price: 10,
            //     priceIncrease: 10,
            //     quantity: 0,
            // },
            // {
            //     id: 2,
            //     sec: true,
            //     name: "CSS",
            //     image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_css_jippit.svg",
            //     effect: "ajoute +1 par seconde",
            //     expEffect: 1,
            //     description: "Langage de balisage utilisé pour créer des pages Web.",
            //     price: 100,
            //     priceIncrease: 15,
            //     quantity: 0,
            // },
            // {
            //     id: 3,
            //     sec: false,
            //     name: "JavaScript",
            //     image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_javascript_ymxsma.svg",
            //     effect: "ajoute +10 au clic",
            //     expEffect: 10,
            //     description: "Langage de balisage utilisé pour créer des pages Web.",
            //     price: 1000,
            //     priceIncrease: 1000,
            //     quantity: 0,
            // },
            // {
            //     id: 4,
            //     sec: true,
            //     name: "Tailwind CSS",
            //     image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_tailwindcss_bpyogi.svg",
            //     effect: "ajoute +100 par seconde",
            //     expEffect: 100,
            //     description: "Langage de balisage utilisé pour créer des pages Web.",
            //     price: 5000,
            //     priceIncrease: 5000,
            //     quantity: 0,
            // },
            // {
            //     id: 5,
            //     sec: false,
            //     name: "Vue.js",
            //     image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860538/skill-icons_vuejs_t5pp0w.svg",
            //     effect: "ajoute +1 k par clic",
            //     expEffect: 1000,
            //     description: "Langage de balisage utilisé pour créer des pages Web.",
            //     price: 50000,
            //     priceIncrease: 10000,
            //     quantity: 0,
            // },
            // {
            //     id: 6,
            //     sec: false,
            //     name: "Vite",
            //     image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_vite_xxscpc.svg",
            //     effect: "ajoute +5 k par clic",
            //     expEffect: 5000,
            //     description: "Langage de balisage utilisé pour créer des pages Web.",
            //     price: 500000,
            //     priceIncrease: 500000,
            //     quantity: 0,
            // },
        ],
        contentCardsBack: [
            {
                id: 1,
                sec: false,
                name: "Node.js",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860539/skill-icons_nodejs_vhmhcm.svg",
                effect: "ajoute +10 k au clic",
                expEffect: 10000,
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 1000000,
                priceIncrease: 500000,
                quantity: 0,
            },
            {
                id: 2,
                sec: false,
                name: "Express.js",
                image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1681860540/skill-icons_expressjs_ndpwpu.svg",
                effect: "ajoute +50 k par seconde",
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
                effect: "ajoute +500 k au clic",
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
                effect: "ajoute +1 M par seconde",
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
                effect: "ajoute +10 M par clic",
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
                description: "Langage de balisage utilisé pour créer des pages Web.",
                price: 5000000000,
                priceIncrease: 5000000000,
                quantity: 0,
            },
        ],
        exp: 10000000000,
        expAdd: 1,
        expAddSec: 0,

        ifFront: true,
        ifBack: false,
        whatStack: 'Front-end',
    }),
    actions: {
        async getContentFront(){
            const querySnapshot = await getDocs(collection(db, "contentCardsFront"))
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
                let contentFront = {
                    id: doc.id,
                    sec: doc.data().sec,
                    name: doc.data().name,
                    image: doc.data().image,
                    effect: doc.data().effect,
                    expEffect: doc.data().expEffect,
                    description: doc.data().description,
                    price: doc.data().price,
                    priceIncrease: doc.data().priceIncrease,
                    quantity: doc.data().quantity,
                }
                this.contentCardsFront.push(contentFront)
            })
        },
        increaseExp() {
            this.exp += this.expAdd
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
        buyCodeFront(id) {
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
    },
    getters: {
    },
    // persist: true,
});

