<template>
	<div class="pt-8 pb-16">
		<div
			class="mb-2 flex items-center justify-center sm:justify-start gap-4"
		>
			<h1 class="text-3xl font-bold">INVESTISSEMENT</h1>
			<p>
				Fait travailler ton argent avec les plus grosses entreprises
				tech
			</p>
		</div>
		<div class="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
			<div
				class="flex justify-center w-96 h-fit bg-white px-3 py-9 shadow-md rounded-lg"
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
		<div class="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
			<!-- Action 1 -->

			<div
				class="bg-white p-4 rounded-lg flex flex-col items-start shadow-lg gap-2 w-64 h-fit"
			>
				<div class="flex flex-wrap items-center gap-2">
					<img
						src="https://res.cloudinary.com/diurvm1bd/image/upload/v1682773469/unito_y1rzzz.svg"
						class="w-12"
					/>
					<div>
						<p class="font-bold text-xl">Unito</p>
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
					class="bg-primary hover:bg-dark_primary p-2 pl-4 w-full pr-4 rounded-lg text-white font-bold"
				>
					Acheter une action
				</button>
			</div>
			<!-- Action 2 -->
			<div
				class="bg-white p-4 rounded-lg flex flex-col items-start shadow-lg gap-2 w-64 h-fit"
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
					class="bg-primary hover:bg-dark_primary p-2 pl-4 w-full pr-4 rounded-lg text-white font-bold"
				>
					Acheter une action
				</button>
			</div>
			<!-- Action 3 -->
			<div
				class="bg-white p-4 rounded-lg flex flex-col items-start shadow-lg gap-2 w-64 h-fit"
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
					class="bg-primary hover:bg-dark_primary p-2 pl-4 w-full pr-4 rounded-lg text-white font-bold"
				>
					Acheter une action
				</button>
			</div>
			<!-- Action 4 -->
			<div
				class="bg-white p-4 rounded-lg flex flex-col items-start shadow-lg gap-2 w-64 h-fit"
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
					class="bg-primary hover:bg-dark_primary p-2 pl-4 w-full pr-4 rounded-lg text-white font-bold"
				>
					Acheter une action
				</button>
			</div>

			<div
				class="bg-white flex flex-col flex-wrap p-4 rounded-lg shadow-lg w-fit -z-20"
			>
				<v-chart
					class="chart -z-10"
					:option="option"
					autoresize
					style="width: 400px; height: 250px"
				/>
				<div class="flex flex-col gap-2">
					<div
						class="flex content-between justify-between items-center"
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
				class="flex sm:flex-col flex-wrap justify-center bg-white h-fit w-fit p-4 rounded-lg shadow-lg gap-2"
			>
				<div>
					<button
						@click="sellUTO"
						class="bg-primary hover:bg-dark_primary w-40 p-2 pl-6 pr-6 rounded-lg text-white font-bold"
					>
						Vendre UTO
					</button>
				</div>
				<div>
					<button
						@click="sellMRS"
						class="bg-primary hover:bg-dark_primary w-40 p-2 pl-6 pr-6 rounded-lg text-white font-bold"
					>
						Vendre MRS
					</button>
				</div>
				<div>
					<button
						@click="sellCRA"
						class="bg-primary hover:bg-dark_primary w-40 p-2 pl-6 pr-6 rounded-lg text-white font-bold"
					>
						Vendre CRA
					</button>
				</div>
				<div>
					<button
						@click="sellDWRK"
						class="bg-primary hover:bg-dark_primary w-40 p-2 pl-6 pr-6 rounded-lg text-white font-bold"
					>
						Vendre DWRK
					</button>
				</div>
				<div>
					<button
						@click="sellAll"
						class="bg-primary hover:bg-dark_primary sm:w-40 w-80 p-2 pl-6 pr-6 rounded-lg text-white font-bold"
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

