<template>
	<div>
		<img src="../assets/icons/entreprise/Amazitruc.svg" alt="" />
	</div>
  <div class="flex gap-4 flex-wrap">
    <div class="bg-white p-4 w-64 rounded">
      <img src="../assets/img/shop/switch.webp" class="rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Console de jeu</h1>
          <p class="text-sm">
            300 €
          </p>
          <p>Quatité possédé : {{ data.switch }}</p>
          <button @click="data.buySwitch" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white w-fit">
            Acheter
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 w-64 rounded">
      <img src="../assets/img/shop/headphone.webp" class="w-fit rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Casque audio</h1>
          <p class="text-sm">
            150 €
          </p>
          <p>Quatité possédé : {{ data.head }}</p>
          <button @click="data.buyHead" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white w-fit">
            Acheter
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 w-64 rounded">
      <img src="../assets/img/shop/pc.webp" class="w-fit rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">PC Gaming</h1>
          <p class="text-sm">
            5000 €
          </p>
          <p>Quatité possédé : {{ data.pc }}</p>
          <button @click="data.buyPc" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white w-fit">
            Acheter
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 w-64 rounded">
      <img src="../assets/img/shop/cars.webp" class="w-fit rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Voiture de luxe</h1>
          <p class="text-sm">
            350 000 €
          </p>
          <p>Quatité possédé : {{ data.car }}</p>
          <button @click="data.buyCar" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white w-fit">
            Acheter
          </button>
          
        </div>
      </div>
    </div>
    <!-- serveur -->
    <div class="bg-white p-4 w-64">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Serveur d'occasion</h1>
          <p class="text-sm">
            8000 €
          </p>
          <p>Quatité possédé : {{ data.car }}</p>
          <button @click="data.buyCar" class="bg-dark_grey p-2 pl-6 pr-6 rounded-lg text-white w-fit">
            Soon
          </button>
          
        </div>
      </div>
    </div>
  </div>
	
</template>

<script setup>
import { useDataStore } from "../stores/data"
const data = useDataStore()
</script>
