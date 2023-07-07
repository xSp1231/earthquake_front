<template>
  <div class="map-container">
    <baidu-map
        class="bm-view"
        :center=point
        :zoom="10"
        :scroll-wheel-zoom="true"
        :auto-resize="true"
        :default-type="defaultType"
        ref="bmap"
    >
      <bm-map-type :map-types="['BMAP_HYBRID_MAP' ]"></bm-map-type>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-marker :position=point :dragging="true" @click="infoWindowOpen">
        <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">{{ markPlaceInfo }}</bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  data() {
    return {
      show: true,
      markPlaceInfo: "标记点信息",
      point: {lng: 117.404, lat: 39.915},
      defaultType: 'BMAP_HYBRID_MAP',
    }
  },

  mounted(){
   this.getLocation()
  },
  computed: { //cpmputed也可以实现监听数据  但是为什么要使用watch呢 因为可以在watch里面使用函数
    ...mapState(['searchComment']),
    address() { //各个身份每一年的地震次数
      console.log("当前地址为",this.searchComment)
      return this.searchComment;
    }
  },
  watch: {
    address: {
      handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
        //每次监听到数据变化 就执行这个函数 将标记点的位置变化
        this.getLocation()
      },
      deep: true // 深度监听
    },
  },

  methods: {
    infoWindowClose() {
      this.show = false
    },
    infoWindowOpen() {
      this.show = true
    },
    async getLocation() {
      try {
        const point = await this.getPointByAddress(this.address);
        this.point = point;
        this.$message({
          message: '查询成功^_^',
          type: 'success',
          offset: 60, // 设置偏移量为 60px 距离顶部的距离
        });
        console.log('经度：', point.lng);
        console.log('纬度：', point.lat);
      } catch (error) {
        console.log("错误")
        console.error(error);
        this.$message({
          message: '查询失败,请输入合法地名',
          type: 'error',
          offset: 60, // 设置偏移量为 60px 距离顶部的距离
        });
      }
    },
    // 根据地址名称获取经纬度坐标
    getPointByAddress(address) {
      // 创建地理编码实例
      const myGeo = new BMap.Geocoder();

      return new Promise((resolve, reject) => {
        // 对地址进行地理编码
        myGeo.getPoint(address, (point) => {
          if (point) {
            // 地理编码成功，返回经纬度坐标对象
            resolve(point);
          } else {
            // 地理编码失败
            reject('地理编码失败');
          }
        }, '全国');
      });
    },
  },
}

</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}

.bm-view {
  width: 100%;
  height: 400px;
}

</style>
