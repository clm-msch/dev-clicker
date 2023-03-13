<template>
	<div>
		<button @click="addExp">
			Développe <img src="../assets/icons/basics/brain_logo_60x60.svg" />
		</button>
		<section>
			<div>
				<h2>Expérience : {{ exp }}</h2>
				<h2>10 Expérience par seconde</h2>
			</div>
			<button @click="resetAll" style="background-color: brown;">RESET</button>
		</section>
	</div>
</template>

<script>
export default {
	name: "CodePage",
	data() {
		return {
			exp: 0,
			expSecond: 0,
		}
	},
	methods: {
		// Buttons mehtods
		addExp() {
			this.exp ++
			this.saveToLocalStorage("exp", this.exp)
		},
		resetAll() {
			// this.exp = 0
			// this.saveToLocalStorage("exp", this.exp)
			localStorage.clear()
			console.log("All data deleted from local storage")
		},

		// Local storage methods
		saveToLocalStorage(key, value) {
			localStorage.setItem(key, JSON.stringify(value))
			console.log("Data saved in local storage")
		},
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
		loadCodeData() {
			this.exp = this.loadFromLocalStorage("exp") || 0
		},
	},
	mounted() {
		this.loadCodeData()
	},
}
</script>
