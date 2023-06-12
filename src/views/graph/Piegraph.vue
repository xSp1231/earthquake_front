<!---各省次数前八--->
<template>
  <div ref="pie" style="width: 430px; height: 320px;"></div>
</template>

<script>
import * as echarts from "echarts";
import {mapState} from "vuex";

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
    }
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
      this.myChart = echarts.init(this.$refs.pie);
      this.myChart.setOption( {
        title: {
          text: '各省份地震前八地区(近十年)',
          left:"center",
          textStyle:{
            color:'#3d3c3c',
            //字体大小
            fontSize:16
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          //设置位置   文字在右，图例在左（图例纵向排列在图表右侧的时候）
          align:'left',
          x: 330, // 'center' | 'left' | {number},
          y: 'center', // 'center' | 'bottom' | {number}
          icon: "circle",//图例样式
          orient: 'vertical',
          itemHeight: 15,
        },
       // color: ['#9cd5a0', '#afeae1', '#7fb5d3', '#37aede', '#f9c956', '#75bedc'],
        series: [
          {
            name: '地区地震次数',
            type: 'pie',
            //radius:'60%',
            radius: [50,80],
            center: ['40%', '50%'],//设置饼图位置
            data:this.piedata,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    updatepiegraph() {
      this.myChart.setOption({
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
