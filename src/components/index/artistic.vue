<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, i) in nav.list"
        :key="i"
        :class="{active : kind === item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="price-symbol">¥</span>
              <span class="current-price">{{item.price}}</span>
              <span class="units">/起</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      list: {
        all: [
          {
            image:
              "//p1.meituan.net/tdchotel/7d24bc9272de2075d98b09fb8fdaedbb528179.png@368w_208h_1e_1c",
            url: "",
            title: "上海威斯汀大饭店",
            subTitle: "上海威斯汀大饭店",
            price: 1015
          },
          {
            image:
              "//p1.meituan.net/msmerchant/45ea5bba3e7b98047d585c68975d6b37484725.jpg@368w_208h_1e_1c",
            url: "",
            title: "肉串汪",
            subTitle: "工作日午餐套餐A, 建议单人使用",
            price: 21.3
          },
          {
            image:
              "//p0.meituan.net/msmerchant/bb3e9741f50274b716c413eb4d21f32c2031694.png@368w_208h_1e_1c",
            url: "",
            title: "第六季自助餐厅",
            subTitle: "单人晚市豪华自主",
            price: 263
          }
        ],
        food: [
          {
            image:
              "//p1.meituan.net/msmerchant/45ea5bba3e7b98047d585c68975d6b37484725.jpg@368w_208h_1e_1c",
            url: "",
            title: "肉串汪",
            subTitle: "工作日午餐套餐A, 建议单人使用",
            price: 21.3
          },
          {
            image:
              "//p0.meituan.net/msmerchant/bb3e9741f50274b716c413eb4d21f32c2031694.png@368w_208h_1e_1c",
            url: "",
            title: "第六季自助餐厅",
            subTitle: "单人晚市豪华自主",
            price: 263
          },
          {
            image:
              "//p1.meituan.net/msmerchant/45ea5bba3e7b98047d585c68975d6b37484725.jpg@368w_208h_1e_1c",
            url: "",
            title: "肉串汪",
            subTitle: "工作日午餐套餐A, 建议单人使用",
            price: 21.3
          },
          {
            image:
              "//p0.meituan.net/msmerchant/bb3e9741f50274b716c413eb4d21f32c2031694.png@368w_208h_1e_1c",
            url: "",
            title: "第六季自助餐厅",
            subTitle: "单人晚市豪华自主",
            price: 263
          }
        ]
      }
    };
  },
  methods: {
    over(e) {
      let dom = e.target;
      let name = dom.tagName.toLowerCase();
      if (name !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

