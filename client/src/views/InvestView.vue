<template>
	<div class="flex gap-2 flex-wrap">
		<!-- Action 1 -->
		<div
			class="bg-white p-4 rounded-lg flex flex-col items-start drop-shadow-lg gap-2"
		>
			<div class="flex flex-row gap-2 items-center">
				<img
					src="../assets/icons/entreprise/unito.svg"
					class="w-auto"
				/>
				<p class="text-red-500">-0,50€ (0,18%) UTO</p>
			</div>
			<div class="flex flex-col">
				<p>
					Prix de l'action : <strong>{{ data.UTOprice }} €</strong>
				</p>
				<p>
					Actions possédés : <strong>{{ data.UTOstock }}</strong>
				</p>
			</div>
			<button
				@click="data.buyUTO"
				class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white"
			>
				Acheter <strong>1</strong> action
			</button>
		</div>

		<!-- Action 2 -->
		<div
			class="bg-white p-4 rounded-lg flex flex-col items-start drop-shadow-lg gap-2"
		>
			<div class="flex flex-row gap-2 items-center">
				<img src="../assets/icons/entreprise/mars.svg" class="w-auto" />
				<p class="text-green-500">+2,70€ (0,45%) MRS</p>
			</div>
			<div class="flex flex-col">
				<p>
					Prix de l'action : <strong>{{ data.MRSprice }} €</strong>
				</p>
				<p>
					Actions possédés : <strong>{{ data.MRSstock }}</strong>
				</p>
			</div>
			<button
				@click="data.buyMRS"
				class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white"
			>
				Acheter <strong>1</strong> action
			</button>
		</div>

		<!-- Action 3 -->
		<div
			class="bg-white p-4 rounded-lg flex flex-col items-start drop-shadow-lg gap-2"
		>
			<div class="flex flex-row gap-2 items-center">
				<img
					src="../assets/icons/entreprise/devwork.svg"
					class="w-auto"
				/>
				<p class="text-green-500">+6,30€ (0,12%) DWRK</p>
			</div>
			<div class="flex flex-col">
				<p>
					Prix de l'action : <strong> {{ data.DWRKprice }} €</strong>
				</p>
				<p>
					Actions possédés : <strong>{{ data.DWRKstock }}</strong>
				</p>
			</div>
			<button
				@click="data.buyDWRK"
				class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white"
			>
				Acheter <strong>1</strong> action
			</button>
		</div>

		<!-- Action 3 -->
		<div
			class="bg-white p-4 rounded-lg flex flex-col items-start drop-shadow-lg gap-2"
		>
			<div class="flex flex-row gap-2 items-center">
				<img src="../assets/icons/entreprise/crea.svg" class="w-auto" />
				<p class="text-red-500">-4,46€ (4,54%) CRA</p>
			</div>
			<div class="flex flex-col">
				<p>
					Prix de l'action : <strong> {{ data.CRAprice }} €</strong>
				</p>
				<p>
					Actions possédés : <strong>{{ data.CRAstock }}</strong>
				</p>
			</div>
			<button
				@click="data.buyCRA"
				class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white"
			>
				Acheter <strong>1</strong> action
			</button>
		</div>

		<br />
		<div class="bg-white p-4 rounded-lg drop-shadow-lg">
			<div id="pie-chart" style="width: 600px; height: 400px"></div>
			<div class="flex flex-col gap-2">
			<div class="flex content-between justify-between items-center">
				<p class="font-bold">Nombre d'action : {{ totalStock }}</p>
				<p class="font-bold">Valeur : {{ totalValueStock }} €</p>
				<button
					@click="data.sellAllStock"
					class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white font-bold"
				>
					Vendre toutes tes actions
				</button>
			</div>
			<div class="flex content-between justify-between items-center">
				<button
					@click="data.sellMRS"
					class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white font-bold"
				>
					Vendre MRS
				</button>
				<button
				@click="data.sellUTO"
				class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white font-bold"
			>
				Vendre UTO
			</button>
			<button
			@click="data.sellCRA"
			class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white font-bold"
		>
			Vendre CRA
		</button>
		<button
		@click="data.sellDWRK"
		class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white font-bold"
	>
		Vendre DWRK
	</button>
			</div>
		</div>

	</div>		
	<div class="bg-white p-4 rounded-lg drop-shadow-lg">
			<div id="line-chart" style="width: 500px; height: 400px"></div>
		</div>
	</div>
	<button
		@click="reload"
		class="bg-dark_grey p-2 pl-6 pr-6 rounded-lg text-white font-bold"
	>
		Recharger les données
	</button>
	<button
		@click="resetLocal"
		class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
	>
		🗑️ Resart
	</button>
</template>
<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>
<script>
import * as echarts from "echarts"
import { useDataStore } from "../stores/data"
const data = useDataStore()

export default {
	mounted() {
		setTimeout(() => {
			const myChart = echarts.init(document.getElementById("pie-chart"))
			console.log("chart init")
			const chart = echarts.init(document.getElementById("line-chart"))
			// Pie chart
			myChart.setOption({
				title: {
					text: "Liste de tes actions",
					left: "center",
					textStyle: {
						color: "#444",
						fontSize: 16,
					},
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
						name: "Répartition des revenus",
						type: "pie",
						radius: ["40%", "70%"],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: "center",
						},
						itemStyle: {
							borderRadius: 10,
							borderColor: "#fff",
							borderWidth: 2,
						},
						emphasis: {
							label: {
								show: true,
								fontSize: "30",
								fontWeight: "bold",
							},
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
					},
				],
			})
			// Line chart
			chart.setOption({
				xAxis: {
					type: "category",
					data: [
						"Janvier",
						"Février",
						"Mars",
						"Avril",
						"Mai",
						"Juin",
						"Juillet",
						"Août",
						"Septembre",
						"Octobre",
						"Novembre",
						"Décembre",
					],
				},
				yAxis: {
					type: "value",
				},
				title: {
					text: "Cours de la bourse en 2022",
					left: "center",
					textStyle: {
						color: "#444",
						fontSize: 16,
					},
				},
				tooltip: {
					trigger: "item",
					formatter: "{b}: {c} €",
				},
				legend: {
					orient: "horizontal",
					bottom: "bottom",
					data: ["MRS", "UTO", "CRA", "DWRK"],
				},
				series: [
					{
						name: "MRS",
						data: [
							436.74, 442.98, 445.32, 462.12, 459.64, 456.65,
							312.43, 341.52, 349.79, 353.95, 360.56, 362.55,
						],
						type: "line",
						color: ["#F8687C"],
					},
					{
						name: "UTO",
						data: [
							84.28, 96.23, 102.82, 107.67, 120.64, 125.61,
							140.32, 146.15, 153.93, 162.97, 150.69, 98.65,
						],
						type: "line",
						color: ["#68F5AA"],
					},
					{
						name: "CRA",
						data: [
							215.63, 229.29, 236.12, 246.32, 260.26, 190.65,
							170.56, 196.15, 188, 203.16, 220.45, 223.15,
						],
						type: "line",
						color: ["#FFF482"],
					},
					{
						name: "DWRK",
						data: [
							273.39, 279.65, 282.79, 286.24, 301.56, 406.16, 405,
							411.19, 419.52, 423.19, 422.65, 423.15,
						],
						type: "line",
						color: ["#9E89F3"],
					},
				],
			})
			chart.resize()
		}, 0)
	},
	methods: {
		reload() {
			window.location.reload()
		},
		resetLocal() {
			localStorage.clear()
			window.location.reload()
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
</script>
