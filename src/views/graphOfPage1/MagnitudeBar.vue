<template>
  <div ref="mgraph" style="width: 100%;height: 280px"></div>
</template>

<script>
import * as echarts from "echarts";
import api from "../../api/index.js";

import  'echarts/theme/shine.js'

export default {
  name: "MagnitudeBar",
  data() {
    return {
    }
  },
  mounted() {
     this.getmagnitudedata().then(r=>{
       console.log("r is ",r)
       this.draw(r)
     })
  },
  methods: {
   async getmagnitudedata(){
     return await api.get("getmagnitudedata").then(res=>{
       return res.data
      })
    },
    draw(data) {
      this.myChart = echarts.init(this.$refs.mgraph,'shine');
      this.myChart.setOption( {
        title: {
          text: '各地区近十年震级展示',
          left:"left",
          textStyle:{
            color:'#3d3c3c',
            //字体大小
            fontSize:16
          }
        },
        legend: {
          data: ['最高震级', '平均震级','最低震级'],
          itemGap: 8
        },
        tooltip:{},
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 200
          },
          {
            start: 0,
            end: 200,
            handleSize: '100%',
            handleStyle: {
              color: '#ce1818',
              shadowBlur: 10,
              shadowColor: 'rgba(77,61,61,0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        xAxis: [
          {
            type: 'category',//地区名字
            data: [
              "新疆",
              "四川",
              "西藏",
              "云南",
              "青海",
              "台湾",
              "内蒙古",
              "甘肃",
              "辽宁",
              "山东",
              "河北",
              "山西",
              "广东",
              "吉林",
              "贵州",
              "宁夏",
              "黑龙江",
              "陕西",
              "广西",
              "重庆",
              "河南",
              "湖北",
              "安徽",
              "江苏",
              "浙江",
              "福建",
              "江西",
              "湖南",
              "北京",
              "海南",
              "天津",
              "上海",
              "澳门",
              "香港"
            ],
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        grid: {
          left: '5%',
          right: '5%',
          bottom: '8%',
          top: '13%',
          containLabel: true
        },
        series: [
          {
            name: '最高震级', //
            type: 'bar',
            data:data[3],
            itemStyle: {
              color: '#c95321' // 设置颜色为蓝色
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ],
            },
          },
          {
            name: '平均震级',
            type: 'bar',
            data:data[2],

            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
          },
          {
            name: '最低震级',
            type: 'bar',
            data: data[1],

            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
