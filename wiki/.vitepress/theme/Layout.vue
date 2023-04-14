<template>
  <div>
    <SearchBox @search="search" />

    <!-- Le reste de votre contenu ici -->
  </div>
</template>

<script>
import SearchBox from '../components/Searchbox.vue'

export default {
  components: {
    SearchBox,
  },
  methods: {
    search(query) {
      console.log('Recherche pour :', query)
      // Écrire le code pour effectuer la recherche ici
    },
  },
}
</script>
