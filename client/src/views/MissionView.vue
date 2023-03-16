<script setup>
import TutoMissions from "../components/TutoMissions.vue"
</script>
<template>
	<h1 class="font-bold">MISSION</h1>
	<TutoMissions :haveMission="firstMission" />

	<p>Compte en banque {{ money }} €</p>

	<div class="job-card" v-if="!ifJob1">
		<div class="inline-flex gap-2">
			<p class="font-bold">Entreprise :</p>
			<img src="../assets/icons/entreprise/unito.svg" />
		</div>
		<div>
			<p>
				<span class="font-bold"> Salaire :</span
				><span class="text-primary font-bold"> 10 € </span>par
				avancement
			</p>
			<p>
				<span class="font-bold">Description :</span>Réalisation d'un
				site vitrine pour présenter
				<br />
				nos nouveau produit de grande qualité.
			</p>

			<p class="font-bold">Compétences requise :</p>
		</div>
		<div class="skill-list">
			<p class="skill-tag">HTML</p>
			<p class="skill-tag">CSS</p>
			<p class="skill-tag">JavaScript</p>
		</div>
		<button @click="applyMission" class="inline-flex job-apply">
			<p>Proposer ces services</p>
			<img src="../assets/icons/basics/plus_logo.svg" alt="" />
		</button>
	</div>

	<!-- Job Apply -->

	<div v-if="ifJob1" class="job-card">
		<div class="inline-flex gap-2">
			<p class="font-bold">Entreprise :</p>
			<img src="../assets/icons/entreprise/unito.svg" />
		</div>
		<div>
			<p>
				<span class="font-bold"> Salaire :</span
				><span class="text-primary font-bold"> 10 € </span>par
				avancement
			</p>
			<p>
				<span class="font-bold">Description :</span>Réalisation d'un
				site vitrine pour présenter
				<br />
				nos nouveau produit de grande qualité.
			</p>
		</div>
		<p class="font-bold">Avancement du projet :</p>
		<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
			<div
				ref="progress"
				class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
				:style="{ width: progressValue + '%' }"
			>
				{{ progressValue }}%
			</div>
		</div>
		<button @click="incrementProgress" class="inline-flex job-apply">
			<p>Développe</p>
		</button>
	</div>
</template>

<script>
export default {
	name: "MissionView",
	data() {
		return {
			firstMission: false,
			progressValue: 5,
			money: 0,
			ifJs: true,
			ifCss: true,
			ifJob1: false,
		}
	},
	components: {
		TutoMissions,
	},
	methods: {
		incrementProgress() {
			if (this.progressValue >= 100) {
				this.progressValue = 0
				this.money += 10
			} else {
				this.progressValue += 5
			}
		},
		applyMission() {
            if (this.ifJs == true && this.ifCss == true) {
                this.ifJob1 = true
                this.firstMission = true
			this.saveToLocalStorage("firstMission", this.firstMission)
            }

            
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
		this.firstMission = this.loadFromLocalStorage("firstMission")
	},
}
</script>

<style scoped>
.job-card {
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 8px;
	padding: 8px;
	gap: 6px;
}

.skill-list {
	display: flex;
	gap: 12px;
}

.skill-tag {
	font-size: medium;
	color: white;
	padding: 8px;
	border-radius: 4px;
	background:#242938;
}

.job-apply {
	justify-content: center;
	background: #4f46e5;
	font-size: large;
	font-weight: bold;
	color: white;
	padding: 8px;
	border-radius: 4px;
	gap: 4px;
}

.bar {
	transition: width 0.1s ease-in-out;
}
</style>
