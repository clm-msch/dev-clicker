<template>
	<!-- <div v-if="!data.ifCompany" class="bg-white rounded-lg items-start drop-shadow-lg p-4">
		<p>Pour créer ton entreprise tu as besoin d' <span class="font-bold">1 Million</span> d'experience</p>	
		<button class="bg-primary text-white p-2 rounded" @click="data.affectIfCompany()">Créer une entreprise</button>
	</div> -->
<div>
	<!-- <div v-if="data.ifCompany"> -->
	<div class="flex flex-col gap-2">
		<h1 class="text-xl">
			Bienvenue dans l'onglet entreprise ici tu va créer ta propre
			entreprise de développement web !
		</h1>
		<br />
		<div
			class="bg-white p-4 rounded-lg flex items-start drop-shadow-lg justify-center gap-2"
		>
			<p>Choisis le nom de ton entreprise :</p>
			<input
				class="bg-light_grey rounded"
				:maxlength="16"
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
	<br>
		<!-- 1 project card -->
		<div class="bg-white shadow-lg rounded-lg p-8">
			<div class="inline-flex gap-2">
				<p class="font-bold">Projet :</p>
				<p class="text-primary font-bold">Web-app de gestion de tâches</p>
			</div>
			<div>
				<p>
					<span class="font-bold"> Profit :</span
					><span class="text-primary font-bold"> 1500 € </span>par
					avancement
				</p>


				<p class="font-bold">Besoin :</p>
			</div>

			<div v-if="!data.ifProject1" class="pb-2 flex gap-2">
				<p><span class="font-bold text-white bg-primary p-1 rounded">2</span> Developpeur Front-end Junior</p>
				<p><span class="font-bold text-white bg-primary p-1 rounded">1</span> Developpeur Back-end Junior</p>
				<p><span class="font-bold text-white bg-primary p-1 rounded">1</span> Developpeur Full-stack Junior</p>
			</div>
			<button
			v-if="!data.ifProject1"
			@click="data.activeProject1()"
			class="w-full bg-primary text-white font-bold px-4 py-2 rounded"
		>
			<p>Commencer le projet</p>
		</button>
			<p v-if="data.ifProject1" class="font-bold">Avancement du projet :</p>
			<div
				v-if="data.ifProject1"
				class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
			>
				<div
					v-if="data.ifProject1"
					ref="progress"
					class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					:style="{ width: data.progressValueProject1 + '%' }"
				>
					{{ data.progressValueProject1 }}%
				</div>
			</div>
			<br>
			<div class="flex justify-center ">
			<button
				v-if="data.ifProject1"
				@click="data.increaseProjectProgress1(1, 1500)"
				class="w-full bg-primary text-white font-bold px-4 py-2 rounded"
			>
				<p>Développe</p>
			</button>
		</div>
		</div>
		<!-- 1 project card -->
		<br>
				<!-- 2 project card -->
				<div class="bg-white shadow-lg rounded-lg p-8">
					<div class="inline-flex gap-2">
						<p class="font-bold">Projet :</p>
						<p class="text-primary font-bold">Web-app de chat en temps réel</p>
					</div>
					<div>
						<p>
							<span class="font-bold"> Profit :</span
							><span class="text-primary font-bold"> 5000 € </span>par
							avancement
						</p>
		
		
						<p class="font-bold">Besoin :</p>
					</div>
		
					<div v-if="!data.ifProject2" class="pb-2 flex gap-2">
						<p><span class="font-bold text-white bg-primary p-1 rounded">2</span> Developpeur Front-end Junior</p>
						<p><span class="font-bold text-white bg-primary p-1 rounded">1</span> Developpeur Back-end Junior</p>
						<p><span class="font-bold text-white bg-primary p-1 rounded">1</span> Developpeur Full-stack Junior</p>
					</div>
					<button
						v-if="!data.ifProject2"
						@click="data.activeProject2()"
						class="w-full bg-primary text-white font-bold px-4 py-2 rounded"
					>
						<p>Commencer le projet</p>
					</button>
		
					<p v-if="data.ifProject2" class="font-bold">Avancement du projet :</p>
					<div
						v-if="data.ifProject2"
						class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
					>
						<div
							v-if="data.ifProject2"
							ref="progress"
							class="bar bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
							:style="{ width: data.progressValueProject2 + '%' }"
						>
							{{ data.progressValueProject2 }}%
						</div>
					</div>
					<br>
					<div class="flex justify-center ">
						<button
						v-if="data.ifProject2"
						@click="data.increaseProjectProgress2(0.5, 5000)"
						class="w-full bg-primary text-white font-bold px-4 py-2 rounded"
					>
						<p>Développe</p>
					</button>
					</div>
					
				</div>
				<!-- 2 project card -->	
</div>
</template>

<script setup>
import { ref } from "vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()
const companyName = ref("")
</script>

<style scoped>
.bar {
	transition: width 0.1s ease-in-out;
}
</style>