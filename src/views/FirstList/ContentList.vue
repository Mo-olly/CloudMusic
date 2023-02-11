<template>
<div class="content">
    <SwiperList />
    <SongRecommend />
    <SoleList />
    <NewestList />
    <MvRecommend />
    <RadioAnchor />

</div>
</template>

<script setup>
    import SwiperList from './SwiperList.vue';
    import SongRecommend from './SongRecommend.vue';
    import SoleList from './SoleList.vue';
    import NewestList from './NewestList.vue';
    import MvRecommend from './MvRecommend.vue';
    import RadioAnchor from './RadioAnchor.vue';
</script>

<style scoped>
.content {
    height: 90%;
    width: 100%;
    overflow-y: scroll;
}
</style>