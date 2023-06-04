<!---知乎-echarts绘制中国地图-->
<template>
  <div ref="mapContainer" class="graphmap"></div>
</template>

<script>
import * as echarts from "echarts";
import china from '../../data/chinamap.json'

export default {
  name: "mapgraph",
  props: {},
  mounted() {
    this.drawmap()
  },
  methods: {
    drawmap() {
      this.myChart = echarts.init(this.$refs.mapContainer);
      echarts.registerMap('china', china);
      this.myChart.setOption({
        title: {
          text: '地震发生点聚类图（2013-2022）',
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
                name: "北京市",
                value: 20,
              },
              {
                name: "天津市",
                value: 12,
              },
              {
                name: "上海市",
                value: 1,
              },
              {
                name: "重庆市",
                value: 125,
              },
              {
                name: "河北省",
                value: 258,
              },
              {
                name: "河南省",
                value: 123,
              },
              {
                name: "云南省",
                value: 3038,
              },
              {
                name: "辽宁省",
                value: 471,
              },
              {
                name: "黑龙江省",
                value: 138,
              },
              {
                name: "湖南省",
                value: 26,
              },
              {
                name: "安徽省",
                value: 93,
              },
              {
                name: "山东省",
                value: 319,
              },
              {
                name: "新疆维吾尔自治区",
                value: 7779,
              },
              {
                name: "江苏省",
                value: 94,
              },
              {
                name: "浙江省",
                value: 90,
              },
              {
                name: "江西省",
                value: 47,
              },
              {
                name: "湖北省",
                value: 106,
              },
              {
                name: "广西壮族自治区",
                value: 127,
              },
              {
                name: "甘肃省",
                value: 597,
              },
              {
                name: "山西省",
                value: 244,
              },
              {
                name: "内蒙古自治区",
                value: 852,
              },
              {
                name: "陕西省",
                value: 125,
              },
              {
                name: "吉林省",
                value: 9,
              },
              {
                name: "福建省",
                value: 84,
              },
              {
                name: "贵州省",
                value: 145,
              },
              {
                name: "广东省",
                value: 225,
              },
              {
                name: "青海省",
                value: 2156,
              },
              {
                name: "西藏自治区",
                value: 3494,
              },
              {
                name: "四川",
                value: 4770,
              },
              {
                name: "宁夏回族自治区",
                value: 142,
              },
              {
                name: "海南省",
                value: 16,
              },
              {
                name: "台湾省",
                value: 1526,
              },
              {
                name: "香港特别行政区",
                value: 0,
              },
              {
                name: "澳门特别行政区",
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
            // 原始配色
            // color: [
            //   "#313695",
            //   "#4575b4",
            //   "#74add1",
            //   "#abd9e9",
            //   "#e0f3f8",
            //   "#ffffbf",
            //   "#fee090",
            //   "#fdae61",
            //   "#f46d43",
            //   "#d73027",
            //   "#a50026",
            // ],
            color: [
              "#ffe5db",
              "#ff9985",
              "#f57567",
              "#e64546",
              "#b80909",
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
       console.log("显示的内容为",params.data.name)
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
