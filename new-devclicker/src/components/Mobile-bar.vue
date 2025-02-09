<!-- Mise en place du conmposant sidebar uniquement pour les utilisateurs sur mobile -->
<template>
	<div class="flex justify-center sm:hidden">
		<div
			class="fixed bottom-0 flex gap-2 p-2 rounded-t-lg h-fit bg-dark_grey w-fit"
		>
			<RouterLink to="/" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img src="../assets/icons/basics/code.svg" class="w-6" />
				</div>
			</RouterLink>
			<RouterLink to="/missions" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/missions.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/investissement" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/investissement.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/entreprise" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/entreprise.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<!-- <RouterLink to="/a" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/cybersécurité.svg"
						class="w-6"
					/>
				</div>
			</RouterLink> -->
			<RouterLink to="/trophees" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/trophées.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/shopping" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/shopping.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/reglages" exact-active-class="active">
				<div
					class="flex items-center gap-4 p-2 rounded-lg hover:bg-primary w"
				>
					<img
						src="../assets/icons/basics/réglages.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
		</div>
	</div>
</template>
