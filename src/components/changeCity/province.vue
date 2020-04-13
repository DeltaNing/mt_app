<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      :value="province"
      title="省份"
      :show-wrapper-active="showProvinceActive"
      @showActive="showProvince"
      @changeValue="changeProvince"
    />
    <m-select
      :list="cityList"
      :value="city"
      title="城市"
      :show-wrapper-active="showCityActive"
      @showActive="showCity"
       @changeValue="changeCity"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: ["山东", "河南", "河北", "湖南", "黑龙江"],
      province: "省份",
      cityList: ["濮阳", "郑州", "上海", "北京"],
      city: "城市",
      showProvinceActive: false,
      showCityActive: false,
      searchWord: '',
      loading: false,
      searchList: ["濮阳", "郑州", "上海", "北京"],
    };
  },
  components: {
    MSelect
  },
  methods: {
    showProvince(flag) {
      this.showProvinceActive = flag;
      if (flag) {
        this.showCityActive = false;
      }
    },
    showCity(flag) {
      this.showCityActive = flag;
      if (flag) {
        this.showProvinceActive = false;
      }
    },
    changeProvince(value) {
      this.province = value;
    },
    changeCity(value) {
      this.city = value;
    },
    remoteMethod() {
        //调用接口
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>

