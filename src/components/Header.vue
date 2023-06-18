<template>
  <div class="topbar">
    <div class="nav">
      <el-menu
          :default-active="activeIndex"
          @select="handleSelect"
          class="el-menu-demo"
          style="width: 100% ;height: 45px"
          mode="horizontal"
      >
        <el-menu-item @click="clickmenu(it)" v-for="it in noChildren" :key="it.name" :index="it.name" >
          <el-icon>
            <component :is="it.icon"/>
          </el-icon>
          <span>{{ it.label }}</span>
        </el-menu-item>

        <el-sub-menu @click="clickmenu(it)" v-for="it in hasChildren" :key="it.name" :index="it.name"
                     style="width: 120px;background-color: #dbf5f5">
          <template #title>
            <el-icon>
              <component :is="it.icon"/>
            </el-icon>
            {{ it.name }}
          </template>
          <el-menu-item @click="clickmenu(subit)" v-for="subit in it.children" :key="subit.name" :index="subit.name">
            <el-icon>
              <component :is="subit.icon"/>
            </el-icon>
            <span>{{ subit.label }}</span>
          </el-menu-item>
        </el-sub-menu>

      </el-menu>
    </div>
    <div class="intro">
      <div class="systitle" style="width: 30%">
        <h4 style=" position:relative; margin: 7px;left: -20%;width: 200px;font-size:larger;color: #949393">
          中国地震数据可视化</h4>
      </div>
      <div class="systime" style="width: 62%;display: flex">
        <h4 style=" position:relative;margin-top: 12px;width: 30px;left: 59%;color: #949393">
          <el-icon size="larger">
            <Calendar/>
          </el-icon>
        </h4>
        <h4 style=" position:relative;margin-top: 10px;width: 200px;left: 55%;color: #949393">{{ newTime }}</h4>
      </div>
      <div class="syslogo" style="width: 8% ;display: flex">
        <div><el-icon  @click="fullScreen" size="25px" style="margin-top: 40%; color: #b3b3b4" ><Rank /></el-icon></div>
        <div><img class="picture" src="../assets/地震带earthquake.jpg"></div><!--引入图片--->

      </div>
    </div>
  </div>

</template>

<script>
import screenfull from 'screenfull'
export default {

  components(){
    },
  data() {
    return{
      isFullscreen: false,
      newTime: "",
      activeIndex: '1',
      a: [],
      b: [],
      menudata: [//菜单栏里面的数据
        {
          path: "/main/home",
          name: "home",
          label: "地震总体概览",
          icon: "HomeFilled",
        },
        {
          path: "/main/area",
          name: "area",
          label: "地区可视化分析",
          icon: "Histogram",
        },
        {
          path: "/main/history",
          name: "history",
          label: "历史时间线",
          icon: "Share",
        },
        {
          label: "更多",
          name: "more",
          icon: "Menu",
          children: [
            {
              path: "/main/news",
              name: "news",
              label: "地震新闻网",
              icon: "Document",
            },
            {
              path: "/main/video",
              name: "video",
              label: "视频",
              icon: "VideoPlay",
            },
            {
              path: "/main/team",
              name: "team",
              label: "关于我们",
              icon: "Avatar",
            },
          ]
        },
      ]
    }
  },
  methods: {
    fullScreen() {
      // if (screenfull.isEnabled && !screenfull.isFullscreen) {
      //   screenfull.request();
      // }
      //screenfull.isEnabled  此方法返回布尔值，判断当前能不能进入全屏
      if (!screenfull.isEnabled) {
        return false
      }
      //screenfull.toggle 此方法是执行全屏化操作。如果已是全屏状态，则退出全屏

      screenfull.toggle()

    },
    clickmenu(item) {
      console.log("点击的item is ", item)
      if (item.path != null) {
        this.$router.push(item.path)
      }
    },
    handleSelect(index) {
      this.activeIndex = index
      // 处理用户选择菜单项的行为
    },
    getNowTime() {
      var date = new Date();
      var time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + this.addZero(date.getMinutes()) + ':' + this.addZero(date.getSeconds());
      this.newTime = time;
    },
    addZero(s) {
      return s < 10 ? ('0' + s) : s;
    },
  },
  mounted() {
    console.log("tags is", this.tags)
    this.getNowTime();
    clearInterval(myTimeDisplay);
    var myTimeDisplay = setInterval(() => {
      this.getNowTime();
    }, 1000)
  },
  computed: {
    noChildren() {
      this.a = this.menudata.filter(item => !item.children)
      console.log("a is ", this.a)
      return this.menudata.filter(item => !item.children)//无子页面
    },
    hasChildren() {
      this.b = this.menudata.filter(item => item.children)
      console.log("b is ", this.b)
      return this.menudata.filter(item => item.children)//有子页面
    },
  }


}
</script>

<style scoped>
.topbar {
  display: flex;
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 0px;
  height: 45px;
}

.nav {
  position: relative;
  background-color: aqua;
  width: 48%;
}

.intro {
  display: flex;
  position: relative;
  background-color: white;
  height: 45px;
  width: 55%;
}

.picture {
  height: 43px;
  width: 43px;
  border-radius: 50%;
}
</style>
