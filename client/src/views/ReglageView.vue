<template>
	<div>
		<div class="flex-row">
			<h2>⚠️Tu peux tous recommencer si tu veux⚠️</h2>
			<button
				@click="resetAll"
				class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				🗑️ Resart
			</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		resetData() {
			localStorage.clear()
			window.location.reload()



		},
	},
}
</script>

<style lang="scss" scoped></style>
