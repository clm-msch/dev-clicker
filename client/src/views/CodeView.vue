<script setup>
	import Popup from '../components/Popup.vue';
</script>
<template>
	<Popup :newComer="exp" @closePopup="handleExpPopup" />
	<div
		style="
			display: flex;
			justify-content: center;
			flex-direction: column;
			flex-wrap: wrap;
		"
	>
		<button
			@click="addExp"
			class="inline-flex space-x-3 items-center justify-center w-80 h-28 px-12 py-9 bg-white border-4 rounded-lg border-indigo-600"
		>
			<p class="text-3xl font-bold text-gray-800">Développe</p>
			<img
				class="w-1/5 h-10 rounded-lg"
				src="../assets/icons/basics/brain_logo.svg"
			/>
		</button>
		<div class="w-80 h-28">
			<div
				class="inline-flex flex-col items-center justify-end flex-1 h-full px-9 py-9 bg-white rounded-lg"
			>
				<p class="w-full h-1/2 text-xl text-gray-800">
					Expérience : <strong>{{ expFormatted }}</strong>
				</p>
				<p class="w-full h-1/2 text-xl text-gray-800">
					<strong>{{ expSecond }}</strong> Expérience par seconde
				</p>
			</div>
		</div>
		<section>
			<!-- Buy Tech Section -->
			<div>
				<h2>Front-End</h2>
				<button
					@click="addCss"
					class="bg-green-500 font-bold py-2 px-4 rounded"
				>
					{{ css }} / CSS ({{ cssPrice }} Expérience)
				</button>
				<button
					@click="addJS"
					class="bg-green-500 font-bold py-2 px-4 rounded"
				>
					{{ js }} / JavaScript ({{ jsPrice }} Expérience)
				</button>
			</div>
			<!-- Buy Tech Section -->
			<button
				@click="resetAll"
				class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				RESET
			</button>
		</section>
	</div>

	<!-- new button -->
	<div
		class="inline-flex space-x-8 items-start justify-start"
		style="width: 1330px; height: 600px"
	>
		<div
			class="flex space-x-2 items-start justify-start"
			style="width: 650px; height: 600px"
		>
			<div
				class="inline-flex flex-col space-y-2 items-start justify-start w-1/2"
			>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_html.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">HTML</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Langage de balisage utilisé pour créer des pages
							Web.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix: {{ htmlPrice }}</p>
								<p class="text-base text-gray-800">
									Quantité: {{ html }}
								</p>
							</div>
							<button
							@click="addHtml"
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</button>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_javascript.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								JavaScript
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Langage de programmation utilisé pour ajouter de
							l'interactivité aux pages Web.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_vuejs.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Vue.js
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Framework JavaScript permettant de créer des
							applications Web interactives et dynamiques.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="inline-flex flex-col space-y-2 items-start justify-start w-1/2"
			>
				<div
					class="flex flex-col space-y-2 items-end justify-start w-full h-1/3 px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_css.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">CSS</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Langage de feuilles de style utilisé pour styliser
							et mettre en forme les pages Web.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_tailwindcss.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Tailwind
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Framework CSS qui fournit une bibliothèque de
							classes prêtes à l'emploi pour faciliter la mise en
							forme des pages Web.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_vite.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Vite.js
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Outil de construction rapide pour les applications
							Web modernes, basé sur JavaScript.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex space-x-2 items-start justify-start"
			style="width: 650px; height: 574px"
		>
			<div
				class="inline-flex flex-col space-y-2 items-start justify-start w-1/2"
			>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_nodejs.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Node.js
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Environnement d'exécution JavaScript côté serveur,
							qui permet d'exécuter du code JavaScript en dehors
							du navigateur.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_prisma.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Prisma
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Outil de gestion de base de données, qui permet de
							simplifier les interactions avec les bases de
							données en utilisant un ORM
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_docker.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Docker
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Une technologie qui permet d'isoler et de
							transporter des applications dans des conteneurs
							légers et portables.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="inline-flex flex-col space-y-2 items-start justify-start w-1/2"
			>
				<div
					class="flex flex-col space-y-2 items-end justify-start w-full h-1/3 px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_expressjs.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Express.js
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Framework web pour Node.js, qui facilite la création
							d'API RESTful et de serveurs web.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_mongodb.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								MongoDB
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Système de gestion de base de données NoSQL, qui
							stocke les données sous forme de documents JSON
							flexibles.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 items-end justify-start px-4 py-3 bg-white shadow rounded-lg"
				>
					<div
						class="inline-flex space-x-2 items-center justify-start w-full"
					>
						<div class="w-16 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_vercel.svg"
							/>
						</div>
						<div
							class="inline-flex flex-col items-start justify-start"
						>
							<p class="text-xl font-bold text-gray-800">
								Vercel
							</p>
							<p class="text-xs text-gray-800">
								ajoute +1 au clic
							</p>
						</div>
					</div>
					<div
						class="flex flex-col space-y-4 items-start justify-start"
					>
						<p class="w-full h-9 text-xs text-gray-800">
							Une plateforme cloud qui permet de déployer et de
							gérer des applications Web statiques et dynamiques,
							ainsi que des fonctions serverless.
						</p>
						<div
							class="inline-flex space-x-32 items-center justify-start"
						>
							<div
								class="inline-flex flex-col items-start justify-start"
							>
								<p class="text-base text-gray-800">Prix : 1</p>
								<p class="text-base text-gray-800">
									Quantité : 1
								</p>
							</div>
							<div
								class="flex items-center justify-center p-1.5 px-7 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg"
							>
								<img
									class="flex-1 h-full rounded-lg"
									src="../assets/icons/basics/plus_logo.svg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- new button -->
