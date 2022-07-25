<template>
  <div class="container" @click="scrollHandle">
    <List
      v-for="(ListData, index) in ListDatas"
      :data="ListData"
      :key="index"
      ref="List"
    ></List>
  </div>
</template>

<script>
import List from "@/views/Home/component/List.vue";

export default {
  components: { List },
  data() {
    return {
      ListDatas: [
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
        {
          name: "小智",
          time: new Date().toLocaleString(),
          title: "标题",
          content: "内容",
        },
      ],
    };
  },
  created() {
    document.addEventListener("scroll", () => {
      const List = this.$refs.List.at(-1).$el;
      // console.log(List);
      if (List.getBoundingClientRect().bottom - document.documentElement.clientHeight <= 0) {
        // console.log(
        //   List.getBoundingClientRect().bottom -
        //     document.documentElement.clientHeight
        // );
        this.ListDatas = [...this.ListDatas, ...this.ListDatas];
      }
    });
  },
};
</script>