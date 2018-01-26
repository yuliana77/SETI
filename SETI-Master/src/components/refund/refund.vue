<template>
	<div>
		<!-- <Table height="700" :columns="columns" :data="dataList"></Table> -->
         <div id="refund" ></div>
	</div>
</template>
<script type="text/javascript">
	//import refundData from '../../assets/js/refund.js'
	 export default {

        data () {
            return {
                myChart:{}
                // orders:[],
                // columns: [
                //     {
                //         title:"退款时间",
                //         key:'RefundTime'
                //     },
                //     {
                //         title:"退款编号",
                //         key:'RefundNumber'
                //     },
                //     {
                //         title:"订单金额",
                //         key:'amount'
                //     },
                //     {
                //         title:"退款金额",
                //         key:'RefundAmount'
                //     },
                //     {
                //         title:"给分销商",
                //         key:'payAmount'
                //     },
                //     {
                //         title:"分销商退款",
                //         key:'RefundAmount'
                //     },
                //     {
                //         title:"售后类型",
                //         key:'RefundType'
                //     },
                //     {
                //         title:"处理人",
                //         key:'RefundName'
                //     },
                //     {
                //         title:"亏损",
                //         key:'earnings'
                //     },
                //     {
                //         title:"备注",
                //         key:'remark'
                //     },{
                //     	title:"操作",
                //     	key:"action",
                //     	width:100,
                //     	align:"center",
                //     	render:(seti,param) =>{
                //     		return seti('Button',{
                //     			props:{
                //                     type:'error',
                //                     size:'small'
                //                 },
                //     			on:{
                //     				click:()=>{
                //     					this.dataList.splice(param.index,1)
                //     				}
                //     			}
                //     		},"删除")
                //     	}

                //     }
                // ],
                // dataList: []

            }
        },
        // created(){
        //    this.dataList = refundData;
        // }
        mounted(){
            this.myChart = this.$echarts.init(document.getElementById('refund'));
            this.myChart.setOption({
                color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
                title: { text: '售后列表图'  },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    type:"plain",
                    bottom: 10,
                    data:['订单金额','退款金额','给分销商','分销商退款','亏损']
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
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [36.60]
                    },
                    {
                        name: '退款金额',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [36.60]
                    },
                    {
                        name: '给分销商',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [32.47]
                    },
                    {
                        name: '分销商退款',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [27.97]
                    },
                    {
                        name: '亏损',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [-4.5]
                    }
                ]
            });
           }
    }
</script>
<style type="text/css">

     #refund{
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