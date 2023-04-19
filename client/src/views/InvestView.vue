<template>
	<div class="flex flex-col gap-4 flex-wrap">
		<div class="flex flex-wrap gap-4">
			<!-- Action 1 -->

			<div
				class="bg-white p-3 rounded-lg flex flex-col items-start drop-shadow-lg gap-2 w-fit h-fit"
			>
				<div class="flex flex-row gap-2 items-center">
					<img
						src="../assets/icons/entreprise/unito.svg"
						class="w-auto"
					/>
					<!-- <p class="text-red-500">-0,50€ (0,18%) UTO</p> -->
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong>{{ data.UTOprice }} €</strong>
					</p>
					<p>
						Valeur totale :
						<strong>{{ data.fluctuatedSumUTO }} €</strong>
					</p>
					<p>
						Actions possédés : <strong>{{ data.UTOstock }}</strong>
					</p>
				</div>
				<button
					@click="addUTO"
					class="bg-primary p-2 pl-4 pr-4 rounded-lg text-white"
				>
					Acheter <strong>1</strong> action
				</button>
			</div>

			<!-- Action 2 -->
			<div
				class="bg-white p-3 rounded-lg flex flex-col items-start drop-shadow-lg gap-2 w-fit h-fit"
			>
				<div class="flex flex-row gap-2 items-center">
					<img
						src="../assets/icons/entreprise/mars.svg"
						class="w-auto"
					/>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong>{{ data.MRSprice }} €</strong>
					</p>
					<p>
						Valeur totale :
						<strong>{{ data.fluctuatedSumMRS }} €</strong>
					</p>
					<p>
						Actions possédés : <strong>{{ data.MRSstock }}</strong>
					</p>
				</div>
				<button
					@click="addMRS"
					class="bg-primary p-2 pl-4 pr-4 rounded-lg text-white"
				>
					Acheter <strong>1</strong> action
				</button>
			</div>

			<!-- Action 3 -->
			<div
				class="bg-white p-3 rounded-lg flex flex-col items-start drop-shadow-lg gap-2 w-fit h-fit"
			>
				<div class="flex flex-row gap-2 items-center">
					<img
						src="../assets/icons/entreprise/crea.svg"
						class="w-auto"
					/>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong>{{ data.CRAprice }} €</strong>
					</p>
					<p>
						Valeur totale :
						<strong>{{ data.fluctuatedSumCRA }} €</strong>
					</p>
					<p>
						Actions possédés : <strong>{{ data.CRAstock }}</strong>
					</p>
				</div>
				<button
					@click="addCRA"
					class="bg-primary p-2 pl-4 pr-4 rounded-lg text-white"
				>
					Acheter <strong>1</strong> action
				</button>
			</div>
			<!-- Action 4 -->
			<div
				class="bg-white p-3 rounded-lg flex flex-col items-start drop-shadow-lg gap-2 w-fit h-fit"
			>
				<div class="flex flex-row gap-2 items-center">
					<img
						src="../assets/icons/entreprise/devwork.svg"
						class="w-auto"
					/>
				</div>
				<div class="flex flex-col">
					<p>
						Prix de l'action :
						<strong>{{ data.DWRKprice }} €</strong>
					</p>
					<p>
						Valeur totale :
						<strong>{{ data.fluctuatedSumDWRK }} €</strong>
					</p>
					<p>
						Actions possédés : <strong>{{ data.DWRKstock }}</strong>
					</p>
				</div>
				<button
					@click="addDWRK"
					class="bg-primary p-2 pl-4 pr-4 rounded-lg text-white"
				>
					Acheter <strong>1</strong> action
				</button>
			</div>
		</div>

		<div
			class="bg-white flex flex-col flex-wrap p-4 rounded-lg drop-shadow-lg w-fit"
		>
			<v-chart
				class="chart"
				:option="option"
				autoresize
				style="width: 400px; height: 400px"
			/>
			<div class="flex flex-col gap-2">
				<div class="flex content-between justify-between items-center">
					<p class="font-bold">
						Nombre d'action : {{ data.totalStock }}
					</p>
					<p class="font-bold">
						Valeur : {{ data.totalValueStock }} €
					</p>
				</div>
				<div
					class="flex button-sell content-between justify-between items-center gap-2"
				>
					<div>
						<button
							@click="sellUTO"
							class="bg-primary w-40 p-2 pl-6 pr-6 rounded-lg text-white font-bold"
						>
							Vendre UTO
						</button>
					</div>
					<div>
						<button
							@click="sellMRS"
							class="bg-primary w-40  p-2 pl-6 pr-6 rounded-lg text-white font-bold"
						>
							Vendre MRS
						</button>
					</div>
					<div>
						<button
							@click="sellCRA"
							class="bg-primary w-40  p-2 pl-6 pr-6 rounded-lg text-white font-bold"
						>
							Vendre CRA
						</button>
					</div>
					<div>
						<button
							@click="sellDWRK"
							class="bg-primary w-40  p-2 pl-6 pr-6 rounded-lg text-white font-bold"
						>
							Vendre DWRK
						</button>
					</div>
					<br>
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
	}, 1000)
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
	}, 1000)
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
	}, 1000)
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
	}, 1000)
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

<style scoped>
@media (max-width: 425px) {
	.chart {
		display: none;
	}
	.button-sell {
		flex-direction: column;
	}
}
</style>
<!-- <script>


