<template>
	<div class="pt-8 pb-16">
		<div
			class="flex items-center justify-center gap-4 mb-2 sm:justify-start"
		>
			<h1 class="text-3xl font-bold">Missions</h1>
			<p>Met en pratique ton expérience pour gagner de l'argent.</p>
		</div>
		

		
		<div class="flex flex-col justify-center gap-4">
			<div class="flex justify-center sm:justify-start">
			<div
				class="flex justify-center px-3 bg-white rounded-lg shadow-md w-96 py-9"
			>
				<p class="text-xl">Compte en banque :</p>
				<p class="text-xl font-bold">
					{{
						data.money.toLocaleString("fr-FR", {
							minimumFractionDigits: 0,
							maximumFractionDigits: 4,
							notation: "compact",
						})
					}}
					€
				</p>
			</div>
		</div>
			<MissionsCard />
		</div>
	</div>
</template>

<script setup>
/*
	imports
*/
import MissionsCard from "../components/Missions-card.vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>
