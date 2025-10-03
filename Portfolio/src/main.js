import { createApp } from "vue";
import App from "./App.vue";
import router from './router/router';
import "./style.css";
// ✅ Correct named import for Iconify
import { Icon } from "@iconify/vue";

const app = createApp(App);

// Register Icon globally
app.component("Icon", Icon);

// Register router before mounting
app.use(router);

app.mount("#app");
