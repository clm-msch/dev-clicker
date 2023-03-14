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
			<button @click="resetAll" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				RESET
			</button>
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
			this.exp++
			this.saveToLocalStorage("exp", this.exp)
		},
		resetAll() {
			if (
				confirm("Voulez-vous vraiment supprimer toutes les données ?")
			) {
				localStorage.clear()
				location.reload()
			}
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
