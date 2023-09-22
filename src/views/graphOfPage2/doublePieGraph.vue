<!--震源震级嵌套环形图--->
<template>
  <div style="width: 100%;height:400px;" ref="doublePieGraph"></div>
</template>

<script>
import * as echarts from "echarts";
import {mapState} from "vuex";
import  'echarts/theme/shine'

export default {
  name: "doublePieGraph",
  data(){
    return {
    }
  },
  computed:{
    ...mapState(['magnitudeLegend','magnitudePieData','depthLegend','depthPieData']),

      mPieData(){
        console.log("得到震级饼图数据")
        console.log(this.magnitudePieData)
        return this.magnitudePieData
      },
      dPieData(){
        console.log("得到震深饼图数据")
        console.log(this.depthPieData)
        return this.depthPieData
     }
  },
  watch: {
    mPieData: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        console.log("震级数据变化")
        this.drawDoublePie(this.mPieData,this.dPieData);
      },
      deep: true // 深度监听
    },
    dPieData: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        this.drawDoublePie(this.mPieData,this.dPieData)
      },
      deep: true // 深度监听
    },
  },
  mounted() {
    this.drawDoublePie(this.mPieData,this.dPieData)
  },
  methods:{
    drawDoublePie(magnitudePieData,depthPieData){
      this.myChart = echarts.init(this.$refs.doublePieGraph,'shine');
      this.myChart.setOption({
        tooltip:{},
        title: {
          top:10,
          text: '地区震级-震深嵌套饼图',
          subtext: '内层为柱状图中所点击类型的震源深度 外层为柱状图中所点击类型的震级大小分布',
          subtextStyle: {
            color: '#999',
            fontSize: 12
          },
          left: 'left',
          textStyle: {
            color: '#545252',
            fontSize: 17
          }
        },
        // color:[
        //   "#eafff7",
        //   "#afffdf",
        //   "#49beb7",
        //   "#fc345c",
        //   "#f12b6b",
        //   "#ff467e",
        //   "#fd94b4",
        //   "#f6c7c7",
        // ],
        // legend:[{
        //   type: 'scroll',
        //   itemWidth: 16, // 设置每个图例的宽度
        //   itemHeight: 16, // 设置每个图例的高度
        //   icon: "circle",//图例样式
        //   top:30,
        //   left:10,
        //   },
        //   {
        //
        //     bottom:20,
        //     left:10,
        //   }
        //   ],
        series: [
          {
            name: 'deepth',//震源深度  点击柱状图的一个地方 显示震源的数量分布 饼图 {震源深度,数量}  //实现饼图与柱状图的交互
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '32%'], //调整圆心的位置
            center: ['50%', '55%'], // 调整嵌套饼图的位置
            label: {
              position: 'inner',
              fontSize: 11
            },
            itemStyle: {
              borderRadius: 3,
              borderColor: '#fff',
              borderWidth: 1
            },
            labelLine: {
              show: false
            },
             data:depthPieData
          },
          {
            name: 'magnitude',//震级  //震级大小  点击柱状图的一个地方 显示震级的数量分布 饼图 {震级,数量}
            type: 'pie',
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            radius: ['40%', '60%'],
            center: ['50%', '55%'], // 调整嵌套饼图的位置
            data:magnitudePieData
          }
        ]
      })
    }
  }


}
</script>
<style scoped>

</style>
