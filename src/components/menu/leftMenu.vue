<template>
  <div id="leftMenu">
    <el-menu :collapse="isCollapse">
      <el-menu-item v-for="item in menuList" :key="item.index" :index="item.index" @click="handleMenu(item)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name:'leftmenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data (){
    return{
      menuList:[
        {
          index:'1',
          name:'报表',
          path:'/report'
        },{
          index:'2',
          name:'开销',
          path:'/expenses'
        },{
          index:'3',
          name:'个人自传',
          path:'/autobiography'
        },{
          index:'4',
          name:'密码管理',
          path:'/passwordManage'
        },{
          index:'5',
          name:'任务管理',
          path:'/taskManage'
        },
      ]
    }
  },
  methods:{
    handleMenu(item) {
      this.$router.push(item.path)
    }
  }

}
</script>
<style scoped>
#leftMenu {
  width:100%;
  height: 100%;
}
</style>