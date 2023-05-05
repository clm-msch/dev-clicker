<template>
	<div
		v-if="data.trophiesPopFront1"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<!-- html achivement 1 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopFront2"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
		>
			<div class="flex space-x-2 items-center w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/trophies/html-argent.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Un peu de style</span>
					<br /><span class="text-sm text-white">10 CSS</span>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +15<br />par secondes
			</p>
		</div>
	</div>
	<div
		v-if="data.trophiesPopFront3"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
		>
			<div class="flex space-x-2 items-center w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/trophies/html-or.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">C'est du sérieux</span>
					<br /><span class="text-sm text-white">10 Javascript</span>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +20<br />au clics
			</p>
		</div>
	</div>
	<div
		v-if="data.trophiesPopFront4"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopFront5"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopFront6"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopBack1"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopBack2"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
					<br /><span class="text-sm text-white">10 Express.js</span>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +100 k<br />par secondes
			</p>
		</div>
	</div>
	<div
		v-if="data.trophiesPopBack3"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopBack4"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg shadow-lg"
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
	</div>
	<div
		v-if="data.trophiesPopBack5"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
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
	</div>
	<div
		v-if="data.trophiesPopBack6"
		class="fixed z-20 bottom-4 right-4 animate__animated animate__tada"
	>
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
	</div>
</template>

<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>
