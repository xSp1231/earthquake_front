<!---播报图-->
<template class="static">
  <el-backtop :bottom="100" >
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </el-backtop>
  <el-row :gutter="2">
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value=injurenum>
          <template #title>
            <div style="display: inline-flex; align-items: center;color: #5c2dde;font-size: 15px">
              地震受伤人数
              <el-tooltip
                  effect="dark"
                  content="该省份近十年以来由地震引发的受伤数粗略统计"
                  placement="right-end"
              >
                <el-icon style="margin-left: 4px" :size="14">
                  <Warning/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value=deathnum>
          <template #title>
            <div style="display: inline-flex; align-items: center;color: #101010;font-size: 16px">
              地震死亡人数
              <el-tooltip
                  effect="dark"
                  content="该省份近十年以来由地震引发的死亡数粗略统计"
                  placement="right-end"
              >
                <el-icon style="margin-left: 4px" :size="14">
                  <Warning/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value=totalnum title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center;color:#ff0000;font-size: 16px">
              地震伤亡人数
            </div>
          </template>
        </el-statistic>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="2" style="margin-top: 0px">
    <el-col :span="24">
        <div class="areaintro" style=" display: flex;width: 100%;height: 128px;border-radius: 6px;">

          <div class="image-container" v-bind:style="{ 'background-image': 'url(' + image_path+ ')' }"  ></div>

          <div class="intro">
            <h6 style="color: #797575;font-size:15px;">地区地理简介:</h6>
            <p>{{intro}}</p>
          </div>

        </div>
    </el-col>
  </el-row>
</template>

<script>

import {mapState} from "vuex";
export default {
  name: "Broadcast",
  data(){
    return{
    }
  },
  computed: { //cpmputed也可以实现监听数据  但是为什么要使用watch呢 因为可以在watch里面使用函数
    ...mapState(['provinceintro']),
    image_path(){
      return "http://127.0.0.1:8000/media/"+this.provinceintro['img']
    },
    injurenum() { //各个身份每一年的地震次数
      return this.provinceintro['injure']
    },
    deathnum(){ //各个身份每一年的地震次数
      return this.provinceintro['death']
    },
    totalnum() { //各个身份每一年的地震次数
      return this.provinceintro['total']
    },
    intro() { //各个身份每一年的地震次数
      return this.provinceintro['intro']
    },
  },
}
//"../../assets/地震带earthquake.jpg"
</script>

<style scoped>


.image-container{
  border-radius: 6px;
  width:50%;
  background-size:cover;
  background-position: center;
}

.intro {
  margin-left: 8px;
  width: 50%;
  background-color: rgba(192, 77, 16, 0.09);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(72, 53, 53, 0.1);
  font-family: Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.5;
  position: relative;
}

.intro::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 15px;
  background-color: #cec9c8;
  z-index: -1;
}

.intro p {
  margin: 0;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.statistic-card {
  height: 60%;
  padding: 2px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}
</style>
