<template>
  <div ref="scatterGraph" style="width: 100%;height: 280px"></div>
</template>


<script>
import * as echarts from "echarts";
import api from "../../api/index.js";
export default {
  name: "ScatterGraph",
  data() {
    return {
    }
  },
  mounted() {
    this.getScatterData().then(r=>{
      console.log("r is ",r)
      this.draw(r)
    })
  },
  methods: {
    getScatterData(){
      return api.get('getclusterdata').then(res=>{
        return res.data.data
      })
    },
    draw(data) {
      this.myChart = echarts.init(this.$refs.scatterGraph)
      this.myChart.setOption({

        title: {
          text: '震源深度-震级聚类-- K-means',
          left: "left",
          textStyle: {
            color: '#3d3c3c',
            fontSize: 15
          }
        },
        grid: {
          left: '0%',
          right: '2%',
          bottom: '3%',
          top: '11%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [
          {
            type: 'scatter',
            data: data,
            symbolSize: 6,
            itemStyle: {
              color: function (params) {
                const colors = ['red', 'blue', 'green'];
                return colors[params.data[2]];  // 根据数据的第三个值设置颜色
              }
            },
            dimensions: ['x', 'y', 'value'],
          }],
      })
    },

  }
}


</script>

<style scoped>

</style>
