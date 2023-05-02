<template>
	<div class="flex gap-4 justify-center sm:justify-start flex-wrap">
		<!-- Missions Cards 1 -->
		<div>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Unito</p>
					</div>
				</div>
				<p class="text-sm">
					Création d'un site vitrine pour un plombier.
				</p>
				<p class="text-sm">
					Salaire :
					<span class="font-bold">50 € </span>
				</p>
				<div class="flex flex-col gap-2" v-if="data.ifApply1 == true">
					<div class="flex gap-2">
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							HTML
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							CSS
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Javascript
						</div>
					</div>
					<div>
						<button
							@click="data.applyToMission1()"
							class="bg-primary text-white font-bold p-2 rounded-lg w-full hover:bg-dark_primary"
						>
							Postuler à la mission
						</button>
					</div>
				</div>
				<div v-else>
					<p class="font-bold">Avancement du projet :</p>
					<div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
						<button
							class="bar font-bold bg-primary text-blue-100 text-center p-1.5 leading-none rounded-lg"
							:style="{ width: data.progressValue1 + '%' }"
						>
							<p class="text-sm font-thin">
								{{ data.progressValue1 + "%" }}
							</p>
						</button>
					</div>
					<div class="">
						<button
							@click="data.incrementMission1()"
							class="bg-primary p-1.5 px-2 text-white rounded-lg text-sm font-bold hover:bg-dark_primary w-full mt-2"
						>
							Développe
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Missions Cards 2 -->
		<div>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Devwork</p>
					</div>
				</div>
				<p class="text-sm">
					Création d'une Web App de gestion de projet.
				</p>
				<p class="text-sm">
					Salaire :
					<span class="font-bold">150 € </span>
				</p>
				<div class="flex flex-col gap-2" v-if="data.ifApply2 == true">
					<div class="flex gap-2">
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							JavaScript
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							TailwindCSS
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Vue.js
						</div>
					</div>
					<div>
						<button
							@click="data.applyToMission2()"
							class="bg-primary text-white font-bold p-2 rounded-lg w-full hover:bg-dark_primary"
						>
							Postuler à la mission
						</button>
					</div>
				</div>
				<div v-else>
					<p class="font-bold">Avancement du projet :</p>
					<div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
						<button
							class="bar font-bold bg-primary text-blue-100 text-center p-1.5 leading-none rounded-lg"
							:style="{ width: data.progressValue2 + '%' }"
						>
							<p class="text-sm font-thin">
								{{ data.progressValue2 + "%" }}
							</p>
						</button>
					</div>
					<div class="">
						<button
							@click="data.incrementMission2()"
							class="bg-primary p-1.5 px-2 text-white rounded-lg text-sm font-bold hover:bg-dark_primary w-full mt-2"
						>
							Développe
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Missions Cards 3 -->
		<div>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/crea_hbrcko.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Crea</p>
					</div>
				</div>
				<p class="text-sm">
					Création d'un dashboard pour un site e-commerce.
				</p>
				<p class="text-sm">
					Salaire :
					<span class="font-bold">200 € </span>
				</p>
				<div class="flex flex-col gap-2" v-if="data.ifApply3 == true">
					<div class="flex gap-2">
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							TailwindCSS
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Vue.js
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Vite
						</div>
					</div>
					<div>
						<button
							@click="data.applyToMission3()"
							class="bg-primary text-white font-bold p-2 rounded-lg w-full hover:bg-dark_primary"
						>
							Postuler à la mission
						</button>
					</div>
				</div>
				<div v-else>
					<p class="font-bold">Avancement du projet :</p>
					<div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
						<button
							class="bar font-bold bg-primary text-blue-100 text-center p-1.5 leading-none rounded-lg"
							:style="{ width: data.progressValue3 + '%' }"
						>
							<p class="text-sm font-thin">
								{{ data.progressValue3 + "%" }}
							</p>
						</button>
					</div>
					<div class="">
						<button
							@click="data.incrementMission3()"
							class="bg-primary p-1.5 px-2 text-white rounded-lg text-sm font-bold hover:bg-dark_primary w-full mt-2"
						>
							Développe
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Missions Cards 4 -->
		<div>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Devwork</p>
					</div>
				</div>
				<p class="text-sm">
					Refonte d'une Web App de gestion des stocks.
				</p>
				<p class="text-sm">
					Salaire :
					<span class="font-bold">500 € </span>
				</p>
				<div class="flex flex-col gap-2" v-if="data.ifApply4 == true">
					<div class="flex gap-2">
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Node.js
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Express.js
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Prisma
						</div>
					</div>
					<div>
						<button
							@click="data.applyToMission4()"
							class="bg-primary text-white font-bold p-2 rounded-lg w-full hover:bg-dark_primary"
						>
							Postuler à la mission
						</button>
					</div>
				</div>
				<div v-else>
					<p class="font-bold">Avancement du projet :</p>
					<div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
						<button
							class="bar font-bold bg-primary text-blue-100 text-center p-1.5 leading-none rounded-lg"
							:style="{ width: data.progressValue4 + '%' }"
						>
							<p class="text-sm font-thin">
								{{ data.progressValue4 + "%" }}
							</p>
						</button>
					</div>
					<div class="">
						<button
							@click="data.incrementMission4()"
							class="bg-primary p-1.5 px-2 text-white rounded-lg text-sm font-bold hover:bg-dark_primary w-full mt-2"
						>
							Développe
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Missions Cards 5 -->
		<div>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/mars_f5ar4j.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Mars</p>
					</div>
				</div>
				<p class="text-sm">
					Création d'une REST API pour une application mobile.
				</p>
				<p class="text-sm">
					Salaire :
					<span class="font-bold">1 k € </span>
				</p>
				<div class="flex flex-col gap-2" v-if="data.ifApply5 == true">
					<div class="flex gap-2">
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Express.js
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Prisma
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							MongoDB
						</div>
					</div>
					<div>
						<button
							@click="data.applyToMission5()"
							class="bg-primary text-white font-bold p-2 rounded-lg w-full hover:bg-dark_primary"
						>
							Postuler à la mission
						</button>
					</div>
				</div>
				<div v-else>
					<p class="font-bold">Avancement du projet :</p>
					<div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
						<button
							class="bar font-bold bg-primary text-blue-100 text-center p-1.5 leading-none rounded-lg"
							:style="{ width: data.progressValue5 + '%' }"
						>
							<p class="text-sm font-thin">
								{{ data.progressValue5 + "%" }}
							</p>
						</button>
					</div>
					<div class="">
						<button
							@click="data.incrementMission5()"
							class="bg-primary p-1.5 px-2 text-white rounded-lg text-sm font-bold hover:bg-dark_primary w-full mt-2"
						>
							Développe
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- Missions Cards 6 -->
		<div>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Unito</p>
					</div>
				</div>
				<p class="text-sm">
					Création d'une web-app de partage de données.
				</p>
				<p class="text-sm">
					Salaire :
					<span class="font-bold">5 k € </span>
				</p>
				<div class="flex flex-col gap-2" v-if="data.ifApply6 == true">
					<div class="flex gap-2">
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							MongoDB
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Docker
						</div>
						<div
							class="bg-dark_grey text-white font-bold p-2 rounded-lg"
						>
							Vercel
						</div>
					</div>
					<div>
						<button
							@click="data.applyToMission6()"
							class="bg-primary text-white font-bold p-2 rounded-lg w-full hover:bg-dark_primary"
						>
							Postuler à la mission
						</button>
					</div>
				</div>
				<div v-else>
					<p class="font-bold">Avancement du projet :</p>
					<div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700">
						<button
							class="bar font-bold bg-primary text-blue-100 text-center p-1.5 leading-none rounded-lg"
							:style="{ width: data.progressValue6 + '%' }"
						>
							<p class="text-sm font-thin">
								{{ data.progressValue6 + "%" }}
							</p>
						</button>
					</div>
					<div class="">
						<button
							@click="data.incrementMission6()"
							class="bg-primary p-1.5 px-2 text-white rounded-lg text-sm font-bold hover:bg-dark_primary w-full mt-2"
						>
							Développe
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
/*
  imports
*/
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>

<style scoped>
.bar {
	transition: width 0.2s ease-in-out;
}
</style>
