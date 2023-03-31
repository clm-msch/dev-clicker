<template>
	<div class="fixed z-2 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.cssPrice == 100" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 1/5</p>
			<p>Pour commencer tu peux développer jusqu'a débloquer le CSS.</p>
		</div>
	</div>

	<div class="fixed z-2 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.cssPrice >= 200 && data.jsPrice == 1000" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 2/5</p>
			<p>Maintenant que tu as débloqué le CSS il ne te manque plus que le JavaScript pour débloquer ta première missions.</p>
		</div>
	</div>

	<div class="fixed z-2 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.jsPrice == 2000  && data.ifJob1 == false" class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
			<p class="font-semibold mb-2">Tutoriel étape 3/5</p>
			<p>Parfait ! Maintenant rendez-vous dans l'onglet "Missions"</p>
		</div>
	</div>
</template>
<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>

