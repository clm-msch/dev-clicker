<template>
		<!-- Tuto 4 -->
		<div class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight">
			<div v-if="data.ifJob1 == false && data.ifTutorial4 == true" class="bg-white rounded-lg shadow-lg flex max-w-xs">
				<div class="p-4">
					<p class="font-semibold mb-2">Tutoriel étape 4/5</p>
					<p>Oh on dirait qu'il y a une mission faite sur mesure pour toi, propose donc tes services.</p>
				</div>
				<div @click="data.hideTutorial4" class="bg-primary p-4 rounded-r flex align-center">
					<img src="../assets/icons/basics/arrow-right_logo.svg">
				</div>
			</div>
		</div>
		<!-- Hide Tuto 4 -->
		<div v-if="data.ifJob1 == false && data.ifTutorial4 == false" class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight tutohide">
			<div class="bg-white rounded-lg shadow-lg max-w-xs flex">
				<div @click="data.showTutorial4" class="bg-primary p-4 rounded-l flex items-center gap-2 align-center">
					<img class="arrow-left" src="../assets/icons/basics/arrow-left_logo.svg">
					<img src="../assets/icons/basics/graduation-cap_logo.svg" class="w-1/3">
				</div>
			</div>
		</div>

	<div class="fixed z-2 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.ifJob1 == true && data.closedTuto == false" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 5/5</p>
			<p>Génial maintenant rempli ta mission pour recevoir ton salaire et continue de développer tes compétences pour pouvoir postuler a des offres encore plus rémunératrice.</p>
			<button
				class="mt-4 bg-primary hover:bg-dark_grey text-white py-2 px-4 rounded"
				@click="data.closeTuto()"
			>
				Se lancer seul
			</button>
		</div>
	</div>
</template>
<script setup>
import { useDataStore } from "..//stores/data"
const data = useDataStore()
</script>
<script>
export default {
	props: {
		haveMission: {
			type: Boolean,
			required: true,
		}
	},
	data() {
		return {
			step4: true,
			step5: false,
			visible: false,
		}
	},
	computed : {
		step5() {
			if (this.haveMission == true) {
				return true
			} else {
				return false
			}
		},
	},
	methods: {
		dismiss() {
			this.visible = true
			this.saveToLocalStorage("step5", this.step5)
			this.saveToLocalStorage("visible", this.visible)

		},
		saveToLocalStorage(key, value) {
			localStorage.setItem(key, JSON.stringify(value))
			console.log("Data saved in local storage")
		},
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
		loadCodeData() {
			this.step5 = this.loadFromLocalStorage("step5")
			this.visible = this.loadFromLocalStorage("visible") 
		},
	},
	mounted () {
		this.loadCodeData()
	},
}
</script>


<style scoped>
.arrow-left {
	width: 12px;
	height: 20px;
}
.tutohide {
	margin-right: -45px;
}
</style>
