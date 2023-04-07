<template>
	<div
		v-if="!data.ifCompany"
		class="bg-white rounded-lg items-start drop-shadow-lg p-4"
	>
		<p>
			Pour créer ton entreprise tu as besoin d'
			<span class="font-bold">1 Million</span> d'experience
		</p>
		<button
			class="bg-primary text-white p-2 rounded"
			@click="data.affectIfCompany()"
		>
			Créer une entreprise
		</button>
	</div>
	<div class="flex flex-row gap-4" v-if="data.ifCompany">
		<div class="flex flex-col">
			<!-- Project view -->
			<div class="flex flex-col gap-2">
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
			<br />
			<div class="bg-white p-4 rounded-lg drop-shadow-lg">
				<h1 class="text-md text-center">Ton entreprise :</h1>
				<h1 class="text-2xl text-center">
					{{ data.companyName }}
				</h1>
			</div>
			<br />
			<!-- 1 project card -->
			<div class="bg-white shadow-lg rounded-lg p-8">
				<div class="inline-flex gap-2">
					<p class="font-bold">Projet :</p>
					<p class="text-primary font-bold">
						Web-app de gestion de tâches
					</p>
				</div>
				<div>
					<p>
						<span class="font-bold"> Profit :</span
						><span class="text-primary font-bold"> 1500 € </span>par
						avancement
					</p>

					
				</div>
				<p v-if="!data.ifProject1" class="font-bold">Besoin :</p>
				<div v-if="!data.ifProject1" class="pb-2 flex gap-2">
					<p>
						<span
							class="font-bold text-white bg-primary px-2 rounded"
							>2</span
						>
						Developpeur Front-end Junior
					</p>
					<p>
						<span
							class="font-bold text-white bg-primary px-2 rounded"
							>1</span
						>
						Developpeur Back-end Junior
					</p>
					<p>
						<span
							class="font-bold text-white bg-primary px-2 rounded"
							>1</span
						>
						Developpeur Full-stack Junior
					</p>
					<p class="font-bold">Serveur d'occasion</p>			
				</div>
				<button
					v-if="!data.ifProject1"
					@click="data.activeProject1()"
					class="w-full bg-primary text-white font-bold px-4 py-2 rounded"
				>
					<p>Commencer le projet</p>
				</button>
				<p v-if="data.ifProject1" class="font-bold">
					Avancement du projet :
				</p>
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
				<br />
				<div class="flex justify-center">
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
			<br />
			<!-- 2 project card -->
			<div class="bg-white shadow-lg rounded-lg p-8">
				<div class="inline-flex gap-2">
					<p class="font-bold">Projet :</p>
					<p class="text-primary font-bold">
						Web-app de chat en temps réel
					</p>
				</div>
				<div>
					<p>
						<span class="font-bold"> Profit :</span
						><span class="text-primary font-bold"> 5000 € </span>par
						avancement
					</p>
				</div>

				<p v-if="!data.ifProject2" class="font-bold">Besoin :</p>
				<div v-if="!data.ifProject2" class="pb-2 flex gap-2">
					<p>
						<span
							class="font-bold text-white bg-primary px-2 rounded"
							>6</span
						>
						Developpeur Front-end Junior
					</p>
					<p>
						<span
							class="font-bold text-white bg-primary px-2 rounded"
							>3</span
						>
						Developpeur Back-end Junior
					</p>
					<p>
						<span
							class="font-bold text-white bg-primary px-2 rounded"
							>2</span
						>
						Developpeur Full-stack Junior
					</p>
					<p class="font-bold">Serveur simple</p>			
				</div>
				<button
					v-if="!data.ifProject2"
					@click="data.activeProject2()"
					class="w-full bg-primary text-white font-bold px-4 py-2 rounded"
				>
					<p>Commencer le projet</p>
				</button>

				<p v-if="data.ifProject2" class="font-bold">
					Avancement du projet :
				</p>
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
				<br />
				<div class="flex justify-center">
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
		<div class="flex flex-col gap-2">
			<div class="bg-white p-4 rounded shadow-lg">
				<h2 class="font-bold text-xl text-primary text-center">
					DEV-JOBS
				</h2>
				<p class="text-gray-500 text-center">
					Plateforme n°1 de recrutement de dev
				</p>
				<br>
				<p class="font-bold">Developpeur Front-end Junior</p>
				<p>500 €</p>
				<div class="flex gap-1">
					<button
					@click="data.recrutDevFrontJun()"
						class="bg-primary text-white font-extrabold px-2 rounded"
					>
						+
					</button>
					<p
						class="bg-primary text-white font-extrabold px-2 rounded"
					>
						{{ data.devFrontJunior }}	 
					</p>
				</div>
				<p class="font-bold">Developpeur Back-end Junior</p>
				<p>1500 €</p>
				<div class="flex gap-1">
					<button
					@click="data.recrutDevBackJun()"
						class="bg-primary text-white font-extrabold px-2 rounded"
					>
						+
					</button>
					<p
						class="bg-primary text-white font-extrabold px-2 rounded"
					>
						{{ data.devBackJunior }}
					</p>
				</div>
				<p class="font-bold">Developpeur Full-Stack Junior</p>
				<p>2000 €</p>
				<div class="flex gap-1">
					<button
					@click="data.recrutDevFullJun()"
						class="bg-primary text-white font-extrabold px-2 rounded"
					>
						+
					</button>
					<p
						class="bg-primary text-white font-extrabold px-2 rounded"
					>
						{{ data.devFullJunior }}
					</p>
				</div>	
			</div>
			<br>
			<div class="bg-white p-4 rounded shadow-lg flex flex-col gap-2">
				<h2 class="font-bold text-xl">Serveur</h2>
				<p class="text-gray-500">Achat de serveur pour les projets</p>
				<div class="flex flex-col">
					<p class="font-bold">Serveur d'occasion</p>
				<p>500 €</p>
				<button v-if="data.server1 === 0" @click="data.buyServer1" class="bg-primary text-white p-1 px-2 rounded">Acheter</button>
				<button v-else class="bg-dark_grey text-white p-1 px-2 rounded">Acquis</button>
				</div>
				<div class="flex flex-col">
					<p class="font-bold">Serveur simple</p>
				<p>1500 €</p>
				<button v-if="data.server2 === 0" @click="data.buyServer2" class="bg-primary text-white p-1 px-2 rounded">Acheter</button>
				<button v-else class="bg-dark_grey text-white p-1 px-2 rounded">Acquis</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Project view -->
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
