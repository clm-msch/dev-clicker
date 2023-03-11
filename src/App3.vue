<script setup></script>
<!-- // import HtmlBonus from "./components/HtmlBonus.vue"
// import CssBonus from "./components/CssBonus.vue" -->


<template>
	<div>
		<div>
			<h1>Ton site web</h1>
		</div>
		<h1>Visits: {{ visits }}</h1>
		<button class="bg-secondary text-dark font-bold py-2 px-4 rounded" @click="incrementVisits">
			Auguement les visiteurs
		</button>
		<!-- <HtmlBonus />
		<CssBonus /> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			visits: 0,
		}
	},
	methods: {
		incrementVisits() {
			this.visits++
			this.saveVisits()
		},
		saveVisits() {
			localStorage.setItem("visits", this.visits)
		},
		loadVisits() {
			const visits = localStorage.getItem("visits")
			this.visits = visits ? parseInt(visits) : 0
		},
	},
	mounted() {
		this.loadVisits()
	},
}
</script>

<!-- <style scoped>
.site:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
</style> -->

<!-- updateHtmlPrice() {
	this.htmlPrice = Math.round(this.htmlPrice * 1.4 * 10) / 10
  },
  updateCssPrice() {
	this.cssPrice = Math.round(this.cssPrice * 1.4 * 10) / 10
  }, -->
