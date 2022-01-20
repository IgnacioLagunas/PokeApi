import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import store from "./store";

import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";
import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css ";

//Intenté muchas veces agregar los iconos de primevue pero no pude, los instalé muchas veces y al importar y guardar me daba un error, por eso terminé ocupando font awesome,
// lo unico que no pude arreglar fue el icono de hamburgesa ya que primevue no da un slot para cambiarlo.

createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
