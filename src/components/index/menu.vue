<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"/>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item, index) in curDetail.items">
            <h4 :key="index">{{item.title}}</h4>
            <span v-for="(subItem, i) in item.items" :key="subItem + '' + i">{{subItem}}</span>
        </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        curDetail: null,
      menuList: [
        {
          title: "美食",
          icon: "food",
          items: [
            {
              title: "美食",
              items: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "意菜汤/粥/炖菜蒙餐新疆菜",
                "其他美食",
                " 京菜",
                " 鲁菜"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          items: [
            {
              title: "外卖",
              items: [
                "美团外卖",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "意菜汤/粥/炖菜蒙餐新疆菜",
                "其他美食",
                " 京菜",
                " 鲁菜"
              ]
            }
          ]
        },
        {
          title: "酒店",
          icon: "hotel",
          items: [
            {
              title: "酒店等级",
              items: ["经济型", "舒适/三星", "高级/四星"]
            }
          ]
        },
        {
          title: "猫眼电影",
          icon: "movie",
          items: [
            {
              title: "热映电影",
              items: [
                "大黄蜂",
                "来电狂响",
                "奎迪：英雄再起",
                "蜘蛛侠：平行宇宙",
                "海王",
                "命运之夜",
                "——天之杯：恶兆之花",
                "白蛇：缘起",
                "印度暴徒"
              ]
            },
            {
              title: "热门影院",
              items: [
                "SFC上影影城",
                "万达影城",
                "大地影院",
                "百丽宫影城",
                "星美国际影城"
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
      menuEnter(item) {
          this.curDetail = item;
      },
      menuLeave() {
          let self = this;
          this.timer = setTimeout(function() {
            self.curDetail = null;
          }, 200)
      },
      detailEnter() {
          clearTimeout(this.timer);
      },
      detailLeave() {
          this.curDetail = null;
      }
  }
};
</script>
