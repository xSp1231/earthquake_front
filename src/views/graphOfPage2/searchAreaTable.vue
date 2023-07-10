<template>
  <h3 style="text-align: center;color: #969393;">地区地震历史数据</h3>
  <el-table :data="tableData" height="740" style="width: 98%;margin-left:2%">
    <el-table-column fixed prop="time" label="时间" width="120" sortable />
    <el-table-column prop="position" label="地点" width="140" />
    <el-table-column prop="magnitude" label="震级" width="100" sortable />
    <el-table-column
        prop="tag"
        label="MagnitudeTag"
        width="130"
        :filters="[
        { text: '大震', value: '大震' },
        { text: '中震', value: '中震' },
        { text: '小震', value: '小震' },
      ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
            round
            :type="scope.row.tag === '小震' ? '' : scope.row.tag === '中震' ? 'warning' : 'danger'"
            disable-transitions
        >{{ scope.row.tag }}</el-tag
        >
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "dataTable",
  computed:{
   ...mapState(['searchAreaTableData']),
      tableData(){
        console.log("searchAreaData",this.searchAreaTableData)
        return this.searchAreaTableData;
      }
  },
  data(){
    return{
    }
  },
  mounted(){

  },
  methods:{
    //标签过滤方法
    filterTag(value, row) {
      return row.tag === value;
    }
  },
}
</script>

<style scoped>

</style>
