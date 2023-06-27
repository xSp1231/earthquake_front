<!---知乎-echarts绘制中国地图-->
<template>
  <div ref="mapContainer" class="graphmap"></div>
</template>

<script>
import * as echarts from "echarts";
import china from '../../data/chinamap.json'
import api from "../../api/index.js";
import {mapMutations} from "vuex";

export default {
  name: "mapgraph",
  props: {},
  mounted() {
    this.drawmap()
  },
  methods: {
    ...mapMutations([
      'getdatabyarea'
    ]),
    drawmap() {
      this.myChart = echarts.init(this.$refs.mapContainer);
      echarts.registerMap('china', china);
      this.myChart.setOption({
        title: {
          text: '地震发生次数地区聚类图（2013-2022）',
          subtext: '数据来源-国家地震数据中心',
        },
        tooltip: {
          formatter: function (params) {
           // console.log("点击的params is ", params.data)
            return params.data.name + '近十年地震次数统计为:' + '<br>' + params.data.value;
          }
        },
        geo: {
          center: [105.5, 32.5],
          map: 'china',
          roam: true,
          width: 508,
          height: 478,
            emphasis: {
              itemStyle: {
                areaColor: '#e8e554',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
        },
        series: [
          {
            geoIndex: 0,
            type: "map",
            map: 'china', // 引入地图数据
            data: [
              {
                name: "北京",
                value: 20,
              },
              {
                name: "天津",
                value: 12,
              },
              {
                name: "上海",
                value: 1,
              },
              {
                name: "重庆",
                value: 125,
              },
              {
                name: "河北",
                value: 258,
              },
              {
                name: "河南",
                value: 123,
              },
              {
                name: "云南",
                value: 3038,
              },
              {
                name: "辽宁",
                value: 471,
              },
              {
                name: "黑龙江",
                value: 138,
              },
              {
                name: "湖南",
                value: 26,
              },
              {
                name: "安徽",
                value: 93,
              },
              {
                name: "山东",
                value: 319,
              },
              {
                name: "新疆",
                value: 7779,
              },
              {
                name: "江苏",
                value: 94,
              },
              {
                name: "浙江",
                value: 90,
              },
              {
                name: "江西",
                value: 47,
              },
              {
                name: "湖北",
                value: 106,
              },
              {
                name: "广西",
                value: 127,
              },
              {
                name: "甘肃",
                value: 597,
              },
              {
                name: "山西",
                value: 244,
              },
              {
                name: "内蒙古",
                value: 852,
              },
              {
                name: "陕西",
                value: 125,
              },
              {
                name: "吉林",
                value: 9,
              },
              {
                name: "福建",
                value: 84,
              },
              {
                name: "贵州",
                value: 145,
              },
              {
                name: "广东",
                value: 225,
              },
              {
                name: "青海",
                value: 2156,
              },
              {
                name: "西藏",
                value: 3494,
              },
              {
                name: "四川",
                value: 4770,
              },
              {
                name: "宁夏",
                value: 142,
              },
              {
                name: "海南",
                value: 16,
              },
              {
                name: "台湾",
                value: 1526,
              },
              {
                name: "香港",
                value: 0,
              },
              {
                name: "澳门",
                value: 0,
              },
            ],
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
              {
                name: '北京', value: [116.46, 39.92, 90], itemStyle: {color: '#F00'}
              },
              {
                name: '上海', value: [121.48, 31.22, 999], itemStyle: {color: '#F00'}
              },
              {
                name: '深圳', value: [114.07, 22.62, 99911], itemStyle: {color: '#F00'}
              },
            ],
            symbol: 'circle',
            symbolSize: 10,
          },
        ],
        visualMap: {
          left: "right",
          min: 0,
          max: 8000,
          inRange: {

            color: [
              "#ffe5db",
              "#ff9985",
              "#f57567",
              "#e64546",
              "#b80909",

              // "#c9c6c6",
              // "#86c5b3",
              // "#e0b37b",
              // "#A98BB3",
              // "#7a9f7e",


              // "#9edde8",
              //  "#74cce0",
              //  "#50b0ef",
              //  "#2854a1",
              //  "#0453e5",
            ],
          },
          text: ["High", "Low"],
          calculable: true,
        },
      })
      this.myChart.on('click', (params) => {
       console.log("点击的地区为",params.data.name)
        this.getdatabyarea(params.data.name)
      });
    }
  }
};
</script>

<style scoped>
.graphmap {
  width: 100%;
  height: 400px;
}
</style>
