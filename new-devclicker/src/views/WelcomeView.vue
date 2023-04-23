<template>
	<div class="flex">
		<div class="flex flex-col h-screen xl:w-1/2 w-full bg-dark_grey">
			<div class="flex justify-center">
				<img
					src="../assets/icons/devclicker/devclicker-text.svg"
					class="xl:w-1/4 mt-2"
				/>
			</div>
			<div class="flex justify-center items-center h-screen -mt-6">
				<div class="w-full max-w-md">
					<div class="flex justify-center mb-6 gap-4">
						<button
							class="px-4 py-2 rounded-md text-white font-medium bg-primary hover:dark_primary"
						>
							Inscription
						</button>
						<button
							class="px-4 py-2 rounded-md text-primary font-medium bg-white"
						>
							Connexion
						</button>
					</div>
					<div class="bg-white rounded-lg shadow-lg p-6">
						<h1 class="text-2xl font-bold mb-6">Connexion</h1>
						<form>
							<div class="space-y-4">
								<div>
									<label
										class="block text-gray-700 font-medium mb-2"
										>Email</label
									>
									<input
										class="w-full px-4 py-2 rounded-md border-gray-300"
										placeholder="monmail@mail.com"
										type="email"
									/>
								</div>
								<div>
									<label
										class="block text-gray-700 font-medium mb-2"
										>Mot de passe</label
									>
									<input
										class="w-full px-4 py-2 rounded-md border-gray-300"
										placeholder="ton mot de passe"
										type="password"
									/>
								</div>
								<div>
									<button
										class="w-full px-4 py-2 rounded-lg text-white font-medium bg-primary"
									>
										Se connecter
									</button>
								</div>
								<div class="flex justify-center">
									<button class="flex gap-2 items-center justify-center bg-light_grey w-full px-4 py-2 rounded-lg">
										<img src="../assets/icons/basics/google.svg" class="w-6">
										<p class="text-sm font-semibold">Se connecter avec Google</p>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="xl:flex h-screen justify-center hidden xl:w-1/2">
			<img src="../assets/icons/devclicker/screen-game-1.png" />
		</div>
	</div>
</template>

<script setup>
/*
  imports
*/

import { ref, computed, reactive } from "vue"
import { useAuthStore } from "../stores/auth"

/*
  store
*/

const storeAuth = useAuthStore()

/*
  register / login
*/

const register = ref(false)

/*
  form title
*/

const formTitle = computed(() => {
	return register.value ? "S'inscrire" : "Connexion"
})

/*
  credentials
*/

const credentials = reactive({
	email: "",
	password: "",
})

/*
  submit
*/

const onSubmit = () => {
	if (!credentials.email || !credentials.password) {
		alert("Please enter an email and password")
	} else {
		if (register.value) {
			storeAuth.registerUser(credentials)
		} else {
			storeAuth.loginUser(credentials)
		}
	}
}
</script>
