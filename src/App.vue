<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data (){
    return {
      leftWidth : 200
    }
  },
  mounted(){
    window.onload = () => {
      this.resetSize()
    }
    window.onresize =() => {
      this.resetSize()
    }
  },
  methods:{
    resetSize(){
      document.getElementsByTagName("body")[0].style.height = window.innerHeight +"px";
      document.getElementsByTagName("body")[0].style.width  = window.innerWidth +"px";
    }
  }
}
</script>

<style>
body{
  margin: 0;
  overflow: hidden;
}
body .el-table th.gutter{
    display: table-cell!important; 
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.el-header, .el-main, .el-footer{
  padding: 0px !important;
}
</style>
