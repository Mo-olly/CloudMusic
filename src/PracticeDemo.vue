<template>
  <div>
    <div style="z-index: 10" id="histogram">
      <div></div>
      <div></div>
      <div>柱状图</div>
    </div>
    <div style="margin-top: -50px" id="histogram">
      <div></div>
      <div></div>
      <div>柱状图11</div>
    </div>
  </div>

  <div class="ceshi">
    <div class="test1"></div>
    <div class="test2"></div>
  </div>

  <div ref="jiBeiDom" class="jiBei"></div>

  <div class="a">
    <button
      v-for="(item, index) in a"
      :key="index"
      :class="radio == item ? 'yes' : ''"
      @click="handle(item)"
    >
      {{ item }}
    </button>
  </div>
  <div class="content">11</div>
  <div class="one">
    <div class="two"></div>
  </div>
  <div
    ref="chart"
    style="
      height: 500px;
      width: 800px;
      border: 1px solid black;
      margin-top: 50px;
      margin-left: 100px;
    "
  ></div>
  <AllContent />
</template>

<script setup>
import AllContent from "./components/AllContent.vue";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const a = ["one", "two", "three"];
const radio = ref("one");
const handle = (value) => {
  radio.value = value;
};

const chart = ref();
// const option = reactive({})
const ups = [80, 300, 90, 140, 70, 80, 0];
const downs = [120, 300, 150, 300, 270, 0, 100];
// const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];

// 声明柱图基准宽度
// const baseWidth = 40;

// 1、计算柱图总高度
const sum = ups.map((item, index) => item + downs[index]);

// 2、声明主体柱图的同色值不同亮度的线性渐变，由于要配合菱形，
// 双色渐变的两色各占一半
const color = [
  {
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: "#54a2d3", // 青蓝
      },
      {
        offset: 0.5,
        color: "#54a2d3",
      },
      {
        offset: 0.5,
        color: "#7ed1e3", // 青绿
      },
      {
        offset: 1,
        color: "#7ed1e3",
      },
    ],
  },
  {
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: "#a3a418", // 深棕
      },
      {
        offset: 0.5,
        color: "#a3a418",
      },
      {
        offset: 0.5,
        color: "#cdbf38", // 浅棕
      },
      {
        offset: 1,
        color: "#cdbf38",
      },
    ],
  },
];

const bottomDiamond = [];
const midDiamond = [...downs];
const topDiamond = [];

// 3、计算顶部菱形和底部菱形颜色及位置
for (let i = 0; i < sum.length; i++) {
  // 总长度等于0，则什么上下菱形都不显示
  if (sum[i] <= 0) {
    bottomDiamond.push(0);
    topDiamond.push({
      value: 1,
      itemStyle: {
        borderColor: "#rgba(0,0,0,0)",
        borderWidth: 2,
        color: "#rgba(0,0,0,0)",
      },
    });
  } else {
    // ↓计算底部折角
    // 如果柱子只有上半段，则底部菱形颜色要与上段颜色相同
    if (sum[i] === ups[i]) {
      bottomDiamond.push({
        value: 1, // 底部菱形高度为1
        itemStyle: {
          normal: {
            color: color[1], // 专门设置颜色
          },
        },
      });
    } else {
      // 否则底部菱形颜色与下段颜色相同
      bottomDiamond.push(1);
    }

    // ↓计算顶部菱形
    // 如果柱子存在上半段，则顶部菱形颜色与上段相近
    if (ups[i] > 0) {
      topDiamond.push({
        value: sum[i], // 顶部菱形所属标准柱的高度为堆叠柱图总高度
        itemStyle: {
          normal: {
            borderColor: "#e9d86c", // 黄棕
            borderWidth: 2,
            color: "#e9d86c",
          },
        },
      });
    } else {
      // 如果柱子只有下半段，则顶部菱形颜色与下段相近
      topDiamond.push({
        value: sum[i],
        itemStyle: {
          normal: {
            borderColor: "#89e3ec", // 浅绿
            borderWidth: 2,
            color: "#89e3ec",
          },
        },
      });

      // 去掉中间菱形
      midDiamond[i] = "";
    }
  }
}

// const dom = document.getElementById('chart');
// const chart = echarts.init(dom);

