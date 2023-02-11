<template>
    <h3>
        <router-link active-class="active" to="/SongList">推荐歌单 ></router-link>
    </h3>
    <ul class="container">
        <li>
            <img class="first" src="@/assets/1.jpeg" alt="" />
            <img class="calendar" src="@/assets/日历.png" alt="" />
            <p class="date">{{ nowDate }}</p>
            <p>每日歌曲推荐</p>
        </li>
        <li v-for="(item, index) in list" 
            :key="index" 
            v-on:mouseover="changeActive(index)" 
            v-on:mouseout="removeActive(index)">
            <img :src="item.picUrl" alt="" />
            <img v-show="show[index]" class="play" src="@/assets/播放.png" alt="" />
            <p>{{ item.name }}</p>
        </li>
    </ul>

</template>

<script setup>
import { getRecommendedSongs } from '@/network/home'
import { ref, reactive, onMounted } from 'vue';

//定义数据
const list = reactive([]);
const date = new Date();
const nowDate = date.getDate();
const show = ref([false]);

//定义函数
//初始化图片
const initRecommendImg = async () => {
    const { data: res } = await getRecommendedSongs()
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

//生命周期
onMounted(() => {
    initRecommendImg()
});
</script>

<style scoped>
.container {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

/* ‘推荐歌单 > ’ 样式 */
a {
    text-decoration: none;
    color: black;
}

h3 {
    margin: 0 0 10px 20px;
    /* opacity: 0.8; */
}

p {
    font-size: small;
}

.first {
    opacity: 0.2;
    filter: blur(2px);
}

.calendar {
    position: absolute;
    left: 25px;
    top: 20px;
    width: 110px;
    height: 110px;
}

.date {
    position: absolute;
    left: 45px;
    top: 45px;
    font-size: 60px;
}

li {
    list-style-type: none;
    width: 160px;
    height: 160px;
    margin: 7px;
    position: relative;
}

/* 初始化图片 */
img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

img:hover {
    cursor: pointer;
}

.play {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 40px;
    height: 40px;
}
</style>