<!---多y轴 --->
<!---搜索一个地区 呈现出该地区的多重柱状图（强弱中类型的数量）  点击柱状图(强度类型+数据类型（深度 还是震级）) 饼图---->
<template>
<div style="width: 100%;height:400px;" ref="doubleBarGraph"></div>
</template>

<script>
import * as echarts from "echarts";
import {mapState} from "vuex";
import {mapMutations} from "vuex";

export default {
  name: "doubleBarGraph",
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['doubleBarMagnitude','doubleBarDepth','searchComment']),
    mData(){
     return this.doubleBarMagnitude
    },
    dData(){//震源数据
      console.log("computed函数得到的值")
      return this.doubleBarDepth
    }
  },
  watch: {
    mData: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        console.log("双轴图数据在变化=====================",this.mData)
        this.drawDoubleBars(this.mData,this.dData)
      },
      deep: true // 深度监听
    },
  },
  mounted(){
    this.drawDoubleBars(this.mData,this.dData)
  },
  methods:{
   ...mapMutations(['getLegendAndPieData']),
    drawDoubleBars(mData,dData){
      const colors = ['#5da7da', 'rgba(105,222,142,0.86)', '#EE6666'];
      this.myChart = echarts.init(this.$refs.doubleBarGraph);
      this.myChart.setOption({
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        grid: {
          top:'15%',
          right: '30%'
        },
        legend: {
          data: ['震级', '震源深度']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['弱类型', '中类型', '强类型']
          }
        ],
        yAxis: [//设置坐标轴的样式
          {
            type: 'value',
            name: '震级',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}次'
            }
          },
          {
            type: 'value',
            name: '震源深度',
            position: 'right',
            alignTicks: true,
            offset: 50,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value}次'
            }
          },
        ],
        series: [//设置数据
          {
            name: '震级',
            type: 'bar',
            yAxisIndex: 0,
            data:mData,
          },
          {
            name: '震源深度',
            type: 'bar',
            yAxisIndex: 1, //对应的Y坐标轴
            data:dData,
          }
        ],
    })
      this.myChart.off('click'); // 移除之前绑定的 click 事件
      this.myChart.on('click', (params) => {
        params.name=params.name.replace("类型","")
        //componentindex为0说明为震级  1 说明为震源深度
        if(params.componentIndex===0){ //之后看是说明类型 强 弱 中 最后发送请求 获取弱类型的震级数据
          let kindInfo=params.name+"震级"
          console.log("需要的地名为",this.searchComment);
          console.log("需要的类型为",kindInfo);
          let dict={"areaname":this.searchComment,"kind":kindInfo}
          this.getLegendAndPieData(dict) //地区  + 类型
        }
        else if(params.componentIndex===1){////之后看是说明震源深度类型 强 弱 中 最后发送请求 获取弱类型的震源数据
          let kindInfo=params.name+"震深"
          let dict={"areaname":this.searchComment,"kind":kindInfo}
          this.getLegendAndPieData(dict)
        }
      });
   }
  }

}
</script>

<style scoped>

</style>
