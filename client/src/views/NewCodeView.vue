<template>
	<!-- <Popup :newComer="exp" @closePopup="handleExpPopup" /> -->
		<Achivement />
		<Popup />
	<TutoCode />
	<h1 class="font-bold text-3xl">CODE</h1>
	<h1 class="text-xl" v-if="data.jsPrice >= 2000">
		Bienvenue dans l'onglet code ici tu va pouvoir <br />
		développer pour aquérir un maximum d'expérience :
	</h1>
	<br />
	<!-- dev button -->
	<div class="inline-flex gap-8 justify-center align-middle">
		<!-- @click="addExp(expData.amount)" -->
		<button
		  @keydown.enter.prevent
			@click="data.increaseExp"
			:class="{
				animate__animated: data.isAnimated,
				animate__headShake: data.isAnimated,
			}"
			class="inline-flex space-x-3 items-center justify-center w-80 h-28 px-12 py-9 bg-white border-4 rounded-lg border-indigo-600 button-dev"
		>
			<p class="text-3xl font-bold text-gray-800">Développe</p>
			<img
				class="w-1/5 h-10 rounded-lg"
				src="../assets/icons/basics/brain_logo.svg"
			/>
		</button>
		<div class="row-flex bg-white justify-center dev-button">
			<p class="text-xl">
				Expérience : <strong>{{ data.expFormat }} exp</strong>
			</p>
			<p class="text-xl">
				<strong>{{ data.amountSecFormat }}</strong> par seconde et
				<strong>{{ data.amountFormat }}</strong> par clic
			</p>
		</div>
	</div>

	<br />
	<br />
	<!-- Toogle -->
	<label
		v-if="data.jsPrice >= 2000"
		class="relative inline-flex items-center cursor-pointer"
	>
		<input
			@click="data.changeStack()"
			type="checkbox"
			value=""
			class="sr-only peer"
		/>

		<div
			class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
		></div>
		<span
			class="ml-3 text-md font-medium text-gray-900 dark:text-dark_grey"
		>
			{{ data.whatStack }}</span
		>
	</label>
	<!-- Toogle -->
	<div
		v-if="data.ifFront"
		class="inline-flex gap-4 pt-4 flex-wrap justify-start animate__animated animate__backInLeft"
	>
		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="../assets/icons/logos/skill-icons_html.svg" alt="" />
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
					<p>Coût : {{ data.htmlPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 1</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addHtml"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img src="../assets/icons/logos/skill-icons_css.svg" alt="" />
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
					<p>Coût : {{ data.cssPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 1</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addCss"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_javascript.svg"
					alt=""
				/>
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
					<p>Coût : {{ data.jsPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 1</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addJs"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card" v-if="data.jsPrice >= 2000">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_tailwindcss.svg"
					alt=""
				/>
				<div>
					<strong class="text-xl">TailWind</strong>
					<p class="text-sm">ajoute +100 par seconde</p>
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
					<p>Coût : {{ data.tailwindPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 2</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addTailwind"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card" v-if="data.jsPrice >= 2000">
			<div class="inline-flex gap-4">
				<img src="../assets/icons/logos/skill-icons_vuejs.svg" alt="" />
				<div>
					<strong class="text-xl">Vue.js</strong>
					<p class="text-sm">ajoute +1 k par clic</p>
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
					<p>Coût : {{ data.vuePriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 2</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addVue"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card" v-if="data.jsPrice >= 2000">
			<div class="inline-flex gap-4">
				<img src="../assets/icons/logos/skill-icons_vite.svg" alt="" />

				<div>
					<strong class="text-xl">Vite.js</strong>
					<p class="text-sm">ajoute +5 k par clic</p>
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
					<p>Coût : {{ data.vitePriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 3</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addVite"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Back -->
	<div
		v-if="data.ifBack"
		class="inline-flex gap-4 pt-4 flex-wrap justify-start animate__animated animate__backInRight"
	>
		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_nodejs.svg"
					alt=""
				/>
				<div>
					<strong class="text-xl">Node.js</strong>
					<p class="text-sm">ajoute +10 k au clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Environnement d'exécution JavaScript côté serveur, qui
					permet d'exécuter du code JavaScript en dehors du
					navigateur.
				</p>
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ data.nodePriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 1</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addNode"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_expressjs.svg"
					alt=""
				/>
				<div>
					<strong class="text-xl">Express.js</strong>
					<p class="text-sm">ajoute +50 k au clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Framework web pour Node.js, qui facilite la création d'API
					RESTful et de serveurs web.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ data.expressPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 1</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addExpress"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_prisma.svg"
					alt=""
				/>
				<div>
					<strong class="text-xl">Prisma</strong>
					<p class="text-sm">ajoute +50 k par seconde</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Outil de gestion de base de données, qui permet de
					simplifier les interactions avec les bases de données en
					utilisant un ORM
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ data.prismaPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 1</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addPrisma"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card" v-if="data.jsPrice >= 2000">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_mongodb.svg"
					alt=""
				/>
				<div>
					<strong class="text-xl">MongoDB</strong>
					<p class="text-sm">ajoute +150 k par clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Système de gestion de base de données NoSQL, qui stocke les
					données sous forme de documents JSON flexibles.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ data.mongoPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 2</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addMongo"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card" v-if="data.jsPrice >= 2000">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_docker.svg"
					alt=""
				/>
				<div>
					<strong class="text-xl">Docker</strong>
					<p class="text-sm">ajoute +100 k par seconde</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Une technologie qui permet d'isoler et de transporter des
					applications dans des conteneurs légers et portables.
				</p>
				<br />
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ data.dockerPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 2</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addDocker"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>

		<div class="skill-card" v-if="data.jsPrice >= 2000">
			<div class="inline-flex gap-4">
				<img
					src="../assets/icons/logos/skill-icons_vercel.svg"
					alt=""
				/>

				<div>
					<strong class="text-xl">Vercel</strong>
					<p class="text-sm">ajoute +500 k par clic</p>
				</div>
			</div>
			<div>
				<p class="font-extralight text-sm">
					Une plateforme cloud qui permet de déployer et de gérer des
					applications Web statiques et dynamiques, ainsi que des
					fonctions serverless.
				</p>
			</div>
			<div class="inline-flex gap-36">
				<div class="row-flex">
					<p>Coût : {{ data.vercelPriceFormat }} exp</p>
					<p class="text-sm">
						<i> Requis pour mission de Niveau 3</i>
					</p>
				</div>
				<div class="inline-flex">
					<button
						@click="addVercel"
						class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white hover:bg-white hover:text-primary hover:border-primary border-2 border-primary"
					>
						Aquérir
					</button>
				</div>
			</div>
		</div>
	</div>
	<br />

	<br />

	<button
		@click="resetLocal"
		class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
	>
		🗑️ Resart
	</button>
</template>

<script setup>
import Achivement from "../components/Achivement.vue"
import Popup from "../components/PopupApp4.vue"
import TutoCode from "../components/TutoCodeApp4.vue"
import { reactive, watch, onMounted, provide } from "vue"
import { useDataStore } from "../stores/data"
const data = useDataStore()
const expData = reactive({
	count: -10,
	// amount: 1,
	// amountSec: 0,
	// htmlPrice: 10,
	// cssPrice: 100,
	// jsPrice: 1000,
	// tailwindPrice: 5000,
	// vuePrice: 10000,
	// vitePrice: 100000,
	// isAnimated: false,
})
provide("expData", expData)

const resetLocal = () => {
	localStorage.clear()
	window.location.reload()
}

const addHtml = () => {
	if (data.exp >= data.htmlPrice) {
		data.exp -= data.htmlPrice
		data.htmlPrice += 10
		data.amount += 1
		data.htmlAchivement()
		data.totalAchivement()
	}
}
const addCss = () => {
	if (data.exp >= data.cssPrice) {
		data.exp -= data.cssPrice
		data.cssPrice += 100
		data.amountSec += 1
		data.cssAchivement()
		data.totalAchivement()
	}
}
const addJs = () => {
	if (data.exp >= data.jsPrice) {
		data.exp -= data.jsPrice
		data.jsPrice += 1000
		data.amount += 10
		data.jsAchivement()
		data.totalAchivement()
	}
}
const addTailwind = () => {
	if (data.exp >= data.tailwindPrice) {
		data.exp -= data.tailwindPrice
		data.tailwindPrice += 5000
		data.amountSec += 100
		data.tailwindAchivement()
		data.totalAchivement()
	}
}
const addVue = () => {
	if (data.exp >= data.vuePrice) {
		data.exp -= data.vuePrice
		data.vuePrice += 5000
		data.amount += 1000
		data.vueAchivement()
		data.totalAchivement()
	}
}
const addVite = () => {
	if (data.exp >= data.vitePrice) {
		data.exp -= data.vitePrice
		data.vitePrice += 50000
		data.amount += 5000
		data.viteAchivement()
		data.totalAchivement()
	}
}
const addNode = () => {
	if (data.exp >= data.nodePrice) {
		data.exp -= data.nodePrice
		data.nodePrice += 500000
		data.amount += 10000
	}
}
const addExpress = () => {
	if (data.exp >= data.expressPrice) {
		data.exp -= data.expressPrice
		data.expressPrice += 5000000
		data.amount += 50000
	}
}
const addPrisma = () => {
	if (data.exp >= data.prismaPrice) {
		data.exp -= data.prismaPrice
		data.prismaPrice += 50000000
		data.amountSec += 50000
	}
}
const addMongo = () => {
	if (data.exp >= data.mongoPrice) {
		data.exp -= data.mongoPrice
		data.mongoPrice += 500000000
		data.amount += 150000
	}
}
const addDocker = () => {
	if (data.exp >= data.dockerPrice) {
		data.exp -= data.dockerPrice
		data.dockerPrice += 5000000000
		data.amountSec += 100000
	}
}
const addVercel = () => {
	if (data.exp >= data.vercelPrice) {
		data.exp -= data.vercelPrice
		data.vercelPrice += 50000000000
		data.amount += 500000
	}
}
// I want to watch the change of all expData to store in local storage
watch(expData, () => {
	localStorage.setItem("expData", JSON.stringify(expData))
})

onMounted(() => {
	const expDataStorage = localStorage.getItem("expData")
	if (expDataStorage) {
		Object.assign(expData, JSON.parse(expDataStorage))
	}
	localStorage.setItem("expData", JSON.stringify(expData))
	data.increaseExpSec
})
</script>

<style scoped>
.dev-button {
	padding: 25px;
	padding-left: 68px;
	padding-right: 68px;
	border-radius: 8px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
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
