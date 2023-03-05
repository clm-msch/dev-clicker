<template>
	<div style="text-align: center">
    <div
    style="gap: 10px; display: flex; justify-content: center; align-items: center;" 
    :class="{
				animate__animated: isAnimated,
				animate__headShake: isAnimated,
			}"
      @click="incrementCookies"
      >
      <img 
      v-if="autoclickers == 0"
			src="https://res.cloudinary.com/diurvm1bd/image/upload/v1677973052/website_state_1_axcrdj.png"
		/>
    <img v-if="autoclickers <= 1" src="https://res.cloudinary.com/diurvm1bd/image/upload/v1677973670/website_state_2_nhk3oy.png">
    <img src="https://res.cloudinary.com/diurvm1bd/image/upload/v1677978820/website_state_2_y0qp7z.png" alt="">
		<button
			
			class="btn btn-outline-light siteweb"

		>
			Développe ton site
		</button>
    </div>
		<p><br />Visteurs: {{ visits }}</p>
		<p>{{ autoclickers + tailwind }} Visteurs par seconde</p>
    <p>Compte en banque: {{ money }} €</p>

		<!-- Achat de technologie -->
		<button class="btn btn-outline-light" @click="buyCursor">
			{{ cursors }} / HTML ({{ cursorPrice }} Visteurs)
		</button>
		<button class="btn btn-outline-light" @click="buyAutoclicker">
			{{ autoclickers }} / CSS ({{ autoclickerPrice }} Visteurs)
		</button>
		<button class="btn btn-outline-light" @click="buyJavascript">
			{{ javascript }} / JavaScript ({{ javascriptPrice }} Visteurs)
		</button>
		<button
			class="btn btn-outline-light"
			v-if="frameworkJSButton"
			@click="activeJSFramework"
		>
			Framework Javascript (10000 Visteurs)
		</button>
		<button
			class="btn btn-outline-success"
			@click="buyVuejs"
			v-if="vuejs >= 100"
		>
			{{ vuejs }} / Vue.js ({{ vuejsPrice }} Visteurs)
		</button>
		<button
			class="btn btn-outline-light"
			v-if="frameworkCSSButton"
			@click="activeCSSFramework"
		>
			Framework CSS (30000 Visteurs)
		</button>
		<button
			class="btn btn-outline-info"
			@click="buyTailWind"
			v-if="tailwind >= 100"
		>
			{{ tailwind }} / Tailwind ({{ tailwindPrice }} Visteurs)
		</button>
		<button class="btn btn-outline-light" @click="cheat1000">
			add 1000
		</button>
		<!-- Achat de technologie -->

		<!-- Choix du framework Javascript -->
		<div v-if="frameworkJSMenu">
			<br />
			<p>Choisis ton framework Javascript :</p>
			<button class="btn btn-outline-light">Angular.js</button>
			<button class="btn btn-outline-success" @click="activeVuejs">
				Vue.js
			</button>
			<button class="btn btn-outline-light">React.js</button>
		</div>
		<!-- Choix du framework Javascript -->

		<!-- Choix du framework CSS -->
		<div v-if="frameworkCSSMenu">
			<br />
			<p>Choisis ton framework Javascript :</p>
			<button class="btn btn-outline-light">Bootstrap</button>
			<button class="btn btn-outline-info" @click="activeTailWind">
				Tailwind
			</button>
			<button class="btn btn-outline-light">Bulma</button>
		</div>
		<!-- Choix du framework CSS -->

    <!-- Vente du site -->
    <div v-if="visits >= 100000">
      <br>
      <p>Vous avez atteint 100 000 visiteurs !</p>
      <p>Vous pouvez vendre votre site pour 2000 €</p>
      <p>(la vente va remettre à zéro tes compétences mais va te donner un boost x2)</p>
      <button class="btn btn-outline-light" @click="sellSite">
        Vendre le site
      </button>
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
			money: 0,
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
		}
	},
	methods: {
		cheat1000() {
			this.visits += 10000
		},
		incrementCookies() {
			this.visits += this.cursors
			this.visits += this.javascript
			this.visits += this.vuejs

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
    sellSite() {
      if (this.visits >= 100000) {
        this.visits = 0
        this.money += 2000
        this.tailwind = 0
        this.vuejs = 0
        this.javascript = 0
        this.autoclickers = 0
        this.cursors = 1
        this.frameworkCSSButton = true
        this.frameworkJSButton = true
      }
    }
	},
	created() {
		setInterval(() => {
			this.visits += this.autoclickers + this.tailwind
		}, 1000)
	},
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@500;800&display=swap");

body {
	background: linear-gradient(
			252.46deg,
			#302842 0%,
			#272531 48.44%,
			#2c2644 100%
		)
		no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	padding: 10px;
	background-size: 100%;
}
button {
	align-items: center;
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

.instruction {
	text-align: center;
	color: white;
	font-family: "Urbanist", sans-serif;
}
</style>
