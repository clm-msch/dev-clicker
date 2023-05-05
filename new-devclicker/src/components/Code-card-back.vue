<template>
	<div class="flex gap-4 justify-center sm:justify-start flex-wrap">
		<div
			v-for="contentCard in data.contentCardsBack"
			:key="data.contentCardsBack.id"
		>
			<div
				class="bg-white flex rounded-lg flex-col p-4 w-96 h-56 gap-2 justify-between shadow-md"
			>
				<div class="flex items-center gap-2">
					<img :src="contentCard.image" class="w-12" />
					<div>
						<p class="font-bold text-xl">{{ contentCard.name }}</p>
						<p class="text-sm">{{ contentCard.effect }}</p>
					</div>
				</div>
				<p class="text-sm">{{ contentCard.description }}</p>
				<div class="flex justify-between">
					<p class="text-sm">
						Prix :
						<span class="font-bold">
							{{
								contentCard.price.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
						</span>
					</p>
					<p class="text-sm">
						Quantité :
						<span class="font-bold">
							{{
								contentCard.quantity.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
						</span>
					</p>
				</div>
				<button
					@click="data.buyCodeBack(contentCard.id)"
					class="bg-primary text-white font-bold p-2 rounded-lg hover:bg-dark_primary"
				>
					Aquérir
				</button>
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
