<template>
  <div>
    <el-dialog
    title="消费账单"
    :visible.sync="expensesDio"
    width="50%"
    :before-close="handleClose">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="消费名称" prop="expensesName">
            <el-input :disabled="formDisabled" v-model="ruleForm.expensesName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="消费金额" prop="expensesAmount">
            <el-input :disabled="formDisabled" v-model="ruleForm.expensesAmount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="消费人" prop="expensesPeople">
            <el-input :disabled="formDisabled" v-model="ruleForm.expensesPeople"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="消费时间" prop="expensesDate">
            <el-date-picker :disabled="formDisabled" type="date" format="yyyy/MM/dd" placeholder="选择日期" v-model="ruleForm.expensesDate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="消费类型" prop="expensesType">
        <el-radio-group :disabled="formDisabled" v-model="ruleForm.expensesType">
          <el-radio v-for="item in expensesTypes" :key="item" :label="item"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="支付类型" prop="payType">
        <el-radio-group :disabled="formDisabled" v-model="ruleForm.payType">
          <el-radio v-for="item in payTypes" :key="item" :label="item"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input :disabled="formDisabled" type="textarea" v-model="ruleForm.remarks"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button v-if="!formDisabled" type="primary" @click="handleSubmit">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>
<script>

export default({
  name:'expensesInfo',
  props: {

  },
  data(){
    return {
      expensesDio:false,
      showType: 'create', // 显示类型，默认创建
      expensesTypes:['生活用品','饮食','服饰','交通','接待','医疗','其他'],
      payTypes:['微信','支付宝','信用卡','银行卡','现金'],
      ruleForm: {
        expensesDate: new Date()
      },
      rules: {
          expensesName: [
            { required: true, message: '请输入消费名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          expensesAmount: [
            { required: true, message: '请输入消费金额', trigger: 'change' }
          ],
          expensesPeople: [
            { required: true, message: '请选择消费人', trigger: 'change' }
          ],
          expensesType: [
            {required: true, message: '请选择消费类型', trigger: 'change' }
          ],
          payType: [
            { required: true, message: '请选择支付类型', trigger: 'change' }
          ]
        }
    }
  },
  computed:{
    formDisabled () {
      return this.showType ==='view'
    }
  },
  methods:{
    getexpenseInfo(id){
      this.$axios.get(`api/expenses/expensesinfoById/${id}`).then(res=>{
        if (res.data &&res.data.successed){
          this.ruleForm = res.data.data
          this.showType = 'view'
          this.expensesDio = true
        } else{
        this.$message(
            {
              message:res.data.message,
              type: 'error'
            });
        }
      }) 
    },
    handleSubmit(){
      this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.ruleForm.familyId = '111'
            this.ruleForm.expensesPeopleId = '1'
            this.ruleForm.expensesDate = this.ruleForm.expensesDate.toLocaleDateString() || ''
            this.$axios.post('api/expenses/addexpenses',this.ruleForm).then(res =>{
              console.log(res)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
          this.expensesDio = false
        });
    },
    handleClose(){
      this.$refs.ruleForm.resetFields()
      this.expensesDio = false
    }
  }
})
</script>
<style scoped>

</style>
