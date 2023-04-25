<template>
	<!-- Bar -->
	<MobileBar v-if="storeAuth.auth" />
	<DesktopBar v-if="storeAuth.auth" />
	<RouterView v-if="storeAuth.auth" class="sm:ml-64 ml-4" />
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

/*
  store
*/
const storeAuth = useAuthStore()

/*
  mounted
*/

onMounted(() => {
	storeAuth.init()
})
</script>
