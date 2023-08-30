<!-- <template>
	<div class="pt-8 pb-16">
		<div
			class="mb-2 flex items-center justify-center sm:justify-start gap-4"
		>
    <img src="https://res.cloudinary.com/diurvm1bd/image/upload/v1683323057/Amazitruc_pqz6nb.svg"/>
			<p>Tous le matos dont tu as besoin et même ce dont tu n'as pas besoin</p>
		</div>

	</div>
</template> -->

<template>
	<div class="pt-8 pb-16">
		<div
			class="mb-2 flex items-center justify-center sm:justify-start gap-4"
		>
			<img
				src="https://res.cloudinary.com/diurvm1bd/image/upload/v1683323057/Amazitruc_pqz6nb.svg"
			/>
			<p>
				Tous le matos dont tu as besoin et même ce dont tu n'as pas
				besoin
			</p>
		</div>
		<div class="flex flex-col">
			<h2 class="text-2xl font-bold mb-4 sm:text-left text-center">
				Bureaux :
			</h2>
			<div class="flex flex-wrap gap-4 sm:justify-start justify-center">
				<div
					v-for="workplace in data.workplaces"
					:key="data.workplaces.id"
					class="bg-white flex flex-col justify-between w-60 shadow-lg rounded-lg overflow-hidden"
				>
					<div class="flex justify-center">
						<img :src="workplace.image" class="w-16" />
					</div>

					<div class="p-4">
						<h3 class="font-bold text-xl mb-2">
							{{ workplace.name }}
						</h3>
						<p class="text-gray-700 text-base">
							{{ workplace.description }}
						</p>
						<p class="font-bold text-xl mb-2">
							{{ workplace.price }}€
						</p>
						<button
							class="bg-amazitruc hover:bg-dark_amazitruc w-full font-bold text-white py-2 px-4 rounded-lg"
						>
							Acheter
						</button>
					</div>
				</div>
			</div>
		</div>

    <div class="flex flex-col mt-4">
			<h2 class="text-2xl font-bold mb-4 sm:text-left text-center">
				Serveurs :
			</h2>
			<div class="flex flex-wrap gap-4 sm:justify-start justify-center">
				<div
					v-for="server in data.servers"
					:key="data.servers.id"
					class="bg-white flex flex-col justify-between w-60 shadow-lg rounded-lg overflow-hidden"
				>
					<div class="flex justify-center">
						<img :src="server.image" class="w-16" />
					</div>

					<div class="p-4">
						<h3 class="font-bold text-xl mb-2">
							{{ server.name }}
						</h3>
						<p class="text-gray-700 text-base">
							{{ server.description }}
						</p>
						<p class="font-bold text-xl mb-2">
							{{ server.price }}€
						</p>
						<button
							class="bg-amazitruc hover:bg-dark_amazitruc w-full font-bold text-white py-2 px-4 rounded-lg"
						>
							Acheter
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>
