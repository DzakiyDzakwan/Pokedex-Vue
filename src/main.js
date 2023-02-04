import { createPinia } from "pinia";
import { createApp } from "vue";
import "./assets/css/global.css";
import "@/assets/css/tailwind.css";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import App from "./App.vue";

const vapp = createApp(App);
const pinia = createPinia();

vapp.use(pinia);
vapp.use(mdiVue, { icons: mdijs });

vapp.mount("#app");
