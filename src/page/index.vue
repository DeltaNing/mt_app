<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic :nav="istyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic :nav="youhui"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import Artistic from "@/components/index/artistic.vue";
export default {
  data() {
    return {
      istyle: {
        title: "有格调",
        class: "istyle",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "约会聚餐"
          },
          {
            tab: "spa",
            text: "丽人SPA"
          },
          {
            tab: "movie",
            text: "电影演出"
          },
          {
            tab: "travel",
            text: "品质出游"
          }
        ]
      },
      youhui: {
        title: "狠优惠",
        class: "youhui",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "约会聚餐"
          },
          {
            tab: "spa",
            text: "丽人SPA"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    Artistic
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
