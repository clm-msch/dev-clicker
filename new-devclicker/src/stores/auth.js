import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '.././js/firebase.js'
import router from '../router/index.js'
// import { useDataStore } from '../stores/data'


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      user: {},
      auth: false,
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.id
          this.user.email = user.email
          this.auth = true
          // console.table(['User connected' , user.email , user.id])
          // const data = useDataStore()
          // data.init()
        } else {
          this.user = {}
          this.auth = false
          router.push('/')
        }
      })
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        // const user = userCredential.user
        // console.log('register success')
        // console.log('user: ', user)
      }).catch((error) => {
        console.log('error.message: ', error.message)
      })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        // const user = userCredential.user
        // console.log('login success')
        // console.log('user: ', user)
      }).catch((error) => {
        console.log('error.message: ', error.message)
      })
    },
    loginUserWithGoogle() {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider).then((result) => {
      }).catch((error) => {
        console.log(error.message)
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('User signed out')
        router.push('/')
      }).catch((error) => {
        console.log(error.message)
      })
    },
  }
})