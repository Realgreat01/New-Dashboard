import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Message from "vue-m-message";
import "./assets/main.css";

// import "./tailwind.scss";
import "vue-m-message/dist/style.css";
import "material-icons/iconfont/material-icons.css";

const VMessageOptions = {
  name: "admin-dashboard",
  defaultOptions: { closable: true, position: "top-right", width: "300px" },
};

const app = createApp(App);

app.use(Message, VMessageOptions);
app.use(createPinia());
app.use(router);

app.mount("#app");
