<template >
    <div  id="order">
        <Table height="700" :columns="columns" :data="dataList"></Table>
    </div>
</template>
<script>
    import disData from '../../assets/js/disbursement.js'
    export default {

        data () {
            return {
                orders:[],
                columns: [
                    {
                        title:"支付时间",
                        key:'OrderTime'
                    },
                    {
                        title:"支出金额",
                        key:'amount'
                    },
                    {
                        title:"支付人",
                        key:'inName'
                    },
                    {
                        title:"支出备注",
                        key:'remark'
                    },
                    {
                        title:"操作",
                        key:"action",
                        width:100,
                        align:"center",
                        render:(seti,ct) =>{
                            return seti("Button",{
                                props:{
                                    type:"error",
                                    size:"small"
                                },
                                on:{
                                    click:()=>{
                                        this.dataList.splice(ct.index,1)
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
           this.dataList = disData;

        }
    }
</script>
<style type="text/css">
    .ivu-table th{
        text-align: center;
    }
    .ivu-table-cell{
        padding: 0;
        margin:0;
        text-align: center;
    }    
</style>