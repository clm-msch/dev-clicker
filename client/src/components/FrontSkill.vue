<template>
	<!-- <div class="inline-flex gap-4 pt-4 flex-wrap justify-center">
		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="logos/skill-icons_html.svg" alt="" />
				<div>
					<strong class="text-xl">HTML</strong>
					<p class="text-sm">ajoute +1 au clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Langage de balisage utilisé pour créer des pages Web.
					<br />
					<br />
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ htmlFormatted }} exp</p>
					<p>Quantité : {{ html }}</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addHtml"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="logos/skill-icons_css.svg" alt="" />
				<div>
					<strong class="text-xl">CSS</strong>
					<p class="text-sm">ajoute +1 par seconde</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Langage de feuilles de style utilisé pour styliser et mettre
					en forme les pages Web.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ cssFormatted }} exp</p>
					<p>Quantité : {{ css }}</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addCss"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="logos/skill-icons_javascript.svg" alt="" />
				<div>
					<strong class="text-xl">Javascript</strong>
					<p class="text-sm">ajoute +10 par clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Langage de programmation utilisé pour ajouter de
					l'interactivité aux pages Web.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ jsFormatted }} exp</p>
					<p>Quantité : {{ js }}</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addJs"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="logos/skill-icons_tailwindcss.svg" alt="" />
				<div>
					<strong class="text-xl">TailWind</strong>
					<p class="text-sm">ajoute +10 par seconde</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Framework CSS qui fournit une bibliothèque de classes prêtes
					à l'emploi pour faciliter la mise en forme des pages Web.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ tailwindFormatted }} exp</p>
					<p>Quantité : {{ tailwind }}</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addTailwind"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="logos/skill-icons_vuejs.svg" alt="" />
				<div>
					<strong class="text-xl">Vue.js</strong>
					<p class="text-sm">ajoute +1000 par clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Framework JavaScript permettant de créer des applications
					Web interactives et dynamiques.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ vuejsFormatted }} exp</p>
					<p>Quantité : {{ vuejs }}</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addVuejs"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="logos/skill-icons_vite.svg" alt="" />
				<div>
					<strong class="text-xl">Vite.js</strong>
					<p class="text-sm">ajoute +500 par seconde</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Outil de construction rapide pour les applications Web
					modernes, basé sur JavaScript.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ viteFormatted }} exp</p>
					<p>Quantité : {{ vite }}</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addVite"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script>
export default {
	data() {
		return {
			exp: null,
			html: 1,
			css: 0,
			js: 0,
			tailwind: 0,
			vuejs: 0,
			vite: 0,
			htmlPrice: 10,
			cssPrice: 100,
			jsPrice: 1000,
			tailwindPrice: 3000,
			vuejsPrice: 10000,
			vitePrice: 100000,
		}
	},
	props: {
		exp: {
			type: String,
			required: true,
		},
	},
	computed: {
		htmlFormatted() {
			return this.htmlPrice.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
		cssFormatted() {
			return this.cssPrice.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
		jsFormatted() {
			return this.jsPrice.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
		tailwindFormatted() {
			return this.tailwindPrice.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
		vuejsFormatted() {
			return this.vuejsPrice.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
		viteFormatted() {
			return this.vitePrice.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
	},
}
</script>

<style scoped>
.skill-card {
	background-color: white;
	padding: 8px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 200px;
	width: 400px;
}

.price-button {
	align-items: center;
	justify-content: center;
}
</style>
