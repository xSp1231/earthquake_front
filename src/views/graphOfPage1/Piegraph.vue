<!---各省次数前八--->
<template>
  <div ref="pie" style="width: 430px; height: 320px;"></div>
</template>

<script>
import * as echarts from "echarts";
import {mapState} from "vuex";

import  'echarts/theme/infographic.js'

export default {
  name: "Piegraph",
  data(){
    return{
    } ;
  },
  computed: {
    ...mapState(['provinceintro']),
    piedata() { //各个身份每一年的地震次数
      return this.provinceintro['piedata']
    },
    areaname() { //各个身份每一年的地震次数
      return "—— "+this.provinceintro['areaname']
    },
  },
  mounted(){
    this.drawpie()
  },
  //监听饼图数据的变化 变化就更新
  watch: {
    piedata: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        this.updatepiegraph()
      },
      deep: true // 深度监听
    },
  },
  methods:{
    drawpie() {
      this.myChart = echarts.init(this.$refs.pie,"infographic");
      this.myChart.setOption( {
        title: {
          text: '各省份地震次数前八地区(近十年)',
          subtext:this.areaname,
          subtextStyle:{
            color:'#fd0000',
            fontSize:18,
            fontWeight:500
          },
          left:"center",
          textStyle:{
            color:'#3d3c3c',
            fontSize:16
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          //设置位置   文字在右，图例在左（图例纵向排列在图表右侧的时候）
          align:'left',
          x: 340, // 'center' | 'left' | {number},
          y: 'center', // 'center' | 'bottom' | {number}
          icon: "circle",//图例样式
          orient: 'vertical',
          itemHeight: 17,
        },
        color: [
          "#087aab",
          "rgba(76,122,196,0.34)",
          "#11a4af",
          "#9fe1c7",
          "#cccdd0",
          "#a44040",
          "rgba(239,129,95,0.8)",
          "#c45656",
        ],
        series: [
          {
            name: '地区地震次数',
            type: 'pie',
            //radius:'60%',
            radius: [25,80],
            center: ['40%', '50%'],//设置饼图位置
            roseType: 'area',
            data:this.piedata,
            itemStyle: {
              borderRadius: 5
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(120,204,213,0.5)',
                borderRadius: 10,
              }
            }
          }
        ]
      })
    },
    updatepiegraph() {
      this.myChart.setOption({
        title:{
          subtext:this.areaname
        },
        series: [{
          data: this.piedata // 使用新数据更新图表 也可以使用 this.numdata
        }],
      });
    },
  }


}
</script>

<style scoped>

</style>
