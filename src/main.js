import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "@/store";
import "@/plugins";

const app = createApp(App);
app.use(router);
app.use(store);
// global components
app.component("FontAwesomeIcon", FontAwesomeIcon);
// global config
app.config.globalProperties.$filters = {
  slug(value) {
    if (!value) {
      return "";
    }
    return value.replaceAll(" ", "-");
  },
  price(value) {
    if (!value) {
      return "";
    }
    return value.toLocaleString();
  },
};

app.mount("#app");
