<template>
  <div class="area" style="width: 100%;height: 94%;background-color: #ffffff;margin-top:1.6%">
    <div class="searchArea" style="width: 100%;height:42px;background-color: #ffffff;">
      <div class="search" style="width: 40%;margin-left:2%;display: flex">
        <el-input
            v-model="input"
            placeholder="请选择要查询的地区^_^"
            class="input-with-select"
        >
          <template #prepend>
            <el-button  :icon="Search" circle @click="find() "/>
          </template>
          <template #append>
            <el-select    v-model="input" class="m-2" placeholder="区域选择" size="large" style="width: 125px">
              <el-option style="color: #f55454" v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"/>
            </el-select>
          </template>
        </el-input>

      </div>
    </div>
    <div class="areagraph" style="width: 100%;height: 100%;">
      <el-row :gutter="15">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="grid-content ep-bg-purple" style="background-color: #fcfcfc;">
            <el-card class="box-card1" style="width: 100%;height:400px"><double-bar-graph></double-bar-graph></el-card>
            <el-card class="box-card2" style="width: 100%;height:400px;margin-top: 20px"><double-pie-graph></double-pie-graph> </el-card>
          </div>
        </el-col>

        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="one" >
            <el-card class="box-card3" style="width: 100%;height:400px;"><bdmap></bdmap> </el-card>
            <el-card class="box-card4" style="width: 100%;height:400px;margin-top: 20px;"><prediction-curve></prediction-curve></el-card>
          </div>
        </el-col>

        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="grid-content ep-bg-purple" >
            <el-card class="box-card5" style="width: 100%;height:800px">
              <dataTable></dataTable>
            </el-card>

          </div>
        </el-col>

      </el-row>
<!----gytest---->
    </div>
  </div>
</template>

<script>
import {
  Search, Delete,
  Edit,
  Message,
  Star,
} from '@element-plus/icons-vue'
import bdmap from "./graphOfPage2/areaMap.vue";
import dataTable from "./graphOfPage2/searchAreaTable.vue";
import predictionCurve from "./graphOfPage2/predictionCurve.vue";
import doublePieGraph from "./graphOfPage2/doublePieGraph.vue";
import doubleBarGraph from "./graphOfPage2/doubleBarGraph.vue";
import {mapMutations} from "vuex";
import DoubleBarGraph from "./graphOfPage2/doubleBarGraph.vue";
export default {
   components:{
     DoubleBarGraph,
     bdmap,
     dataTable,
     predictionCurve,
     doublePieGraph
   },
  data() {
    return {
      options: [
        {
          value: '新疆皮山县',
          label: '新疆皮山县',
        },
        {
          value: '新疆阿克陶',
          label: '新疆阿克陶',
        },
        {
          value: '云南盈江',
          label: '云南盈江',
        },
        {
          value: '新疆库车市',
          label: '新疆库车市',
        },
        {
          value: '四川芦山县',
          label: '四川芦山县',
        },
        {
          value: '新疆于田县',
          label: '新疆于田县',
        },
        {
          value: '台湾花莲海域',
          label: '台湾花莲海域',
        },
        {
          value: '新疆叶城市',
          label: '新疆叶城市',
        },
        {
          value: '西藏改则县',
          label: '西藏改则县',
        },
        {
          value: '四川长宁',
          label: '四川长宁',
        },{
          value: '玛多',
          label: '玛多',
        },{
          value: '西藏尼玛县',
          label: '西藏尼玛县',
        },{
          value: '云南景谷',
          label: '云南景谷',
        },{
          value: '四川九寨沟',
          label: '四川九寨沟',
        },{
          value: '四川汶川',
          label: '四川汶川',
        },{
          value: '内蒙古准格尔旗',
          label: '内蒙古准格尔旗',
        },
        {
          value: '山东莱州市',
          label: '山东莱州市',
        },
        {
          value: '吉林长春市',
          label: '吉林长春市',
        },
        {
          value: '黑龙江齐齐哈尔',
          label: '黑龙江齐齐哈尔',
        },

      ],
      input: "",
      Search, //组件也需要返回
      Delete,
      Edit,
      Message,
      Star,
    }
  },
  methods: {
    ...mapMutations([
      'setLocation',"getSearchAreaTableData","getPredictionData","getDoubleBarData"
    ]),
    find() {
      console.log("input is", this.input)
      if(this.input===""){
        this.$message({
          message: '输入框未输入数据!',
          type: 'warning',
          offset: 0, // 设置偏移量为 60px 距离顶部的距离
        });
      }
      else{
        this.getSearchAreaTableData(this.input)
        this.setLocation(this.input) //之后就可以使用vuex里面的数据
        this.getPredictionData(this.input)
        this.getDoubleBarData(this.input) // 得到两个坐标轴的数据
    }
    }
  }
}

</script>
<style scoped>
.el-card
{
  --el-card-padding:0px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.one {
  --el-card-padding: 00px;
}

</style>
