import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.use(router);

// Component Imports
import Header from "./views/Layouts/Header.vue";
import Sidebar from "./views/Layouts/Sidebar.vue";
import Master from "./views/Layouts/Master.vue";
import Footer from "./views/Layouts/Footer.vue";
import Main from "./views/Layouts/Main.vue";

app.component("Header", Header);
app.component("Sidebar", Sidebar);
app.component("Master", Master);
app.component("Main", Main);
app.component("Footer", Footer);
app.mount("#app");
