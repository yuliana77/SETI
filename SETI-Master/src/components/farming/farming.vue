<template >
    <div  id="order">

        <div id="farming" ></div>
        <!-- <Table height="700" :columns="columns" :data="dataList"></Table> -->
    </div>
</template>
<script>
    // import farmData from '../../assets/js/farming.js'
    export default {

        data () {
            return {
                  myChart:{}
                // orders:[],
                // columns: [
                //     {
                //         title:"刷单时间",
                //         key:'OrderTime'
                //     },
                //     {
                //         title:"刷单编号",
                //         key:'OrderNumber'
                //     },
                //     {
                //         title:"刷单金额",
                //         key:'amount'
                //     },
                //     {
                //         title:"付刷单钱",
                //         key:'otherAmount'
                //     },
                //     {
                //         title:"进帐人",
                //         key:'inName'
                //     },
                //     {
                //         title:"出账人",
                //         key:'outName'
                //     },
                //     {
                //         title:"操作",
                //         key:"action",
                //         render:(seti,ct) =>{
                //             return seti("Button",{
                //                 props:{
                //                     type:"error",
                //                     size:"small"
                //                 },
                //                 on:{
                //                     click:()=>{
                //                         this.dataList.splice(ct.index,1)
                //                     }
                //                 }
                //             },"删除")
                //         }
                //     }
                // ],
                // dataList: []

            }
        },
        created(){
           // this.dataList = farmData;

        },
        mounted(){
            this.myChart = this.$echarts.init(document.getElementById('farming'));
            this.myChart.setOption({
                color: ['#AE5548' ],
                title: { text: '刷单列表图'  },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    type:"plain",
                    bottom: 10,
                    data:['刷单金额']
                },
                tooltip: {},
                xAxis: {
                     interval:0,
                    type: 'category',
                    data: ["1","2","3","4","5","6","7","8","9"]


                    
                },
                yAxis: {
                    type:'value'
                },
                series: [
                    {
                        name: '订单金额',
                        type: 'bar',
                         stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [35.48, 38.28, 48.38, 84.08, 86.38, 97.98, 238.3, 217.4, 36.8]
                    }
                ]
            });
           }
    }
</script>
<style type="text/css">

     #farming{
        width: 100%;
        height: 800px;
    }

   /* .ivu-table th{
        text-align: center;
    }
    .ivu-table-cell{
        padding: 0;
        margin:0;
        text-align: center;
    }*/    
</style>