export default {
	data() {
		return {
			newNumber1: 0,
			gains: 1000,
			sum1: 0,
			fluctuatedSum1: 0,
			intervalId1: null,
		}
	},
	// mounted() {
	// 	setTimeout(() => {
	// 		const myChart = echarts.init(document.getElementById("pie-chart"))
	// 		console.log("chart init")
	// 		const chart = echarts.init(document.getElementById("line-chart"))
	// 		// Pie chart
			
	// 		// Line chart
	// 		// chart.setOption({
	// 		// 	xAxis: {
	// 		// 		type: "category",
	// 		// 		data: [
	// 		// 			"Janvier",
	// 		// 			"Février",
	// 		// 			"Mars",
	// 		// 			"Avril",
	// 		// 			"Mai",
	// 		// 			"Juin",
	// 		// 			"Juillet",
	// 		// 			"Août",
	// 		// 			"Septembre",
	// 		// 			"Octobre",
	// 		// 			"Novembre",
	// 		// 			"Décembre",
	// 		// 		],
	// 		// 	},
	// 		// 	yAxis: {
	// 		// 		type: "value",
	// 		// 	},
	// 		// 	title: {
	// 		// 		text: "Cours de la bourse en 2022",
	// 		// 		left: "center",
	// 		// 		textStyle: {
	// 		// 			color: "#444",
	// 		// 			fontSize: 16,
	// 		// 		},
	// 		// 	},
	// 		// 	tooltip: {
	// 		// 		trigger: "item",
	// 		// 		formatter: "{b}: {c} €",
	// 		// 	},
	// 		// 	legend: {
	// 		// 		orient: "horizontal",
	// 		// 		bottom: "bottom",
	// 		// 		data: ["MRS", "UTO", "CRA", "DWRK"],
	// 		// 	},
	// 		// 	series: [
	// 		// 		{
	// 		// 			name: "MRS",
	// 		// 			data: [
	// 		// 				436.74, 442.98, 445.32, 462.12, 459.64, 456.65,
	// 		// 				312.43, 341.52, 349.79, 353.95, 360.56, 362.55,
	// 		// 			],
	// 		// 			type: "line",
	// 		// 			color: ["#F8687C"],
	// 		// 		},
	// 		// 		{
	// 		// 			name: "UTO",
	// 		// 			data: [
	// 		// 				84.28, 96.23, 102.82, 107.67, 120.64, 125.61,
	// 		// 				140.32, 146.15, 153.93, 162.97, 150.69, 98.65,
	// 		// 			],
	// 		// 			type: "line",
	// 		// 			color: ["#68F5AA"],
	// 		// 		},
	// 		// 		{
	// 		// 			name: "CRA",
	// 		// 			data: [
	// 		// 				215.63, 229.29, 236.12, 246.32, 260.26, 190.65,
	// 		// 				170.56, 196.15, 188, 203.16, 220.45, 223.15,
	// 		// 			],
	// 		// 			type: "line",
	// 		// 			color: ["#FFF482"],
	// 		// 		},
	// 		// 		{
	// 		// 			name: "DWRK",
	// 		// 			data: [
	// 		// 				273.39, 279.65, 282.79, 286.24, 301.56, 406.16, 405,
	// 		// 				411.19, 419.52, 423.19, 422.65, 423.15,
	// 		// 			],
	// 		// 			type: "line",
	// 		// 			color: ["#9E89F3"],
	// 		// 		},
	// 		// 	],
	// 		// })
	// 		chart.resize()
	// 	}, 0)
	// },
	methods: {
		reload() {
			window.location.reload()
		},
		resetLocal() {
			localStorage.clear()
			window.location.reload()
		},
		buyAction10() {
			if (data.money < 10) {
				alert("Vous n'avez pas assez d'argent")
				return
			} else {
				data.money -= 10
				this.newNumber1 = 10
				this.addNumber1()
			}
		},
    buyAction100() {
			if (data.money < 100) {
				alert("Vous n'avez pas assez d'argent")
				return
			} else {
				data.money -= 100
				this.newNumber1 = 100
				this.addNumber1()
			}
		},
		sellAction1() {
			data.money += this.fluctuatedSum1
      this.sum1 = 0
      this.newNumber1 = 0
			this.fluctuatedSum1 = 0
      clearInterval(this.intervalId1)
			this.intervalId1 = null
		},
		addNumber1() {
			// Ajoute le nouveau nombre à la somme
			this.sum1 += parseInt(this.newNumber1)

			// Lance la boucle de fluctuation si elle n'est pas déjà lancée
			if (!this.intervalId1) {
				this.startFluctuationLoop1()
			}

			// Réinitialise l'entrée utilisateur
			this.newNumber1 = 0
		},
		startFluctuationLoop1() {
			// Calcule la magnitude de la fluctuation en fonction de la somme actuelle
			const magnitude1 = Math.floor(this.sum1 / 2)

			// Lance la boucle avec une vitesse de 5 secondes
			this.intervalId1 = setInterval(() => {
				// Fluctue la somme aléatoirement en utilisant la magnitude calculée
				const fluctuation1 =
					Math.floor(Math.random() * (magnitude1 + 2) * 6) - magnitude1
				this.fluctuatedSum1 = this.sum1 + fluctuation1

				// Arrête la boucle si la somme atteint 0
				if (this.fluctuatedSum1 <= 0) {
					this.stopFluctuationLoop1()
				}
			}, 1000)
		},
		stopFluctuationLoop1() {
			if (this.intervalId1) {
				// Arrête la boucle si elle est lancée
				clearInterval(this.intervalId1)
				this.intervalId1 = null
			}
		},
	},
	computed: {
		totalStock() {
			return (
				data.MRSstock + data.UTOstock + data.CRAstock + data.DWRKstock
			)
		},
		totalValueStock() {
			return (
				data.MRSstock * data.MRSprice +
				data.UTOstock * data.UTOprice +
				data.CRAstock * data.CRAprice +
				data.DWRKstock * data.DWRKprice
			)
		},
	},
}
</script> -->
