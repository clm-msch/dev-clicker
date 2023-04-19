<template>
	<!-- Tuto 1 -->
	<div class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.cssPrice == 100 && data.ifTutorial1 == true" class="bg-white rounded-lg shadow-lg max-w-xs flex">
			<div class="p-4">
				<p class="font-semibold mb-2">Tutoriel étape 1/5</p>
				<p>Pour commencer tu peux développer jusqu'a débloquer le CSS.</p>
			</div>
			<div @click="data.hideTutorial1" class="bg-primary p-4 rounded-r flex align-center">
				<img src="../assets/icons/basics/arrow-right_logo.svg">
			</div>
		</div>
	</div>
	<!-- Hide Tuto 1 -->
	<div v-if="data.cssPrice == 100 && data.ifTutorial1 == false" class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight tutohide">
		<div class="bg-white rounded-lg shadow-lg max-w-xs flex">
			<div @click="data.showTutorial1" class="bg-primary p-4 rounded-l flex items-center gap-2 align-center">
				<img class="arrow-left" src="../assets/icons/basics/arrow-left_logo.svg">
				<img src="../assets/icons/basics/graduation-cap_logo.svg" class="w-1/3">
			</div>
		</div>
	</div>

	<!-- Tuto 2 -->
	<div class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.cssPrice >= 200 && data.jsPrice == 1000 && data.ifTutorial2 == true" class="bg-white rounded-lg shadow-lg flex max-w-xs">
			<div class="p-4">
				<p class="font-semibold mb-2">Tutoriel étape 2/5</p>
				<p>Il ne te manque plus que le JavaScript pour débloquer ta première missions.</p>
			</div>
			<div @click="data.hideTutorial2" class="bg-primary p-4 rounded-r flex align-center">
				<img src="../assets/icons/basics/arrow-right_logo.svg">
			</div>
		</div>
	</div>
	<!-- Hide Tuto 2 -->
	<div v-if="data.cssPrice >= 200 && data.jsPrice == 1000 && data.ifTutorial2 == false" class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight tutohide">
		<div class="bg-white rounded-lg shadow-lg max-w-xs flex">
			<div @click="data.showTutorial2" class="bg-primary p-4 rounded-l flex items-center gap-2 align-center">
				<img class="arrow-left" src="../assets/icons/basics/arrow-left_logo.svg">
				<img src="../assets/icons/basics/graduation-cap_logo.svg" class="w-1/3">
			</div>
		</div>
	</div>




	<!-- Tuto 3 -->
	<div class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight">
		<div v-if="data.jsPrice == 2000  && data.ifJob1 == false && data.ifTutorial3 == true" class="bg-white rounded-lg shadow-lg flex max-w-xs">
			<div class="p-4">
			<p class="font-semibold mb-2">Tutoriel étape 3/5</p>
			<p>Parfait ! Maintenant rendez-vous dans l'onglet "Missions"</p>
			</div>
			<div @click="data.hideTutorial3" class="bg-primary p-4 rounded-r flex align-center">
				<img src="../assets/icons/basics/arrow-right_logo.svg">
			</div>
		</div>
	</div>
	<!-- Hide Tuto 3 -->
	<div v-if="data.jsPrice == 2000  && data.ifJob1 == false && data.ifTutorial3 == false" class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight tutohide">
		<div class="bg-white rounded-lg shadow-lg max-w-xs flex">
			<div @click="data.showTutorial3" class="bg-primary p-4 rounded-l flex items-center gap-2 align-center">
				<img class="arrow-left" src="../assets/icons/basics/arrow-left_logo.svg">
				<img src="../assets/icons/basics/graduation-cap_logo.svg" class="w-1/3">
			</div>
		</div>
	</div>


	<!-- <div v-if="data.ifTutorial3 == true" class="fixed z-2 top-4 right-4 animate__animated animate__fadeInRight">
		<div class="bg-white rounded-lg shadow-lg max-w-xs flex">
			<div class="p-4">
			<p class="font-semibold mb-2">Tutoriel étape 3/5</p>
			<p>Parfait ! Maintenant rendez-vous dans l'onglet "Missions"</p>
			</div>
			<div @click="data.hideTutorial" class="bg-primary p-4 rounded-r flex align-center">
				<img src="../assets/icons/basics/arrow-right_logo.svg">
			</div>
		</div>
	</div>


	<div v-if="data.ifTutorial3 == false" class="fixed z-10 top-4 right-4 animate__animated animate__fadeInRight tutohide">
		<div class="bg-white rounded-lg shadow-lg max-w-xs flex">
			<div @click="data.showTutorial" class="bg-primary p-4 rounded-l flex align-center">
				<img class="arrow-left" src="../assets/icons/basics/arrow-left_logo.svg">
			</div>
		</div>
	</div> -->
	
</template>
<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>

<style scoped>
.arrow-left {
	width: 12px;
	height: 20px;
}
.tutohide {
	margin-right: -45px;
}
</style>
