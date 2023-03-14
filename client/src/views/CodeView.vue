<template>
	<div
		style="
			display: flex;
			justify-content: center;
			flex-direction: column;
			flex-wrap: wrap;
		"
	>
		<button
			@click="addExp"
			style="
				border-color: aliceblue;
				border: 2px;
				border: solid;
				padding: 10px;
			"
		>
			Développe
		</button>
		<section>
			<div>
				<h2>Expérience : {{ exp }}</h2>
				<h2>{{ expSecond }} Expérience par seconde</h2>
			</div>
			<!-- Buy Tech Section -->
			<div class="inline-flex space-x-2 items-center justify-start px-4 py-1 bg-purple-100 rounded-lg" style="width: 539px; height: 61px;">
    <p class="text-xl font-bold text-gray-800">1</p>
    <div class="flex space-x-1 items-center justify-end w-28 h-full">
        <div class="w-14 h-full">
            <img class="flex-1 h-full rounded-lg" src="../assets/icons/logos/skill-icons_html.svg"/>
        </div>
        <p class="text-xl font-bold text-gray-800">HTML</p>
    </div>
    <p class="w-1/3 text-xs text-gray-800">Langage de balisage utilisé pour créer des pages Web.</p>
    <p class="text-xs text-gray-800">Expérience : <br/>1200000000000</p>
</div>
			<div>
				<h2>Front-End</h2>
				<div class="tech-button">
					<p>
						{{ html }}
					</p>
					<img
						src="../assets/icons/logos/skill-icons_html.svg"
						alt=""
					/>
					<h3>HTML</h3>
					<p>Langage de balisage utilisé pour créer des pages Web.</p>
					<p>
						Coût :
						{{ htmlPrice }}
						d'expérience
					</p>
				</div>
				<button
					@click="addHtml"
					class="bg-green-500 font-bold py-2 px-4 rounded"
				>
					{{ html }} / HTML ({{ htmlPrice }} Expérience)
				</button>
				<button
					@click="addCss"
					class="bg-green-500 font-bold py-2 px-4 rounded"
				>
					{{ css }} / CSS ({{ cssPrice }} Expérience)
				</button>
				<button
					@click="addJS"
					class="bg-green-500 font-bold py-2 px-4 rounded"
				>
					{{ js }} / JavaScript ({{ jsPrice }} Expérience)
				</button>
			</div>
			<!-- Buy Tech Section -->
			<button
				@click="resetAll"
				class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				RESET
			</button>
		</section>
	</div>
</template>

<script>
export default {
	name: "CodePage",
	data() {
		return {
			exp: 0,
			expSecond: 0,
			// Buy tech
			html: 1,
			htmlPrice: 100,

			css: 0,
			cssPrice: 100,

			js: 0,
			jsPrice: 100,
		}
	},
	methods: {
		// Buttons mehtods
		addExp() {
			this.exp += this.html
			this.exp += this.js
			this.saveToLocalStorage("exp", this.exp)
			this.saveToLocalStorage("html", this.html)
		},
		addHtml() {
			if (this.exp >= this.htmlPrice) {
				this.exp -= this.htmlPrice
				this.html += 1
				this.htmlPrice *= 2
				this.saveToLocalStorage("exp", this.exp)
				this.saveToLocalStorage("html", this.html)
				this.saveToLocalStorage("htmlPrice", this.htmlPrice)
			}
		},
		addCss() {
			if (this.exp >= this.cssPrice) {
				this.exp -= this.cssPrice
				this.css += 1
				this.cssPrice *= 2
				this.expSecond += this.css
				this.saveToLocalStorage("exp", this.exp)
				this.saveToLocalStorage("css", this.css)
				this.saveToLocalStorage("cssPrice", this.cssPrice)
			}
		},
		addJS() {
			if (this.exp >= this.jsPrice) {
				this.exp -= this.jsPrice
				this.js += 10
				this.jsPrice *= 2
				this.saveToLocalStorage("exp", this.exp)
				this.saveToLocalStorage("js", this.js)
				this.saveToLocalStorage("jsPrice", this.jsPrice)
			}
		},

		resetAll() {
			if (
				confirm("Voulez-vous vraiment supprimer toutes les données ?")
			) {
				this.css = 0
				this.exp = 0
				localStorage.clear()
				location.reload()
			}
		},

		// Local storage methods
		saveToLocalStorage(key, value) {
			localStorage.setItem(key, JSON.stringify(value))
			console.log("Data saved in local storage")
		},
		loadFromLocalStorage(key) {
			const value = localStorage.getItem(key)
			return value ? JSON.parse(value) : null
		},
		loadCodeData() {
			this.exp = this.loadFromLocalStorage("exp") || 0
			this.html = this.loadFromLocalStorage("html") || 1
			this.htmlPrice = this.loadFromLocalStorage("htmlPrice") || 100
			this.css = this.loadFromLocalStorage("css") || 0
			this.cssPrice = this.loadFromLocalStorage("cssPrice") || 100
			this.js = this.loadFromLocalStorage("js") || 0
			this.jsPrice = this.loadFromLocalStorage("jsPrice") || 100
		},
	},
	created() {
		setInterval(() => {
			this.exp += this.css
			this.saveToLocalStorage("css", this.css)
			this.saveToLocalStorage("exp", this.exp)
		}, 1000)
	},
	mounted() {
		this.loadCodeData()
	},
}
</script>

<style scoped>

.tech-button {
	background-color: rgb(44, 47, 49);
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
}

</style>