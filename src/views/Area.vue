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
            <el-card class="box-card1" style="width: 100%;height:400px"> </el-card>
            <el-card class="box-card2" style="width: 100%;height:400px;margin-top: 20px"> </el-card>
          </div>
        </el-col>

        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="one" >
            <el-card class="box-card3" style="width: 100%;height:400px;"><bdmap></bdmap> </el-card>
            <el-card class="box-card4" style="width: 95%;height:400px;margin-top: 20px;margin-left: 20px;"><h3>时间序列预测曲线</h3></el-card>
          </div>
        </el-col>

        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="grid-content ep-bg-purple" >
            <el-card class="box-card5" style="width: 100%;height:800px">
             <h3>地区地震发生历史时间表</h3>
            </el-card>

          </div>
        </el-col>

      </el-row>

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
import {mapMutations} from "vuex";
export default {
   components:{
     bdmap
   },
  data() {
    return {
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        }
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
      'setLocation'
    ]),
    find() {
      console.log("input is", this.input)
      if(this.input===""){
        this.$message({
          message: '输入框未输入数据!',
          type: 'warning',
          offset: 60, // 设置偏移量为 60px 距离顶部的距离
        });
      }
      else{
        this.setLocation(this.input) //之后就可以使用vuex里面的数据
        // console.log("搜索的地点是",this.input)
        // console.log("该地点的经纬度是")
        //this.getLocation(this.input)
        // this.$message({
        //     message: '查询成功^_^',
        //     type: 'success',
        //     offset: 60, // 设置偏移量为 60px 距离顶部的距离
        //   });
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
