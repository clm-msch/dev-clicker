<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<header>
		<nav>
			<RouterLink to="/">Code</RouterLink> 
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>
	<RouterView />
</template>

<!-- <style scoped>
</style> -->
