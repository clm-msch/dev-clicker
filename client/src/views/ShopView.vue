<template>
	<div>
		<img src="../assets/icons/entreprise/Amazitruc.svg" alt="" />
	</div>
  <div class="flex gap-4 shadow-lg flex-wrap">
    <div class="bg-white p-4 w-64">
      <img src="../assets/img/shop/switch.jpg" class="rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Console de jeu</h1>
          <p class="text-sm">
            300 €
          </p>
          <p>Quatité possédé : {{ data.switch }}</p>
          <button @click="data.buySwitch" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white">
            Acheter
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 w-64">
      <img src="../assets/img/shop/headphone.jpg" class="w-fit rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Casque audio</h1>
          <p class="text-sm">
            150 €
          </p>
          <p>Quatité possédé : {{ data.head }}</p>
          <button @click="data.buyHead" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white">
            Acheter
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 w-64">
      <img src="../assets/img/shop/pc.jpg" class="w-fit rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">PC Gaming</h1>
          <p class="text-sm">
            5000 €
          </p>
          <p>Quatité possédé : {{ data.pc }}</p>
          <button @click="data.buyPc" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white">
            Acheter
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 w-64">
      <img src="../assets/img/shop/cars.jpg" class="w-fit rounded" />
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Voiture de luxe</h1>
          <p class="text-sm">
            350 000 €
          </p>
          <p>Quatité possédé : {{ data.car }}</p>
          <button @click="data.buyCar" class="bg-amazitruc p-2 pl-6 pr-6 rounded-lg text-white">
            Acheter
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
