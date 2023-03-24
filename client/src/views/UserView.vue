<template>
    <button @click="signInWhithGoogle">Connexion avec google</button>
</template>

<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { ref, onMounted } from "vue"
const userId = ref("")
const userMail = ref("")

const signInWhithGoogle = () => {
	const provider = new GoogleAuthProvider()
	signInWithPopup(getAuth(), provider)
		.then((result) => {
			console.log("Inscription réussie !")
			console.log(result.user)
			console.log(result.user.uid)
			userId.value = result.user.uid
			userMail.value = result.user.email
		})
		.catch((error) => {
			console.log(error.code)
		})
}
</script>

<style scoped>
button {
	justify-content: center;
	background: #4f46e5;
	font-size: large;
	font-weight: bold;
	color: white;
	padding: 8px;
	border-radius: 4px;
	gap: 4px;
}
</style>