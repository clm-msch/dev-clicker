<!-- Mise en place du conmposant sidebar uniquement pour les utilisateurs sur desktop, elle s'adapte autant pour le plein écran que pour une demi page. -->
<template>
	<div
		class="hidden fixed h-screen rounded-r-lg bg-dark_grey gap-1 flex-col p-4 w-fit sm:flex"
	>
		<div class="justify-center flex">
			<img
				src="../assets/icons/devclicker/devclicker-text.svg"
				class="w-52"
			/>
		</div>
		<h2 class="text-white font-bold mt-2 -mb-2">Junior :</h2>
		<RouterLink to="/" exact-active-class="active">
			<div
				class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
			>
				<img src="../assets/icons/basics/code.svg" class="w-6" />
				<p class="font-bold text-white">Code</p>
			</div>
		</RouterLink>
		<RouterLink to="/missions" exact-active-class="active">
			<div
				class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
			>
				<img src="../assets/icons/basics/missions.svg" class="w-6" />
				<p class="font-bold text-white">Missions</p>
			</div>
		</RouterLink>
		<h2 class="text-white font-bold mt-2 -mb-2">Senior :</h2>
		<div
			class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/investissement.svg" class="w-6" />
			<p class="font-bold text-white">Investissement</p>
		</div>
		<div
			class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/entreprise.svg" class="w-6" />
			<p class="font-bold text-white">Entreprise</p>
		</div>
		<div
			class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/cybersécurité.svg" class="w-6" />
			<p class="font-bold text-white">Cybersécurité</p>
		</div>
		<h2 class="text-white font-bold mt-2 -mb-2">Autres :</h2>
		<div
			class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/trophées.svg" class="w-6" />
			<p class="font-bold text-white">Trophées</p>
		</div>
		<div
			class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/shopping.svg" class="w-6" />
			<p class="font-bold text-white">Shopping</p>
		</div>
		<div
			class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w-52"
		>
			<img src="../assets/icons/basics/réglages.svg" class="w-6" />
			<p class="font-bold text-white">Réglages</p>
		</div>
		<div class="bg-white rounded-lg p-4 mt-2">
			<p class="font-semibold text-sm text-primary">EXP : 0</p>
			<p class="font-semibold text-sm text-primary">Argent : 0 €</p>
		</div>
	</div>
</template>

<script setup>
/*
	imports
*/
import { RouterLink } from "vue-router"
</script>
