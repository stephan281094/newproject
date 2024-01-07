import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(ElementPlus);
app.use(VueAxios, axios);
app.mount("#app");
