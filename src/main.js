import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import "font-awesome/css/font-awesome.min.css";
import * as Icons from "@element-plus/icons-vue";
import router from "./routers";
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';



const app = createApp(App).use(router).use(store);
for (let i in Icons) {
  app.component(i, Icons[i]);
}
app.use(ElementPlus, { locale }).use(router).mount("#app");
