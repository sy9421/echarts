
function addScript(url){

  document.write("<script language=javascript src="+"./jquery-3.3.1.min.js"+"></script>");
  document.write("<script language=javascript src="+"./echarts-3.8.5.min.js"+"></script>");
}
window.onload = function(){
  addScript();

  var dom = document.getElementById("container1");
  var myChart = echarts.init(dom);
  var app = {};

  var option;



  option = {
    title: {
      text:"项目评分",
      textStyle: {
        color: '#fff'
      },
      left: 'center'
    },
    series: [{
      radius:'100%',
      center:['50%','65%'],
      type: 'gauge',
      progress: {
        show: true,
        width: 14
      },
      axisLine: {
        lineStyle: {
          width: 14
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 10
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 30,
        offsetCenter: [0, '60%']
      },
      data: [{
        value: 75
      }]
    }]
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

}
