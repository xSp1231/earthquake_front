<!--地震预测曲线--->
<template>
  <div  ref="predictionLine" style="width: 100%;height:400px; "></div>
</template>

<script>
import * as echarts from 'echarts';
import {mapState} from "vuex";
import  'echarts/theme/infographic'
export default {
  name: "predictionCurve",
  data(){
    return{
    }
  },
  computed:{
    ...mapState(['predictionData','searchComment']),
      predictData(){
      console.log("地震预测数据",this.predictionData)
      return this.predictionData;
   },
    pie(){
      return this.predictionData;
    }
  },
  watch: {
    predictData: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        //每次监听到数据变化 就绘制图表
       console.log("数据在变化=====================",this.predictData)
        this.draw(this.predictData,this.searchComment)
      },
      deep: true // 深度监听
    },
  },

  mounted() {
   this.draw(this.predictData,this.searchComment)
    },
  methods:{
    draw(dataen,searchName){
      //const dataen=this.predictData;
      const dateList = dataen.map(function (item) {        //const  定义常量  定义之后 不能改变
        return item[0];
      });
      const valueList = dataen.map(function (item) {
        return item[1];
      });

      this.myChart = echarts.init(this.$refs.predictionLine,'infographic');
      this.myChart.setOption({

        title: [
          {
            top: '1%',
            left: 'center',
            text: '基于ARIMA模型的震级时间序列预测曲线',
            textStyle: {
              color: '#969393' // 在这里设置标题的颜色
            },
            subtext:"------"+searchName,
            subtextStyle: {
              color: '#c91b1b',
              fontWeight: 'normal',
              fontSize: 14
            }
          }
        ],
        // color:"#49beb7",
        tooltip: {
          trigger: 'axis'
        },
        //缩放栏
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100,
            handleSize: '100%',
          }
        ],
        xAxis: [
          {
            data: dateList,
          }
        ],
        yAxis: [
          {
            gridIndex: 0
          }
        ],
        grid: [
          {
            top: '15%'
          }
        ],
        series: [
          {
            smooth: true,
            type: 'line',
            symbol:'circle',
            symbolSize:5 ,// 设置标记的大小
            itemStyle: {
             color: 'rgba(16,112,141,0.9)' ,// 设置圆圈的颜色为红色
            },
            lineStyle: {
              color: 'rgba(16,112,141,0.9)', // 设置曲线的颜色
            },
            markArea: {
              itemStyle: {
                color: 'rgba(36,147,182,0.4)',
              },
              data: [
                [
                  {
                    name: '预测数据-准确率一般',
                    xAxis: '2021-08-31'
                  },
                  {
                    xAxis: '2022-06-30'
                  }],[
                  {
                    name: '预测数据-准确率较低',
                    xAxis: '2023-08-31'
                  },
                  {
                    xAxis: '2024-06-30'
                  }
                ],
              ]
            },
            showSymbol: true,
            data: valueList,
            xAxisIndex: 0,
            yAxisIndex: 0
          }
        ]
      });
    }
  }

}
</script>

<style scoped>

</style>
