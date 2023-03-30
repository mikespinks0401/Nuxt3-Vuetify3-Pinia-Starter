import { defineStore } from "pinia"

export const  useCountStore = defineStore("count", ()=> {

   const count = ref(0)

   const incrementCount = () =>{
    count.value++
}

   const decrementCount = () => {
    if(count.value == 0){
        return
    } 
    count.value--
   }

   return {count, incrementCount, decrementCount} })