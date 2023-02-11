<template>
<div class="all">
    <div class="top">
        <div class="image"></div>
        <h3>精品歌单</h3>
    </div>
    <button>全部歌单 ></button>
    <ul>
        <li v-for="(item, index) in list" 
            :key="index"
            v-on:mouseover="changeActive(index)" 
            v-on:mouseout="removeActive(index)">
            <img :src="item.picUrl" alt="" />
            <img v-show="show[index]" class="play" src="@/assets/播放.png" alt="" />
            <p>{{item.name}}</p>
        </li>
    </ul>
</div>
</template>

<script setup>
import { getRecommendedSongs1 } from '@/network/home'
import { ref, reactive, onMounted } from 'vue';

//定义数据
const list = reactive([]);
const show = ref([false]);

//定义函数
//初始化图片
const initRecommendImg = async () => {
    const { data: res } = await getRecommendedSongs1()
    list.push(...res.result)
};
//鼠标移入显示播放按钮
const changeActive = function(key){   
    show.value[key] = true;
};
//鼠标移出移除播放按钮
const removeActive = function(key){   
    show.value[key] = false;
};

// 生命周期
onMounted(() => {
    initRecommendImg()
});
</script>

<style scoped>
.all {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
}
/* 顶部 */
.top {
    margin: 20px auto 0 auto;
    padding: 20px;
    width: 90%;
    height: 180px;
    border-radius: 5px;
    background-color: rgb(217, 242, 234);
}
.image {
    width: 140px;
    height:140px;
    border-radius: 5px;
    background-image: url(@/assets/2.jpeg);
    background-size: 140px;
    float: left;
}
h3 {
    float: left;
    margin: 30px 30px;
}

/* 全部歌单按钮 */
button {
    margin: 20px 0 10px 50px;
    border: 1px solid rgb(206, 200, 200);
    background-color: rgb(241, 237, 237);
    text-decoration: none;
    border-radius: 10%;
    padding: 7px 15px;
    text-align: center;
    cursor: pointer;
}

/* 歌单列表 */
ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
li {
    list-style-type: none;
    width: 180px;
    height: 180px;
    margin: 10px 10px 30px 10px;
    position: relative;
}
img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
}
img:hover {
    cursor: pointer;
}
p {
    font-size: small;
}
.play {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 40px;
    height: 40px;
}
</style>