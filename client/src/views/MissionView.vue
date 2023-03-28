<script setup>
import TutoMissions from "../components/TutoMissions.vue"
import { useDataStore } from '..//stores/data'
const data = useDataStore()
</script>
<template>
	<h1 class="font-bold text-3xl">MISSIONS :</h1>
	<TutoMissions :haveMission="firstMission" />

	<h1 class="text-xl">
		Compte en banque : <strong>{{ data.money }} €</strong>
	</h1>
	<br />

	<div class="inline-flex gap-4 pt-4 flex-wrap justify-start">
		<!-- 1 job card -->
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
			<button @click="applyMission1" class="inline-flex job-apply">
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
			<button @click="incrementProgress1" class="inline-flex job-apply">
				<p>Développe</p>
			</button>
		</div>
		<!-- 1 job card -->

		<!-- 2 job card -->
		<div class="job-card" v-if="!ifJob2">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/crea.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 100 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>Réalisation du
					front d'une web app assez <br />
					simple pour vendre nos services.
				</p>

				<p class="font-bold">Compétences requise :</p>
			</div>
			<div class="skill-list">
				<p class="skill-tag">JavaScript</p>
				<p class="skill-tag">TailWind</p>
				<p class="skill-tag">Vue.js</p>
			</div>
			<button @click="applyMission2" class="inline-flex job-apply">
				<p>Proposer ces services</p>
				<img src="../assets/icons/basics/plus_logo.svg" alt="" />
			</button>
		</div>

		<!-- Job Apply -->

		<div v-if="ifJob2" class="job-card">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/crea.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 100 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>Réalisation du
					front d'une web app assez <br />
					simple pour vendre nos services.
				</p>
			</div>
			<p class="font-bold">Avancement du projet :</p>
			<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
				<div
					ref="progress"
					class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					:style="{ width: progressValue2 + '%' }"
				>
					{{ progressValue2 }}%
				</div>
			</div>
			<button @click="incrementProgress2" class="inline-flex job-apply">
				<p>Développe</p>
			</button>
		</div>
		<!-- 2 job card -->
		<!-- 3 job card -->
		<div class="job-card" v-if="!ifJob3">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/devwork.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 200 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>En vrai on est
					paumé faite juste de <br />
					l'informatique on a besoin de vous.
				</p>

				<p class="font-bold">Compétences requise :</p>
			</div>
			<div class="skill-list">
				<p class="skill-tag">TailWind</p>
				<p class="skill-tag">Vue.js</p>
				<p class="skill-tag">Vite.js</p>
			</div>
			<button @click="applyMission3" class="inline-flex job-apply">
				<p>Proposer ces services</p>
				<img src="../assets/icons/basics/plus_logo.svg" alt="" />
			</button>
		</div>

		<!-- Job Apply -->

		<div v-if="ifJob3" class="job-card">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/devwork.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 200 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>En vrai on est
					paumé faite juste de <br />
					l'informatique on a besoin de vous.
				</p>
			</div>
			<p class="font-bold">Avancement du projet :</p>
			<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
				<div
					ref="progress"
					class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					:style="{ width: progressValue3 + '%' }"
				>
					{{ progressValue3 }}%
				</div>
			</div>
			<button @click="incrementProgress3" class="inline-flex job-apply">
				<p>Développe</p>
			</button>
		</div>
		<!-- 3 job card -->
	</div>
</template>
<script>
export default {
	name: "MissionView",
	data() {
		return {
			firstMission: false,
			progressValue: 5,
			progressValue2: 5,
			progressValue3: 5,
			// money: 0,
			ifJs: true,
			ifCss: true,
			ifTailwind: true,
			ifVue: true,
			ifVite: true,
			ifJob1: false,
			ifJob2: false,
			ifJob3: false,
		}
	},
	components: {
		TutoMissions,
	},
	methods: {
		incrementProgress1() {
			if (this.progressValue >= 100) {
				this.progressValue = 0
				this.data.money += 10
			} else {
				this.progressValue += 5
			}
		},
		incrementProgress2() {
			if (this.progressValue2 >= 100) {
				this.progressValue2 = 0
				this.data.money += 100
			} else {
				this.progressValue2 += 5
			}
		},
		incrementProgress3() {
			if (this.progressValue3 >= 100) {
				this.progressValue3 = 0
				// this.data.money += 200
				this.data.increaseMoney(200)
			} else {
				this.progressValue3 += 5
			}
		},
		applyMission1() {
			// if (this.ifJs == true && this.ifCss == true) {
				this.ifJob1 = true
				this.firstMission = true
				this.saveToLocalStorage("firstMission", this.firstMission)
			// }
		},
		applyMission2() {
			this.ifJob2 = true
		},
		applyMission3() {
			this.ifJob3 = true
		},
		// saveToLocalStorage(key, value) {
		// 	localStorage.setItem(key, JSON.stringify(value))
		// 	console.log("Data saved in local storage")
		// },
		// loadFromLocalStorage(key) {
		// 	const value = localStorage.getItem(key)
		// 	return value ? JSON.parse(value) : null
		// },
	},
	created() {
		setInterval(() => {
			this.incrementProgress1()
			this.incrementProgress2()
			this.incrementProgress3()
			// this.saveToLocalStorage("money", this.money)
		}, 1000)
	},
	// mounted() {
	// 	this.firstMission = this.loadFromLocalStorage("firstMission")
	// 	this.money = this.loadFromLocalStorage("money") || 0

	// },
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
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
	background: #242938;
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
