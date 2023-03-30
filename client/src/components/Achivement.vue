<template>
	<!-- html achivement 1 -->
	<div v-if="data.htmlAchivement1" class="fixed z-2 bottom-4 right-4 animate__animated animate__tada">
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-bronze.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Boss de l’HTML</span>
					<br /><span class="text-sm text-white"
						>Acquiert 5 HTML</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +20<br />au clics
			</p>
		</div>
	</div>

  	<!-- html achivement 2 -->
	<div v-if="data.htmlAchivement2" class="fixed z-2 bottom-4 right-4 animate__animated animate__tada">
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-argent.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Boss de l’HTML</span>
					<br /><span class="text-sm text-white"
						>Acquiert 5 HTML</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +20<br />au clics
			</p>
		</div>
	</div>

    	<!-- html achivement 3 -->
	<div v-if="data.htmlAchivement3" class="fixed z-2 bottom-4 right-4 animate__animated animate__tada">
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-or.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Boss de l’HTML</span>
					<br /><span class="text-sm text-white"
						>Acquiert 5 HTML</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +20<br />au clics
			</p>
		</div>
	</div>

    	<!-- html achivement 4 -->
	<div v-if="data.htmlAchivement4" class="fixed z-2 bottom-4 right-4 animate__animated animate__tada">
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-platine.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Boss de l’HTML</span>
					<br /><span class="text-sm text-white"
						>Acquiert 5 HTML</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +20<br />au clics
			</p>
		</div>
	</div>
  
  
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, watch } from "vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()

</script>
