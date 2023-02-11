<template>
    <div class="swiper" v-on:mouseover="changeActive" v-on:mouseout="removeActive">
        <div class="whole">
            <div class="rollImg">
                <p class="left" v-show="show" @click="left"> 《 </p>
                <p class="right" v-show="show" @click="right"> 》 </p>
                <ul>
                    <li :ref="pics" v-for="(item, index) in banners" :key="index" :class="arr[index]">
                        <img :src="item.imageUrl" alt="" />
                    </li>
                </ul>
            </div>
        </div>
        <ul class="circleList">
            <li class="circle" v-for="(item, index) in arr" :key="index" :class=" item == 'two' ? 'red' : '' "></li>
        </ul>
    </div>
</template>


 <!-- <van-swipe class="swipe" :autoplay="3000" indicator-color="pink">
            <van-swipe-item><img src="../assets/loading.jpeg" class="bannerImg" alt="" /></van-swipe-item>
            <van-swipe-item><img src="../assets/loading.jpeg" class="bannerImg" alt="" /></van-swipe-item>
            <van-swipe-item><img src="../assets/loading.jpeg" class="bannerImg" alt="" /></van-swipe-item>
      </van-swipe> -->



<script setup>
import { ref, reactive, nextTick, onMounted, onBeforeUnmount } from "vue"
import { getbanner } from '@/network/home'

// 定义数值
const arr = ref(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']);
const timer = ref(0);          //定时器
const banners = reactive([]);  // 轮播图列表
const myRef = ref([]);         //
const show = ref(false);       //左、右按钮是否显示

// 定义方法
//轮播图就位
const initBannerImg = async () => {   
    const { data: res } = await getbanner()
    banners.push(...res.banners)
};
//鼠标移入 按钮展示  并停止轮播
const changeActive = function(){   
    show.value = true;
    clearInterval(timer.value);
}
//鼠标移出  按钮消失  轮播继续
const removeActive = function(){   
    show.value = false;
    timer.value = setInterval(() => {
        next();
    }, 3000)     //自动轮播
}
//点击查看下一张
const left = function () {    
   next()
};
//点击查看上一张
const right = function () {    
    const last = arr.value.shift()
    arr.value.push(last)
};

const pics = (el) => {
    myRef.value.push(el);
};
// console.log(myRef.value);

//播放下一张
const next = function () {    
    const last = arr.value.pop()
    arr.value.unshift(last)
};

// 生命周期
onMounted(() => {
    initBannerImg()
    // timer.value = setInterval(() => {
    //     next();
    // }, 3000)     //自动轮播
});
onBeforeUnmount(() => {
    clearInterval(timer.value);
});

</script>

<style scoped>
.swiper {
    width: 100%;
    height: 45%;
}

.whole {
    width: 60%;
    height: 75%;
    margin: 20px auto 0 auto;
}

.rollImg {
    width: 100%;
    height: 100%;
    position: relative;
}

/* 左边按钮上一张 */
.left {
    position: absolute;
    top: 80px;
    left: -120px;
    z-index: 10;
    opacity: 0.6;
    font-size: 20px;
    cursor: pointer;
}

/* 右边按钮下一张 */
.right {
    position: absolute;
    top: 80px;
    right: -120px;
    z-index: 10;
    opacity: 0.5;
    font-size: 20px;
    cursor: pointer;
}

.rollImg ul li {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    list-style-type: none;
}

img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

/* 轮播属性 */
/* 中间左边图片 */
.one {
    position: absolute;
    left: -180px;
    transform: scale(0.8);
    transition: all 0.5s ease;
    opacity: 0.7;
}

/* 正中间图片 */
.two {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    transition: all 0.5s ease;
}

/* 中间右边图片 */
.three {
    position: absolute;
    left: 180px;
    transform: scale(0.8);
    transition: all 0.5s ease;
    opacity: 0.7;
}

/* 藏在背后图片 */
.four,
.five,
.six,
.seven,
.eight {
    position: absolute;
    transform: scale(0);
    transition: all 0.5s ease;
    visibility: hidden;
}


.circleList {
    width: 150px;
    height: 20px;
    margin: 10px auto 0 auto;
    /* background-color: rgb(141, 8, 8);  */
}

.circleList li {
    list-style-type: none;
    float: left;
    width: 7px;
    height: 7px;
    margin: 4px;
    background-color: rgb(169, 170, 171);
    border-radius: 50%;
}
.circle.red {
    background-color: rgb(189, 49, 49);
}
</style>