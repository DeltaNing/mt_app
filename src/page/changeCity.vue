<template>
  <div class="page-changeCity">
    <el-row>
      <m-province/>
    </el-row>
    <el-row>
      <hot-city title="热门城市：" :list="hotCityList"/>
    </el-row>
    <el-row>
      <hot-city title="最近搜索：" :list="recentCityList"/>
    </el-row>
    <el-row>
        <category />
    </el-row>
  </div>
</template>
<script>
import MProvince from "@/components/changeCity/province";
import HotCity from "@/components/changeCity/hot";
import Category from "@/components/changeCity/category";
export default {
  data() {
    return {
      hotCityList: ["濮阳", "郑州", "上海", "北京"],
      recentCityList: ["濮阳", "郑州", "上海", "北京"]
    };
  },
  components: {
    MProvince,
    HotCity,
    Category
  }
};
</script>
