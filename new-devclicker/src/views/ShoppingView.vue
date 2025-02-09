<!-- <template>
	<div class="pt-8 pb-16">
		<div
			class="flex items-center justify-center gap-4 mb-2 sm:justify-start"
		>
    <img src="https://res.cloudinary.com/diurvm1bd/image/upload/v1683323057/Amazitruc_pqz6nb.svg"/>
			<p>Tous le matos dont tu as besoin et même ce dont tu n'as pas besoin</p>
		</div>

	</div>
</template> -->

<template>
	<div class="pt-8 pb-16">
		<div
			class="flex items-center justify-center gap-4 mb-2 sm:justify-start"
		>
			<img
				src="https://res.cloudinary.com/diurvm1bd/image/upload/v1683323057/Amazitruc_pqz6nb.svg"
			/>
			<p>
				Tous le matos dont tu as besoin et même ce dont tu n'as pas
				besoin
			</p>
		</div>
		<p>[WIP]</p>
		<div class="flex flex-col">
			<h2 class="mb-4 text-2xl font-bold text-center sm:text-left">
				Bureaux :
			</h2>
			<div class="flex flex-wrap justify-center gap-4 sm:justify-start">
				<div
					v-for="workplace in data.workplaces"
					:key="data.workplaces.id"
					class="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-lg w-60"
				>
					<div class="flex justify-center">
						<img :src="workplace.image" class="w-16" />
					</div>

					<div class="p-4">
						<h3 class="mb-2 text-xl font-bold">
							{{ workplace.name }}
						</h3>
						<p class="text-base text-gray-700">
							{{ workplace.description }}
						</p>
						<p class="mb-2 text-xl font-bold">
							{{ workplace.price }}€
						</p>
						<button
							class="w-full px-4 py-2 font-bold text-white rounded-lg bg-amazitruc hover:bg-dark_amazitruc"
						>
							Acheter
						</button>
					</div>
				</div>
			</div>
		</div>

    <div class="flex flex-col mt-4">
			<h2 class="mb-4 text-2xl font-bold text-center sm:text-left">
				Serveurs :
			</h2>
			<div class="flex flex-wrap justify-center gap-4 sm:justify-start">
				<div
					v-for="server in data.servers"
					:key="data.servers.id"
					class="flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-lg w-60"
				>
					<div class="flex justify-center">
						<img :src="server.image" class="w-16" />
					</div>

					<div class="p-4">
						<h3 class="mb-2 text-xl font-bold">
							{{ server.name }}
						</h3>
						<p class="text-base text-gray-700">
							{{ server.description }}
						</p>
						<p class="mb-2 text-xl font-bold">
							{{ server.price }}€
						</p>
						<button
							class="w-full px-4 py-2 font-bold text-white rounded-lg bg-amazitruc hover:bg-dark_amazitruc"
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
