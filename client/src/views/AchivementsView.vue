<template>
	<h1 class="text-xl">
		Ici tu va pouvoir consulter tes trophées débloqué <br>
		ils sont très important car ils te donneront des bonus puissants
	</h1>
	<br>
<p class="font-bold">Trophées de Code :</p>
<div class="flex flex-wrap gap-2">
	<!-- html achivement 1 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive1"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-bronze.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">On commence !</span>
					<br /><span class="text-sm text-white"
						>Acquiert 5 HTML</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +10<br />au clics
			</p>
		</div>

		<!-- Desac achivement  -->
		<div
		class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive1"
	>
		<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
				<img
					class="flex-1 h-full rounded-lg"
					src="../assets/icons/achivement/html-soon.svg"
				/>
			</div>
			<p class="text-gray-800">
				<span class="font-bold text-dark">A débloquer</span>
				<br /><span class="text-sm text-grey-100"
					>Acquiert 5 HTML</span
				>
			</p>
		</div>
		<p class="flex-1 text-xs font-medium text-white">
			
		</p>
	</div>

  	<!-- html achivement 2 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive2"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-argent.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Un peu de style</span>
					<br /><span class="text-sm text-white"
						>Acquiert 10 CSS</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +15<br />par seconde
			</p>
		</div>

		<!-- Desac achivement  -->
		<div
		class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive2"
	>
		<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
				<img
					class="flex-1 h-full rounded-lg"
					src="../assets/icons/achivement/html-soon.svg"
				/>
			</div>
			<p class="text-gray-800">
				<span class="font-bold text-dark">A débloquer</span>
				<br /><span class="text-sm text-grey-100"
					>Acquiert 10 CSS</span
				>
			</p>
		</div>
		<p class="flex-1 text-xs font-medium text-white">
			
		</p>
	</div>

    	<!-- html achivement 3 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive3"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-or.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">C'est du sérieux</span>
					<br /><span class="text-sm text-white"
						>Acquiert 10 JS</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +20<br />au clics
			</p>
		</div>

		<!-- Desac achivement  -->
		<div
		class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive3"
	>
		<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
				<img
					class="flex-1 h-full rounded-lg"
					src="../assets/icons/achivement/html-soon.svg"
				/>
			</div>
			<p class="text-gray-800">
				<span class="font-bold text-dark">A débloquer</span>
				<br /><span class="text-sm text-grey-100"
					>Acquiert 10 JS</span
				>
			</p>
		</div>
		<p class="flex-1 text-xs font-medium text-white">
			
		</p>
	</div>

    	<!-- html achivement 4 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive4"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-ruby.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">SPLENDIDE !</span>
					<br /><span class="text-sm text-white"
						>Acquiert 5 Tailwind</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +500<br />par seconde
			</p>
		</div>

		<!-- Desac achivement  -->
		<div
		class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive4"
	>
		<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
				<img
					class="flex-1 h-full rounded-lg"
					src="../assets/icons/achivement/html-soon.svg"
				/>
			</div>
			<p class="text-gray-800">
				<span class="font-bold text-dark">A débloquer</span>
				<br /><span class="text-sm text-grey-100"
					>Acquiert 5 Tailwind</span
				>
			</p>
		</div>
		<p class="flex-1 text-xs font-medium text-white">
			
		</p>
	</div>

      	<!-- html achivement 5 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive5"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-emmeraude.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">React ? Mouais</span>
					<br /><span class="text-sm text-white"
						>Acquiert 10 Vue.js</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +3 k<br />au clics
			</p>
		</div>

		<!-- Desac achivement  -->
		<div
		class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive5"
	>
		<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
				<img
					class="flex-1 h-full rounded-lg"
					src="../assets/icons/achivement/html-soon.svg"
				/>
			</div>
			<p class="text-gray-800">
				<span class="font-bold text-dark">A débloquer</span>
				<br /><span class="text-sm text-grey-100"
					>Acquiert 10 Vue.js</span
				>
			</p>
		</div>
		<p class="flex-1 text-xs font-medium text-white">
			
		</p>
	</div>
        	<!-- html achivement 6 -->

		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive6"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-platine.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">Boss du Front</span>
					<br /><span class="text-sm text-white"
						>Acquiert 10 Vite.js</span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +10 k<br />au clics
			</p>
		</div>
		<!-- Desac achivement  -->
		<div
		class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive6"
	>
		<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
				<img
					class="flex-1 h-full rounded-lg"
					src="../assets/icons/achivement/html-soon.svg"
				/>
			</div>
			<p class="text-gray-800">
				<span class="font-bold text-dark">A débloquer</span>
				<br /><span class="text-sm text-grey-100"
					>Acquiert 10 Vite.js</span
				>
			</p>
		</div>
		<p class="flex-1 text-xs font-medium text-white">
			
		</p>
	</div>
</div>

<br>
<!-- Future trophée -->
<p class="font-bold">Trophées Légendaires :</p>
<div class="flex flex-wrap gap-2">
	<!-- html achivement 7 -->
		<div
			class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-dark_grey rounded-lg drop-shadow-lg" v-if="data.htmlAchivementActive7"
		>
			<div class="flex space-x-2 items-center justify-end w-44 h-full">
				<div class="w-12 h-full">
					<img
						class="flex-1 h-full rounded-lg"
						src="../assets/icons/achivement/html-multi.svg"
					/>
				</div>
				<p class="text-gray-800">
					<span class="font-bold text-white">INCROYABLE :O</span>
					<br /><span class="text-sm text-white"
						></span
					>
				</p>
			</div>
			<p class="flex-1 text-xs font-medium text-white">
				Ajoute +100 k<br />au clics
			</p>
		</div>
		
				<!-- Desac achivement  -->
				<div
				class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-5 bg-light_grey rounded-lg drop-shadow-lg" v-if="!data.htmlAchivementActive7"
			>
				<div class="flex space-x-2 items-center justify-end w-44 h-full">
					<div class="w-12 h-full">
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/achivement/html-soon.svg"
						/>
					</div>
					<p class="text-gray-800">
						<span class="font-bold text-dark">A débloquer</span>
						<br /><span class="text-sm text-grey-100"
							></span
						>
					</p>
				</div>
				<p class="flex-1 text-xs font-medium text-white">
					
				</p>
			</div>
	</div>


</template>
<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>
<style scoped>
.achivement-card {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.achivement.list {
	display: flex;
	flex-direction: column;
}
</style>

