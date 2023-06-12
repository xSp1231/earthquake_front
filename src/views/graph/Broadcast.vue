<!---播报图-->
<template class="static">
  <el-row :gutter="2">
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value=injurenum>
          <template #title>
            <div style="display: inline-flex; align-items: center;color: #875df3;font-size: 13px">
              地震受伤人数
              <el-tooltip
                  effect="dark"
                  content="该省份近十年以来由地震引发的受伤数粗略统计"
                  placement="top"
              >
                <el-icon style="margin-left: 4px" :size="14">
                  <Warning/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
<!--        <div class="statistic-footer">-->
<!--          <div class="footer-item">-->
<!--            <span>than yesterday</span>-->
<!--            <span class="green">-->
<!--              24%-->
<!--              <el-icon>-->
<!--                <CaretTop/>-->
<!--              </el-icon>-->
<!--            </span>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value=deathnum>
          <template #title>
            <div style="display: inline-flex; align-items: center;color: #444444;font-size: 15px">
              地震死亡人数
              <el-tooltip
                  effect="dark"
                  content="该省份近十年以来由地震引发的死亡数粗略统计"
                  placement="top"
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
            <div style="display: inline-flex; align-items: center;color:red;font-size: medium">
              地震伤亡人数
            </div>
          </template>
        </el-statistic>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="2" style="margin-top: 0px">
    <el-col :span="24">
        <div class="areaintro" style=" display: flex;width: 100%;height: 125px;background-color: #f6f0f0;border-radius: 6px;">

          <div class="image-container"></div>

          <div class="intro">
            <h6 style="margin-bottom: 0px;margin-top: 0px;color: #6c6b6b;font-size:15px">地区地理简介:</h6>
            <p>{{intro}}</p>
          </div>

        </div>
    </el-col>
  </el-row>
</template>

<script>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
import {mapState} from "vuex";
export default {
  name: "Broadcast",
  computed: { //cpmputed也可以实现监听数据  但是为什么要使用watch呢 因为可以在watch里面使用函数
    ...mapState(['provinceintro']),
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
</script>

<style scoped>
.image-container{
  width:40%;
  background: url("../../assets/地震带earthquake.jpg") center no-repeat;
  background-size:cover;
}

.intro {
  width: 60%;
  background-color: #efeded;
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
