<template>
	<div class="pt-8 pb-16">
		<div
			class="mb-2 flex items-center justify-center sm:justify-start gap-4"
		>
			<h1 class="text-3xl font-bold">CODE</h1>
			<p>Développe tes compétences et accumule de l'expérience</p>
		</div>
		<div class="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
			<!-- Bouton d'incrémentation de l'éxpérience -->
			<button
				@keydown.enter.prevent
				@click="data.increaseExp"
				class="inline-flex space-x-3 items-center justify-center w-80 h-28 px-12 py-9 bg-white border-4 rounded-lg border-primary hover:border-dark_primary shadow-md"
			>
				<p class="text-3xl font-bold text-gray-800">Développe</p>
				<img
					class="w-1/5 h-10 rounded-lg"
					src="../assets/icons/basics/brain.svg"
				/>
			</button>
			<!-- Bouton d'incrémentation de l'éxpérience -->
			<div
				class="flex flex-col text-center justify-center w-80 h-28 px-3 py-9 bg-white shadow-md rounded-lg"
			>
				<p class="text-xl">
					Expérience :
					<strong>{{
						data.exp.toLocaleString("fr-FR", {
							minimumFractionDigits: 0,
							maximumFractionDigits: 4,
							notation: "compact",
						})
					}}</strong>
					exp
				</p>
				<p class="text-sm">
					<strong>
						{{
							data.expAddSec.toLocaleString("fr-FR", {
								minimumFractionDigits: 0,
								maximumFractionDigits: 4,
								notation: "compact",
							})
						}}
					</strong>
					par seconde et
					<strong>
						{{
							data.expAdd.toLocaleString("fr-FR", {
								minimumFractionDigits: 0,
								maximumFractionDigits: 4,
								notation: "compact",
							})
						}}
					</strong>
					par clic
				</p>
			</div>
		</div>
		<!-- Toggle button -->
		<div class="flex my-4 justify-center sm:justify-start">
			<label
				
				class="relative -z-1 inline-flex items-center"
			>
				<input @click="data.changeStack()" type="checkbox" class="sr-only peer" />
				<div
					class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
				></div>
				<span
					class="ml-4 text-md font-medium text-gray-900 dark:text-dark_grey"
				>
					{{ data.whatStack }}
				</span>
			</label>
		</div>
		<!-- Toggle button -->
		<div class="flex flex-col gap-4">
			<CodeCardFront v-if="data.ifFront" />
			<CodeCardBack v-if="data.ifBack" />
		</div>
	</div>
</template>

<script setup>
/*
  imports
*/
import { onMounted } from "vue"
import CodeCardFront from "../components/Code-card-front.vue"
import CodeCardBack from "../components/Code-card-back.vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()
/*
  exp method
*/
onMounted(() => {
  data.getContentFront()
	data.increaseExpSec()
})
</script>
