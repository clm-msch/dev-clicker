<template>
    <div class="skill-card">
        <div class="inline-flex gap-4">
            <img src="logos/skill-icons_html.svg" alt="" />
            <div>
                <strong class="text-xl">HTML</strong>
                <p class="text-sm">ajoute +1 au clic</p>
            </div>
        </div>
        <div>
            <p class="font-extralight">
                Langage de balisage utilisé pour créer des pages Web.
            </p>
            <br />
        </div>
        <div class="inline-flex gap-36">
            <div>
                <p>Coût : {{ htmlPrice }} experience</p>
                <p>Quantité : {{ html }}</p>
            </div>
            <div>
                <button
                    @click="addHtml"
                    class="bg-primary p-2 pl-6 pr-6 rounded-lg font-bold text-white"
                >
                    Aquérir
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>