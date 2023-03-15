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
			class="inline-flex space-x-3 items-center justify-center w-80 h-28 px-12 py-9 bg-white border-4 rounded-lg border-indigo-600"
		>
			<p class="text-3xl font-bold text-gray-800">Développe</p>
			<img
				class="w-1/5 h-10 rounded-lg"
				src="../assets/icons/basics/brain_logo.svg"
			/>
		</button>
		<div class="w-80 h-28">
			<div
				class="inline-flex flex-col items-center justify-end flex-1 h-full px-9 py-9 bg-white rounded-lg"
			>
				<p class="w-full h-1/2 text-xl text-gray-800">
					Expérience : <strong>{{ expFormatted }}</strong>
				</p>
				<p class="w-full h-1/2 text-xl text-gray-800">
					<strong>{{ expSecond }}</strong> Expérience par seconde
				</p>
			</div>
		</div>
		<section>
			<!-- Buy Tech Section -->

			<!-- HTML button -->
			<div class="relative" style="width: 539px; height: 61px">
				<div
					class="inline-flex space-x-2 items-center justify-start px-4 py-1 bg-white rounded-lg"
					style="width: 539px; height: 61px"
				>
					<p class="text-xl font-bold text-gray-800">{{ html }}</p>
					<div
						class="flex space-x-1 items-center justify-end w-28 h-full"
					>
						<div class="w-14 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_html.svg"
							/>
						</div>
						<p class="text-xl font-bold text-gray-800">HTML</p>
					</div>
					<p class="w-1/3 text-xs text-gray-800">
						Langage de balisage utilisé pour créer des pages Web.
					</p>
					<p class="text-xs text-gray-800">
						Coût en Expérience : <br />{{ htmlPrice }}
					</p>
				</div>
				<div class="w-11 h-16 absolute right-0 top-0">
					<button
						@click="addHtml"
						class="flex items-center justify-center flex-1 h-full px-2 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-tr-lg rounded-br-lg"
					>
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/basics/plus_logo.svg"
						/>
					</button>
				</div>
			</div>

			<!-- CSS button -->

			<div class="relative" style="width: 539px; height: 61px">
				<div
					class="inline-flex space-x-2 items-center justify-start px-4 py-1 bg-white rounded-lg"
					style="width: 539px; height: 61px"
				>
					<p class="text-xl font-bold text-gray-800">{{ html }}</p>
					<div
						class="flex space-x-1 items-center justify-end w-28 h-full"
					>
						<div class="w-14 h-full">
							<img
								class="flex-1 h-full rounded-lg"
								src="../assets/icons/logos/skill-icons_html.svg"
							/>
						</div>
						<p class="text-xl font-bold text-gray-800">HTML</p>
					</div>
					<p class="w-1/3 text-xs text-gray-800">
						Langage de balisage utilisé pour créer des pages Web.
					</p>
					<p class="text-xs text-gray-800">
						Coût en Expérience : <br />{{ htmlPrice }}
					</p>
				</div>
				<div class="w-11 h-16 absolute right-0 top-0">
					<button
						@click="addHtml"
						class="flex items-center justify-center flex-1 h-full px-2 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-tr-lg rounded-br-lg"
					>
						<img
							class="flex-1 h-full rounded-lg"
							src="../assets/icons/basics/plus_logo.svg"
						/>
					</button>
				</div>
			</div>


			<div class="inline-flex space-x-2 items-center justify-start px-4 py-1 bg-purple-100 rounded-lg" style="width: 539px; height: 61px;">
    <p class="text-xl font-bold text-gray-800">1</p>
    <div class="flex space-x-1 items-center justify-end w-1/5 h-full">
        <div class="w-14 h-full">
            <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/53x53"/>
        </div>
        <p class="text-xl font-bold text-gray-800">CSS</p>
    </div>
    <p class="w-1/3 text-xs text-gray-800">Langage de feuilles de style utilisé pour styliser et mettre en forme les pages Web.</p>
    <p class="text-xs text-gray-800">Expérience : <br/>1200000000000000</p>
</div>

			<div>
				<h2>Front-End</h2>
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
	computed: {
		expFormatted() {
			return this.exp.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 4,
				notation: "compact",
			})
		},
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
