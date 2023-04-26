import { defineStore } from 'pinia';
import { collection, onSnapshot, doc, setDoc, addDoc, updateDoc, orderBy, query } from "firebase/firestore"
import { db } from '.././js/firebase.js'
import { useAuthStore } from "../stores/auth"
let collectionRef
let querySnapshot
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
            //     description: "Framework CSS qui fournit une bibliothèque de classes prêtes à l'emploi pour faciliter la mise en forme des pages Web.",
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
            //     description: "Framework JavaScript permettant de créer des applications Web interactives et dynamiques.",
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
            //     description: "Outil de construction rapide pour les applications Web modernes, basé sur JavaScript.",
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
                description: "Une plateforme cloud qui permet de déployer et de gérer des applications Web statiques et dynamiques, ainsi que des fonctions serverless.",
                price: 5000000000,
                priceIncrease: 5000000000,
                quantity: 0,
            },
        ],
        exp: 1,
        expAdd: 1,
        expAddSec: 0,

        ifFront: true,
        ifBack: false,
        whatStack: 'Front-end',
    }),
    actions: {
        async initData() {
            const storeAuth = useAuthStore()
            await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "1"), {
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
            });
            await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "2"), {
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
            });
            await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "3"), {
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
            });
            await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "4"), {
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
            });
            await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "5"), {
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
            });
            await setDoc(doc(db, "UserData", storeAuth.user.email, "contentCardsFront", "6"), {
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
            });
        },

        async getContentFront() {
            const storeAuth = useAuthStore()
            collectionRef = collection(db, "UserData", storeAuth.user.email, "contentCardsFront")
            querySnapshot = query(collectionRef, orderBy("order", "asc"))

            onSnapshot(collectionRef, (querySnapshot) => {
                let contentCardsFront = []
                querySnapshot.forEach((doc) => {
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
                    contentCardsFront.push(contentFront)
                })
                this.contentCardsFront = contentCardsFront
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
        async buyCodeFront(id) {
            const storeAuth = useAuthStore()
            collectionRef = collection(db, "UserData", storeAuth.user.email, "contentCardsFront")
            const card = this.contentCardsFront.find(card => card.id === id)
            if (this.exp >= card.price && card.sec == false) {
                this.exp -= card.price
                this.expAdd += card.expEffect
                card.quantity++
                card.price += card.priceIncrease
                await updateDoc(doc(db,"UserData", storeAuth.user.email, "contentCardsFront", id), {
                    quantity: card.quantity,
                    price: card.price,
                })
            }
            if (this.exp >= card.price && card.sec == true) {
                this.exp -= card.price
                this.expAddSec += card.expEffect
                card.quantity++
                card.price += card.priceIncrease
                await updateDoc(doc(db,"UserData", storeAuth.user.email, "contentCardsFront", id), {
                    quantity: card.quantity,
                    price: card.price,
                })
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
        // resetAll() {
        //     this.contentCardsFront = []
        // }
    },
    getters: {
    },
    // persist: true,
});

