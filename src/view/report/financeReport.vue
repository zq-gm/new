<template>
<div>
  <div id="finance-echart"></div>
</div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'financeReport',
  data (){
    return {
        financeType: ['收入', '花呗', '信用卡', '还款'],
        xAxis: ['一月', '二月', '三月', '四月', '五月', '月六', '七月','八月','九月','十月','十一月','十二月']
    }
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){},
  mounted (){
    this.setEcharts()
  },
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},
  methods: {
    setEcharts(){
      var chartDom = document.getElementById('finance-echart');
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: this.financeType
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
    xAxis: [
        {
            type: 'category',
            data: this.xAxis
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
            {
                name: '收入',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [9288, 9230, 9259, 9224]
            },
            {
                name: '花呗',
                type: 'bar',
                stack: '支出',
                emphasis: {
                    focus: 'series'
                },
                data: [1201, 586, 957, 697]
            },
            {
                name: '信用卡',
                type: 'bar',
                stack: '支出',
                emphasis: {
                    focus: 'series'
                },
                data: [502, 919, 417, 2418]
            },
            {
                name: '还款',
                type: 'bar',
                stack: '支出',
                emphasis: {
                    focus: 'series'
                },
                data: [2000, 6000, 2000, 0]
            }
        ]
        }
        myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
#finance-echart{
    width:800px;
    height: 500px;
}
</style>
