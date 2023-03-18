<script setup>

import { useStore } from "..//stores/store.js"

</script>

<template>
	<div>
		<h1>Score: {{ count }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
		}
	},
	created() {
		this.count = useStore().getCount;
    },
}
</script>

