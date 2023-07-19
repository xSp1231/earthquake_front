<template>
  <div class="shell" id="shell">
    <div class="timeline">
      <div v-for="(item, index) in items"
           :key="index"
           class="item"
           :data-text="item.title">
        <div class="content">
          <img class="img" :src="item.image" />
          <h2 class="content-title">{{ item.year }}</h2>
          <p class="content-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery';

export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          title: '《舞！舞！舞！》',
          year: '2001',
          image: '../src/img/01.jpg',
          description: '你要做一个不动声色的大人了。不准情绪化，不准偷偷想念，不准回头看。去过自己另外的生活。你要听话，不是所有的鱼都会生活在同一片海里。'
        },
        {
          title: '《你的孤独，虽败犹荣》',
          year: '2022',
          image: '../src/img/02.jpg',
          description: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
        },
        {
          title: '《你的孤独，虽败犹荣》',
          year: '2022',
          image: '../src/img/03.jpg',
          description: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
        },
        {
          title: '《你的孤独，虽败犹荣》',
          year: '2022',
          image: '../src/img/04.jpg',
          description: '如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。'
        }
      ]
    };
  },
  mounted() {
    // 将第一个时间轴项目激活，并设置时间轴背景图片为第一个项目的图片
    this.$nextTick(() => {
      const firstItem = document.querySelector('.item');
      firstItem.classList.add('item--active');
      document.getElementById('shell').style.backgroundImage = `url(${this.items[0].image})`;
    });
    // 绑定滚动事件
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动事件
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const itemLength = this.items.length;
      const pos = $(window).scrollTop();
      let max, min;
      for (let i = 0; i < itemLength; i++) {
        console.log(i);
        const item = $('.item').eq(i);
        // 获取当前时间轴项目的最小和最大高度
        min = item.offset().top;
        max = item.offset().top + item.outerHeight();
        if (i === itemLength - 2 && pos > min + item.outerHeight() / 2) {
          console.log("i === itemLength - 2 && pos > min + item.outerHeight() / 2");
          // 如果滚动到最后一个项目，并且超过了当前项目高度的一半，
          // 则将最后一个项目设置为激活状态，并设置背景图片为最后一个项目的图片
          this.activeIndex = itemLength - 1;
          $('#shell').css('background-image', `url(${this.items[itemLength - 1].image})`);
          item.addClass('item--active').siblings().removeClass('item--active');
        } else if (pos <= max - 10 && pos >= min) {
          // 如果当前滚动位置在当前项目的最小和最大高度之间，
          // 则将当前项目设置为激活状态，并设置背景图片为当前项目的图片
          console.log(i);
          console.log("pos <= max - 10 && pos >= min");
          console.log(this.items[i].image);
          this.activeIndex = i;
          $('#shell').css('background-image', `url(${this.items[i].image})`);
          item.addClass('item--active').siblings().removeClass('item--active');
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#shell {
  width: 100%;
  position: relative;
  padding: 80px 0;
  background-attachment: fixed;
  background-size: cover;
}

#shell:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 99, 99, 0.8);
  content: "";
}

.title {
  color: #fff;
  font-size: 46px;
  font-weight: normal;
  margin: 0;
}

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}

.content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
}

.content-desc {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  line-height: 25px;
}

.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}

.item {
  padding: 40px 0;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}

.item:before {
  /* 设置在伪元素before中的内容  */
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
  font: 900 20px '';
  letter-spacing: 5px;
}

.item:nth-child(even) {
  align-self: flex-end;
}

.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}

.item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}

.item--active .content-title {
  margin: -50px 0 20px 0;
}

.img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.footer {
  padding: 95px 0;
  text-align: center;
}

.footer a {
  color: #999;
  display: inline-block;
}

@media only screen and (max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }

  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }

  .item:last-child {
    padding-bottom: 40px;
  }
}

@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
</style>

