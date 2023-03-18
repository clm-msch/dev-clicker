<script setup>
import Popup from "../components/Popup.vue"
import TutoCode from "../components/TutoCode.vue"
</script>
<template>
	<Popup :newComer="exp" @closePopup="handleExpPopup" />
	<TutoCode :haveCss="css" :haveJs="js" />

	<div
		style="
			padding-left: 15px;
			padding-right: 15px;
			padding-top: 12px;
			padding-bottom: 12px;
			background-color: white;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			border-radius: 8px;
			display: inline-flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: flex-start;
		"
	>
		<div
			style="
				width: 291px;
				display: inline-flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
			"
		>
			<div style="width: 64px; height: 64px">
				<img
					style="width: 64px; height: 64px; border-radius: 8px"
					src="https://via.placeholder.com/64x64"
				/>
			</div>
			<div style="width: 8px" />
			<div
				style="
					display: inline-flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
				"
			>
				<p
					style="
						font-size: 20px;
						font-weight: 700;
						line-height: 100%;
						color: rgba(36, 41, 56, 1);
					"
				>
					HTML
				</p>
				<p
					style="
						font-size: 12px;
						line-height: 100%;
						color: rgba(36, 41, 56, 1);
					"
				>
					ajoute +1 au clic
				</p>
			</div>
		</div>
		<div style="height: 8px" />
		<div
			style="
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
			"
		>
			<p
				style="
					width: 240px;
					height: 36px;
					font-size: 10px;
					line-height: 100%;
					color: rgba(36, 41, 56, 1);
				"
			>
				Langage de balisage utilisé pour créer des pages Web. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Quas, vel
				sequi quo beatae libero doloribus iste non ipsam itaque facere
				veniam modi eveniet labore quos.
			</p>
			<div style="height: 16px" />
			<div
				style="
					display: inline-flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
				"
			>
				<div
					style="
						display: inline-flex;
						flex-direction: column;
						align-items: flex-start;
						justify-content: flex-start;
					"
				>
					<p
						style="
							font-size: 15px;
							line-height: 100%;
							color: rgba(36, 41, 56, 1);
						"
					>
						Prix : 1
					</p>
					<p
						style="
							font-size: 15px;
							line-height: 100%;
							color: rgba(36, 41, 56, 1);
						"
					>
						Quantité : 0000000 k
					</p>
				</div>
				<div style="width: 124px" />
				<div
					style="
						padding: 6px;
						background-image: linear-gradient(
							101deg,
							rgba(83, 46.11, 230.56, 1),
							rgba(38.25, 0, 191.25, 1)
						);
						border-radius: 8px;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
					"
				>
					<img
						style="width: 26px; height: 26px; border-radius: 8px"
						src="https://via.placeholder.com/26x26"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="skill-card">
		<div class="inline-flex gap-4">
			<img src="logos/skill-icons_html.svg" alt="" />
			<div>
				<strong class="text-xl">HTML</strong>
				<p class="text-sm">ajoute +1 au clic</p>
			</div>
		</div>
		<div>
			<p>Langage de balisage utilisé pour créer des pages Web.</p>
			<br />
		</div>
		<div class="inline-flex gap-16">
			<div>
				<p>Coût : {{ htmlPrice }} experience</p>
				<p>Quantité : 233333333222222222222222222</p>
			</div>
			<div>
				<button
					@click="addHtml"
					class="bg-primary p-2 pl-6 pr-6 rounded-lg"
				>
					Aquérir
				</button>
			</div>
		</div>
	</div>

	<!-- <div class="bg-white p-8 border-r-8">
		<div class="inline-flex gap-4">
			<img src="logos/skill-icons_html.svg" alt="" />
			<div>
				<strong class="text-xl">HTML</strong>
				<p class="text-sm">ajoute +1 au clic</p>
			</div>
		</div>
		<div>
			<p>Langage de balisage utilisé pour créer des pages Web.</p>
		</div>
		<div class="inline-flex gap-16 ">
			<div>
				<p>Coût : {{ htmlPrice }} experience</p>
				<p>Quantité : {{ html }}</p>
			</div>
			<div>
				<button @click="addHtml">Aquérir</button>
			</div>
		</div>
	</div> -->

	<!-- reset button -->
	<h2>⚠️Tu peux tous recommencer si tu veux⚠️</h2>
	<button
		@click="resetAll"
		class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
	>
		🗑️ Resart
	</button>
	<!-- reset button -->

	<!-- dev button -->
	<div
		style="justify-content: center; flex-direction: column; flex-wrap: wrap"
	>
		<button
			@click="addExp"
			:class="{
				animate__animated: isAnimated,
				animate__headShake: isAnimated,
			}"
			class="inline-flex space-x-3 items-center justify-center w-80 h-28 px-12 py-9 bg-white border-4 rounded-lg border-indigo-600 button-dev"
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
	</div>
	<!-- dev button -->

	<!-- skill button -->
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
								<p class="text-base text-gray-800">
									Prix: {{ htmlPrice }}
								</p>
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
								ajoute +10 au clic
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
								<p class="text-base text-gray-800">
									Prix : {{ jsPrice }}
								</p>
								<p class="text-base text-gray-800">
									Quantité : {{ js }}
								</p>
							</div>
							<button
								@click="addJS"
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
									Quantité :
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
								ajoute +1 par seconde
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
								<p class="text-base text-gray-800">
									Prix : {{ cssPrice }}
								</p>
								<p class="text-base text-gray-800">
									Quantité : {{ css }}
								</p>
							</div>
							<button
								@click="addCss"
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
	<!-- skill button -->
</template>

<script>
export default {
	name: "CodePage",
	components: {
		Popup,
		TutoCode,
	},
	data() {
		return {
			exp: 0,
			expSecond: 0,

			isAnimated: false,
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

			this.isAnimated = true
			setTimeout(() => {
				this.isAnimated = false
			}, 500)
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
				location.reload()
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

<style scoped>
.skill-card {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 8px;
	border-radius: 8px;
	background-color: white;
}
</style>
