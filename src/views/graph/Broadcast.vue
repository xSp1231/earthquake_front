<!---播报图-->
<template class="static">
  <el-row :gutter="2">
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="9850">
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
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <el-icon>
                <CaretTop/>
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="69370">
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
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <el-icon>
                <CaretBottom/>
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="statistic-card">
        <el-statistic :value="7200" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center;color:red;font-size: medium">
              地震伤亡人数
            </div>
          </template>
        </el-statistic>
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
export default {
  name: "Broadcast",
}
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
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
