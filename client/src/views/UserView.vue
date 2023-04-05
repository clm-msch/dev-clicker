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

<!-- <template>
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
</style> -->


<template>
  <div>
    <label for="numberInput">Entrez un chiffre:</label>
    <input id="numberInput" v-model="newNumber" type="number">
    <button @click="addNumber">€ Ajouter</button>
    <p>Somme fluctuée: {{ fluctuatedSum }} €</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNumber: 0,
      sum: 0,
      fluctuatedSum: 0,
      intervalId: null
    }
  },
  methods: {
    addNumber() {
      // Ajoute le nouveau nombre à la somme
      this.sum += parseInt(this.newNumber)

      // Lance la boucle de fluctuation si elle n'est pas déjà lancée
      if (!this.intervalId) {
        this.startFluctuationLoop()
      }

      // Réinitialise l'entrée utilisateur
      this.newNumber = 0
    },
    startFluctuationLoop() {
      // Calcule la magnitude de la fluctuation en fonction de la somme actuelle
      const magnitude = Math.floor(this.sum / 10)

      // Lance la boucle avec une vitesse de 5 secondes
      this.intervalId = setInterval(() => {
        // Fluctue la somme aléatoirement en utilisant la magnitude calculée
        const fluctuation = Math.floor(Math.random() * (magnitude + 1) * 2) - magnitude
        this.fluctuatedSum = this.sum + fluctuation

        // Arrête la boucle si la somme atteint 0
        if (this.fluctuatedSum <= 0) {
          this.stopFluctuationLoop()
        }
      }, 1000)
    },
    stopFluctuationLoop() {
      if (this.intervalId) {
        // Arrête la boucle si elle est lancée
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    }
  }
}
</script>


