<!--
 * @Description: 
 * @Author: Harry
 * @Date: 2021-10-01 09:35:28
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-10-01 21:28:43
 * @LastEditors: Harry
-->
<template>
  <div>
    <!-- 遮罩层 -->
    <div class="wrapper">
      <div class="operation-header">
        <div class="h-title">
          <Left @currentBorderIndex="getCurrentBorderIndex" :num="imgLists.length" :imgList="imgLists"></Left>
        </div>
      </div>
      <div class="operation-box" v-if="!isResults">
        <a class="prev" @click="changeHatPre"></a>
        <div class="operation-img">
          <div class="cropper-content" id="content">
            <canvas id="imageEffectCanvas" ref="canvas"></canvas>
          </div>
        </div>
        <a class="next" @click="changeHatNext"></a>
      </div>
      <img id="export" alt="国庆专属头像" :src="exportImage" v-if="isResults" />
      <div class="operation-btns">
        <a class="o-btn1" :class="isShow ? 'hide' : 'show'">
          <input
            class="o-btn1"
            id="upload"
            type="file"
            @change="viewer"
            style="opacity: 0"
          />
        </a>
        <a class="o-btn2" @click="exportFunc" :class="isShow ? 'show' : 'hide'">
        </a>
      </div>
      <div class="operation-done">
        <img src="picture/act-done-happy.png" alt="" class="act-done-happy" />
      </div>
      <div align="center" style="font-weight:550;"><a style="color:#000" href="https://u.mr90.top" target="_blank">
      ©2021-Harry</a></div>
    </div>
  </div>
</template>

<script>
import Left from "./Left.vue";

import { fabric } from "fabric";
import canvasInit from "../assets/js/canvas-init.js";
let imageEffectCanvas = "";
fabric.Object.prototype.set(canvasInit);
export default {
  name: "hr-main",
  components: { Left },
  data() {
    return {
      imgLists: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      currentPicIndex: 1,
      isShow: false,
      isResults: false,
      exportImage: "",
    };
  },
  mounted() {
    this.initImageEffectCanvas();
  },
  methods: {
    // 初始化画布
    initImageEffectCanvas() {
      imageEffectCanvas = new fabric.Canvas("imageEffectCanvas", {
        width: "152", //画布宽度
        height: "152", //画布高度
        backgroundColor: "#ffffff", //画布默认背景颜色
      });
      imageEffectCanvas.preserveObjectStacking = true; //选中对象不会到最高层（解决选中图片层级提升覆盖文字等其它元素问题）
    },
    // 获取当前索引值
    getCurrentBorderIndex(e){
      this.currentPicIndex = e
      this.addBorder()
    },
    // 点击上传图片
    viewer(e) {
      let imgUrl = this.getObjectURL(e.target.files[0]);
      this.toggerBackHandle(imgUrl);
    },
    getObjectURL(file) {
      let url = null;
      // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    // 改变图片
    changeHatNext() {
      let index = this.currentPicIndex;
      if (index >= 0 && index < this.imgLists.length) {
        this.currentPicIndex += 1;
        this.addBorder();
      } else {
        console.log("暂时没有了");
      }
    },
    changeHatPre() {
      let index = this.currentPicIndex;
      if (index <= this.imgLists.length && index > 1) {
        this.currentPicIndex -= 1;
        this.addBorder();
      } else {
        console.log("暂时没有了");
      }
    },
    addBorder() {
      let index = this.currentPicIndex;
      let Shape;
      // (解决跨域图片加载)
      const image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.src = `picture/hat${index}.png`;
      imageEffectCanvas._objects = []; // 情空
      image.onload = function () {
        Shape = new fabric.Image(image, {
          // 通过scale来设置图片大小，这里设置和画布一样大
          scaleX: imageEffectCanvas.width / image.width,
          scaleY: imageEffectCanvas.height / image.height,
          selectable: false,
        });
        Shape.setControlVisible("bl", false);
        Shape.setControlVisible("tr", false);
        Shape.setControlVisible("tl", false);
        Shape.setControlVisible("mr", false);
        Shape.setControlVisible("mt", false);
        imageEffectCanvas.add(Shape);
        // setBackgroundImage 方法设置画布背景
      };
      this.isShow = true;
    },
    exportFunc() {
      this.exportImage = imageEffectCanvas.toDataURL({
        width: 200,
        height: 200,
      });
      alert("长按图片保存或分享");
      this.isResults = true;
    },
    // 设置画布的背景色
    toggerBackHandle(src) {
      let Shape;
      // (解决跨域图片加载)
      const image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.src = src;
      image.onload = function () {
        Shape = new fabric.Image(image, {
          // 通过scale来设置图片大小，这里设置和画布一样大
          scaleX: imageEffectCanvas.width / image.width,
          scaleY: imageEffectCanvas.height / image.height,
        });
        imageEffectCanvas.setBackgroundImage(
          Shape,
          imageEffectCanvas.renderAll.bind(imageEffectCanvas)
        ); // setBackgroundImage 方法设置画布背景
        imageEffectCanvas.renderAll(); //重新渲染画布
      };
      this.addBorder();
    },
  },
};
</script>

<style lang="less" scoped>
</style>