<template>
	<div
		v-if="!storeAuth.auth"
		class="fixed z-10 inset-0 overflow-y-auto shadow-lg"
	>
		<div
			class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<div class="fixed inset-0 transition-opacity" aria-hidden="true">
				<div class="absolute inset-0 bg-dark_grey"></div>
			</div>
			<span
				class="hidden sm:inline-block sm:align-middle sm:h-screen"
				aria-hidden="true"
				>&#8203;</span
			>

			<div
				class="inline-block align-bottom bg-white rounded-lg overflow-hidden transform transition-all sm:my-2 sm:align-middle sm:w-full sm:max-w-md"
			>
				<div class="bg-white p-6">
					<div class="flex justify-center">
						<img
							src="../assets/icons/devclicker/devclicker-text-black.svg"
							class="mb-2"
						/>
					</div>

					<div class="flex justify-center mb-6 gap-4">
						<button
							class="px-4 py-2 rounded-md text-primary font-bold"
							:class="{
								'bg-primary': register,
                'hover:bg-dark_primary': register,
								'bg-light_grey': !register,
								'text-white': register,
							}"
							@click.prevent="register = true"
						>
							Inscription
						</button>
						<button
							class="px-4 py-2 rounded-md text-primary font-bold"
							:class="{
								'bg-primary': !register,
                'hover:bg-dark_primary': !register,
								'bg-light_grey': register,
								'text-white': !register,
							}"
							@click.prevent="register = false"
						>
							Connexion
						</button>
					</div>
					<div class="bg-white rounded-lg p-6">
						<form @submit.prevent="onSubmit">
							<div class="space-y-4">
								<div>
									<label
										class="block text-gray-700 text-left font-medium mb-2"
										>Email</label
									>
									<input
										v-model="credentials.email"
										class="w-full px-4 py-2 rounded-md border-gray-300 bg-light_grey"
										placeholder="monmail@mail.com"
										type="email"
									/>
								</div>
								<div>
									<label
										class="block text-gray-700 text-left font-medium mb-2"
										>Mot de passe</label
									>
									<input
										v-model="credentials.password"
										class="w-full px-4 py-2 rounded-md border-gray-300 bg-light_grey"
										placeholder="ton mot de passe"
										type="password"
									/>
								</div>
								<div>
									<button
										class="w-full px-4 py-2 rounded-lg text-white font-bold bg-primary hover:bg-dark_primary"
									>
										{{ formTitle }}
									</button>
								</div>
								<div class="flex justify-center">
									<button
										@click.prevent="
											storeAuth.loginUserWithGoogle()
										"
										class="flex gap-2 items-center justify-center bg-light_grey hover:border-primary border-2 w-full px-4 py-2 rounded-lg"
									>
										<img
											src="../assets/icons/basics/google.svg"
											class="w-6"
										/>
										<p class="text-sm font-semibold">
											{{ formTitle }} avec Google
										</p>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div
				class="sm:inline-block hidden ml-5 align-bottom bg-white rounded-lg overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
			>
				<div class="bg-white p-6">
					<div class="flex justify-left">
						<p class="font-bold text-lg">News :</p>
					</div>
					<div class="flex justify-left text-left">
						Enfin la V2 est disponible ! Merci a ceux qui ont
						participé aux tests tous au long de la V1 !
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
/*
  imports
*/

import { ref, computed, reactive } from "vue"
import { useAuthStore } from "../stores/auth.js"

/*
  store
*/

const storeAuth = useAuthStore()

/*
  register / login
*/

const register = ref(true)

/*
  form title
*/

const formTitle = computed(() => {
	return register.value ? "S'inscrire" : "Se connecter"
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
		alert("Rentrez un email et un mot de passe")
	} else {
		if (register.value) {
			storeAuth.registerUser(credentials)
			storeAuth.init()
		} else {
			storeAuth.loginUser(credentials)
		}
	}
}
</script>