// const option = {
//   xAxis: {
//     type: 'category',
//     data: xData
//   },
//   yAxis: {
//     type: 'value'
//   },
//   // legend: {
//   //   data: [
//   //     {
//   //       name: '已处理',
//   //       itemStyle: {
//   //         color: '#a3a418'
//   //       }
//   //     },
//   //     {
//   //       name: '未处理',
//   //       itemStyle: {
//   //         color: '#54a2d3'
//   //       }
//   //     }
//   //   ],
//   //   right: 20,
//   //   selectedMode: false // 关闭图例可点击功能，防止菱形被晾出来
//   // },
//   series: [
//     // 基础下段
//     {
//       z: 1,
//       name: '已处理',
//       type: 'bar',
//       barWidth: baseWidth,
//       stack: 'sum',
//       itemStyle: {
//         color: color[0]
//       },
//       data: downs
//     },
//     // 基础上段
//     {
//       z: 2,
//       name: '未处理',
//       type: 'bar',
//       barWidth: baseWidth,
//       stack: 'sum',
//       itemStyle: {
//         color: color[1]
//       },
//       data: ups
//     },
//     // 底部菱形，用于产生底座处的折线效果
//     {
//       z: 3,
//       name: 'all',
//       type: 'pictorialBar',
//       data: [1],
//       symbol: 'diamond',
//       symbolOffset: ['0%', '50%'], // 下移50%，产生底部填角
//       symbolSize: [baseWidth, 10], // 上下菱形的尺寸保持一致
//       itemStyle: {
//         color: color[0] // 颜色与下段柱保持一致
//       },
//       tooltip: {
//         show: false
//       }
//     },
//     // 中间连接处菱形，用于产生上下段连接处的折线效果
//     // {
//     //   z: 4,
//     //   name: 'all',
//     //   type: 'pictorialBar',
//     //   data: midDiamond,
//     //   symbol: 'diamond',
//     //   symbolPosition: 'end',
//     //   symbolOffset: ['0%', '-50%'],
//     //   symbolSize: [baseWidth, 10],
//     //   itemStyle: {
//     //     normal: {
//     //       color: color[1]
//     //     }
//     //   }
//     // },
//     // 顶部菱形
//     {
//       z: 5,
//       name: 'all',
//       type: 'pictorialBar',
//       data: topDiamond,
//       symbol: 'diamond',
//       symbolPosition: 'end',
//       symbolOffset: ['0%', '-65%'],
//       symbolSize: [baseWidth - 4, (10 * (baseWidth - 4)) / baseWidth],
//       tooltip: {
//         show: false,
//       }
//     }
//   ],
//   animation:false
// };

// chart.setOption(option);

const jiBeiDom = ref();
const option1 = {};
const initChart = () => {
  const graphChart = echarts.init(jiBeiDom.value);
  graphChart.setOption(option1);
};
onMounted(() => {
  initChart();
  // console.log(csv);
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}

.a {
  margin: 40px;
  border: 1px solid transparent;
  display: inline-block;
  padding: 0;
  border-radius: 20px;
  height: 40px;
  background-color: #ecefee;
}

button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid transparent;
  background: transparent;
}

.yes {
  background: red;
  color: white;
}

.content {
  border: 1px solid black;
  position: absolute;
  left: 100px;
  right: 100px;
  top: 100px;
}

.one {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  background: rgba(255, 0, 0, 0.5);
  /* background: red; */
  /* opacity: 0.5; */
  position: relative;
}

.two {
  position: absolute;
  left: 100px;
  top: 100px;
  width: 100px;
  height: 100px;
  border: 1px solid green;
  background: green;
  border-radius: 100%;
  /* background: conic-gradient(red 0 30%,green 30% 60%,blue 60% 90%,yellow 90% 100%); */
  /* background: conic-gradient(red,yellow,blue); */
  background: radial-gradient(closest-side, gray, transparent),
    conic-gradient(red, magenta, blue, aqua, lime, yellow, red);
  border-radius: 50%;
  /* padding; */
  /* opacity: 1; */
}

#histogram {
  position: relative;
  width: 160px;
  height: 300px;
  margin: auto;
  /* 从底部缓慢上升效果 */
  /* animation-name: pullUp;
  -webkit-animation-name: pullUp;
  animation-duration: 2.5s;	
  -webkit-animation-duration: 2.5s;
  animation-timing-function: ease-out;	
  -webkit-animation-timing-function: ease-out;	
  transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -webkit-transform-origin: 50% 100%;  */
}

/* 顶部平行四边形 */
#histogram div:nth-child(1) {
  position: absolute;
  top: 0;
  left: 25px;
  color: white;
  background-color: #718fa0;
  width: 110px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  transform: skewX(-45deg);
}

/* 右侧平行四边形 */
#histogram div:nth-child(2) {
  position: absolute;
  top: 25px;
  left: 110px;
  color: white;
  background: linear-gradient(to right, #5c7585, #495c6a);
  /* background: -ms-linear-gradient(right, #5c7585, #495c6a);
  background: -webkit-linear-gradient(right, #5c7585, #495c6a);
  background: -moz-linear-gradient(right, #5c7585, #495c6a); */
  width: 50px;
  height: 250px;
  transform: skewY(-45deg);
  /* 不规则图形的阴影写法 */
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.5));
}

/* 正面矩形 */
#histogram div:nth-child(3) {
  position: absolute;
  top: 50px;
  left: 0;
  color: white;
  background-color: #597684;
  width: 110px;
  height: 250px;
  filter: drop-shadow(2px 7px 6px rgba(0, 0, 0, 0.1));
}

/* 从底部缓慢上升效果 */
/* @keyframes pullUp {
  0% {
    transform: scaleY(0.1);
  }
  40% {
    transform: scaleY(1.02);
  }
  60% {
    transform: scaleY(0.98);
  }
  80% {
    transform: scaleY(1.01);
  }
  100% {
    transform: scaleY(0.98);
  }				
  80% {
    transform: scaleY(1.01);
  }
  100% {
    transform: scaleY(1);
  }							
} */
.jiBei {
  width: 90%;
  height: 600px;
  border: 1px solid black;
  margin-left: 50%;
  transform: translateX(-50%);
}

.ceshi {
  margin: 100px 0;
  width: 100%;
  height: 500px;
  border: 1px solid red;
  position: relative;
}

.test1 {
  height: 100px;
  width: 100px;
  border: 1px solid yellow;
  position: absolute;
  top: 100px;
  left: 100px;
}

.test2 {
  height: 50px;
  width: 50px;
  border: 1px solid green;
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>
