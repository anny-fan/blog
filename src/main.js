import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "./main.scss"; //vuetify
import "./style.css"; //tailwind
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount("#app");
