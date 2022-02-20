<template>
<div>
  <div>
    <el-button type="primary" @click="addExpenses">创建</el-button>
  </div>
    <el-table :data="expensesData" border style="width:100%;margin:24px 0px;">
      <el-table-column v-for="item in tableColumns" :key="item.prop"
        :prop="item.prop"
        :label="item.name">
        <template slot-scope="scope">
            <div v-if="item.prop === 'expensesName'" style="color:blue;cursor: pointer" @click="getInfo(scope.row.id)">{{scope.row[item.prop]}}</div>
            <div v-else>{{scope.row[item.prop]}}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageVo.pageNum"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageVo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageVo.totalSize">
    </el-pagination>
    <expensesInfo ref="expensesInfo"/>
</div>
</template>
<script>
import expensesInfo from './expensesInfo'
export default {
  name: 'expenses',
  components: {
    expensesInfo
  },
  data (){
    return {
      pageVo:{
        pageSize:10,
        pageNum:1,
        totalSize:0
      },
      tableColumns:[
        {
          prop:'expensesName',
          name:'消费名称'
        },
        {
          prop:'expensesAmount',
          name:'消费金额'
        },
        {
          prop:'expensesPeople',
          name:'消费人'
        },
        {
          prop:'expensesDate',
          name:'消费时间'
        },
        {
          prop:'expensesType',
          name:'消费类型'
        },
        {
          prop:'payType',
          name:'支付类型'
        },
        {
          prop:'remarks',
          name:'备注'
        }
      ],
      expensesData:[]
    }
  },
  mounted (){
    this.getData()
  },
  methods: {
    getData(){
      this.$axios.get(`/api/expenses/expensesList/${this.pageVo.pageSize}/${this.pageVo.pageNum}`, {params:{expensesDate:''}},{
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    }}).then(res => {
        if(res.data&&res.data.isSuccessed){
          this.expensesData = res.data.data
          this.pageVo = res.data.pageResult
          this.$message(
            {
              message:res.data.message,
              type: 'success'
            });
        } else{
          this.$message.error(res.data.message);
        }
      })
    },
    addExpenses(){
      this.$refs.expensesInfo.showType="create"
      this.$refs.expensesInfo.expensesDio = true
    },
    getInfo(id){
      this.$refs.expensesInfo.getexpenseInfo(id)
    },
    handleSizeChange(val) {
      this.pageVo.pageSize = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.pageVo.pageNum = val
      this.getData()
    }
  }
}
</script>
<style scoped>
body .el-table th.gutter{
    display: table-cell!important; 
  }
</style>
