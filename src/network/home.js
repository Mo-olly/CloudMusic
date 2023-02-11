import { request } from "./index.js";

// 获取 banner 轮播图，type:资源类型，2为 android
export function getbanner() {
  return request({
    url: `/banner`
  })
}

// 获取 推荐歌单数据，limit：获取条数
export function getRecommendedSongs() {
  return request({
    url: `/personalized/song?limit=9`
  })
}
// 获取 推荐歌单数据，limit：获取条数
export function getRecommendedSongs1() {
  return request({
    url: `/personalized/song?limit=60`
  })
}

// 搜索歌曲
export function searchMusic(keyword,limit=30) {
  return request({
    url: `/search?keywords=${keyword}&limit=${limit}`
  })
}