import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/dark/css-vars.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/index.js";
import "./styles/style.css";
import store from "@/store/index.js";

const app = createApp(App);

app.use(ElementPlus);
app.use(VueAxios, axios);
app.use(store);
app.use(router);
app.mount("#app");
