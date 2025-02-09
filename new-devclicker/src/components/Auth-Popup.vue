<template>
	<div
		v-if="!storeAuth.auth"
		class="fixed inset-0 z-10 overflow-y-auto shadow-lg"
	>
		<div
			class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
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
				class="inline-block overflow-hidden align-bottom transition-all transform bg-white rounded-lg sm:my-2 sm:align-middle sm:w-full sm:max-w-md"
			>
				<div class="p-6 bg-white">
					<div class="flex justify-center">
						<img
							src="../assets/icons/devclicker/devclicker-text-black.svg"
							class="mb-2"
						/>
					</div>

					<div class="flex justify-center gap-4 mb-6">
						<button
							class="px-4 py-2 font-bold rounded-md text-primary"
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
							class="px-4 py-2 font-bold rounded-md text-primary"
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
					<div class="p-6 bg-white rounded-lg">
						<form @submit.prevent="onSubmit">
							<div class="space-y-4">
								<div>
									<label
										class="block mb-2 font-medium text-left text-gray-700"
										>Email</label
									>
									<input
										v-model="credentials.email"
										class="w-full px-4 py-2 border-gray-300 rounded-md bg-light_grey"
										placeholder="monmail@mail.com"
										type="email"
									/>
								</div>
								<div>
									<label
										class="block mb-2 font-medium text-left text-gray-700"
										>Mot de passe</label
									>
									<input
										v-model="credentials.password"
										class="w-full px-4 py-2 border-gray-300 rounded-md bg-light_grey"
										placeholder="ton mot de passe"
										type="password"
									/>
								</div>
								<div>
									<button
										class="w-full px-4 py-2 font-bold text-white rounded-lg bg-primary hover:bg-dark_primary"
									>
										{{ formTitle }}
									</button>
								</div>
								<div class="flex justify-center">
									<!-- <button
										@click.prevent="
											storeAuth.loginUserWithGoogle()
										"
										class="flex items-center justify-center w-full gap-2 px-4 py-2 border-2 rounded-lg bg-light_grey hover:border-primary"
									> -->
									<button
									class="flex items-center justify-center w-full gap-2 px-4 py-2 border-2 rounded-lg bg-light_grey hover:border-primary"
								>
										<img
											src="../assets/icons/basics/google.svg"
											class="w-6"
										/>
										<p class="text-sm font-semibold">
											{{ formTitle }} avec Google (ne marche pas)
										</p>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div
				class="hidden pt-4 ml-5 align-bottom transition-all transform bg-white rounded-lg poverflow-hidden sm:inline-block sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
			>
				<!-- <div class="p-6 bg-white">
					<div class="flex justify-left">
						<p class="text-lg font-bold">News :</p>
					</div>
					<div class="flex text-left justify-left">
						Enfin la V2 est disponible ! Merci a ceux qui ont
						participé aux tests tous au long de la V1 !
					</div>
				</div> -->
				<div style="padding: 100% 0 0 0; position: relative">
					<iframe
						src="https://player.vimeo.com/video/968146256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
						frameborder="0"
						allow="autoplay; encrypted-media"
						style="
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
						"
						title="Devclicker"
					></iframe>
				</div>
				<p class="italic">
					(Merci beaucoup
					<a
						class="font-bold text-primary hover:text-dark_primary"
						href="https://www.instagram.com/bleuu.fleur/"
						target="_blank"
						>@bleuu.fleur</a
					>)
				</p>
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
