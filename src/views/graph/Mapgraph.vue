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
    var myChart = echarts.init(this.$refs.mapContainer);
    echarts.registerMap('china', china);
    var option = {
      title: {
        text: '地震发生点聚类图（2013-2022）',
        subtext: '数据来源-国家地震数据中心',
      },
      tooltip: {},
      geo: {
        center: [105.5, 32.5],
        map: 'china',
        roam: true,
        width: 500,
        height: 470,
      },
      series: [
        {
          geoIndex:0,
          type: "map",
          map: 'china', // 引入地图数据
          data: [
            {
              name: "北京市",
              value: 21,
            },
            {
              name: "天津市",
              value: 12,
            },
            {
              name: "上海市",
              value: 99,
            },
            {
              name: "重庆市",
              value: 98,
            },
            {
              name: "河北省",
              value: 99,
            },
            {
              name: "河南省",
              value: 29,
            },
            {
              name: "云南省",
              value: 79,
            },
            {
              name: "辽宁省",
              value: 38,
            },
            {
              name: "黑龙江省",
              value: 4,
            },
            {
              name: "湖南省",
              value: 32,
            },
            {
              name: "安徽省",
              value: 84,
            },
            {
              name: "山东省",
              value: 72,
            },
            {
              name: "新疆维吾尔自治区",
              value: 99,
            },
            {
              name: "江苏省",
              value: 70,
            },
            {
              name: "浙江省",
              value: 85,
            },
            {
              name: "江西省",
              value: 11,
            },
            {
              name: "湖北省",
              value: 62,
            },
            {
              name: "广西壮族自治区",
              value: 13,
            },
            {
              name: "甘肃省",
              value: 74,
            },
            {
              name: "山西省",
              value: 78,
            },
            {
              name: "内蒙古自治区",
              value: 74,
            },
            {
              name: "陕西省",
              value: 40,
            },
            {
              name: "吉林省",
              value: 9,
            },
            {
              name: "福建省",
              value: 90,
            },
            {
              name: "贵州省",
              value: 57,
            },
            {
              name: "广东省",
              value: 6,
            },
            {
              name: "青海省",
              value: 52,
            },
            {
              name: "西藏自治区",
              value: 10,
            },
            {
              name: "四川省",
              value: 98,
            },
            {
              name: "宁夏回族自治区",
              value: 11,
            },
            {
              name: "海南省",
              value: 25,
            },
            {
              name: "台湾省",
              value: 86,
            },
            {
              name: "香港特别行政区",
              value: 8,
            },
            {
              name: "澳门特别行政区",
              value: 50,
            },
          ],
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          data: [
            {
              name: '北京', value: [116.46, 39.92,90], itemStyle: {color: '#F00'}
            },
            {
              name: '上海', value: [121.48, 31.22,999], itemStyle: {color: '#F00'}
            },
            {
              name: '深圳', value: [114.07, 22.62,99911], itemStyle: {color: '#F00'}
            },
          ],
          symbol: 'circle',
          symbolSize: 10,
        }
      ],
      visualMap: {
        left: "right",
        min: 0,
        max: 100,
        inRange: {
          color: [
            "#313695",
            "#4575b4",
            "#74add1",
            "#abd9e9",
            "#e0f3f8",
            "#ffffbf",
            "#fee090",
            "#fdae61",
            "#f46d43",
            "#d73027",
            "#a50026",
          ],
        },
        text: ["High", "Low"],
        calculable: true,
      },
    };
    myChart.setOption(option);
  },
};
</script>

<style scoped>
.graphmap {
  width: 100%;
  height: 400px;
}
</style>
