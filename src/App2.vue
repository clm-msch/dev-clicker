<template>
	<div style="text-align: center">
		<div
			style="
				gap: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
			"
		>
			<button
				class="bg-secondary text-dark font-bold py-8 px-16 rounded siteweb"
				:class="{
					animate__animated: isAnimated,
					animate__headShake: isAnimated,
				}"
				@click="incrementCookies"
			>
				Développe ton site
			</button>
			<img :src="image" alt="Image" />
			<div
				style="
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					justify-content: center;
					gap: 10px;
				"
			>
				<p>Amélioration du site :</p>
				<button
					v-if="niv1"
					class="bg-secondary text-dark font-bold py-2 px-4 rounded"
					@click="
						updateImage1(
							'https://res.cloudinary.com/diurvm1bd/image/upload/v1678039840/image2_f0uepn.png'
						)
					"
				>
					Niveau 1 (5000 Visteurs + CSS)
				</button>
				<button
					v-if="niv2 && !niv1"
					class="bg-secondary text-dark font-bold py-2 px-4 rounded"
					@click="
						updateImage2(
							'https://res.cloudinary.com/diurvm1bd/image/upload/v1678039840/image4_tyauhf.png'
						)
					"
				>
					NIveau 2 (50000 Visteurs + Tailwind)
				</button>
        <!-- <button
        v-if="niv2 && !niv1"
					class="bg-secondary text-dark font-bold py-2 px-4 rounded"
					@click="
						updateImage2(
							'https://res.cloudinary.com/diurvm1bd/image/upload/v1678039840/image4_tyauhf.png'
						)
					"
				>
					NIveau 2 (100000 Visteurs + 2 Développeurs Junior Front et Back)
				</button> -->
				<p v-if="!niv1 && !niv2">
					Votre site est sublime bravo continuez <br />
					de le faire évoluer pour pouvoir le vendre
				</p>
			</div>
		</div>
		<p><br />Visteurs: {{ visits }}</p>
		<p>{{ autoclickers + tailwind }} Visteurs par seconde</p>
		<p>Compte en banque: {{ money }} €</p>

		<div class="techbutton">
			<!-- Achat de technologie -->
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyCursor"
			>
				{{ cursors }} / HTML ({{ cursorPrice }} Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyAutoclicker"
			>
				{{ autoclickers }} / CSS ({{ autoclickerPrice }} Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyJavascript"
			>
				{{ javascript }} / JavaScript ({{ javascriptPrice }} Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				v-if="frameworkJSButton"
				@click="activeJSFramework"
			>
				Framework Javascript (10000 Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyVuejs"
				v-if="vuejs >= 100"
			>
				{{ vuejs }} / Vue.js ({{ vuejsPrice }} Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				v-if="frameworkCSSButton"
				@click="activeCSSFramework"
			>
				Framework CSS (30000 Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyTailWind"
				v-if="tailwind >= 100"
			>
				{{ tailwind }} / Tailwind ({{ tailwindPrice }} Visteurs)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="cheat1000"
			>
				add 1000
			</button>
			<!-- Achat de technologie -->
		</div>

		<!-- Choix du framework Javascript -->
		<div v-if="frameworkJSMenu" class="techbutton">
			<br />
			<p>Choisis ton framework Javascript :</p>
			<button class="bg-secondary text-dark font-bold py-2 px-4 rounded">
				Angular.js
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="activeVuejs"
			>
				Vue.js
			</button>
			<button class="bg-secondary text-dark font-bold py-2 px-4 rounded">
				React.js
			</button>
		</div>
		<!-- Choix du framework Javascript -->

		<!-- Choix du framework CSS -->
		<div v-if="frameworkCSSMenu" class="techbutton">
			<br />
			<p>Choisis ton framework Javascript :</p>
			<button class="bg-secondary text-dark font-bold py-2 px-4 rounded">
				Bootstrap
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="activeTailWind"
			>
				Tailwind
			</button>
			<button class="bg-secondary text-dark font-bold py-2 px-4 rounded">
				Bulma
			</button>
		</div>
		<!-- Choix du framework CSS -->

		<div class="techbutton">
			<!-- Achat d'employé' -->
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyDevJunFront"
			>
				{{ devJunFront }} / Développeur Junior Front-end (Salaire :
				{{ devJunFrontPrice }} €)
			</button>
			<button
				class="bg-secondary text-dark font-bold py-2 px-4 rounded"
				@click="buyDevJunBack"
			>
				{{ devJunBack }} / Développeur Junior Back-end (Salaire :
				{{ devJunBackPrice }} €)
			</button>
		</div>

		<!-- Vente du site -->
		<div v-if="visits >= sellPrice">
			<br />
			<h1 class="animate__animated animate__tada">
				Vous avez atteint {{ sellPrice }} visiteurs !
			</h1>
			<p>Vous pouvez vendre votre site pour {{ sellMoney }} €</p>
			<p>
				(la vente va remettre à zéro tes compétences mais va te rendre
				riche !)
			</p>
			<div class="techbutton">
				<button
					class="bg-secondary text-dark font-bold py-2 px-4 rounded"
					@click="sellSite"
				>
					Vendre le site
				</button>
			</div>
		</div>
		<!-- Vente du site -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			isAnimated: false,
			visits: 0,
			// Vente du site
			money: 0,
			sellPrice: 100000,
			sellMoney: 2000,
			// Vente du site
			cursors: 1,
			cursorPrice: 100,
			autoclickers: 0,
			autoclickerPrice: 500,
			javascript: 0,
			javascriptPrice: 2000,
			frameworkJSMenu: false,
			frameworkJSButton: true,
			vuejsFramework: false,
			vuejs: 0,
			vuejsPrice: 15000,
			frameworkCSSMenu: false,
			frameworkCSSButton: true,
			tailwindFramework: false,
			tailwind: 0,
			tailwindPrice: 35000,
			image: "https://res.cloudinary.com/diurvm1bd/image/upload/v1678039840/image1_pmr9t5.png",
			niv1: true,
			niv2: true,
			// Achat d'employé
			devJunFront: 0,
			devJunFrontPrice: 100,
			devJunBack: 0,
			devJunBackPrice: 200,
			// Achat d'employé
		}
	},
	methods: {
		updateImage1(url) {
			if (
				this.image !== url &&
				this.visits >= 5000 &&
				this.autoclickers >= 1
			) {
				this.visits -= 5000
				this.autoclickers += 100
				this.image = url
				this.niv1 = false
			}
		},
		updateImage2(url) {
			if (
				this.image !== url &&
				this.visits >= 50000 &&
				this.tailwind >= 1
			) {
				this.visits -= 50000
				this.autoclickers += 2000
				this.image = url
				this.niv2 = false
			}
		},
		cheat1000() {
			this.visits += 10000
		},
		incrementCookies() {
			this.visits += this.cursors
			this.visits += this.javascript
			this.visits += this.vuejs
			this.visits += this.devJunBack

			this.isAnimated = true
			setTimeout(() => {
				this.isAnimated = false
			}, 500)
		},
		buyCursor() {
			if (this.visits >= this.cursorPrice) {
				this.visits -= this.cursorPrice
				this.cursors += 1
				this.cursorPrice *= 2
			}
		},
		buyAutoclicker() {
			if (this.visits >= this.autoclickerPrice) {
				this.visits -= this.autoclickerPrice
				this.autoclickers += 1
				this.autoclickerPrice *= 2
			}
		},
		buyJavascript() {
			if (this.visits >= this.javascriptPrice) {
				this.visits -= this.javascriptPrice
				this.javascript += 10
				this.javascriptPrice *= 2
			}
		},
		activeJSFramework() {
			if (this.visits >= 10000) {
				this.visits -= 10000
				this.frameworkJSMenu = true
				this.frameworkJSButton = false
			}
		},
		activeVuejs() {
			this.frameworkJSMenu = false
			this.vuejs = 100
		},
		buyVuejs() {
			if (this.visits >= this.vuejsPrice) {
				this.visits -= this.vuejsPrice
				this.vuejs += 100
				this.vuejsPrice *= 2
			}
		},
		activeCSSFramework() {
			if (this.visits >= 30000) {
				this.visits -= 30000
				this.frameworkCSSMenu = true
				this.frameworkCSSButton = false
			}
		},
		activeTailWind() {
			this.frameworkCSSMenu = false
			this.tailwind = 100
		},
		buyTailWind() {
			if (this.visits >= this.tailwindPrice) {
				this.visits -= this.tailwindPrice
				this.tailwind += 100
				this.tailwindPrice *= 2
			}
		},
		buyDevJunBack() {
			if (this.money >= this.devJunBackPrice) {
				this.money -= this.devJunBackPrice
				this.devJunBack += 1
				this.autoclickers += 50
			}
		},
		buyDevJunFront() {
			if (this.money >= this.devJunFrontPrice) {
				this.money -= this.devJunFrontPrice
				this.devJunFront += 1
				this.cursors += 50
			}
		},
		sellSite() {
			if (this.visits >= this.sellPrice) {
				this.visits = 0
				this.money += this.sellMoney
				this.sellMoney *= 2
				this.tailwind = 0
				this.vuejs = 0
				this.javascript = 0
				this.autoclickers = 0
				this.cursors = 1
				this.frameworkCSSButton = true
				this.frameworkJSButton = true
				this.niv1 = true
				this.niv2 = true
				this.sellPrice *= 2
			}
		},
	},
	created() {
		setInterval(() => {
			this.visits += this.autoclickers + this.tailwind
		}, 1000)
	},
}
</script>
<style scoped>
button {
	align-items: center;
	gap: 1rem;
}

h1 {
	text-align: center;
	font-size: larger;
	color: primary;
	font-family: "Urbanist", sans-serif;
}

.siteweb {
	--bs-btn-font-size: 4rem;
	--bs-btn-padding-x: 2rem;
	--bs-btn-outline: 50rem;
}
p {
	text-align: center;
	color: white;
	font-family: "Urbanist", sans-serif;
}

.techbutton {
	padding: 1%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
}

.instruction {
	text-align: center;
	color: white;
	font-family: "Urbanist", sans-serif;
}
</style>
