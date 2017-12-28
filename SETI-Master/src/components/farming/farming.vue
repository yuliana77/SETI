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