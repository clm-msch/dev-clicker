<!-- Mise en place du conmposant sidebar uniquement pour les utilisateurs sur desktop, elle s'adapte autant pour le plein écran que pour une demi page. -->
<template>
	<div
		class="fixed flex-col hidden h-screen gap-1 p-4 bg-dark_grey w-fit sm:flex"
	>
		<div class="flex justify-center">
			<img
				src="../assets/icons/devclicker/devclicker-text.svg"
				class="w-52"
			/>
		</div>
		<h2 class="mt-2 -mb-1 font-bold text-white">Junior :</h2>
		<RouterLink to="/" exact-active-class="active">
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img src="../assets/icons/basics/code.svg" class="w-6" />
				<p class="font-bold text-white">Code</p>
			</div>
		</RouterLink>
		<RouterLink to="/missions" exact-active-class="active">
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img src="../assets/icons/basics/missions.svg" class="w-6" />
				<p class="font-bold text-white">Missions</p>
			</div>
		</RouterLink>
		<RouterLink to="/investissement" exact-active-class="active">
			<h2 class="mt-2 -mb-1 font-bold text-white">Senior :</h2>
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img
					src="../assets/icons/basics/investissement.svg"
					class="w-6"
				/>
				<p class="font-bold text-white">Investissement</p>
			</div>
		</RouterLink>
		<RouterLink to="/entreprise" exact-active-class="active">
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img src="../assets/icons/basics/entreprise.svg" class="w-6" />
				<p class="font-bold text-white">Entreprise</p>
			</div>
		</RouterLink>
		<!-- <div
			class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
		>
			<img src="../assets/icons/basics/cybersécurité.svg" class="w-6" />
			<p class="font-bold text-white">Cybersécurité</p>
		</div> -->
		<h2 class="mt-2 -mb-1 font-bold text-white">Autres :</h2>
		<RouterLink to="/trophees" exact-active-class="active">
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img src="../assets/icons/basics/trophées.svg" class="w-6" />
				<p class="font-bold text-white">Trophées</p>
			</div>
		</RouterLink>
		<RouterLink to="/shopping" exact-active-class="active">
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img src="../assets/icons/basics/shopping.svg" class="w-6" />
				<p class="font-bold text-white">Shopping</p>
			</div>
		</RouterLink>
		<RouterLink to="/reglages" exact-active-class="active">
			<div
				class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary menu w-52"
			>
				<img src="../assets/icons/basics/réglages.svg" class="w-6" />
				<p class="font-bold text-white">Réglages</p>
			</div>
		</RouterLink>
		<div class="p-4 mt-2 bg-white rounded-lg">
			<p class="text-sm font-semibold text-primary">
				EXP :
				{{
					data.exp.toLocaleString("fr-FR", {
						minimumFractionDigits: 0,
						maximumFractionDigits: 4,
						notation: "compact",
					})
				}}
			</p>
			<p class="text-sm font-semibold text-primary">
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
			<p class="text-sm font-light text-white">
				{{ storeAuth.user.email }}
			</p>
			<button
				class="p-2 font-bold text-white rounded-lg bg-primary"
				@click.prevent="storeAuth.logoutUser"
			>
				Déconnexion
			</button>
		</div>
		<!-- <div>
			<RouterLink to="/auth" class="flex justify-center mt-4"
				><button class="p-2 text-white rounded-lg bg-primary">
					Connexion
				</button></RouterLink
			>
			<div class="flex justify-center mt-4">
				<button
					@click="logout"
					class="p-2 text-white rounded-lg bg-primary"
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
