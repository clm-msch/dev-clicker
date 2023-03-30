<script setup>
// import TutoMissions from "../components/TutoMissions.vue"
import { useDataStore } from "..//stores/data"
const data = useDataStore()
</script>
<template>
	<h1 class="font-bold text-3xl">MISSIONS</h1>
	<br>
	<br>
	<!-- <TutoMissions :haveMission="firstMission" /> -->
	<div class="flex row-flex bg-white justify-center dev-button">
		<p class="text-xl">
			Compte en banque : <strong>{{ data.moneyFormat }} €</strong>
		</p>
	</div>
	<br />
	<div class="flex gap-2 flex-wrap">
		<!-- 1 job card -->
		<div class="job-card">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/unito.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 50 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>Site vitrine pour un client non exigent. <br />
					Débutant accépté.
				</p>

				<p class="font-bold">Compétences requise :</p>
			</div>

			<div v-if="!data.ifJob1" class="skill-list">
				<p class="skill-tag">HTML</p>
				<p class="skill-tag">CSS</p>
				<p class="skill-tag">JavaScript</p>
			</div>
			<!-- @click="data.ifJob1 = true" -->
			<button
				v-if="!data.ifJob1"
				@click="data.activeJob1()"
				class="inline-flex job-apply"
			>
				<p>Proposer ces services</p>
				<img src="../assets/icons/basics/plus_logo.svg" />
			</button>

			<p v-if="data.ifJob1" class="font-bold">Avancement du projet :</p>
			<div
				v-if="data.ifJob1"
				class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
			>
				<div
					v-if="data.ifJob1"
					ref="progress"
					class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					:style="{ width: data.progressValue3 + '%' }"
				>
					{{ data.progressValue3 }}%
				</div>
			</div>
			<button
				v-if="data.ifJob1"
				@click="data.increaseJobProgress3(5, 50)"
				class="inline-flex job-apply"
			>
				<p>Développe</p>
			</button>
		</div>
		<!-- 1 job card -->

		<!-- 2 job card -->
		<div class="job-card">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/devwork.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 150 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>Création d'une Webapp pour la gestion <br />
					d'un magasin de vêtements.
					
				</p>

				<p class="font-bold">Compétences requise :</p>
			</div>

			<div v-if="!data.ifJob2" class="skill-list">
				<p class="skill-tag">JavaScript</p>
				<p class="skill-tag">Tailwind</p>
				<p class="skill-tag">Vue.js</p>
			</div>
			<button
				v-if="!data.ifJob2"
				@click="data.activeJob2()"
				class="inline-flex job-apply"
			>
				<p>Proposer ces services</p>
				<img src="../assets/icons/basics/plus_logo.svg" />
			</button>

			<p v-if="data.ifJob2" class="font-bold">Avancement du projet :</p>
			<div
				v-if="data.ifJob2"
				class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
			>
				<div
					v-if="data.ifJob2"
					ref="progress"
					class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					:style="{ width: data.progressValue2 + '%' }"
				>
					{{ data.progressValue2 }}%
				</div>
			</div>
			<button
				v-if="data.ifJob2"
				@click="data.increaseJobProgress2(2, 150)"
				class="inline-flex job-apply"
			>
				<p>Développe</p>
			</button>
		</div>
		<!-- 2 job card -->

		<!-- 3 job card -->
		<div class="job-card">
			<div class="inline-flex gap-2">
				<p class="font-bold">Entreprise :</p>
				<img src="../assets/icons/entreprise/crea.svg" />
			</div>
			<div>
				<p>
					<span class="font-bold"> Salaire :</span
					><span class="text-primary font-bold"> 200 € </span>par
					avancement
				</p>
				<p>
					<span class="font-bold">Description :</span>Besoin URGENT
					pour la refonte de <br />
					notre dashboard de gestion de projet.
				</p>

				<p class="font-bold">Compétences requise :</p>
			</div>

			<div v-if="!data.ifJob3" class="skill-list">
				<p class="skill-tag">TailWind</p>
				<p class="skill-tag">Vue.js</p>
				<p class="skill-tag">Vite.js</p>
			</div>
			<button
				v-if="!data.ifJob3"
				@click="data.activeJob3()"
				class="inline-flex job-apply"
			>
				<p>Proposer ces services</p>
				<img src="../assets/icons/basics/plus_logo.svg" />
			</button>

			<p v-if="data.ifJob3" class="font-bold">Avancement du projet :</p>
			<div
				v-if="data.ifJob3"
				class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
			>
				<div
					v-if="data.ifJob3"
					ref="progress"
					class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					:style="{ width: data.progressValue1 + '%' }"
				>
					{{ data.progressValue1 }}%
				</div>
			</div>
			<button
				v-if="data.ifJob3"
				@click="data.increaseJobProgress1(1, 200)"
				class="inline-flex job-apply"
			>
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
			// progressValue3: 5,
			// money: 0,
			ifJs: true,
			ifCss: true,
			ifTailwind: true,
			ifVue: true,
			ifVite: true,
			// ifJob1: false,
			// ifJob2: false,
			// ifJob3: false,
		}
	},
	methods: {
		applyMission3() {
			this.ifJob3 = true
		},
		applyMission2() {
			this.ifJob2 = true
		},
		applyMission1() {
			this.ifJob1 = true
		},
	},
	// created() {
	// 	setInterval(() => {
	// 		// this.incrementProgress1()
	// 		// this.incrementProgress2()
	// 		this.data.progressValue += 5
	// 		// this.saveToLocalStorage("money", this.money)
	// 	}, 1000)
	// },
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

.dev-button {
	padding: 25px;
	padding-left: 68px;
	padding-right: 68px;
	border-radius: 8px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
