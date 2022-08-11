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
        
      ],
      page:1,
      lock:false,
    };
  },
  mounted(){
        
        (async () => {
          const request = await fetch(`http://182.61.29.159:3334/article/findAll?page=${this.page}&pageSize=10`)
          if(request.ok){
            let {data} =await request.json();
            console.log(this.ListDatas)
            this.ListDatas = data;
          }else{
            console.log(request.status);
          }
          this.page ++;
        })()
    
        
    
    document.addEventListener("scroll", () => {
      if(this.lock)return;
      this.lock = true;
      if(!this?.$refs?.List?.at(-1)?.$el)return;//防止元素未加载完成触发
      const List = this.$refs.List.at(-1).$el;
      if (List.getBoundingClientRect().bottom - document.documentElement.clientHeight <= 50) {
        (async () => {

          const request = await fetch(`http://182.61.29.159:3334/article/findAll?page=${this.page}&pageSize=5`)
          if(request.ok){
            let {data} =await request.json();
            this.ListDatas = [...this.ListDatas,...data];
          }else{
            console.log(request.status);
          }
          this.page ++;
          this.lock = false;
        })()
      }else{
        this.lock = false;
      }
    });
  },
};
</script>