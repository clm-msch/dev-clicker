<template>
	<h1>Timer test</h1>
	<div class="flex flex-col">
		<div class="flex justify-center">
			<h1 class="font-extrabold text-2xl">{{ minutes }}:{{ seconds }}</h1>
		</div>
		<div class="flex justify-center gap-2">
			<button class="bg-primary p-2 rounded text-white font-bold" @click="startTimer">Start</button>
			<button class="bg-primary p-2 rounded text-white font-bold" @click="stopTimer">Pause</button>
			<button class="bg-primary p-2 rounded text-white font-bold" @click="resetTimer">Reset</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			minutes: 0,
			seconds: 0,
			timer: null,
		}
	},
	methods: {
		startTimer() {
			this.timer = setInterval(() => {
				if (this.seconds < 59) {
					this.seconds++
				} else {
					this.seconds = 0
					this.minutes++
				}
			}, 1000)
		},
		stopTimer() {
			clearInterval(this.timer)
		},
		resetTimer() {
			this.minutes = 0
			this.seconds = 0
			clearInterval(this.timer)
		},
	},
}
</script>
