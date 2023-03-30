import { createVuetify, ThemeDefinition } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import {md3} from "vuetify/blueprints"

// Theme definition below

// const myTheme:ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: '#FFFFFF',
//     surface: '#FFFFFF',
//     primary: '#6200EE',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// }

export default defineNuxtPlugin( nuxtApp => {
  
    const vuetify= createVuetify({
        ssr: true,
        components,
        directives,
        //Uncomment if you would like to follow the material design 3 design system go here for more theme building with md3 https://m3.material.io/theme-builder#/dynamic
        // blueprint: md3
    })

    nuxtApp.vueApp.use(vuetify)

})