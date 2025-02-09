<template>
	<div class="pt-8 pb-16">
		<div
			class="flex items-center justify-center gap-4 mb-2 sm:justify-start"
		>
			<h1 class="text-3xl font-bold">Réglages</h1>
			<p>Pas grand chose ici pour le moment...</p>
		</div>
		<div>
			<button
				@click="resetAll"
				class="p-2 pl-4 pr-4 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600"
			>
				🗑️ Recommencer le jeu
			</button>
		</div>
	</div>
</template>

<script setup>
/*
	imports
*/
import { useDataStore } from "../stores/data"
/*
	store
*/
const data = useDataStore()

const resetAll = () => {
	if (confirm("Attention toute vos données seront perdues")) {
		localStorage.clear()
		window.location.reload()
		data.$reset()
	}
}
</script>
