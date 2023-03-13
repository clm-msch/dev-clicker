<template>
	<div>
		<h1>Score: {{ score }}</h1>
		<h2>Level: {{ level }}</h2>
		<button @click="incrementScore">Increment Score</button>
		<button @click="incrementLevel">Increment Level</button>
		<button @click="resetData">Reset Data</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			score: 0,
			level: 1,
		}
	},
	methods: {
		incrementScore() {
			this.score++
			this.saveToLocalStorage("score", this.score)
		},
		incrementLevel() {
			this.level++
			this.saveToLocalStorage("level", this.level)
		},
		saveToLocalStorage(key, value) {
			localStorage.setItem(key, JSON.stringify(value))
		},
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
		loadGameData() {
			this.score = this.loadFromLocalStorage("score") || 0
			this.level = this.loadFromLocalStorage("level") || 1
		},
		resetData() {
			localStorage.clear()
			this.score = 0
			this.level = 1
		},
	},
	mounted() {
		this.loadGameData()
	},
}
</script>
