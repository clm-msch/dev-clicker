<template>
	<div class="fixed z-2 top-4 right-4">
		<div v-if="step4 && !step5" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 4/5</p>
			<p>Oh on dirait qu'il y a une mission faite sur mesure pour toi, propose tes services.</p>

		</div>
	</div>

	<div class="fixed z-2 top-4 right-4">
		<div v-if="step5 && !visible" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 5/5</p>
			<p>Génial maintenant rempli ta mission pour recevoir la récompense (n'oublie de continuellement développer ton expérience pour finir ta mission le plus vite possible)</p>
			<button
				class="mt-4 bg-primary hover:bg-dark_grey text-white py-2 px-4 rounded"
				@click="dismiss"
			>
				Se lancer seul
			</button>
		</div>
	</div>
</template>

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
			this.step5 = false
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
