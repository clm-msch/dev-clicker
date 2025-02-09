<template>
	<div class="pt-8 pb-16">
		<AuthPopup />
		<Trophies />
		<div
			class="flex items-center justify-center gap-4 mb-2 sm:justify-start"
		>
			<h1 class="text-3xl font-bold">CODE</h1>
			<p>Développe tes compétences et accumule de l'expérience.</p>
		</div>
		<div class="flex flex-wrap justify-center gap-4 mb-4 sm:justify-start">
			<!-- Bouton d'incrémentation de l'éxpérience -->
			<button
				@keydown.enter.prevent
				@click="data.increaseExp"
				class="inline-flex items-center justify-center px-12 space-x-3 bg-white border-4 rounded-lg shadow-md dev-button w-80 h-28 py-9 border-primary hover:border-dark_primary"
			>
				<p class="text-3xl font-bold text-gray-800">Développe</p>
				<img
					class="w-1/5 h-10 rounded-lg"
					src="../assets/icons/basics/brain.svg"
				/>
			</button>
			<!-- Bouton d'incrémentation de l'éxpérience -->
			<div
				class="flex flex-col justify-center px-3 text-center bg-white rounded-lg shadow-md w-80 h-28 py-9"
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
					<strong class="font-bold">
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
		<div class="flex justify-center my-4 sm:justify-start">
			<label class="relative inline-flex items-center -z-1">
				<input
					@click="data.changeStack()"
					type="checkbox"
					class="sr-only peer"
				/>
				<div
					class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
				></div>
				<span
					class="ml-4 font-medium text-gray-900 text-md dark:text-dark_grey"
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
<!-- 
		<button @click="data.resetAll()" class="p-2 font-bold text-white bg-red-500 rounded-lg">
			Reset
		</button> -->
	</div>
</template>

<script setup>
/*
  imports
*/
import { onMounted } from "vue"
import AuthPopup from "../components/Auth-Popup.vue"
import Trophies from "../components/Trophies.vue"
import CodeCardFront from "../components/Code-card-front.vue"
import CodeCardBack from "../components/Code-card-back.vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()
/*
  exp method
*/
onMounted(() => {
	// data.getContentFront()
	data.increaseExpSec()
})
</script>
