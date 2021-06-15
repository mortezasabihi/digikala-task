import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import configureStore from "@/store/configureStore";
import "@/plugins";

const app = createApp(App);
app.use(router);
// global components
app.component("FontAwesomeIcon", FontAwesomeIcon);
// global config
app.config.globalProperties.$filters = {
  slug(value) {
    return value.replaceAll(" ", "-");
  },
  price(value) {
    return value.toLocaleString();
  },
};
// setup store (reudx)
app.config.globalProperties.$store = configureStore();
app.mount("#app");
