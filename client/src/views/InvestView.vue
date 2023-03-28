<template>
	<div class="flex gap-2 flex-wrap">
		<!-- Action 1 -->
		<div
			class="bg-white p-4 rounded-lg flex flex-col items-start drop-shadow-lg gap-2"
		>
			<div class="flex flex-row gap-2 items-center">
				<img src="../assets/icons/entreprise/unito.svg" class="w-auto" />
				<p class="text-red-500">-0,50€ (0,18%) UTO</p>
			</div>
			<div class="flex flex-col">
				<p>Prix de l'action : <strong>98,25 €</strong></p>

				<p>Actions possédés : <strong>5</strong></p>
			</div>
			<button class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white">
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
				<p>Prix de l'action : <strong>223,15 €</strong></p>

				<p>Actions possédés : <strong>5</strong></p>
			</div>
			<button class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white">
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
				<p>Prix de l'action : <strong>1613,25 €</strong></p>
				<p>Actions possédés : <strong>5</strong></p>
			</div>
			<button class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white">
				Acheter <strong>1</strong> action
			</button>
		</div>

		<!-- Action 3 -->
		<div
			class="bg-white p-4 rounded-lg flex flex-col items-start drop-shadow-lg gap-2"
		>
			<div class="flex flex-row gap-2 items-center">
				<img src="../assets/icons/entreprise/crea.svg" class="w-auto" />
				<p class="text-red-500">-10,46€ (4,54%) CRA</p>
			</div>
			<div class="flex flex-col">
				<p>Prix de l'action : <strong>26,29 €</strong></p>
				<p>Actions possédés : <strong>20</strong></p>
			</div>
			<button class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white">
				Acheter <strong>1</strong> action
			</button>
		</div>

		<br />
		<div class="bg-white p-4 rounded-lg drop-shadow-lg">
			<div id="pie-chart" style="width: 600px; height: 400px"></div>
			<div class="flex content-between justify-between items-center">
				<p class="font-bold">Valeur : 100€</p>
				<button
					class="bg-primary p-2 pl-6 pr-6 rounded-lg text-white font-bold"
				>
					Vendre toutes tes actions
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import * as echarts from "echarts"

export default {
	mounted() {
		const myChart = echarts.init(document.getElementById("pie-chart"))

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
				left: "left",
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
							value: 335,
							name: "MRS",
							itemStyle: { color: "#F8687C" },
						},
						{
							value: 310,
							name: "UTO",
							itemStyle: { color: "#68F5AA" },
						},
						{
							value: 234,
							name: "CRA",
							itemStyle: { color: "#FFF482" },
						},
						{
							value: 135,
							name: "DWRK",
							itemStyle: { color: "#9E89F3" },
						},
					],
				},
			],
		})
	},
}
</script>
