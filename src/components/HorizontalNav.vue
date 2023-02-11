<template>
    <ul class="nav">
        <li><router-link active-class="active" to="/ContentList">个性推荐</router-link></li>
        <li><router-link active-class="active" to="/SongList">歌单</router-link></li>
        <li>主播电台</li>
        <li>排行榜</li>
        <li>歌手</li>
        <li>最新音乐</li>
    </ul>
    <ul class="search">
        <li><input type="text" placeholder="搜索"></li>
        <li><img src="../assets/设置.png" alt="" /></li>
        <li><img src="../assets/邮件.png" alt="" /></li>
        <li><img src="../assets/皮肤.png" alt="" /></li>
        <li><img src="../assets/重叠.png" alt="" /></li>
    </ul>
</template>

<script setup>

</script>

<style scoped>
/* 导航栏——搜索框以左 */
.nav {
    height: 10%;
    width: 60%;
    float: left;
    background-color: #f6f0f0;
    font-family: '微软雅黑';
    font-size: 14px;
}
.nav li {
    float: left;
    list-style-type: none;
    margin: 18px;
    padding-top: 6px;
    opacity: 60%;
}
a {
    text-decoration: none;
    color: black;
}
.active {
    color: rgb(189, 49, 49);
}
/* 导航栏——搜索框以右 */
.search {
    float: left;
    width: 40%;
    height: 10%;
    background-color: #f6f0f0;
}
.search li {
    padding-top: 8px;
    float: left;
    margin: 15px 8px;
    list-style-type: none;
}
.search img {
    /* margin-top: 10px; */
    width: 17px;
    height: 17px;
}
/* 搜索框 */
input {
    
    background-image: url(../assets/搜索.png);
    background-size: 15px,15px;
    background-repeat: no-repeat;
    background-position: 10px;

    margin-left: 30px;
    padding-left: 30px;
    height: 25px;
    width:150px;
    border-style: none;
    border-radius: 20px;
    outline: none;   /* 点击文本框 边框样式去除 */
    opacity: 0.7;
}
</style>