<template >
    <div  id="order">
        
        <!-- <div class="orderHeader">
           
           <div class="summation">
               <span>总单数</span>
               <h2>{{orderNumber}}</h2>
           </div> 
            
           <div class="summation">
               <span>总订单金额</span>
               <h2>{{orderAmount}}</h2>
           </div>
    
           <div class="summation">
               <span>支出金额</span>
               <h2>{{outAmount}}</h2>
           </div>
  
           <div class="summation">
               <span>总盈利</span>
               <h2>{{orderPrice}}</h2>
           </div>
           <div class="addorder">
               <Button type="primary" @click="modal = true">添加订单</Button>
           </div>
        </div> -->

        <div id="main" ></div>
        <!-- <Table height="500" :columns="columns" :data="dataList"></Table>
         <Modal
            v-model="modal"
            title="添加订单"
            :loading="loading"
            @on-ok="asyncOK('userRef')">
            <Form ref="userRef" role="form" :model="userForm" inline>
            <div class="userInput">
                <FormItem span="12"  label="下单日期">
                    <DatePicker type="date" placeholder="下单日期" style="width: 170px"></DatePicker>
                </FormItem>
                <FormItem span="12" prop="Num" label="订单编号">
                    <Input v-model="userForm.Num"  placeholder="订单编号" style="width: 170px"></Input>
                </FormItem>
                <FormItem span="12" prop="Price" label="订单金额">
                    <InputNumber v-model="userForm.Price" :step="0.01" placeholder="订单金额"  style="width: 170px"></InputNumber>
                </FormItem>
                <FormItem span="12" prop="Pay" label="给分销商">
                    <InputNumber v-model="userForm.Pay" :step="0.01" placeholder="给分销商" type="text" style="width: 170px"></InputNumber>
               </FormItem>
                <FormItem span="12" prop="Other" label="其他金额">
                    <InputNumber v-model="userForm.Other" placeholder="其他金额" :step="1" type="text" style="width: 170px"></InputNumber>
                </FormItem>
                <FormItem span="12" prop="State" label="订单状态">
                    <Select v-model="userForm.State" style="width:170px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem span="12" prop="Name" label="进帐人">
                    <Select v-model="userForm.Name" style="width:170px">
                        <Option v-for="item in inList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem span="12" prop="Name1" label="出账人">
                    <Select v-model="userForm.Name1" style="width:170px">
                        <Option v-for="item in outList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem span="12" prop="Earning" label="收益金额">
                    <InputNumber v-model="userForm.Earning" :step="0.01"  placeholder="收益金额" type="text" style="width: 170px"></InputNumber>
                </FormItem>
                <FormItem span="12" prop="Remark" label="订单备注">
                    <Input v-model="userForm.Remark"  type="text" placeholder="备注" style="width: 170px"></Input>
                </FormItem>
            </div>
            </Form>
        </Modal> -->
    </div>
