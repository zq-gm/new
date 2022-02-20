<template>
  <div style="height:100%">
        <el-container style="height:100%">
      <el-header style="height: 100px">
        <!-- 头部 -->
        <header-html/>
      </el-header>
      <el-main>
        <el-container>
          <el-aside style="position:relative;" :width="leftWidth + 'px'">
            <i @click="changeSwitch" class="menu-open" :class="isOpen ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'" />
            <left-menu class="left-menu" :isCollapse="!isOpen" />
          </el-aside>
          <el-main style="margin:24px;">
            <router-view />
          </el-main>
        </el-container>
      </el-main>
    </el-container>
    <!-- <financeReport /> -->
  </div>
</template>

<script>
// import financeReport from '@/view/report/financeReport.vue'
import headerHtml from '../../components/commen/headerHtml'
import leftMenu from '../../components/menu/leftMenu'
export default {
  name: 'HelloWorld',
  components:{
    headerHtml,leftMenu
    // financeReport
  },
  watch: {
  },
  props: {
    msg: String
  },
  data(){
    return {
      leftWidth: 80,
      isOpen: false
    }
  },
  methods: {
    changeSwitch() {
      this.isOpen = !this.isOpen
      this.isOpen ? this.leftWidth = 180 : this.leftWidth = 80
    }
  }
}
</script>
<style lang="less" scoped>
.menu-open{
  position: absolute;
  top:50%;
  right: 0px;
  z-index: 2;
}
.left-menu{
    /deep/ .el-menu{
      height: 100%;
      .el-menu-item{
        text-align: left;
      }
    }
}
</style>
