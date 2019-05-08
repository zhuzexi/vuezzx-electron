<style scoped>
  @import './login.css';
</style>
<template>
  <div class="login-wrapper">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="请输入用户名" :autofocus='true'>
          <Icon color="#fff" size="16" type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input @keyup.enter.native="handleSubmit('formInline')" type="password" v-model="formInline.password" placeholder="请输入密码">
          <Icon color="#fff" size="16" type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
   data () {
    return {
        formInline: {
            user: '',
            password: ''
        },
        ruleInline: {
            user: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码的长度不能小于6', trigger: 'blur' }
            ]
        },
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login({ userName: this.formInline.user, password: this.formInline.password})
          .then((res) => {
            this.$router.push({name: 'home'})
          }).cacth(err => {
            console.log(err)
          })
        } else {
          this.$Message.error('登录成功，请重新登录!');
        }
      })
    }
  }
}
setTimeout(() => {
  $('body').particleground({
    dotColor: '#1f98a8',
		lineColor: '#1b3273'
  });
}, 100);
</script>


