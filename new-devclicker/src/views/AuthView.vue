<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md">
      <div class="flex justify-center mb-6">
        <button
          class="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          :class="{ 'bg-blue-600': register }"
          @click.prevent="register = true"
        >
          Register
        </button>
        <button
          class="px-4 py-2 font-medium text-blue-500 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          :class="{ 'bg-blue-100': !register }"
          @click.prevent="register = false"
        >
          Login
        </button>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <h1 class="mb-6 text-2xl font-bold">{{ formTitle }}</h1>
        <form @submit.prevent="onSubmit">
          <div class="space-y-4">
            <div>
              <label class="block mb-2 font-medium text-gray-700">Email</label>
              <input
                v-model="credentials.email"
                class="w-full px-4 py-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                placeholder="e.g. alexsmith@gmail.com"
                type="email"
              />
            </div>
            <div>
              <label class="block mb-2 font-medium text-gray-700">Password</label>
              <input
                v-model="credentials.password"
                class="w-full px-4 py-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                placeholder="Enter a password"
                type="password"
              />
            </div>
            <div>
              <button
                class="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                :class="{ 'bg-blue-600': register }"
              >
                {{ formTitle }}
              </button>
            </div>
          </div>
        </form>
      </div>
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
	// return register.value ? "Register" : "Login"
  return register.value ? "Register" : "Login"
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
