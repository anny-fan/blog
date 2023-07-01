import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "./main.scss"; //vuetify
import "./style.css"; //tailwind
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6QQxFBctC55ASmBN1V_f_PSF9vlXWBX0",
  authDomain: "blog-5a34c.firebaseapp.com",
  projectId: "blog-5a34c",
  storageBucket: "blog-5a34c.appspot.com",
  messagingSenderId: "351262336909",
  appId: "1:351262336909:web:4755a39d817040ba43bfc4",
  measurementId: "G-CS3X0VS51V",
};

initializeApp(firebaseConfig);

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
