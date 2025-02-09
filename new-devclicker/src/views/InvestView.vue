<template>
	<div class="pt-8 pb-16">
		<div
			class="flex items-center justify-center gap-4 mb-2 sm:justify-start"
		>
			<h1 class="text-3xl font-bold">Investissement</h1>
			<p>
				Investis ton argent dans dans des start-ups.
			</p>
		</div>
		<div class="flex flex-wrap justify-center gap-4 mb-4 sm:justify-start">
			<div
				class="flex justify-center px-3 bg-white rounded-lg shadow-md w-96 h-fit py-9"
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
		<div class="flex flex-wrap justify-center gap-4 mb-4 sm:justify-start">
			<!-- Action 1 -->

			<div
				class="flex flex-col items-start w-64 gap-2 p-4 bg-white rounded-lg shadow-lg h-fit"
			>
				<div class="flex flex-wrap items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg"
						class="w-12"
					/>
					<div>
						<p class="text-xl font-bold">Unito</p>
					</div>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong
							>{{
								data.UTOprice.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Valeur totale :
						<strong
							>{{
								data.fluctuatedSumUTO.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Actions possédés :
						<strong>{{
							data.UTOstock.toLocaleString("fr-FR", {
								minimumFractionDigits: 0,
								maximumFractionDigits: 4,
								notation: "compact",
							})
						}}</strong>
					</p>
				</div>
				<button
					@click="addUTO"
					class="w-full p-2 pl-4 pr-4 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
				>
					Acheter une action
				</button>
			</div>
			<!-- Action 2 -->
			<div
				class="flex flex-col items-start w-64 gap-2 p-4 bg-white rounded-lg shadow-lg h-fit"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/mars_f5ar4j.svg"
						class="w-12"
					/>
					<div>
						<p class="text-xl font-bold">Mars</p>
					</div>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong
							>{{
								data.MRSprice.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Valeur totale :
						<strong
							>{{
								data.fluctuatedSumMRS.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Actions possédés :
						<strong>{{
							data.MRSstock.toLocaleString("fr-FR", {
								minimumFractionDigits: 0,
								maximumFractionDigits: 4,
								notation: "compact",
							})
						}}</strong>
					</p>
				</div>
				<button
					@click="addMRS"
					class="w-full p-2 pl-4 pr-4 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
				>
					Acheter une action
				</button>
			</div>
			<!-- Action 3 -->
			<div
				class="flex flex-col items-start w-64 gap-2 p-4 bg-white rounded-lg shadow-lg h-fit"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/crea_hbrcko.svg"
						class="w-12"
					/>
					<div>
						<p class="text-xl font-bold">Crea</p>
					</div>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong
							>{{
								data.CRAprice.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Valeur totale :
						<strong
							>{{
								data.fluctuatedSumCRA.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Actions possédés :
						<strong>{{
							data.CRAstock.toLocaleString("fr-FR", {
								minimumFractionDigits: 0,
								maximumFractionDigits: 4,
								notation: "compact",
							})
						}}</strong>
					</p>
				</div>
				<button
					@click="addCRA"
					class="w-full p-2 pl-4 pr-4 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
				>
					Acheter une action
				</button>
			</div>
			<!-- Action 4 -->
			<div
				class="flex flex-col items-start w-64 gap-2 p-4 bg-white rounded-lg shadow-lg h-fit"
			>
				<div class="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/devwork_n7mvch.svg"
						class="w-12"
					/>
					<div>
						<p class="text-xl font-bold">Devwork</p>
					</div>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong
							>{{
								data.DWRKprice.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Valeur totale :
						<strong
							>{{
								data.fluctuatedSumDWRK.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€</strong
						>
					</p>
					<p>
						Actions possédés :
						<strong>{{
							data.DWRKstock.toLocaleString("fr-FR", {
								minimumFractionDigits: 0,
								maximumFractionDigits: 4,
								notation: "compact",
							})
						}}</strong>
					</p>
				</div>
				<button
					@click="addDWRK"
					class="w-full p-2 pl-4 pr-4 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
				>
					Acheter une action
				</button>
			</div>

			<div
				class="flex flex-col flex-wrap p-4 bg-white rounded-lg shadow-lg w-fit -z-20"
			>
				<v-chart
					class="chart -z-10"
					:option="option"
					autoresize
					style="width: 400px; height: 250px"
				/>
				<div class="flex flex-col gap-2">
					<div
						class="flex items-center content-between justify-between"
					>
						<p class="font-bold">
							Nombre d'action :
							{{
								data.totalStock.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
						</p>
						<p class="font-bold">
							Valeur :
							{{
								data.totalValueStock.toLocaleString("fr-FR", {
									minimumFractionDigits: 0,
									maximumFractionDigits: 4,
									notation: "compact",
								})
							}}
							€
						</p>
					</div>
				</div>
			</div>
			<div
				class="flex flex-wrap justify-center gap-2 p-4 bg-white rounded-lg shadow-lg sm:flex-col h-fit w-fit"
			>
				<div>
					<button
						@click="sellUTO"
						class="w-40 p-2 pl-6 pr-6 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
					>
						Vendre UTO
					</button>
				</div>
				<div>
					<button
						@click="sellMRS"
						class="w-40 p-2 pl-6 pr-6 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
					>
						Vendre MRS
					</button>
				</div>
				<div>
					<button
						@click="sellCRA"
						class="w-40 p-2 pl-6 pr-6 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
					>
						Vendre CRA
					</button>
				</div>
				<div>
					<button
						@click="sellDWRK"
						class="w-40 p-2 pl-6 pr-6 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
					>
						Vendre DWRK
					</button>
				</div>
				<div>
					<button
						@click="sellAll"
						class="p-2 pl-6 pr-6 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary sm:w-40 w-80"
					>
						Tous Vendre
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useDataStore } from "../stores/data"
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { PieChart } from "echarts/charts"
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
} from "echarts/components"
import VChart, { THEME_KEY } from "vue-echarts"
import { ref, provide } from "vue"
const data = useDataStore()
use([
	CanvasRenderer,
	PieChart,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
])

// UTO
const stopFluctuationLoopUTO = () => {
	clearInterval(data.intervalIdUTO)
}
const startFluctuationLoopUTO = () => {
	const magnitude1 = Math.floor(data.sumUTO / 2)
	data.intervalIdUTO = setInterval(() => {
		const fluctuation1 =
			Math.floor(Math.random() * (magnitude1 + 2) * 6) - magnitude1
		data.fluctuatedSumUTO = data.sumUTO + fluctuation1
		if (data.fluctuatedSumUTO <= 0) {
			stopFluctuationLoopUTO()
		}
	}, 3000)
}
const addNumberUTO = () => {
	data.sumUTO += data.newNumberUTO
	if (!data.intervalIdUTO) {
		startFluctuationLoopUTO()
	}
	data.newNumberUTO = 0
}
const addUTO = () => {
	if (data.money >= data.UTOprice) {
		option.value.series[0].data[1].value += 1
		data.UTOstock += 1
		data.sumUTO += 100
		data.money -= data.UTOprice
		addNumberUTO()
	}
}
const sellUTO = () => {
	option.value.series[0].data[1].value = 0
	data.UTOstock = 0
	data.money += data.fluctuatedSumUTO
	data.sumUTO = 0
	data.newNumberUTO = 0
	data.fluctuatedSumUTO = 0
	clearInterval(data.intervalIdUTO)
	data.intervalIdUTO = null
}
// UTO

// MRS
const stopFluctuationLoopMRS = () => {
	clearInterval(data.intervalIdMRS)
}
const startFluctuationLoopMRS = () => {
	const magnitude1 = Math.floor(data.sumMRS / 2)
	data.intervalIdMRS = setInterval(() => {
		const fluctuation1 =
			Math.floor(Math.random() * (magnitude1 + 2) * 12) - magnitude1
		data.fluctuatedSumMRS = data.sumMRS + fluctuation1
		if (data.fluctuatedSumMRS <= 0) {
			stopFluctuationLoopMRS()
		}
	}, 3000)
}
const addNumberMRS = () => {
	data.sumMRS += data.newNumberMRS
	if (!data.intervalIdMRS) {
		startFluctuationLoopMRS()
	}
	data.newNumberMRS = 0
}
const addMRS = () => {
	if (data.money >= data.MRSprice) {
		option.value.series[0].data[0].value += 1
		data.MRSstock += 1
		data.sumMRS += 400
		data.money -= data.MRSprice
		addNumberMRS()
	}
}
const sellMRS = () => {
	option.value.series[0].data[0].value = 0
	data.MRSstock = 0
	data.money += data.fluctuatedSumMRS
	data.sumMRS = 0
	data.newNumberMRS = 0
	data.fluctuatedSumMRS = 0
	clearInterval(data.intervalIdMRS)
	data.intervalIdMRS = null
}
// MRS

// CRA
const stopFluctuationLoopCRA = () => {
	clearInterval(data.intervalIdCRA)
}
const startFluctuationLoopCRA = () => {
	const magnitude1 = Math.floor(data.sumCRA / 2)
	data.intervalIdCRA = setInterval(() => {
		const fluctuation1 =
			Math.floor(Math.random() * (magnitude1 + 2) * 24) - magnitude1
		data.fluctuatedSumCRA = data.sumCRA + fluctuation1
		if (data.fluctuatedSumCRA <= 0) {
			stopFluctuationLoopCRA()
		}
	}, 3000)
}
const addNumberCRA = () => {
	data.sumCRA += data.newNumberCRA
	if (!data.intervalIdCRA) {
		startFluctuationLoopCRA()
	}
	data.newNumberCRA = 0
}
const addCRA = () => {
	if (data.money >= data.CRAprice) {
		option.value.series[0].data[2].value += 1
		data.CRAstock += 1
		data.sumCRA += 600
		data.money -= data.CRAprice
		addNumberCRA()
	}
}
const sellCRA = () => {
	option.value.series[0].data[2].value = 0
	data.CRAstock = 0
	data.money += data.fluctuatedSumCRA
	data.sumCRA = 0
	data.newNumberCRA = 0
	data.fluctuatedSumCRA = 0
	clearInterval(data.intervalIdCRA)
	data.intervalIdCRA = null
}
// CRA

// DWRK
const stopFluctuationLoopDWRK = () => {
	clearInterval(data.intervalIdDWRK)
}
const startFluctuationLoopDWRK = () => {
	const magnitude1 = Math.floor(data.sumDWRK / 2)
	data.intervalIdDWRK = setInterval(() => {
		const fluctuation1 =
			Math.floor(Math.random() * (magnitude1 + 2) * 48) - magnitude1
		data.fluctuatedSumDWRK = data.sumDWRK + fluctuation1
		if (data.fluctuatedSumDWRK <= 0) {
			stopFluctuationLoopDWRK()
		}
	}, 3000)
}
const addNumberDWRK = () => {
	data.sumDWRK += data.newNumberDWRK
	if (!data.intervalIdDWRK) {
		startFluctuationLoopDWRK()
	}
	data.newNumberDWRK = 0
}
const addDWRK = () => {
	if (data.money >= data.DWRKprice) {
		option.value.series[0].data[3].value += 1
		data.DWRKstock += 1
		data.sumDWRK += 800
		data.money -= data.DWRKprice
		addNumberDWRK()
	}
}
const sellDWRK = () => {
	option.value.series[0].data[3].value = 0
	data.DWRKstock = 0
	data.money += data.fluctuatedSumDWRK
	data.sumDWRK = 0
	data.newNumberDWRK = 0
	data.fluctuatedSumDWRK = 0
	clearInterval(data.intervalIdDWRK)
	data.intervalIdDWRK = null
}

const sellAll = () => {
	sellMRS()
	sellUTO()
	sellCRA()
	sellDWRK()
}

provide(THEME_KEY, "light")

const option = ref({
	title: {
		text: "Répartition des actions",
		left: "center",
	},
	tooltip: {
		trigger: "item",
		formatter: "{b}: {c} ({d}%)",
	},
	legend: {
		orient: "vertical",
		left: "right",
		data: ["MRS", "UTO", "CRA", "DWRK"],
	},
	series: [
		{
			name: "Traffic Sources",
			type: "pie",
			radius: "55%",
			radius: ["40%", "70%"],
			avoidLabelOverlap: false,
			label: {
				show: false,
			},
			labelLine: {
				show: false,
			},
			data: [
				{
					value: data.MRSstock,
					name: "MRS",
					itemStyle: { color: "#F8687C" },
				},
				{
					value: data.UTOstock,
					name: "UTO",
					itemStyle: { color: "#68F5AA" },
				},
				{
					value: data.CRAstock,
					name: "CRA",
					itemStyle: { color: "#FFF482" },
				},
				{
					value: data.DWRKstock,
					name: "DWRK",
					itemStyle: { color: "#9E89F3" },
				},
			],

			itemStyle: {
				borderRadius: 10,
			},
		},
	],
})
</script>

