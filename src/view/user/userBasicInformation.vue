<template>
  <el-dialog
  title="用户信息"
  :visible.sync="dialogVisible"
  width="50%">
    <div>
        <el-form ref="form" :model="userform" label-width="80px">
          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item label="用户名称">
                <el-input :disabled="!isEdit" v-model="userform.username"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="姓名">
                <el-input :disabled="!isEdit" v-model="userform.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别">
              <el-select :disabled="!isEdit" v-model="userform.sex" placeholder="请选择性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生日">
                <el-date-picker :disabled="!isEdit" type="date" placeholder="选择日期" v-model="userform.birthDate" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年龄">
                <el-input :disabled="!isEdit" v-model="userform.age"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="身份证号码">
                <el-input :disabled="!isEdit" v-model="userform.idCardNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电话号码">
                <el-input :disabled="!isEdit" v-model="userform.phoneNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="邮箱">
                <el-input :disabled="!isEdit" v-model="userform.email"></el-input>
              </el-form-item>
            </el-col>      
            <el-col :span="24">
              <el-form-item label="座右铭">
                <el-input :disabled="!isEdit" type="textarea" v-model="userform.userMotto"></el-input>
              </el-form-item>
            </el-col>      
        </el-row>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <div v-if="!isEdit">
        <el-button @click="isEdit = true">修改</el-button>
      </div>
      <div v-else>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'userBasicInformation',
  data () {
    return {
      dialogVisible: false,
      isEdit: false,
      userform:JSON.parse(localStorage.userInfo) || {}
    }
  },
  mounted() {
  },
  methods:{
    handleEdit(){

    }
  }
}
</script>

<style>

</style>