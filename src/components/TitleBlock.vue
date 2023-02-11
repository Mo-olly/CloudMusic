<template>
    <div class="block">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
        <img class="back" @click="back" src="../assets/后退.png" alt="" />
        <img class="go" @click="go" src="../assets/前进.png" alt="" />
    </div>
</template>

<script setup>
//定义方法
const back = function(){
    history.back()
};
const go = function(){
    history.forward()
};
</script>

<style scoped>
.block {
    height: 10%;
    width: 100%;
    background-color: #ece6e6;
}
.red {
    float: left;
    margin: 12px 4px 12px 8px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: rgb(243, 74, 74);
}
.yellow {
    float: left;
    margin: 12px 4px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: rgb(255, 187, 61);
}
.green {
    float: left;
    margin: 12px 4px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: green;
}
.back {
    float: left;
    margin-top: 30px;
    margin-left: 80px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.go {
    float: left;
    margin-top: 30px;
    margin-left: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.back:hover,
.go:hover {
    background-color: #ddd9d9;
}
</style>