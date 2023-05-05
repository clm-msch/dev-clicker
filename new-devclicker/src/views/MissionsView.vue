<template>
	<div class="pt-8 pb-16">
		<div
			class="mb-2 flex items-center justify-center sm:justify-start gap-4"
		>
			<h1 class="text-3xl font-bold">MISSIONS</h1>
			<p>Met en pratique ton expérience pour gagner de l'argent.</p>
		</div>
		

		
		<div class="flex flex-col justify-center gap-4">
			<div class="flex justify-center sm:justify-start">
			<div
				class="flex justify-center w-96 bg-white px-3 py-9 shadow-md rounded-lg"
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
