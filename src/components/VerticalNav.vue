<template>
    <div class="user">
        <img class="img" src="../assets/登录.png" alt="" />
        <img class="loginImg" @click="loginIn" src="../assets/右箭头.png" alt="" />
    </div>
    <div v-show="show" class="loginIn">
        <div><img src="../assets/网易云音乐.jpeg" /></div>
        <hr />
        <input type="text" placeholder="请输入账号">
        <input type="text" placeholder="请输入密码">
        <button>登陆</button>
        <button>注册</button>
    </div>
    <div class="list">
        <div><img src="../assets/发现音乐.png" alt="" /><router-link to="/noLogin">发现音乐</router-link></div>
        <div><img src="../assets/私人FM.png" alt="" /><router-link  to="/noLogin">私人FM</router-link></div>
        <div><img src="../assets/视频.png" alt="" /><router-link to="/noLogin">视频</router-link></div>
        <div><img src="../assets/关注.png" alt="" /><router-link to="/noLogin">关注</router-link></div>
        <p>我的音乐</p>
        <div><img src="../assets/音乐.png" alt="" /><router-link to="/noLogin">iTunes音乐</router-link></div>
        <div><img src="../assets/下载.png" alt="" /><router-link to="/noLogin">下载管理</router-link></div>
        <div><img src="../assets/最近播放.png" alt="" /><router-link to="/noLogin">最近播放</router-link></div>
        <div><img src="../assets/云盘.png" alt="" /><router-link to="/noLogin">我的音乐云盘</router-link></div>
        <div><img src="../assets/收藏.png" alt="" /><router-link to="/noLogin">我的收藏</router-link></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(false);
const loginIn = function() {
    show.value = !show.value
};

</script>

<style scoped>
.user {
    padding: 10px;
    width: 100%;
    height: 10%;
}
.img {
    margin-left: 20px;
    width: 35px;
    height: 35px;
    opacity: 70%;
}
.loginImg {
    margin: 10px;
    width: 20px;
    height: 20px;
    opacity: 30%;
}
/* 登陆、注册框 */
.loginIn {
    position: absolute;
    width: 320px;
    height: 400px;
    background-color: white;
    z-index: 20;
    margin: 80px 0 0 130px;
}
.loginIn img {
    margin: 35px 0 30px 55px;
}
.loginIn input {
    text-decoration: none;
    outline: none;
    padding: 10px;
    margin: 30px 0 0 30px;
    border-radius: 20px;
    width: 260px;
}
hr {
    opacity: 0.3;
}
.loginIn button {
    padding: 5px;
    width: 80px;
    text-align: center;
    text-decoration: none;
    margin: 50px 0 0 50px;
    background-color: #eae7e7;
    border: 1px solid rgb(120, 18, 18);
}
.loginIn button:hover {
    background-color: rgb(177, 69, 69);
    cursor: pointer;
}


.list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 80%;
    width: 100%;
    font-size: small;
}

.list div {
    padding: 5px;
    height: 35px;
}

.list img {
    margin-left: 20px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
}

.list p {
    margin: 25px 0 10px 18px;
    opacity: 40%;
}

.list div:hover {
    background-color: #ccc8c8;
}

a {
    text-decoration: none;
    color: black;
}
.active {
    color: rgb(189, 49, 49);
}
</style>