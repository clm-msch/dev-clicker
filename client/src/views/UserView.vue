<!-- <template>
    <button @click="signInWhithGoogle">Connexion avec google</button>
		
		<h3><strong>{{ data.money }}</strong></h3>

		<button @click="data.increaseMoney(5)"> + </button>
</template>

<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { ref } from "vue"


import { useDataStore } from '..//stores/data'
const data = useDataStore()


const userId = ref("")
const userMail = ref("")

const signInWhithGoogle = () => {
	const provider = new GoogleAuthProvider()
	signInWithPopup(getAuth(), provider)
		.then((result) => {
			console.log("Inscription réussie !")
			console.log(result.user)
			console.log(result.user.uid)
			userId.value = result.user.uid
			userMail.value = result.user.email
		})
		.catch((error) => {
			console.log(error.code)
		})
}

</script>

<style scoped>
button {
	justify-content: center;
	background: #4f46e5;
	font-size: large;
	font-weight: bold;
	color: white;
	padding: 8px;
	border-radius: 4px;
	gap: 4px;
}
</style> -->

<template>
  <div>
    <h1>Simulation de fluctuations de chiffres</h1>
    <p>
      <label>
        <input type="checkbox" v-model="enabled" />
        Activer la simulation
      </label>
    </p>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Valeur</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="index">
          <td>{{ company.name }}</td>
          <td>{{ company.value.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useDataStore } from "../stores/data"
const data = useDataStore()
export default {
	data() {
		return {
			companies: [
				{ name:  "MRS", value: 50 },
				{ name: "DWRK", value: 50 },
				{ name: "CRA", value: 50 },
				{ name: "UTO", value: 50 },
				],
				enabled: false,
      favoriteCompany: null,
      favoriteFactor: 1.5,
      maxFluctuation: 10,
      allowNegative: true,
    };
  },
  watch: {
    enabled(newValue) {
      if (newValue && !this.running) {
        this.start();
      } else if (!newValue && this.running) {
        this.stop();
      }
    },
  },
  methods: {
    start() {
      if (this.running) {
        return;
      }
      if (this.companies.some(company => company.value === 0)) {
        return;
      }
      this.running = true;
      this.timerId = setInterval(() => {
        this.updateValues();
      }, 1000);
    },
    stop() {
      if (!this.running) {
        return;
      }
      this.running = false;
      clearInterval(this.timerId);
    },
    updateValues() {
      this.companies.forEach((company) => {
        let factor = 1;
        if (company === this.favoriteCompany) {
          factor = this.favoriteFactor;
        }
        const fluctuation = (Math.random() - 0.5) * this.maxFluctuation;
        const newValue = company.value + fluctuation * factor;
        if (newValue < 0 && !this.allowNegative) {
          company.value = 0;
        } else {
          company.value = newValue;
        }
      });
    },
  },
  mounted() {
    this.favoriteCompany = this.companies[Math.floor(Math.random() * this.companies.length)];
  },
};
</script>

<style>
table {
	border-collapse: collapse;
	width: 100%;
}

th,
td {
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ddd;
}

th {
	background-color: #f2f2f2;
}
</style>

<!-- <template>
	<div>
		<h1>Simulation de fluctuations de chiffres</h1>
		<button class="bg-primary text-white p-2 rounded" @click="buyAction10">Acheter des actions pour 10 €</button>
		<p>Somme fluctuée: {{ fluctuatedSum1 }} €</p>
    <button class="bg-primary text-white p-2 rounded" @click="buyAction100">Acheter des actions pour 100 €</button>
		<button class="bg-primary text-white p-2 rounded" @click="sellAction1">Vendre des actions</button>
		<p>Tes gains {{ gains }} €</p>
	</div>
</template>

<script>
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
	methods: {
		buyAction10() {
			if (this.gains < 10) {
				alert("Vous n'avez pas assez d'argent")
				return
			} else {
				this.gains -= 10
				this.newNumber1 = 10
				this.addNumber1()
			}
		},
    buyAction100() {
			if (this.gains < 100) {
				alert("Vous n'avez pas assez d'argent")
				return
			} else {
				this.gains -= 100
				this.newNumber1 = 100
				this.addNumber1()
			}
		},
		sellAction1() {
			this.gains += this.fluctuatedSum1
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
}
</script> -->

<!-- <template>
	<v-chart
		class="chart"
		:option="option"
		autoresize
		style="width: 500px; height: 400px"
	/>
	<button @click="addMRS">Ajout de MRS</button>
	<button @click="addUTO">Ajout de UTO</button>
	<button @click="addCRA">Ajout de CRA</button>
	<button @click="addDWRK">Ajout de DWRK</button>
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

const addMRS = () => {
	option.value.series[0].data[0].value += 1
	data.MRSstock += 1
}
const addUTO = () => {
	option.value.series[0].data[1].value += 1
	data.UTOstock += 1
}
const addCRA = () => {
	option.value.series[0].data[2].value += 1
	data.CRAstock += 1
}
const addDWRK = () => {
	option.value.series[0].data[3].value += 1
	data.DWRKstock += 1
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
.chart {
	height: 100vh;
}
</style> -->
