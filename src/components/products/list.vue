<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="(item, index) in nav"
        :key="index"
        :class="{'s-nav-active': item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import Item from "./item.vue";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "默认排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最高",
          active: false
        },
        {
          key: "s-sale",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评分最高",
          active: false
        }
      ],
      productList: [
        {
          image: "https://p1.meituan.net/hotel/d97d7e3ed58100ae50ea48538d9d8c8986385.jpg@220w_125h_1e_1c",

          title: "火鸡老店",

          type: "food",

          score: 4.1,

          commentNum: 0,

          comment: [
            {
              username: "xxxx",

              evalaute: "好吃"
            }
          ],

          tab: ["火锅", "沙河"],

          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",

          avgPrice: 64,

          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",

              price: 909,

              counterPrice: 1150,

              saleNum: 0,

              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  components: {
    Item
  }
};
</script>
<style lang="scss">
</style>
