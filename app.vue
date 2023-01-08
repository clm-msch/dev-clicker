<template>
  <div style="text-align: center;">
    <button @click="incrementCookies" class="btn btn-outline-light" style="--bs-btn-font-size: 4rem;
        --bs-btn-padding-x: 2rem;
        --bs-btn-outline: 50rem;">Site Web</button>
    <p><br>Visteurs: {{ visits }}</p>
    <p>{{ autoclickers }} Visteurs par seconde </p>
    <button class="btn btn-outline-light" @click="buyCursor">{{ cursors }} / HTML ({{ cursorPrice }} Visteurs)</button>
    <button class="btn btn-outline-light" @click="buyAutoclicker">{{ autoclickers }} / CSS ({{ autoclickerPrice }} Visteurs)</button>
    <button class="btn btn-outline-light" @click="cheat1000">add 1000</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visits: 0,
      cursors: 1,
      cursorPrice: 100,
      autoclickers: 0,
      autoclickerPrice: 500
    }
  },
  methods: {
    cheat1000() {
      this.visits += 1000
    },
    incrementCookies() {
      this.visits += this.cursors
    },
    buyCursor() {
      if (this.visits >= this.cursorPrice) {
        this.visits -= this.cursorPrice
        this.cursors += 1
        this.cursorPrice *= 2
      }
    },
    buyAutoclicker() {
      if (this.visits >= this.autoclickerPrice) {
        this.visits -= this.autoclickerPrice
        this.autoclickers += 1
        this.autoclickerPrice *= 2
      }
    }
  },
  created() {
    setInterval(() => {
      this.visits += this.autoclickers
    }, 1000)
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500;800&display=swap'); 

body {
    background: linear-gradient(252.46deg, #302842 0%, #272531 48.44%, #2C2644 100%) no-repeat center center fixed ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding: 10px;
    background-size: 100%;
}
button {
  align-items: center;
}
p {
    text-align: center;
    color: white;
    font-family: 'Urbanist', sans-serif;
}

.instruction {
    text-align: center;
    color: white;
    font-family: 'Urbanist', sans-serif;
}
</style>