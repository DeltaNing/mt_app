<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col">
            <span
              :class="{'mt-item':true, 'active': item === value}"
              v-for="(item, index) in list"
              :key="index"
              @click="changeValue(item)"
            >{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list", "title", "value", "showWrapperActive"],
  data() {
    return {};
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      this.$emit("showActive", true);
    },
    documentClick() {
      this.$emit("showActive", false);
    },
    changeValue(item) {
      this.$emit("changeValue", item);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
