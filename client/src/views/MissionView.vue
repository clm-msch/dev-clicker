<script setup>
    import TutoMissions from '../components/TutoMissions.vue';
</script>
<template>
    <h1>MISSION</h1>
    <TutoMissions :haveMission="firstMission" />


    <div class="inline-flex flex-col space-y-0.5 items-start justify-start p-2 bg-white rounded-lg" style="width: 422px; height: 187px;">
    <div class="flex flex-col space-y-1.5 items-start justify-start" style="width: 406px; height: 120px;">
        <div class="inline-flex space-x-1 items-start justify-start">
            <p class="text-base font-semibold text-gray-800">Entreprise :</p>
            <img class="w-20 h-full rounded-lg" src="../assets/icons/entreprise/unito.svg"/>
        </div>
        <p class="text-base text-gray-800">Salaire à la livraison : 100 €</p>
        <p class="text-base text-gray-800" style="width: 406px; height: 40px;">Description : Besoin d’un petit site vitrine pour présenter notre nouveau produit de notre entreprise.</p>
        <p class="text-base font-semibold text-gray-800">Minimum de compétence :</p>
    </div>
    <div class="inline-flex space-x-40 items-end justify-start pt-0.5" style="width: 440px; height: 120px;">
        <div class="flex space-x-1 items-start justify-start pt-1.5">
            <div class="flex items-start justify-start p-2.5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg">
                <p class="text-base font-medium text-purple-100">HTML</p>
            </div>
            <div class="flex items-start justify-start p-2.5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg">
                <p class="text-base font-medium text-purple-100">CSS</p>
            </div>
            <div class="flex items-start justify-start p-2.5 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg">
                <p class="text-base font-medium text-purple-100">JavaScript</p>
            </div>
        </div>
        <button @click="applyMission" class="flex items-center justify-center transform rotate-1 w-8 h-8 p-1 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg">
            <img class="flex-1 h-full rounded-lg" src="../assets/icons/basics/plus_logo.svg"/>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'MissionView',
    data() {
        return {
            firstMission: false,
        }
    },
    components: {
        TutoMissions,
    },
    methods: {
        applyMission() {
            this.firstMission = true
            this.saveToLocalStorage('firstMission', this.firstMission)
        },
        saveToLocalStorage(key, value) {
			localStorage.setItem(key, JSON.stringify(value))
			console.log("Data saved in local storage")
		},
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
    },
    mounted() {
        this.firstMission = this.loadFromLocalStorage('firstMission')
    },
}
</script>