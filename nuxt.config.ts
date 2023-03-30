// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src",
    css:["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
    
    modules:["@pinia/nuxt"],

    build:{
        transpile: ["vuetify"]
    }
})