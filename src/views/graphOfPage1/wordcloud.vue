<!---词云图---coded by another computer--->
<template>
    <div ref="wordcloud" class="wordcloud">
    </div>
</template>

 <script>
 import * as echarts from 'echarts';
 import 'echarts-wordcloud';
 import {mapMutations} from 'vuex'
 import  'echarts/theme/infographic.js'
 export default {
   name:"wordcloud",
   data() {
     return {
       wordList:[
         {
           name: "新疆",
           value: 7779
         },
         {
           name: "四川",
           value: 4770
         },
         {
           name: "西藏",
           value: 3494
         },
         {
           name: "云南",
           value: 3038
         },
         {
           name: "青海",
           value: 2156
         },
         {
           name: "台湾",
           value: 1526
         },
         {
           name: "内蒙古",
           value: 852
         },
         {
           name: "甘肃",
           value: 597
         },
         {
           name: "辽宁",
           value: 471
         },
         {
           name: "山东",
           value: 319
         },
         {
           name: "河北",
           value: 258
         },
         {
           name: "山西",
           value: 244
         },
         {
           name: "广东",
           value: 225
         },
         {
           name: "吉林",
           value: 157
         },
         {
           name: "贵州",
           value: 145
         },{
           name: "宁夏",
           value: 142
         },{
           name: "黑龙江",
           value: 138
         },{
           name: "陕西",
           value: 125
         },{
           name: "广西",
           value: 127
         },{
           name: "重庆",
           value: 125
         },{
           name: "河南",
           value: 123
         },{
           name: "湖北",
           value: 106
         },{
           name: "安徽",
           value: 93
         },{
           name: "江苏",
           value: 94
         },{
           name: "浙江",
           value: 90
         },{
           name: "福建",
           value: 84
         },{
           name: "江西",
           value: 47
         },{
           name: "湖南",
           value: 26
         },{
           name: "北京",
           value: 20
         },{
           name: "海南",
           value: 16
         },{
           name: "天津",
           value: 12
         },{
           name: "上海",
           value: 1
         }
       ]
     }
   },
   mounted(){
     this.initchart();
   },
   methods:{
     ...mapMutations([
       'getdatabyprovince'
     ]),
     initchart(){
       this.myChart = echarts.init(this.$refs.wordcloud);
       this.myChart.setOption({
         tooltip:{
           trigger:"item"
         },
         series: [
           {
             type: "wordCloud",
             //用来调整词之间的距离
             gridSize: 10,
             sizeRange: [15, 60],
             rotationRange: [0, 30],
             textStyle: {
                 color: function() {
                   return (
                       "rgb(" +
                       Math.round(Math.random() * 160) +
                       ", " +
                       Math.round(Math.random() * 160) +
                       ", " +
                       Math.round(Math.random() * 160) +
                       ")"
                   );
                 },
             },
             top: 5,
             right: 10,
             bottom: 0,
             width:"100%",
             height:"80%",
             data: this.wordList
           }
         ],
       })
       this.myChart.on('click', (params) => {
         console.log("点击词云",params)
         this.getdatabyprovince(params.data.name)
       });
     }
   }
 }
 </script>

 <style scoped>
 .wordcloud{
   width:100%;
   height:280px;
   margin:auto;
 }
</style>