</template>
<script>
   // import orderData from '../../assets/js/order.js'
    export default {
        data () {
            return {
                // orders:[],
                // columns: [
                //     {
                //         title:"下单时间",
                //         key:'OrderTime'
                //     },
                //     {
                //         title:"订单编号",
                //         key:'OrderNumber'
                //     },
                //     {
                //         title:"订单金额",
                //         key:'amount'
                //     },
                //     {
                //         title:"给分销商",
                //         key:'payAmount'
                //     },
                //     {
                //         title:"其他金额",
                //         key:'otherAmount'
                //     },
                //     {
                //         title:"订单状态",
                //         key:'state'
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
                //         title:"收益金额",
                //         key:'earnings'
                //     },
                //     {
                //         title:"备注",
                //         key:'remark'
                //     },
                //     {
                //         title:'操作',
                //         key:'action',
                //         width:100,
                //         align:'center',
                //         render:(seti,params) => {
                //             return seti('Button',{
                //                 props:{
                //                     type:'error',
                //                     size:'small'
                //                 },
                //                 on:{
                //                     click:() =>{
                //                         this.dataList.splice(params.index,1)
                //                     }
                //                 }
                //             },'删除')
                //         }
                //     }
                // ],
                // dataList: [],
                // loading: true,
                // modal: false,
                // userForm:{
                //     userNum:'',
                //     userPrice:'',
                //     userPay:'',
                //     userOther:'',
                //     userState:'',
                //     userName:'',
                //     userName1:'',
                //     userEarning:'',
                //     userRemark:''
                // },
                // cityList:[
                //     {
                //         value:'交易成功',
                //         label:'交易成功'
                //     },
                //     {
                //         value:'交易失败',
                //         label:'交易失败'
                //     }
                // ],
                // inList:[
                //     {
                //         value:'Ciel',
                //         label:'Ciel'
                //     },
                //     {
                //         value:'Winnie',
                //         label:'Winnie'
                //     }
                // ],
                //  outList:[
                //     {
                //         value:'Ciel',
                //         label:'Ciel'
                //     },
                //     {
                //         value:'Winnie',
                //         label:'Winnie'
                //     }
                // ],
                myChart:{}
            }
        },
        // created(){
        //    this.dataList = orderData;

        // },
        mounted(){
            this.myChart = this.$echarts.init(document.getElementById('main'));
            this.myChart.setOption({
                color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
                title: { text: '订单列表图'  },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    type:"plain",
                    bottom: 10,
                    data:['订单金额','给分销商','补差价','收益金额',]
                },
                tooltip: {},
                xAxis: {
                     interval:0,
                    type: 'category',
                    data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"]


                    
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
                        data: [18, 27.6, 73.3, 36.2, 22.8, 51, 71.9, 25.58, 51.2, 13.8, 28.2, 68.6, 47.98, 25.58, 38, 9, 45, 30.7, 25.58, 16, 31.5, 111.58, 188.78, 25.58, 25.58, 8, 25.58, 36.6, 53.4]
                    },
                    {
                        name: '给分销商',
                        type: 'bar',
                         stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [-12,  -12, -40.08, -18.88, -23.64, -28.78, -32.69, -23.64, -30.38, -11.50, -17.21, -35.88, -36.84, -21.64, -21.78, -10.50, -28.37, -19.19, -23.64, -11.70, -21.78, -91.6, -150, -20.17, -21,-8.9, -21, -32.47, -53.40]
                    },
                    {
                        name: '补差价',
                        type: 'bar',
                         stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [-0, -0, -30, -12, -0, -20, -32, -1.94, -20.82, -0, -7.3, -20, -10, -0, -15, -12, -7, -0, -4.3, -8.5, -15, -0, -0, -0, -0, -0, -0, -0, -0]
                    },
                    {
                        name: '收益金额',
                        type: 'bar',
                         stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [6, 15.6, 3.22, 5.32, -1.06, 2.22, 7.21, 0, 0, 2.3, 3.69, 12.72, 1.14, 3.94,1.22, -1.5, 4.63, 4.51, 1.94, 0, 1.22, 4.98, 38.78, 5.41, 4.58, -0.9, 4.58, 4.13, 0]
                    },
                ]
            });
           }
        // computed:{
        //     // 总收益
        //     orderPrice(){
        //          let total = 0;
        //         this.dataList.forEach((order)=>{ 
        //            total +=order.earnings;    
        //         })
        //         return total.toFixed(2);
        //     },
        //     // 总单数
        //     orderNumber(){
        //         return this.dataList.length
        //     },
        //     // 总收益
        //     orderAmount(){
        //          let total = 0;
        //         this.dataList.forEach((order)=>{
        //            total +=order.amount;    
        //         })
        //         return total.toFixed(2); 
        //     },
        //     // 支出（分销商＋补差价）
        //     outAmount(){
        //          let total = 0;
        //         this.dataList.forEach((order)=>{
        //            total += order.payAmount+order.otherAmount;    
        //         })
        //         return total.toFixed(2); 
        //     },
        // },
        // methods:{
        //      asyncOK (name) {
               
                
        //         setTimeout(() => {
        //             this.$refs[name].validate((valid) =>{
        //                 if(valid){
        //                     this.dataList.push({
        //                         OrderNumber:this.userForm.Num,
        //                         amount:this.userForm.Price,
        //                         payAmount:this.userForm.Pay,
        //                         otherAmount:this.userForm.Other,
        //                         state:this.userForm.State,
        //                         inName:this.userForm.Name,
        //                         outName:this.userForm.Name1,
        //                         earnings:this.userForm.Earning,
        //                         remark:this.userForm.Remark,
        //                     })
        //                     console.log(this.dataList)
        //                 }else{
        //                       this.$Message.error('添加失败');
        //                 }
        //             })
        //             this.modal = false;
        //         }, 1000);
        //     }
        // }
    }
</script>
<style >
    #main{
        width: 100%;
        height: 800px;
    }
/*


    #order{
    }
    .ivu-table th{
        text-align: center;
    }
    .ivu-table-cell{
        padding: 0;
        margin:0;
        text-align: center;
    } 
    .orderHeader{
        overflow: hidden;
        margin:15px 0 15px 15px;
        display: flex;
    }  
    .summation{
        flex: 1;
        margin-right: 15px;
        height: 100px;
        border: 1px solid #e9eaec;
        text-align: center; 
    }
    .summation span{
        height: 50px;
        line-height: 50px;
    }
    .summation h2{
        height: 50px;
        line-height: 15px;
        color: red
    } 
    .addorder{
        flex:  0 0 0 40px;
        width: 110px;
    }
    .addorder button{
        color: #ffffff;
        border: 0;
        background-color: #ed8f00;
        width: 90px;
        height: 40px;
        font-size: 14px;
        border-radius: 5px;
        margin-top: 30px;
        cursor: pointer;
    }
    .addorder button:hover{
        background-color: #e5a74b
    }
    .ivu-modal-body{
        height: 320px;
    }
    .userInput input,.userInput textarea,.userInput .ivu-select-selection{
        margin-bottom: 8px;
    }
    .ivu-form-item-error-tip{
        padding-top: 0
    }
    .ivu-form-inline .ivu-form-item{
       display: flex;
        width: 230px;
        float: left;
        margin:10px 28px 10px 0;
    }
    .ivu-form-inline .ivu-form-item:nth-child(even){
        margin-right: 0px;
    }
    .ivu-form-item-content{
        flex: 0 0 170px;
        width: 170px;
    }
    .ivu-form-item-label{
       flex: 0 0 60px;
        width: 60px;
    }*/
</style>