<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :span="18">
        <div class="grid-content1 ep-bg-purple"/>
        <div class="first" style="display: flex; margin-top: 30px;margin-left: 10px">
          <div class="broadcast" style="width: 40%;height:530px;background-color: #b3b5f5">
            <el-card style="width: 100%;height: 40%" shadow="always">
              <broadcast></broadcast>
            </el-card>
            <!--饼图 各省地震次数前八-->
            <el-card style="width: 100%;height: 60%" shadow="always">
              <piegraph></piegraph>
            </el-card>
          </div>
          <div class="graph" style="width: 60%;height:500px; margin-left: 20px; ">
            <el-card style="width: 100%;height: 100%" shadow="always">
              <mapgraph></mapgraph>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content1 ep-bg-purple"/>
        <div class="second" >
          <div style="width: 100%;height:260px;">
            <el-card style="width: 100%;height: 100%;">
          <wordcloud></wordcloud>
            </el-card>
          </div>
          <div style="width: 100%;height:300px;margin-top: 10px;">
            <el-card style="width: 100%;height: 100%">
         <barline></barline>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>


    <!---下半部分-->
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content2 ep-bg-purple"/>
        <div style="width: 100%;height:300px;margin-left: 10px">
          <el-card style="width: 100%;height: 100%">
            散点图
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content2 ep-bg-purple"/>
        <div style="width: 100%;height:300px;">
          <el-card style="width: 100%;height: 100%">
            柱状图
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import wordcloud from "./graph/wordcloud.vue";
import barline from "./graph/Barline.vue";
import mapgraph from "./graph/Mapgraph.vue"
import broadcast from "./graph/Broadcast.vue";
import piegraph from "./graph/Piegraph.vue";
export default {
  components:{
    wordcloud,
    barline,
    mapgraph,
    broadcast,
    piegraph
  },
  data() {
    return {
      name: "dsads"
    }
  },
  methods: {}
}
</script>

<style scoped>
.home{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom:0;
}


.grid-content1 {
  border-radius: 4px;
  min-height: 56px;
}

.grid-content2 {
  border-radius: 4px;
  min-height: 20px;
}
</style>
