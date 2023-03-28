// Dans votre store Pinia
import { defineStore } from 'pinia';

export const useBitcoinStore = defineStore({
  id: 'bitcoin',
  state: () => ({
    value: 10000, // Valeur initiale du bitcoin
    fluctuation: [], // Tableau d'objets représentant la fluctuation de la valeur du bitcoin
  }),
  actions: {
    simulateFluctuation() {
      // Simuler une fluctuation de la valeur du bitcoin
      const fluctuation = []
      for (let i = 0; i < 24; i++) { // Simulation sur 24 heures
        const value = Math.round(this.value * (1 + (Math.random() - 0.5) / 10)) // Ajoute ou soustrait une valeur aléatoire de +/- 5% à la valeur actuelle
        fluctuation.push({ time: i, value }) // Ajouter un objet avec le temps et la valeur au tableau de fluctuation
      }
      this.fluctuation = fluctuation // Mettre à jour le tableau de fluctuation dans le store
    }
  }
})
