<template>
	<div class="pt-8 pb-16">
		<div
			class="mb-2 flex items-center justify-center sm:justify-start gap-4"
		>
			<h1 class="text-3xl font-bold">TROPHÉES</h1>
			<p>Galerie des tes succès de jeu, débloque les tous !</p>
		</div>
		<div class="flex flex-col justify-center gap-4">
			<p class="font-bold sm:text-left text-center">
				Trophées de Front :
			</p>
		</div>
		<div class="flex sm:justify-start justify-center flex-wrap gap-4 mb-2">
			<!-- Start -->
			<!-- Desac achivement 1 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesFront1"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100">5 HTML</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 1 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesFront1"
			>
				<div class="flex space-x-2 items-center d w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-bronze.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">On commence !</span>
						<br /><span class="text-sm text-white">5 HTML</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +10<br />au clics
				</p>
			</div>
			<!-- Desac achivement 2 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesFront2"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100">10 CSS</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 2 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesFront2"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-argent.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white"
							>Un peu de style</span
						>
						<br /><span class="text-sm text-white">10 CSS</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +15<br />par secondes
				</p>
			</div>
			<!-- Desac achivement 3 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesFront3"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>10 Javascript</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>

			<!-- html achivement 3 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesFront3"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-or.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white"
							>C'est du sérieux</span
						>
						<br /><span class="text-sm text-white"
							>10 Javascript</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +20<br />au clics
				</p>
			</div>
			<!-- Desac achivement 4 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesFront4"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>5 Tailwind</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 4 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesFront4"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-ruby.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">SPLENDIDE !</span>
						<br /><span class="text-sm text-white">5 Tailwind</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +500<br />par seconde
				</p>
			</div>
			<!-- Desac achivement 5 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesFront5"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>10 Vue.js</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 5 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesFront5"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-emmeraude.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">React ? Mouais</span>
						<br /><span class="text-sm text-white">10 Vue.js</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +3 k<br />au clics
				</p>
			</div>
			<!-- Desac achivement 6 -->
			<div
				class="inline-flex space-x-2 items-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesFront6"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>10 Vite.js</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 6 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesFront6"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/html-platine.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">Boss du Front</span>
						<br /><span class="text-sm text-white">10 Vite.js</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +10 k<br />au clics
				</p>
			</div>
			<!-- End -->
		</div>
		<div class="flex flex-col justify-center gap-4">
			<p class="font-bold sm:text-left text-center">Trophées de Back :</p>
		</div>
		<div class="flex sm:justify-start justify-center flex-wrap gap-4 mb-2">
			<!-- Start -->
			<!-- Desac achivement 1 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesBack1"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>5 Node.js</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 1 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesBack1"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-bronze.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">ComeBACK</span>
						<br /><span class="text-sm text-white">5 Node.js</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +20 k<br />au clics
				</p>
			</div>
			<!-- Desac achivement 2 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesBack2"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>10 Express.js</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 2 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesBack2"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-argent.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">En route !</span>
						<br /><span class="text-sm text-white"
							>10 Express.js</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +100 k<br />par secondes
				</p>
			</div>
			<!-- Desac achivement 3 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesBack3"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>10 Prisma</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>

			<!-- html achivement 3 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesBack3"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-or.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">Un vrai Model</span>
						<br /><span class="text-sm text-white">10 Prisma</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +1 M<br />au clics
				</p>
			</div>
			<!-- Desac achivement 4 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesBack4"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>5 MongoDB</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 4 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesBack4"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-ruby.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">Stocké direct</span>
						<br /><span class="text-sm text-white">5 MongoDB</span>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +5 M<br />par seconde
				</p>
			</div>
			<!-- Desac achivement 5 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesBack5"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>Acquiert 10 Docker</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 5 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesBack5"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-emmeraude.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">CONTENERISE</span>
						<br /><span class="text-sm text-white"
							>Acquiert 10 Docker</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +20 M<br />au clics
				</p>
			</div>
			<!-- Desac achivement 6 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg shadow-lg"
				v-if="!data.trophiesBack6"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							>Acquiert 10 Vercel</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white"></p>
			</div>
			<!-- html achivement 6 -->
			<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
				v-if="data.trophiesBack6"
			>
				<div class="flex space-x-2 items-center w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/trophies/node-platine.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-white">Boss du Back</span>
						<br /><span class="text-sm text-white"
							>Acquiert 10 Vercel</span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					Ajoute +100 M<br />au clics
				</p>
			</div>
			<!-- End -->
		</div>
	</div>
</template>
<script setup>
/*
  imports
*/
import { useDataStore } from "../stores/data"
import { onMounted } from "vue"
const data = useDataStore()

onMounted(() => {
	setInterval(() => {
		data.activeTrophiesFront1()
		data.activeTrophiesFront2()
		data.activeTrophiesFront3()
		data.activeTrophiesFront4()
		data.activeTrophiesFront5()
		data.activeTrophiesFront6()

		data.activeTrophiesBack1()
		data.activeTrophiesBack2()
		data.activeTrophiesBack3()
		data.activeTrophiesBack4()
		data.activeTrophiesBack5()
		data.activeTrophiesBack6()
	}, 1000)
})
</script>
