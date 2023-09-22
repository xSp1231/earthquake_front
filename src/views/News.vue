<template>

  <div class="total" style="width: 100%;height:93vh;">
    <div id="top"></div>
    <h1>地震新闻</h1>
    <div id="box">
      <div v-html="code"></div>
      <div v-html="newdata"></div>
      <div v-html="domestic"></div>
      <div v-html="abroad"></div>
      <div v-html="dongtai"></div>
      <div v-html="data"></div>
    </div>
  </div>
</template>

<script>
//vue3 新写法

export default {
  name: "News",
  data() {
    return {
      code: "<a href='https://data.earthquake.cn/index.html' target='_blank'>地震网首页</a>",
      newdata: "<a href='https://data.earthquake.cn/datashare/report.shtml?PAGEID=zxdzall' target='_blank'>最新地震</a>",
      domestic: "<a href='https://data.earthquake.cn/datashare/report.shtml?PAGEID=qgwjall' target='_blank'>国内5级以上实时地震数据</a>",
      abroad: "<a href='https://data.earthquake.cn/datashare/report.shtml?PAGEID=qqqjall' target='_blank'>全球七级以上实时地震数据</a>",
      dongtai: "<a href='https://data.earthquake.cn/gxdt/index.html' target='_blank'>实时数据动态</a>",
      data: "<a href='https://data.earthquake.cn/dzgcsj/index.html' target='_blank'>地震科学数据</a>",
    }
  },
}
</script>

<style scoped>
#top {
  height: 50px;
}

h1 {
  border-top: 100px;
  color: #0eacf3;
}

</style>
