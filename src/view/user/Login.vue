<template>
    <div class="login">
    
    <el-form class="user-login" :model="userLogin" :rules="rules" ref="ruleForm">
      <h2>{{systemName.cn}}</h2>
      <h3>{{systemName.en}}</h3>
      <el-form-item prop="username">
        <el-input
         v-model="userLogin.username"
          pressEnter="handleSubmit"
          placeholder="用户名"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="userLogin.password"
          pressEnter="handleSubmit"
          placeholder="密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-button"
          @click="handleSubmit"
          :loading="loginBtn"
          :disabled="loginBtn"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import * as api from '../../api/userApi'
export default {
  name: 'Login',
  data () {
    return {
      systemName:{
        cn:'自强管理平台',
        en:'ZQ Management Platform'
      },
      loginBtn: false,
      labelWidth:'80px',
      userLogin:{
        username:'',
        password:''
      },
       rules: {
          username: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
       },
       userInfo: {
        name:'冯强',
        age: 27,
        sex: '男',
        token:'66666',
        rulerInfo:{
          rulerId: 123456,
          rulerName: '超级管理员',
        },
        departInfo:{
          departId: 123,
          departName:'自强一家人',
          
        }
      }
    }
  },
  mounted(){
  },
  methods:{
    handleSubmit(){
      var that = this
       this.$refs.ruleForm.validate((valid) => {
          if (valid) {
          this.loginBtn = true
          // 先前端模拟
          this.$axios.post('api/login',this.userLogin)
            .then(res => {
              if (res.data&&res.data.isSuccessed) {
                this.userInfo = res.data.data
                // 存储token用于携带在请求头
                localStorage.setItem("userInfo",JSON.stringify(this.userInfo))
                localStorage.setItem("token",this.userInfo.token)
                this.$router.push('/')
              } else {
                this.$message.error('登录失败,检查用户名或密码')
              }
            })
          // 存储token用于携带在请求头
          that.$router.push('/home')
          this.loginBtn = false
          }
       })
    },
    // getUserInfo(){
    //   var that = this
    //   api.getUserInfo({token:localStorage.getItem('token')}).then(res=>{
    //     console.log(res)
    //     if(res.data&&res.data.code === 1){
    //       that.userinfo = res.data.data
    //       // that.$store.commit("user/setUserinfo",res.data.data)
    //       // 延迟 10 秒跳转
    //             setTimeout(() => {
    //                 this.$router.push({ path: '/filllist' })
    //             }, 10000)
    //     }else{
    //       this.$message.error('获取用户详情失败')
    //     }
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
  background-image: url("../../assets/background-img/back1.jpeg");
  background-size: cover;
}
.user-login {
  background: rgba(0,0,0,0.7);
  padding:20px;
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-60%);
  h2 {
    margin: 0;
    color: white;
  }
  h3{
    margin: 10px 0;
    color: white;
    font-weight: 500;
  }
  .login-button {
    padding: 0 15px;
    margin-top: 24px;
    font-size: 16px;
    height: 40px;
    width: 300px;
  }
}
</style>
