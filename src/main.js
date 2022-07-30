import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import locale from "element-plus/lib/locale/lang/zh-cn";
import "font-awesome/css/font-awesome.min.css";
import * as Icons from "@element-plus/icons-vue";
import router from "./routers";

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import { createPinia } from "pinia";
const pinia = createPinia()

// highlightjs
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);
for (let i in Icons) {
  app.component(i, Icons[i]);
}
app.use(ElementPlus, { locale }).use(router).use(VMdPreview).use(pinia).mount("#app");
