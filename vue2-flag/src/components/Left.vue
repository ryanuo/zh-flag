<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-10-01 18:37:43
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-10-01 21:23:02
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
        <div class="" style="margin: 60px 0 0 20px">总共{{ num }}种样式</div>
        <ul class="ul-w">
          <li
            v-for="(item, index) in imgList"
            :key="'dda' + index"
            @click="selectedBorder(index + 1)"
          >
            <img :src="`picture/hat${index + 1}.png`" alt="" />
          </li>
        </ul>
        <Person></Person>
      </div>
    </transition>
  </div>
</template>

<script>
import Person from "./Person.vue";
export default {
  name: "hr-left",
  components: {Person},
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
    // 选择边框
    selectedBorder(e) {
      this.$emit("currentBorderIndex", e);
    },
  },
};
</script>

<style lang="less" scoped>
.footer-left {
  display: flex;
  color: red;
  line-height: 20px;
  justify-content: center;
}
.ul-w {
  display: flex;
  height: 75vh;
  margin: 20px 0;
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
    background-color: rgba(255, 255, 255, 0.5);
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
  background-color: rgba(255, 255, 255, 0.5);
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