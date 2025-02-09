<template>
	<div v-if="data.exp == -2" class="fixed inset-0 z-10 overflow-y-auto">
		<div
			class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
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
				class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
			>
				<div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div
							class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
						>
							<h3
								class="text-lg font-medium leading-6 text-gray-900"
							>
								Bienvenue sur Devclicker !
							</h3>
							<div class="mt-2">
								<p class="text-sm leading-5 text-gray-500">
									Ceci est la v1.4 le jeu peu contenir des
									bugs et une grande partie des
									fonctionnalités ne sont pas encore
									implémenter mais tous de même merci beaucoup
									de participer aux tests !
									<br />
									<br />
									[BUG CONNEXION GOOGLE AUTH / CLIQUER SUR LE BOUTON]
								</p>
							</div>
						</div>
					</div>
					<div
						class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
					>
						<span
							class="flex w-full rounded-md shadow-sm sm:w-auto"
						>
							<button
								@click="signInWhithGoogle"
								type="button"
								class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary hover:bg-dark_grey sm:text-sm sm:leading-5"
							>
								S'inscrire avec Google
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-if="data.exp == -1" class="fixed inset-0 z-10 overflow-y-auto">
		<div
			class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
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
				class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate__animated animate__tada" 
			>
				<div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div
							class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
						>
							<h3
								class="text-xl font-bold leading-6 text-center text-gray-900"
							>
								UUUUPDATE !
							</h3>
							<div class="mt-2">
								<p class="text-sm leading-5 text-gray-500">
									Il y a de la nouveauté dans l'air, l'onglet mission à été répéraré et les trophées sont maintenant disponible !
									Il y a aussi un début de système d'investissement boursier que tu peux tester.
								</p>
							</div>
						</div>
					</div>
					<div
						class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
					>
						<span
							class="flex w-full rounded-md shadow-sm sm:w-auto"
						>
							<button
								@click="goToGame"
								type="button"
								class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary hover:bg-dark_grey sm:text-sm sm:leading-5"
							>
								Je veux le voir de mes yeux !
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


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
	// const provider = new GoogleAuthProvider()
	// signInWithPopup(getAuth(), provider)
	// 	.then((result) => {
	// 		console.log("Inscription réussie !")
	// 		userData.userId = result.user.uid
	// 		userData.userMail = result.user.email
	// 		userData.isLogged = true
	// 		data.exp = -1
	// 	})
	// 	.catch((error) => {
	// 		console.log(error.code)
	// 	})
	data.exp = -1
}

const goToGame = () => {
	data.exp = 0
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