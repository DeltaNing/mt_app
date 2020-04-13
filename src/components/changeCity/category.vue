<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-'+index">
            <dt>{{index}}</dt>
            <dd>
                <span v-for="city in item" :key="city.id">{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroup: {},
        }
    },
    created() {
        var data = [
            {
                "id": 59,
                "name": "成都",
                "pinyin": "chengdu",
                "acronym": "cd",
                "rank": "A",
                "firstChar": "c"
            },
            {
                "id": 60,
                "name": "濮阳",
                "pinyin": "puyang",
                "acronym": "py",
                "rank": "A",
                "firstChar": "p"
            },
            {
                "id": 61,
                "name": "郑州",
                "pinyin": "zhengzhou",
                "acronym": "zz",
                "rank": "A",
                "firstChar": "z"
            },
            {
                "id": 62,
                "name": "北京",
                "pinyin": "beijing",
                "acronym": "bj",
                "rank": "A",
                "firstChar": "b"
            },
            {
                "id": 63,
                "name": "上海",
                "pinyin": "shanghai",
                "acronym": "sh",
                "rank": "A",
                "firstChar": "s"
            },
            {
                "id": 64,
                "name": "重庆",
                "pinyin": "chongqing",
                "acronym": "cq",
                "rank": "A",
                "firstChar": "c"
            },
        ];

        var obj = {};
        data.forEach((item, index) => {
            if(!obj[item.firstChar.toUpperCase()]){
                obj[item.firstChar.toUpperCase()] = [];
            }
            obj[item.firstChar.toUpperCase()].push(item);
        })
        console.log(obj);
        this.cityGroup = obj;
    },
    methods: {

    }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/categroy.scss';
</style>

