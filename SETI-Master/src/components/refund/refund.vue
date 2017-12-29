<template>
	<div>
		<Table height="700" :columns="columns" :data="dataList"></Table>
	</div>
</template>
<script type="text/javascript">
	import refundData from '../../assets/js/refund.js'
	 export default {

        data () {
            return {
                orders:[],
                columns: [
                    {
                        title:"退款时间",
                        key:'RefundTime'
                    },
                    {
                        title:"退款编号",
                        key:'RefundNumber'
                    },
                    {
                        title:"订单金额",
                        key:'amount'
                    },
                    {
                        title:"退款金额",
                        key:'RefundAmount'
                    },
                    {
                        title:"给分销商",
                        key:'payAmount'
                    },
                    {
                        title:"分销商退款",
                        key:'RefundAmount'
                    },
                    {
                        title:"售后类型",
                        key:'RefundType'
                    },
                    {
                        title:"处理人",
                        key:'RefundName'
                    },
                    {
                        title:"亏损",
                        key:'earnings'
                    },
                    {
                        title:"备注",
                        key:'remark'
                    },{
                    	title:"操作",
                    	key:"action",
                    	width:100,
                    	align:"center",
                    	render:(seti,param) =>{
                    		return seti('Button',{
                    			props:{
                                    type:'error',
                                    size:'small'
                                },
                    			on:{
                    				click:()=>{
                    					this.dataList.splice(param.index,1)
                    				}
                    			}
                    		},"删除")
                    	}

                    }
                ],
                dataList: []

            }
        },
        created(){
           this.dataList = refundData;
        }
    }
</script>