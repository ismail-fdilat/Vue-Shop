import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import "bootstrap";
import "./assets/app.scss";
import { fb } from "./firebase";

fb.auth().onAuthStateChanged(function() {
  createApp(App)
    .use(store)
    .use(router)
    .component("Navbar", require("./components/Navbar.vue").default)
    .mount("#app");
});
