<template>
	<div>
		<div v-if="showPopup1 && popup1" class="fixed z-10 inset-0 overflow-y-auto">
			<div
				class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<span
					class="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
					>&#8203;</span
				>
				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div
								class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
							>
								<h3
									class="text-lg leading-6 font-medium text-gray-900"
								>
									Bienvenue sur Devclicker !
								</h3>
								<div class="mt-2">
									<p class="text-sm leading-5 text-gray-500">
										Ceci est la v1.3 le jeu peu contenir des bugs et une grande partie des fonctionnalités ne sont pas encore implémenter mais tous de même merci beaucoup de participer aux test !
                                        <br>
                                        <br>
                                        L'objectif de Devclicker est simple, tu va devoir devenir le meilleur développeur au monde et pour ça tu va apprendre puis mettre en pratique tes compétences.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
					>
						<span
							class="flex w-full rounded-md shadow-sm sm:w-auto"
						>
							<button
								@click="nextPopup"
								type="button"
								class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary text-base leading-6 font-medium text-white shadow-sm hover:bg-dark_grey  transition ease-in-out duration-150 sm:text-sm sm:leading-5"
							>
								Suivant
							</button>
						</span>
	
					</div>
				</div>
			</div>
		</div>
        <div v-if="showPopup2" class="fixed z-10 inset-0 overflow-y-auto">
			<div
				class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
				<span
					class="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
					>&#8203;</span
				>
				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div
								class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
							>
								<h3
									class="text-lg leading-6 font-medium text-gray-900"
								>
									Pour commencer :
								</h3>
								<div class="mt-2">
									<p class="text-sm leading-5 text-gray-500">
										Tu va commencer par apprendre à développer et monter en expérience pour pouvoir débloquer tes première missions.
                                        Alors clique comme un dingue sur le bouton "Développer"
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
					>
						<span
							class="flex w-full rounded-md shadow-sm sm:w-auto"
						>
							<button
								@click="closePopup"
								type="button"
								class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary text-base leading-6 font-medium text-white shadow-sm hover:bg-dark_grey  transition ease-in-out duration-150 sm:text-sm sm:leading-5"
							>
								C'est parti !
							</button>
						</span>
	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPopup1: true,
            popup1: true,
            showPopup2: false,
		}
	},
    props: {
        newComer: {
            type: String,
            required: true
        }
    },
    computed: {
        showPopup1() {
            if (this.newComer >= 1) {
                return false
            } else {
                return true
            }
        }
    },
	methods: {
		nextPopup() {
			this.showPopup1 = false
            this.popup1 = false
            this.showPopup2 = true
		},
        closePopup() {
            this.showPopup1 = false
            this.showPopup2 = false
            this.$emit('closePopup')
        }
	},
}
</script>

