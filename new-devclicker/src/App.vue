<template>
	<!-- Bar -->
  <MobileBar />
  <DesktopBar />
	<!-- Bar -->
  <RouterView class="sm:ml-64 ml-4" />


</template>

<script setup>
/*
  imports
*/
  import DesktopBar from "./components/Desktop-bar.vue"
  import MobileBar from "./components/Mobile-bar.vue"

  import { RouterView } from "vue-router"

</script>
