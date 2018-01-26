<template>
    <div class="layout">
        <h1>SETI瑟缇管理系统后台</h1>
        <div class="layout-content">
            <Row>
                 <Col :span="spanLeft" class="layout-menu-left">
                    <Menu active-name="1" theme="dark" width="auto">
                        <!-- <div class="layout-logo-left">目录</div> -->
                        <MenuItem name="1" @click.native="goPage(0)">
                            <Icon type="clipboard" :size="iconSize"></Icon>
                            <span class="layout-text">订单表</span>
                        </MenuItem>
                        <MenuItem name="2" @click.native="goPage(1)">
                            <Icon type="cash" :size="iconSize"></Icon>
                            <span class="layout-text">刷单表</span>
                        </MenuItem>
                        <MenuItem name="3" @click.native="goPage(2)">
                            <Icon type="card" :size="iconSize"></Icon>
                            <span class="layout-text">支出表</span>
                        </MenuItem>
                        <MenuItem name="4" @click.native="goPage(3)">
                            <Icon type="card" :size="iconSize"></Icon>
                            <span class="layout-text">售后表</span>
                        </MenuItem>
                    </Menu>
                </Col>
                <Col span="19">
                    <router-view></router-view>
                </Col>
            </Row>
        </div>
        <div class="layout-copy">
            2017 &copy; 瑟缇
        </div>
    </div>
</template>
<style >
  
</style>

<script>
    import order from '../components/order/order.vue'
    export default {
          data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            goPage(index){
                this.go(index);
                // this.$router.push({name:'order'})
            },
            go(index){
                switch(index){
                    case 0:
                        this.$router.push({name:'order'});
                        break;
                    case 1:
                        this.$router.push({name:'farming'});
                        break;
                    case 2:
                        this.$router.push({name:'disbursement'});
                        break; 
                    case 3:
                        this.$router.push({name:'refund'});
                         break;    
                }
            }
        },
      components:{
        order
      }  
    }
</script>
