<template>
	<h1 class="text-xl">
		Ici tu va pouvoir consulter tes Achivements <br />
		ils sont très important car ils te donneront des bonus puissants
	</h1>

	<div class="achivement">
			<div class="achiv-img">
				<img src="https://via.placeholder.com/50x50" />
			</div>
			<div class="achiv-title">
				<p>Roi de l’HTML<br /><span>Acquiert 5 HTML</span></p>
			</div>
		<div class="achiv-description">
			<p>Ajoute +20<br />au clics</p>
		</div>
	</div>

<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-1 bg-purple-100 rounded-lg achivement-card">
	<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
					<img class="flex-1 h-full rounded-lg" src="../assets/icons/achivement/html-bronze.svg"/>
			</div>
			<p class="text-gray-800"> <span class="font-bold">Boss de l’HTML</span> <br/><span class="text-sm">Acquiert 5 HTML</span></p>
	</div>
	<p class="flex-1 text-xs font-medium text-gray-800">Ajoute +20<br/>au clics</p>
</div>
<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-1 bg-purple-100 rounded-lg achivement-card">
	<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
					<img class="flex-1 h-full rounded-lg" src="../assets/icons/achivement/html-argent.svg"/>
			</div>
			<p class="text-gray-800"> <span class="font-bold">Boss de l’HTML</span> <br/><span class="text-sm">Acquiert 5 HTML</span></p>
	</div>
	<p class="flex-1 text-xs font-medium text-gray-800">Ajoute +20<br/>au clics</p>
</div>
<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-1 bg-purple-100 rounded-lg achivement-card">
	<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
					<img class="flex-1 h-full rounded-lg" src="../assets/icons/achivement/html-or.svg"/>
			</div>
			<p class="text-gray-800"> <span class="font-bold">Boss de l’HTML</span> <br/><span class="text-sm">Acquiert 5 HTML</span></p>
	</div>
	<p class="flex-1 text-xs font-medium text-gray-800">Ajoute +20<br/>au clics</p>
</div>
<div class="inline-flex space-x-2 items-center justify-center w-80 px-4 py-1 bg-purple-100 rounded-lg achivement-card">
	<div class="flex space-x-2 items-center justify-end w-44 h-full">
			<div class="w-12 h-full">
					<img class="flex-1 h-full rounded-lg" src="../assets/icons/achivement/html-platine.svg"/>
			</div>
			<p class="text-gray-800"> <span class="font-bold">Boss de l’HTML</span> <br/><span class="text-sm">Acquiert 5 HTML</span></p>
	</div>
	<p class="flex-1 text-xs font-medium text-gray-800">Ajoute +20<br/>au clics</p>
</div>

</template>

<style scoped>
.achivement-card {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.achivement.list {
	display: flex;
	flex-direction: column;
}
</style>
