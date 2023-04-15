<template>
	<div class="fixed z-2 top-4 right-4">
		<div v-if="!step2" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 1/5</p>
			<p>Pour commencer tu peux développer jusqu'a débloquer le CSS.</p>
			
		</div>
	</div>

	<div class="fixed z-2 top-4 right-4">
		<div v-if="step2 && !step3" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 2/5</p>
			<p>Maintenant que tu as débloqué le CSS il ne te manque plus que le JavaScript pour débloquer ta première missions.</p>
		</div>
	</div>

	<div class="fixed z-2 top-4 right-4">
		<div v-if="step3 && !ifMission" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 3/5</p>
			<p>Parfait ! Maintenant rendez-vous dans l'onglet "Missions"</p>
			
		</div>
	</div>
</template>

<script>

export default {
	props: {
		haveCss: {
			type: String,
			required: true,
		},
		haveJs: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			step2: false, 
			step3: false,
			ifMission: false,
		}
	},
	computed : {
		step2() {
			if (this.haveCss >= 1) {
				return true
			} else {
				return false
			}
		},
		step3() {
			if (this.haveJs >= 10) {
				return true
			} else {
				return false
			}
		},
		ifMission() {
			const value = localStorage.getItem('firstMission');
			return value ? JSON.parse(value) : null;
			this.ifMission = value;
		},
	},
	methods: {
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
	},
	mounted() {
		this.ifMission = this.loadFromLocalStorage('firstMission')
	},
}
</script>
