import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(store).use(VueAxios, axios).use(router).mount("#app");
