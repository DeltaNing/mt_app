<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left" :span="3">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col class="center" :span="15">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link v-for="(item, index) in suggestList" :key="index" :to="{name: 'goods', params: {name:item}}">
            {{item}}
          </router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: ["上海迪士尼度假区", "东方明珠", "广播电视塔"],
      searchList: ["火锅", "火锅 重庆", "九宫格火锅"],
      suggestList: [
        "上海迪士尼度假区",
        "东方明珠",
        "广播电视塔",
        "上海外滩星空错觉艺术馆",
        "上海欢乐谷",
        "上海野生动物园"
      ]
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur: function() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>