</template>

<script>
export default {
	name: "CodePage",
	components: {
		Popup,
	},
	data() {
		return {
			exp: 0,
			expSecond: 0,
			// Buy tech
			html: 1,
			htmlPrice: 100,

			css: 0,
			cssPrice: 100,

			js: 0,
			jsPrice: 100,
		}
	},
	computed: {
		expFormatted() {
			return this.exp.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
	},
	methods: {
		handleExpPopup(closePopup) {
			this.exp += 1
			this.saveToLocalStorage("exp", this.exp)
		},
		// Buttons mehtods
		addExp() {
			this.exp += this.html
			this.exp += this.js
			this.saveToLocalStorage("exp", this.exp)
			this.saveToLocalStorage("html", this.html)
		},
		addHtml() {
			if (this.exp >= this.htmlPrice) {
				this.exp -= this.htmlPrice
				this.html += 1
				this.htmlPrice *= 2
				this.saveToLocalStorage("exp", this.exp)
				this.saveToLocalStorage("html", this.html)
				this.saveToLocalStorage("htmlPrice", this.htmlPrice)
			}
		},
		addCss() {
			if (this.exp >= this.cssPrice) {
				this.exp -= this.cssPrice
				this.css += 1
				this.cssPrice *= 2
				this.expSecond += this.css
				this.saveToLocalStorage("exp", this.exp)
				this.saveToLocalStorage("css", this.css)
				this.saveToLocalStorage("cssPrice", this.cssPrice)
			}
		},
		addJS() {
			if (this.exp >= this.jsPrice) {
				this.exp -= this.jsPrice
				this.js += 10
				this.jsPrice *= 2
				this.saveToLocalStorage("exp", this.exp)
				this.saveToLocalStorage("js", this.js)
				this.saveToLocalStorage("jsPrice", this.jsPrice)
			}
		},

		resetAll() {
			if (
				confirm("Voulez-vous vraiment supprimer toutes les données ?")
			) {
				this.css = 0
				this.exp = 0
				localStorage.clear()
				location.reload()
			}
		},

		// Local storage methods
		saveToLocalStorage(key, value) {
			localStorage.setItem(key, JSON.stringify(value))
			console.log("Data saved in local storage")
		},
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
		loadCodeData() {
			this.exp = this.loadFromLocalStorage("exp") || 0
			this.expFormatted = this.loadFromLocalStorage("expFormatted") || 0
			this.html = this.loadFromLocalStorage("html") || 1
			this.htmlPrice = this.loadFromLocalStorage("htmlPrice") || 100
			this.css = this.loadFromLocalStorage("css") || 0
			this.cssPrice = this.loadFromLocalStorage("cssPrice") || 100
			this.js = this.loadFromLocalStorage("js") || 0
			this.jsPrice = this.loadFromLocalStorage("jsPrice") || 100
		},
	},
	created() {
		setInterval(() => {
			this.exp += this.css
			this.saveToLocalStorage("css", this.css)
			this.saveToLocalStorage("exp", this.exp)
		}, 1000)
	},
	mounted() {
		this.loadCodeData()
	},
}
</script>
