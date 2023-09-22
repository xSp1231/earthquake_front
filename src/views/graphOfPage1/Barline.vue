<!--与词云图联动 展示各个省份每年的地震次数 词云图点击身份 barline图发生变化--->
<template>
  <div ref="barline" style="width: 390px; height: 300px;"></div>
</template>
<script>
import * as echarts from 'echarts';
import {mapState} from "vuex";

import  'echarts/theme/infographic'
export default {
  data(){
    return{
    }
  },
  mounted() {
    this.draw()
  },
  computed: { //cpmputed也可以实现监听数据  但是为什么要使用watch呢 因为可以在watch里面使用函数
    ...mapState(['numdata','provincename']),
    dataen() { //各个身份每一年的地震次数
      console.log("地震次数的数据")
      return this.numdata
    },
    name(){
      return this.provincename
    }
  },
  //监听饼图数据的变化 变化就更新
  watch: {
    dataen: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        //每次监听到数据变化 就绘制图表
        this.updatebarline()
      },
      deep: true // 深度监听
    },
  },
  methods: {
    draw() {
      this.myChart = echarts.init(this.$refs.barline,'infographic');
      this.myChart.setOption({
        title: {
          text: this.name+'近十年地震次数变化',
          textStyle:{
            fontWeight:30,
            fontSize:13
          }
        },
        grid: {
          left: '3%',
          right: '8%',
          bottom: '12%',
          top: '10%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ['line', 'bar'] },
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          "axisLabel":{
            interval: 0,
            rotate:0  //倾斜角度
          },
          data: [2013, 2014, 2015, 2016, 2017, 2018, 2019,2020,2021,2022]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}次'
          }
        },
        series: [
          {
            name: '地震次数',
            type: 'line',
            data: this.dataen,
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            },
            itemStyle: {
              color: "#0d72a6", //改变折线的颜色
            },
          },
        ]
      });
    },
    updatebarline() {
      this.myChart.setOption({
        series: [{
          data: this.numdata // 使用新数据更新图表 也可以使用 this.numdata
        }],
        title: {
          text: this.name+'近十年地震次数变化',
          }
      });
    },
  }
};
</script>
