<template>
	<!-- <Popup :newComer="exp" @closePopup="handleExpPopup" /> -->
	<!-- <Popup /> -->
	<Achivement />
	<h1 class="font-bold text-3xl">CODE</h1>
	<h1 class="text-xl">
		Bienvenue dans l'onglet code ici tu va pouvoir <br />
		développer pour aquérir un maximum d'expérience :
	</h1>
	<br />
	<!-- dev button -->
	<div class="inline-flex gap-8 justify-center align-middle">
		<!-- @click="addExp(expData.amount)" -->
		<button
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

	<div class="inline-flex gap-4 pt-4 flex-wrap justify-start">
		<div class="skill-card">
			<div class="inline-flex gap-4">
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40.5781 0H12.4219C5.56146 0 0 5.56146 0 12.4219V40.5781C0 47.4385 5.56146 53 12.4219 53H40.5781C47.4385 53 53 47.4385 53 40.5781V12.4219C53 5.56146 47.4385 0 40.5781 0Z"
						fill="#E14E1D"
					/>
					<path
						d="M9.9375 7.86719L11.72 27.865H34.6405L33.8713 36.4423L26.4915 38.4376L19.1255 36.4452L18.633 30.9377H11.9954L12.9446 41.5545L26.4901 45.3167L40.0527 41.5545L41.871 21.2528H17.7682L17.1631 14.4808H42.4702L43.0625 7.86719H9.9375Z"
						fill="white"
					/>
					<path
						d="M26.5 7.86719H9.9375L11.72 27.865H26.5V21.2528H17.7682L17.1631 14.4808H26.5V7.86719ZM26.5 38.4347L26.4915 38.4376L19.1255 36.4452L18.633 30.9377H11.9954L12.9446 41.5545L26.4901 45.3167L26.5002 45.3138V38.4347H26.5Z"
						fill="#EBEBEB"
					/>
				</svg>
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
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40.5781 0H12.4219C5.56146 0 0 5.56146 0 12.4219V40.5781C0 47.4385 5.56146 53 12.4219 53H40.5781C47.4385 53 53 47.4385 53 40.5781V12.4219C53 5.56146 47.4385 0 40.5781 0Z"
						fill="#0277BD"
					/>
					<path
						d="M11.1286 21.252L11.7211 27.865H26.5199V21.252H11.1286ZM26.5197 7.86719H9.9375L10.5387 14.4802H26.5197V7.86719ZM26.5197 45.3069V38.4267L26.4907 38.4343L19.1258 36.4458L18.655 31.1715H12.0165L12.943 41.5549L26.4892 45.3154L26.5197 45.3069Z"
						fill="#EBEBEB"
					/>
					<path
						d="M34.64 27.865L33.8723 36.4414L26.4968 38.4322V45.3121L40.0539 41.5549L40.1532 40.4375L41.7072 23.0279L41.8685 21.252L43.0624 7.86719H26.4968V14.4802H35.8151L35.2135 21.252H26.4968V27.865H34.64Z"
						fill="white"
					/>
				</svg>
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
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40.5781 0H12.4219C5.56146 0 0 5.56146 0 12.4219V40.5781C0 47.4385 5.56146 53 12.4219 53H40.5781C47.4385 53 53 47.4385 53 40.5781V12.4219C53 5.56146 47.4385 0 40.5781 0Z"
						fill="#F0DB4F"
					/>
					<path
						d="M13.9358 44.2906L17.9915 41.836C18.7741 43.2234 19.4858 44.3972 21.1932 44.3972C22.8298 44.3972 23.8617 43.7571 23.8617 41.2669V24.3322H28.8424V41.3373C28.8424 46.4959 25.8185 48.8441 21.4067 48.8441C17.4224 48.8441 15.1096 46.7806 13.9355 44.2902M31.5477 43.7569L35.603 41.4089C36.6707 43.1524 38.0582 44.433 40.5128 44.433C42.5767 44.433 43.8926 43.4012 43.8926 41.9781C43.8926 40.2705 42.5406 39.6655 40.2637 38.6697L39.0188 38.1358C35.4254 36.6062 33.0416 34.685 33.0416 30.6292C33.0416 26.8936 35.8879 24.0473 40.3351 24.0473C43.5015 24.0473 45.7784 25.1504 47.4148 28.032L43.5369 30.5224C42.6829 28.9927 41.7583 28.3879 40.3351 28.3879C38.8764 28.3879 37.9514 29.3129 37.9514 30.5224C37.9514 32.0166 38.8764 32.6215 41.0109 33.5467L42.256 34.0802C46.4896 35.8949 48.8733 37.7445 48.8733 41.9069C48.8733 46.3899 45.3513 48.8445 40.6196 48.8445C35.9947 48.8445 33.0062 46.6388 31.5477 43.7569Z"
						fill="#323330"
					/>
				</svg>

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

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40.5781 0H12.4219C5.56146 0 0 5.56146 0 12.4219V40.5781C0 47.4385 5.56146 53 12.4219 53H40.5781C47.4385 53 53 47.4385 53 40.5781V12.4219C53 5.56146 47.4385 0 40.5781 0Z"
						fill="#242938"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M17.1836 22.7734C18.4258 17.8047 21.5315 15.3203 26.5 15.3203C33.9531 15.3203 34.8848 20.9102 38.6113 21.8418C41.0959 22.4631 43.2695 21.5315 45.1328 19.0469C43.8908 24.0154 40.7849 26.5 35.8164 26.5C28.3633 26.5 27.4316 20.9102 23.7051 19.9785C21.2205 19.3574 19.0469 20.2891 17.1836 22.7734ZM7.86719 33.9531C9.10938 28.9846 12.2148 26.5 17.1836 26.5C24.6367 26.5 25.5684 32.0898 29.2949 33.0215C31.7795 33.6428 33.9531 32.7111 35.8164 30.2266C34.5744 35.1951 31.4685 37.6797 26.5 37.6797C19.0469 37.6797 18.1152 32.0898 14.3887 31.1582C11.9043 30.5369 9.73047 31.4685 7.86719 33.9531Z"
						fill="url(#paint0_linear_47_20)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_47_20"
							x1="17.9082"
							y1="15.3203"
							x2="33.8496"
							y2="38.4043"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#32B1C1" />
							<stop offset="1" stop-color="#14C6B7" />
						</linearGradient>
					</defs>
				</svg>
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

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40.5781 0H12.4219C5.56146 0 0 5.56146 0 12.4219V40.5781C0 47.4385 5.56146 53 12.4219 53H40.5781C47.4385 53 53 47.4385 53 40.5781V12.4219C53 5.56146 47.4385 0 40.5781 0Z"
						fill="#F4F2EE"
					/>
					<path
						d="M37.6797 10.3516H45.1328L26.5 42.4932L7.86719 10.3516H22.1213L26.5 17.8047L30.7855 10.3516H37.6797Z"
						fill="#41B883"
					/>
					<path
						d="M7.86719 10.3516L26.5 42.4932L45.1328 10.3516H37.6797L26.5 29.6365L15.2271 10.3516H7.86719Z"
						fill="#41B883"
					/>
					<path
						d="M15.2271 10.3516L26.4999 29.7297L37.6796 10.3516H30.7854L26.4999 17.8047L22.1212 10.3516H15.2271Z"
						fill="#35495E"
					/>
				</svg>

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

		<div class="skill-card">
			<div class="inline-flex gap-4">
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40.5781 0H12.4219C5.56146 0 0 5.56146 0 12.4219V40.5781C0 47.4385 5.56146 53 12.4219 53H40.5781C47.4385 53 53 47.4385 53 40.5781V12.4219C53 5.56146 47.4385 0 40.5781 0Z"
						fill="#F4F2ED"
					/>
					<path
						d="M47.0144 11.9254L27.5882 46.6626C27.187 47.3799 26.1566 47.3841 25.7496 46.6704L5.93811 11.9285C5.49465 11.1509 6.15963 10.2089 7.04117 10.3665L26.488 13.8425C26.6121 13.8646 26.7392 13.8644 26.8632 13.8417L45.9034 10.3712C46.7819 10.2112 47.4499 11.1459 47.0144 11.9254Z"
						fill="url(#paint0_linear_47_10)"
					/>
					<path
						d="M35.7516 5.80724L21.3757 8.6239C21.2609 8.64635 21.1567 8.70638 21.0797 8.79454C21.0026 8.88269 20.9571 8.99397 20.9503 9.11083L20.0659 24.0463C20.061 24.1282 20.0753 24.21 20.1077 24.2854C20.14 24.3608 20.1895 24.4276 20.2521 24.4806C20.3148 24.5335 20.3889 24.5711 20.4686 24.5904C20.5483 24.6097 20.6314 24.6102 20.7114 24.5918L24.7139 23.6682C25.0884 23.5819 25.4267 23.9117 25.3499 24.2883L24.1607 30.1113C24.0806 30.5032 24.4487 30.8381 24.8313 30.722L27.3035 29.9709C27.6867 29.8545 28.055 30.1905 27.9738 30.5829L26.084 39.7293C25.9658 40.3015 26.7269 40.6135 27.0443 40.1229L27.2563 39.7953L38.9705 16.4174C39.1668 16.0261 38.8285 15.5797 38.3985 15.6625L34.2788 16.4578C33.8916 16.5323 33.5622 16.1718 33.6713 15.7932L36.3605 6.47139C36.4698 6.09211 36.1391 5.73146 35.7516 5.80724Z"
						fill="url(#paint1_linear_47_10)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_47_10"
							x1="5.45449"
							y1="9.12489"
							x2="29.6318"
							y2="41.9596"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#41D1FF" />
							<stop offset="1" stop-color="#BD34FE" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_47_10"
							x1="25.3719"
							y1="6.5718"
							x2="29.7454"
							y2="36.5741"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FFEA83" />
							<stop offset="0.083" stop-color="#FFDD35" />
							<stop offset="1" stop-color="#FFA800" />
						</linearGradient>
					</defs>
				</svg>

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
// import Popup from "../components/PopupApp4.vue"
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
	} 
}
const addCss = () => {
	if (data.exp >= data.cssPrice) {
		data.exp -= data.cssPrice
		data.cssPrice += 100
		data.amountSec += 1
	}
}
const addJs = () => {
	if (data.exp >= data.jsPrice) {
		data.exp -= data.jsPrice
		data.jsPrice += 1000
		data.amount += 10
	}
}
const addTailwind = () => {
	if (data.exp >= data.tailwindPrice) {
		data.exp -= data.tailwindPrice
		data.tailwindPrice += 5000
		data.amountSec += 100
	}
}
const addVue = () => {
	if (data.exp >= data.vuePrice) {
		data.exp -= data.vuePrice
		data.vuePrice += 5000
		data.amount += 1000
	}
}
const addVite = () => {
	if (data.exp >= data.vitePrice) {
		data.exp -= data.vitePrice
		data.vitePrice += 50000
		data.amount += 5000
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
