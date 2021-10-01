<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-10-01 18:37:43
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-10-01 19:50:25
 * @LastEditors: Harry
-->
<template>
  <div class="left">
    <div class="mask_w" v-show="isshow" @click="changeD"></div>
    <img
      @click="changeD"
      class="img-2"
      src="picture/cate.png"
      alt=""
      srcset=""
    />
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div class="left-w" v-show="isshow">
        <div class="" style="margin: 60px 0 0 20px">一共有{{ num }}个边框</div>
        <ul class="ul-w">
          <li v-for="(item, index) in imgList" :key="'dda' + index">
            <img :src="`picture/hat${index + 1}.png`" alt="" />
          </li>
        </ul>
        <a target="_blank" href="https://github.com/rr210/zh-flag" class="footer-left">
          <svg
            width="20"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Left",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    imgList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isshow: false,
    };
  },
  methods: {
    changeD() {
      this.isshow = !this.isshow;
    },
  },
};
</script>

<style lang="less" scoped>
.footer-left{
  display: flex;
  color: red;
  line-height: 20px;
  justify-content: center;
}
.ul-w {
  display: flex;
  height: 70vh;
  margin: 20px 0 50px 0;
  padding: 20px 0 20px 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  overflow: auto;
  li {
    width: 40%;
    height: 80px;
    margin: 10px;
    background-color: rgb(248, 248, 248);
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
}
.left {
  width: 100%;
}
.mask_w {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.left-w {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background-color: #fff;
  z-index: 2;
}
.img-2 {
  width: 37px;
  height: 37px;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 20px;
  z-index: 3;
}
</style>