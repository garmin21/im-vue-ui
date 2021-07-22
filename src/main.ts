import Vue from "vue";
import App from "./App.vue";
import router from "../docs/routes";

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");
