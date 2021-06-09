<template>
  <div id="pageBody" class="center">
    <div class="flex_column">
      <div class="border1">22143</div>
      <div class="border1"></div>
      <div class="border1"></div>
    </div>

    <div id="box" style="width: 800px; height: 800px;"></div>
    <div class="flex_column">
      <div class="border1">22143</div>
      <div class="border1"></div>
      <div class="border1"></div>
    </div>
  </div>
</template>
<script>
import 'bootstrap-vue'
export default {
  data() {
    return{

    }
  },
  methods: {
    drawChina() {
      // 初始化echarts实例
      var myEcharts = this.$echarts.init(document.getElementById("box"));
      document.getElementById("box").style.width = 800 + "px";
      document.getElementById("box").style.height = 800 + "px";
      myEcharts.resize(); // 直接加这句即可
      console.log(this.$echarts)
      var option = {
        title: {  //标题样式
          text: '飞地一张图',
          x: "center",
          textStyle: {
            fontSize: 18,
            color: "red"
          },
        },
        tooltip: {  //这里设置提示框
          trigger: 'item',  //数据项图形触发
          backgroundColor: "red",  //提示框浮层的背景颜色。
          //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
          formatter: '地区：{b}<br/>模拟数据：{c}'
        },
        visualMap: {//视觉映射组件
          show: true,
          x: 'right',
          y: 'bottom',
          // min: 1000,
          // max: 500000,
          // text: ['0~1000', '1000~2000', '2000~3000', '3000~4000', '4000~5000', '5000~500000'],
          realtime: false,  //拖拽时，是否实时更新
          // calculable: true,  //是否显示拖拽用的手柄
          // inRange: {
          //     color: ['lightskyblue', 'yellow', 'orangered']
          // },
          splitList: [
            {start: 5000, end:500000},{start: 4000, end: 5000},
            {start: 3000, end: 4000},{start: 2000, end: 3000},
            {start: 1000, end: 2000},{start: 0, end: 1000},
          ],
          color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
        },
        legend:{
          data:[
            '北京',
            '天津',
            '上海',
            '重庆',
            '河北',
            '河南',
            '云南',
            '辽宁',
            '黑龙江',
            '湖南',
            '安徽',
            '山东',
            '新疆',
            '江苏',
            '浙江',
            '江西',
            '湖北',
            '广西',
            '甘肃',
            '山西',
            '内蒙古',
            '陕西',
            '吉林',
            '福建',
            '贵州',
            '广东',
            '青海',
            '西藏',
            '四川',
            '宁夏',
            '海南',
            '台湾',
            '香港',
            '澳门'
          ]},
        series: [
          {
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle: {//地图区域的多边形 图形样式
              normal: {//是图形在默认状态下的样式
                label: {
                  show: true,//是否显示标签
                  textStyle: {
                    color: "black"
                  }
                }
              },
              zoom: 1.5,  //地图缩放比例,默认为1
              emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                label: { show: true }
              }
            },
            top: "3%",//组件距离容器的距离
            data: [
              { name: '北京', value: 350000 },
              { name: '天津', value: 120000 },
              { name: '上海', value: 300000 },
              { name: '重庆', value: 92000 },
              { name: '河北', value: 25000 },
              { name: '河南', value: 20000 },
              { name: '云南', value: 500 },
              { name: '辽宁', value: 3050 },
              { name: '黑龙江', value: 80000 },
              { name: '湖南', value: 2000 },
              { name: '安徽', value: 24580 },
              { name: '山东', value: 40629 },
              { name: '新疆', value: 36981 },
              { name: '江苏', value: 13569 },
              { name: '浙江', value: 24956 },
              { name: '江西', value: 15194 },
              { name: '湖北', value: 41398 },
              { name: '广西', value: 41150 },
              { name: '甘肃', value: 17630 },
              { name: '山西', value: 27370 },
              { name: '内蒙古', value: 27370 },
              { name: '陕西', value: 97208 },
              { name: '吉林', value: 88290 },
              { name: '福建', value: 19978 },
              { name: '贵州', value: 94485 },
              { name: '广东', value: 89426 },
              { name: '青海', value: 35484 },
              { name: '西藏', value: 97413 },
              { name: '四川', value: 54161 },
              { name: '宁夏', value: 56515 },
              { name: '海南', value: 54871 },
              { name: '台湾', value: 48544 },
              { name: '香港', value: 49474 },
              { name: '澳门', value: 34594 }
            ],
            icon: "circle",   //  设置形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 10,  // 设置宽度
            itemHeight: 10, // 设置高度
            itemGap: 20 // 设置间距
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myEcharts.setOption(option);
    }
  },
  mounted() {
    this.$nextTick(()=>{
      setTimeout(() => {
        this.drawChina()
      }, 1000);
    })
  }
}
</script>
<style scoped>
#pageBody {
}
.center{
  display: flex;
  justify-content: center;
}
.flex_column{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.border1{
  border:1px solid #000;
  height: 100px;
  width: 200px;
}
</style>

