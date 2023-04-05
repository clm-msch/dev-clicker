<template>
	<div class="flex flex-col gap-2">
		<h1 class="text-xl">
			Bienvenue dans l'onglet entreprise ici tu va créer ta propre
			entreprise de développement web !
		</h1>
		<br />
		<div
			class="bg-white p-4 rounded-lg flex items-start drop-shadow-lg justify-center gap-2"
		>
			<p>Le nom de ton entreprise :</p>
			<input
				class="bg-light_grey rounded"
				:maxlength="22"
				v-model="companyName"
				type="text"
			/>
			<button
				class="bg-primary text-white px-3 rounded"
				@click="data.affectCompanyName(companyName)"
			>
				Valider
			</button>
		</div>
	</div>
  <br>
	<div class="bg-white p-4 rounded-lg drop-shadow-lg">
    <h1 class="text-md text-center">
			Ton entreprise :
		</h1>
		<h1 class="text-2xl text-center">
			{{ data.companyName }}
		</h1>
	</div>
</template>

<script setup>
import { ref } from "vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()
const companyName = ref("")
</script>
