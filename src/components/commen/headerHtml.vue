<template>
  <div id="header">
    <div class="logl-info">
      <div class="logl-name">自立自强</div>
    </div>
    <div class="user-name">
      <span @mouseenter="userBasic = true">{{userInfo.username}}</span>
      <ul v-if="userBasic" @mouseleave="userBasic = false">
          <li v-for="item in userMenu" :key="item.id" @click="handleUserBasic(item)">{{item.name}}</li>
        </ul>
    </div>
    <userBasicInformation ref="userBasicInformation"></userBasicInformation>
  </div>
</template>
<script>
import userBasicInformation from '../../view/user/userBasicInformation.vue'
export default {
  name:'headerHtml',
  data () {
    return {
      userBasic: false,
      userInfo: JSON.parse(localStorage.userInfo) || {},
      userMenu:[{
        id:1,
        name:'基本信息',
        code:'basic information'
      },
      {
        id:2,
        name:'修改密码',
        code:'change password'
      },
      {
        id:3,
        name:'忘记密码',
        code:'retrieve password'
      }]
    }
  },
  components: {
    userBasicInformation
  },
  methods:{
    handleUserBasic(val) {
      switch (val.code) {
        case 'basic information':
          this.$refs.userBasicInformation.dialogVisible = true;
          break;
        case 'change password':
          this.$refs.userBasicInformation.dialogVisible = true;
          break;
        case 'retrieve password':
          this.$refs.userBasicInformation.dialogVisible = true;
          break;
      }
    }
  }
}
</script>
<style lang="less" scoped>
#header {
  width:100%;
  height: 100%;
  background: linear-gradient(to right,#362346 ,#3f6d74)
}
.logl-info{
   width: 10%;
  height: 100%;
  float: left;
  .logl-name {
    height: 100px;
    width: 100px;
    background:#52a2f8;
    border-radius: 100px;
    font-size: 34px;
    color: white;
  }
}
.user-name{
  width: 10%;
  height: 100%;
  position: absolute;
  right: 20px;
  padding-top: 20px;
  color: white;
  cursor: pointer;
  ul{
    border: 1px solid gray;
    padding-inline-start: 0px;
    background-color: rgba(0,0,0,0.4);
    li{
      list-style: none;
      border-bottom: 1px solid gray;
      padding: 8px;
    }
    :last-of-type li{
      border-bottom: 0px;
    }
  }
}
</style>