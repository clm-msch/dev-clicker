<template>
	<MobileBar v-if="storeAuth.auth" />
	<DesktopBar v-if="storeAuth.auth" />
	<RouterView v-if="storeAuth.auth" class="ml-3 sm:ml-64" />
	<RouterView v-else />
</template>

<script setup>
/*
  imports
*/
import DesktopBar from "./components/Desktop-bar.vue"
import MobileBar from "./components/Mobile-bar.vue"
import { RouterView } from "vue-router"
import { onMounted } from "vue"
import { useAuthStore } from "./stores/auth"
import { useDataStore } from "./stores/data"

/*
  store
*/
const storeAuth = useAuthStore()
const data = useDataStore()

/*
  mounted
*/

onMounted(() => {
	storeAuth.init()
	setInterval(() => {
		data.activeTrophiesFront1()
		data.activeTrophiesFront2()
		data.activeTrophiesFront3()
		data.activeTrophiesFront4()
		data.activeTrophiesFront5()
		data.activeTrophiesFront6()

		data.activeTrophiesBack1()
		data.activeTrophiesBack2()
		data.activeTrophiesBack3()
		data.activeTrophiesBack4()
		data.activeTrophiesBack5()
		data.activeTrophiesBack6()
	}, 1000)
})
</script>
