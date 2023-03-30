<template>
	<div v-if="data.exp == -1" class="fixed z-10 inset-0 overflow-y-auto">
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
									Ceci est la v1.3 le jeu peu contenir des
									bugs et une grande partie des
									fonctionnalités ne sont pas encore
									implémenter mais tous de même merci beaucoup
									de participer aux tests !
									<br />
									<br />
									Les choix de technologie dans le jeu sont
									pour le moment restreint mais elles seront
									élargit dans les prochaines versions.
								</p>
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
								@click="signInWhithGoogle"
								type="button"
								class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary text-base leading-6 font-medium text-white shadow-sm hover:bg-dark_grey transition ease-in-out duration-150 sm:text-sm sm:leading-5"
							>
								S'inscrire avec Google
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	connection info :
	{{ userData.userId }}
	{{ userData.userMail }}
	<!-- <div>
		<div v-if="showPopup1 && popup1" class="fixed z-10 inset-0 overflow-y-auto"> -->
	<!-- <div v-if="expData.count == 0" class="fixed z-10 inset-0 overflow-y-auto"></div>
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
										Ceci est la v1.3 le jeu peu contenir des bugs et une grande partie des fonctionnalités ne sont pas encore implémenter mais tous de même merci beaucoup de participer aux tests !
                                        <br>
                                        <br>
                                        Les choix de technologie dans le jeu sont pour le moment restreint mais elles seront élargit dans les prochaines versions.
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
										Ne t'en fait pas tu va sera guider pour le début tu aurais une petite fenetre en haut a droite. Bon développement !
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
		</div> -->
</template>
<!-- <script setup>
import { inject, ref, provide, reactive, watch, onMounted } from "vue"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
const expData = inject("expData")

const userData = reactive({
	userId: "",
	userMail: "",
	isLogged: false,
})
provide("userData", userData)

// const userId = ref("")
// const userEmail = ref("")

// Connexion avec Google
const signInWhithGoogle = () => {
	const provider = new GoogleAuthProvider()
	signInWithPopup(getAuth(), provider)
		.then((result) => {
			console.log("Inscription réussie !")
			// console.log(result.user)
			// console.log(result.user.uid)
			// userId.value = result.user.uid
			// userMail.value = result.user.email
			userData.userId = result.user.uid
			userData.userMail = result.user.email
			userData.isLogged = true
			expData.count = 1
		})
		.catch((error) => {
			console.log(error.code)
		})

	watch(userData, () => {
		localStorage.setItem("userData", JSON.stringify(userData))
	})
	onMounted(() => {
		const userDataStorage = localStorage.getItem("userData")
		if (userDataStorage) {
			Object.assign(userData, JSON.parse(userDataStorage))
		}
		localStorage.setItem("userData", JSON.stringify(userData))
	})
}
</script> -->

<script setup>
import { useDataStore } from "../stores/data"
import { inject, ref, provide, reactive, watch, onMounted } from "vue"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
const data = useDataStore()
const expData = inject("expData")

const userData = reactive({
	userId: "",
	userMail: "",
	isLogged: false,
})
provide("userData", userData)

// Récupérer les données utilisateur depuis le local storage
const getUserDataFromLocalStorage = () => {
  const userDataStorage = localStorage.getItem("userData")
  if (userDataStorage) {
    const storedUserData = JSON.parse(userDataStorage)
    userData.userId = storedUserData.userId
    userData.userMail = storedUserData.userMail
    userData.isLogged = storedUserData.isLogged
  }
}

// Connexion avec Google
const signInWhithGoogle = () => {
	const provider = new GoogleAuthProvider()
	signInWithPopup(getAuth(), provider)
		.then((result) => {
			console.log("Inscription réussie !")
			userData.userId = result.user.uid
			userData.userMail = result.user.email
			userData.isLogged = true
			expData.count = 1
		})
		.catch((error) => {
			console.log(error.code)
		})
}

// Sauvegarder les données utilisateur dans le local storage lorsqu'elles changent
watch(userData, () => {
	localStorage.setItem("userData", JSON.stringify(userData))
})

// Récupérer les données utilisateur depuis le local storage lors de la montée de composant
onMounted(() => {
	getUserDataFromLocalStorage()
})
</script>