<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
    <el-button type="success" @click="change()">to home</el-button>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import News from "./News.vue";

export default {
  components: {News},
  mounted() {
    this.draw()
  },
  data(){
    return{
      name:"namexsp"
    }
  },
  methods: {
      change(){
        this.$router.push("home") //路径
      },
    draw() {
      const myChart = echarts.init(this.$refs.chart);
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
