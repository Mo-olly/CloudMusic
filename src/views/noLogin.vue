<template>
    <div class="top">
        <img src="@/assets/网易云音乐.jpeg" />
        <div class="note">
            请先登录
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.top {
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 100%;
}
.top img {
    margin-top: 150px;
    width: 100%;
    opacity: 0.5;
    filter: blur(6px);
}
.note {
    position: absolute;
    top: 10px;
    left: 300px;
    width: 150px;
    height: 40px;
    padding-top: 5px;
    background-color: rgb(203, 49, 49);
    border-radius: 30px;
    color: white;
    text-align: center;
    font-size: 20px;
    animation-name: eject;
    animation-duration: 1s;
    animation-iteration-count:infinite;
}
@keyframes eject {
    0% {
        background-color: rgb(203, 49, 49);
        top: 10px;
        left: 300px;
    }
    100% {
        background-color: rgb(203, 49, 49);
        top: 200px;
        left: 300px;
    }
}
</style>