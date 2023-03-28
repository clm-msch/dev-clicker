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
