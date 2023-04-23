import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '.././js/firebase.js'
// import { useDataStore } from "../stores/data"


export const useAuthStore = defineStore({
  id: 'auth', 
  state: () => {
    return { 
      user: {},
      auth : false,
    }
  },
  actions: {
    init() {
      // const storeNotes = useDataStore()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push('/')
          // storeNotes.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
          // storeNotes.clearNotes()
        }
      })
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        console.log('register success')
        console.log('user: ', user)
      }).catch((error) => {
        console.log('error.message: ', error.message)
      })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        console.log('login success')
        console.log('user: ', user)
      }).catch((error) => {
        console.log('error.message: ', error.message)
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('User signed out')
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
})