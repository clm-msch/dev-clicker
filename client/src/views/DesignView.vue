<template>
	<div>
		<button class="bg-green-500" @click="incrementCookies">
			Cliquez ici pour ajouter un cookie
		</button>
		<p>{{ cookiesFormatted }}</p>
		<p>{{ cursors }} curseurs</p>
        <p>{{ maxCursors }} curseurs max.</p>
		<button @click="buyCursor">
			Acheter un curseur ({{ cursorPriceFormatted }})
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cookies: 0, // exemple de nombre de cookies
			cursors: 1,
			cursorPrice: 10,
		}
	},
	computed: {
		cookiesFormatted() {
			return this.cookies.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 6,
				notation: "compact",
			})
		},
		cursorPriceFormatted() {
			return (
				this.cursorPrice.toLocaleString(undefined, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 6,
					notation: "compact",
				}) + " cookies"
			)
		},
		maxCursors() {
			return Math.floor(this.cookies / this.cursorPrice)
		},
	},
	methods: {
		buyCursor() {
			if (this.cookies >= this.cursorPrice) {
				const maxCursors = Math.floor(this.cookies / this.cursorPrice)
				const numCursors = maxCursors > 0 ? maxCursors : 1
				const cost = numCursors * this.cursorPrice
				this.cursors += numCursors
				this.cookies -= cost
			}
		},
		incrementCookies() {
			this.cookies += this.cursors
		},
	},
}
</script>
