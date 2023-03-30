<script setup lang='ts'>
import { useCountStore } from "~/stores/count"
import { storeToRefs } from "pinia"

const countStore = useCountStore()
let { count } = storeToRefs(countStore)
const increment = () => {

    countStore.incrementCount()
}

const decrement = () => {
    countStore.decrementCount()
}

</script>

<template>
    <div class="h-100 d-flex flex-column justify-center align-center">
        <div class="text-h2"><v-btn
                @click="decrement"
                class="text-h5 font-weight-black"
            >-</v-btn><span class="px-3">{{ count }}</span><v-btn
                @click="increment"
                class="text-h5 font-weight-black"
            >+</v-btn></div>
        <v-card>
            <v-card-text>
                <div class="d-flex flex-column align-center">
                    <h3 class="text-h3 px-8 py-2 font-weight-semibold">Nuxt 3-Vuetify 3-Pinia </h3>
                    <div class="py-4">
                        <p>Source Directory: "src"</p>
                        <p>V-app lives in the layout/default.vue</p>
                        <p>Theme Definition imported into plugins/vuetify for quick styling</p>
                        <p>Example Count Store @ ~/stores/count </p>
                    </div>
                    <div class="d-flex">
                        <v-icon
                            aria-hidden="true"
                            color="green"
                            size="x-large"
                            icon="mdi-sprout-outline"
                        ></v-icon>
                        <ul>
                            <li></li>
                        </ul>
                        <h4 class="text-h4 px-4">Happy Coding</h4>
                        <v-icon
                            aria-hidden="true"
                            color="green"
                            size="x-large"
                            icon="mdi-sprout-outline"
                        ></v-icon>
                    </div>
                </div>
            </v-card-text>

        </v-card>
    </div>
</template>

<style scoped>
p {
    font-size: 1.2em;
    padding: 4px;
}
</style>