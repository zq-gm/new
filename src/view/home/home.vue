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
          <el-main style="margin:20px;">
            <router-view />
          </el-main>
        </el-container>
      </el-main>
      <el-footer v-if="$route.meta.hasFooter" style="height: 80px">
        <footer-html/>
      </el-footer>
    </el-container>
    <!-- <financeReport /> -->
  </div>
</template>

<script>
// import financeReport from '@/view/report/financeReport.vue'
import headerHtml from '../../components/commen/headerHtml'
import footerHtml from '../../components/commen/footerHtml'
import leftMenu from '../../components/menu/leftMenu'
export default {
  name: 'HelloWorld',
  components:{
    headerHtml,
    leftMenu,
    footerHtml
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
  mounted() {
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
