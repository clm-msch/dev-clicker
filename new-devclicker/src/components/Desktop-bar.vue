<!-- Mise en place du conmposant sidebar uniquement pour les utilisateurs sur desktop, elle s'adapte autant pour le plein écran que pour une demi page. -->
<template>
	<div
		class="hidden fixed h-screen bg-dark_grey gap-1 flex-col p-4 w-fit sm:flex"
	>
		<div class="justify-center flex">
			<img
				src="../assets/icons/devclicker/devclicker-text.svg"
				class="w-52"
			/>
		</div>
		<h2 class="text-white  font-bold mt-2 -mb-1">Junior :</h2>
		<RouterLink to="/" exact-active-class="active">
			<div
				class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
			>
				<img src="../assets/icons/basics/code.svg" class="w-6" />
				<p class="font-bold text-white">Code</p>
			</div>
		</RouterLink>
		<RouterLink to="/missions" exact-active-class="active">
			<div
				class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
			>
				<img src="../assets/icons/basics/missions.svg" class="w-6" />
				<p class="font-bold text-white">Missions</p>
			</div>
		</RouterLink>
		<RouterLink to="/investissement" exact-active-class="active">
		<h2 class="text-white font-bold mt-2 -mb-1">Senior :</h2>
		<div
			class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/investissement.svg" class="w-6" />
			<p class="font-bold text-white">Investissement</p>
		</div>
	</RouterLink>
		<div
			class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/entreprise.svg" class="w-6" />
			<p class="font-bold text-white">Entreprise</p>
		</div>
		<div
			class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/cybersécurité.svg" class="w-6" />
			<p class="font-bold text-white">Cybersécurité</p>
		</div>
		<h2 class="text-white font-bold mt-2 -mb-1">Autres :</h2>
		<div
			class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/trophées.svg" class="w-6" />
			<p class="font-bold text-white">Trophées</p>
		</div>
		<div
			class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/shopping.svg" class="w-6" />
			<p class="font-bold text-white">Shopping</p>
		</div>
		<div
			class="hover:bg-primary menu p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/réglages.svg" class="w-6" />
			<p class="font-bold text-white">Réglages</p>
		</div>
		<div class="bg-white rounded-lg p-4 mt-2">
			<p class="font-semibold text-sm text-primary">
				EXP :
				{{
					data.exp.toLocaleString("fr-FR", {
						minimumFractionDigits: 0,
						maximumFractionDigits: 4,
						notation: "compact",
					})
				}}
			</p>
			<p class="font-semibold text-sm text-primary">
				Argent :
				{{
					data.money.toLocaleString("fr-FR", {
						minimumFractionDigits: 0,
						maximumFractionDigits: 4,
						notation: "compact",
					})
				}}
				€
			</p>
		</div>
		<div>
			<p class="text-white font-light text-sm">
				{{ storeAuth.user.email }}
			</p>
			<button
				class="p-2 bg-primary text-white font-bold rounded-lg"
				@click.prevent="storeAuth.logoutUser"
			>
				Déconnexion
			</button>
		</div>
		<!-- <div>
			<RouterLink to="/auth" class="flex justify-center mt-4"
				><button class="p-2 bg-primary text-white rounded-lg">
					Connexion
				</button></RouterLink
			>
			<div class="flex justify-center mt-4">
				<button
					@click="logout"
					class="p-2 bg-primary text-white rounded-lg"
				>
					Deconnexion {{ storeAuth.user.email }}
				</button>
			</div>
		</div> -->
	</div>
</template>

<script setup>
/*
	imports
*/
import { RouterLink } from "vue-router"
import { useAuthStore } from "../stores/auth"
import { useDataStore } from "../stores/data"
/*
  store
*/
const data = useDataStore()
const storeAuth = useAuthStore()
/*
  logout
*/
const logout = () => {
	storeAuth.logoutUser()
}
</script>
