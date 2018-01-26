<template >
    <div  id="order">
        <!-- <Table height="700" :columns="columns" :data="dataList"></Table> -->
        <div id="disbursement"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                 myChart:{}
            }
           
        },
        mounted(){
            this.myChart = this.$echarts.init(document.getElementById('disbursement'));
            this.myChart.setOption({
                color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
                title: { text: '支出列表图'  },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend:{
                    type:"plain",
                     left: 'left',
                    data:['支出金额']
                },
                series: [
                   {
                        name: '访问来源',
                        type: 'pie',
                        radius : '70%',
                        center: ['50%', '60%'],
                        data:[
                            {value:117, name:'七浦进货'},
                            {value:1000, name:'淘宝保证金'},
                            {value:21, name:'淘宝模版'},
                            {value:100, name:'物流信息'},
                            {value:21, name:'淘宝模版'},
                            {value:218, name:'请陶锅吃饭'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
           }
    }


//     import disData from '../../assets/js/disbursement.js'
//     export default {

//         data () {
//             return {
//                 orders:[],
//                 columns: [
//                     {
//                         title:"支付时间",
//                         key:'OrderTime'
//                     },
//                     {
//                         title:"支出金额",
//                         key:'amount'
//                     },
//                     {
//                         title:"支付人",
//                         key:'inName'
//                     },
//                     {
//                         title:"支出备注",
//                         key:'remark'
//                     },
//                     {
//                         title:"操作",
//                         key:"action",
//                         width:100,
//                         align:"center",
//                         render:(seti,ct) =>{
//                             return seti("Button",{
//                                 props:{
//                                     type:"error",
//                                     size:"small"
//                                 },
//                                 on:{
//                                     click:()=>{
//                                         this.dataList.splice(ct.index,1)
//                                     }
//                                 }
//                             },"删除")
//                         }
//                     }
//                 ],
//                 dataList: []

//             }
//         },
//         created(){
//            this.dataList = disData;

//         }
//     }
 </script>
<style type="text/css">
   #disbursement{
        width: 100%;
        height: 800px;
    }    
</style>