<template >
    <div  id="order">
        <Table height="700" :columns="columns" :data="dataList"></Table>
    </div>
</template>
<script>
    import farmData from '../../assets/js/farming.js'
    export default {

        data () {
            return {
                orders:[],
                columns: [
                    {
                        title:"刷单时间",
                        key:'OrderTime'
                    },
                    {
                        title:"刷单编号",
                        key:'OrderNumber'
                    },
                    {
                        title:"刷单金额",
                        key:'amount'
                    },
                    {
                        title:"付刷单钱",
                        key:'otherAmount'
                    },
                    {
                        title:"进帐人",
                        key:'inName'
                    },
                    {
                        title:"出账人",
                        key:'outName'
                    },
                    {
                        title:"操作",
                        key:"action",
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
           this.dataList = farmData;

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