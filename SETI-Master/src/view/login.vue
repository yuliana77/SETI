<template>
	<div id="login">
		<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
			<h1>瑟缇后台登录</h1>
	        <FormItem prop="user">
	            <Input type="text" v-model="formInline.user" placeholder="用户名" autocomplete="off">
	                <Icon type="ios-person-outline" slot="prepend"></Icon>
	            </Input>
	            <Input style="display:none" type="text"></Input>
	        </FormItem>
	        <FormItem prop="password">
	            <Input type="password" v-model="formInline.password" placeholder="密码" autocomplete="off">
	                <Icon type="ios-locked-outline" slot="prepend"></Icon>
	            </Input>
	        </FormItem>
	        <FormItem>
	            <Button type="primary" @click="go('formInline')">登录</Button>
	        </FormItem>
	    </Form>
	</div>
</template>
<style type="text/css">
	#login{
		position: absolute;
		width: 400px;
		margin:  auto;
		background-color: #ffffff;
		padding: 30px 40px;
		opacity: 0.7;
		box-shadow: 3px 3px 10px #efefef;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 300px;

	}
	.ivu-form-inline .ivu-form-item{
		display: block;
		width: 200px;
		margin:20px auto
	}
	.ivu-form-item-content>div{
		border: 0;
	}
</style>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度最少6位数', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            go(names) {
                this.$refs[names].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功!');
                        this.$router.push({name:'order'})
                    } else {
                        this.$Message.error('登录失败!');
                    }
                })
            }
        }
    }
</script>




























