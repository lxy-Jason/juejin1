import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import "font-awesome/css/font-awesome.min.css";
import * as Icons from "@element-plus/icons-vue";
import router from "./routers";
import VMdEditor from '@kangc/v-md-editor';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
// 引入使用主题的样式
import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

import { createPinia } from "pinia";
const pinia = createPinia()
import hljs from 'highlight.js';
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);
for (let i in Icons) {
  app.component(i, Icons[i]);
}
app.use(ElementPlus, { locale }).use(router).use(VMdPreviewHtml).use(VMdEditor).use(pinia).mount("#app");
