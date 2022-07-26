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
//test
export default {
  components: { List },
  data() {
    return {
      ListDatas: [
        
      ],
    };
  },
  mounted(){
        (async () => {

          const request = await fetch('http://182.61.29.159:3334/article/findAll?page=1&pageSize=5')
          if(request.ok){
            let {data} =await request.json();
            console.log(this.ListDatas)
            this.ListDatas = [...data,...data];
          }else{
            console.log(request.status);
          }
        })()
    

    document.addEventListener("scroll", () => {
      const List = this.$refs.List.at(-1).$el;
      if (List.getBoundingClientRect().bottom - document.documentElement.clientHeight <= 0) {
        
        (async () => {

          const request = await fetch('http://182.61.29.159:3334/article/findAll?page=1&pageSize=5')
          if(request.ok){
            let {data} =await request.json();
            this.ListDatas = [...this.ListDatas,...data];
          }else{
            console.log(request.status);
          }
        })()
      }
    });
  },
};
</script>