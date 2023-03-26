<template>
	<h1 class="text-xl">
		Ici tu va pouvoir consulter tes Achivements <br />
		ils sont très important car ils te donneront des bonus puissants
	</h1>

	<div class="achivement">
		<div>
			<div class="achiv-img">
				<img src="https://via.placeholder.com/53x53" />
			</div>
			<div class="achiv-title">
				<p>Roi de l’HTML<br /><span>Acquiert 5 HTML</span></p>
			</div>
		</div>
		<div class="achiv-description">
			<p>Ajoute +20<br />au clics</p>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.achivement {
  display: flex;
  flex-direction: row;
  background-color: aqua;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.achiv-img {
  background-color: blueviolet;
}
.achiv-title {
  background-color: rgb(21, 255, 0);
}
.achiv-description {
  background-color: rgb(255, 0, 0);
}
</style>
