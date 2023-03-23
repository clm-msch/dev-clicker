<template>
    <div class="princpal-card">
        <p> {{ expData.amount }} par clic </p>
        <p v-if="expData.amountSec >= 1"> {{ expData.amountSec }} par seconde </p>
        <h2>Expérience : {{ expData.count }}</h2>
        <button @click="addExp(expData.amount)">Développer</button>
        <div class="tech-card">
            <p>Apprendre l'HTML</p>
            <p>Coût : {{ expData.htmlPrice }} </p>
            <button @click="addHtml">Aquérir</button>
        </div>
        <div class="tech-card">
            <p>Apprendre le CSS</p>
            <p>Coût : {{ expData.cssPrice }} </p>
            <button @click="addCss">Aquérir</button>
        </div>
        <button class="reset-btn" @click="resetLocal">Reset</button>
    </div>
</template>

<script setup>;
import { reactive, ref, watch, onMounted } from "vue"
    const expData = reactive({
        count: 0,
        amount: 1,
        amountSec: 0,
        htmlPrice: 10,
        cssPrice: 100,
    })
    const addExp = (amount) => {
        console.log(amount)
        expData.count += amount
    }
    const resetLocal = () => {
        localStorage.clear()
        window.location.reload()
    }

    const addHtml = () => {
        if (expData.count >= expData.htmlPrice) {
            expData.count -= expData.htmlPrice
            expData.htmlPrice += 10 
            expData.amount += 1
        }
    }
    const addCss = () => {
        if (expData.count >= expData.cssPrice) {
            expData.count -= expData.cssPrice
            expData.cssPrice += 100
            expData.amountSec += 1
        }
    }
    // I want to watch the change of all expData to store in local storage
    watch(expData, () => {
        localStorage.setItem("expData", JSON.stringify(expData))
    })
    onMounted (() => {
        const expDataStorage = localStorage.getItem("expData")
        if (expDataStorage) {
            Object.assign(expData, JSON.parse(expDataStorage))
        }
        localStorage.setItem("expData", JSON.stringify(expData))*
        // i want to css add an amount per second
        setInterval(() => {
            expData.count += expData.amountSec
        }, 1000)

    })


</script>

<style scoped>
.princpal-card {
    position: absolute;
    top: 30%;
    left: 50%;
}

.tech-card {
    background-color: aliceblue;
    border-radius: 8px;
    padding: 8px;
}
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
.reset-btn {
    justify-content: center;
    background: #e54646;
    font-size: large;
    font-weight: bold;
    color: white;
    padding: 8px;
    border-radius: 4px;
    gap: 4px;
}
</style>