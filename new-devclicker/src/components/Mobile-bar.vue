<!-- Mise en place du conmposant sidebar uniquement pour les utilisateurs sur mobile -->
<template>
	<div class="flex justify-center sm:hidden">
		<div
			class=" h-fit fixed bottom-0 rounded-t-lg bg-dark_grey gap-2 flex p-2 w-fit"
		>
			<RouterLink to="/" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img src="../assets/icons/basics/code.svg" class="w-6" />
				</div>
			</RouterLink>
			<RouterLink to="/missions" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img
						src="../assets/icons/basics/missions.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/investissement" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img
						src="../assets/icons/basics/investissement.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/entreprise" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img
						src="../assets/icons/basics/entreprise.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/a" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img
						src="../assets/icons/basics/cybersécurité.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/trophees" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img
						src="../assets/icons/basics/trophées.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/a" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
				>
					<img
						src="../assets/icons/basics/shopping.svg"
						class="w-6"
					/>
				</div>
			</RouterLink>
			<RouterLink to="/a" exact-active-class="active">
				<div
					class="hover:bg-primary p-2 rounded-lg flex items-center gap-4 w"
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
