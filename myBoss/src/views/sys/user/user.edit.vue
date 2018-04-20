<template>
  <div>
    <el-dialog title="用户信息修改" ref="userEditDialog"  @close="handleClose">
      <el-form :model="addForm" :rules="addFormRules" ref="addForm" label-width="128px">
        <el-form-item label="用户名" prop="userName">
          <el-col :span="20">
            <el-input v-model="addForm.userName" ></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="真实姓名" prop="realName">
          <el-col :span="20">
            <el-input v-model="addForm.realName"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="手机号" prop="mobile">
          <el-col :span="20">
            <el-input v-model="addForm.mobile"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-col :span="20">
            <el-input v-model="addForm.email"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="密码" prop="password" >
          <el-col :span="20">
            <el-input type="password" v-model="addForm.password"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="确认密码" prop="repeatPwd" >
          <el-col :span="20">
            <el-input type="password" v-model="addForm.repeatPwd"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click.native.prevent="handleClose">取消</el-button>
        <el-button type="primary" @click.native.prevent="handleSubmit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import http from "../../../api/http";

  export default {

    data(){

      return {
        addForm: {
          userName: '',
          realName: '',
          mobile: '',
          email: '',
          password: '',
          repeatPwd: ''
        },
        addFormRules: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
          ],
          realName: [
            { required: true, message: '真实姓名不能为空', trigger: 'blur' },
          ],
          mobile: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
          ],
          password: [
          ],
          repeatPwd: [
          ]
        }
      }
    },

    methods:{
      handleClose () {
        this.$refs.userEditDialog.close()
        this.$refs['addForm'].resetFields()
        this.$parent.selectedUserId = ''
      },
      handleSubmit () {
        const url = '/userservice/modify.html'
        http.post(url,this.addForm).then(()=>{
          this.handleClose()
          this.$parent.onSubmit()
          this.$notify({
            title:'提示',
            message:'修改用户成功!',
            type:'success'
          })
        })
      },
    },
    watch:{
      '$parent.selectedUserId'(){
       // console.log(this.$parent.selectedUserId)
        if(this.$parent.selectedUserId){
          let params = {
            userId:this.$parent.selectedUserId
          }

          const url = 'userservice/query.html'
          http.post(url,params).then((resp)=>{
            this.addForm = resp.body.data[0]
          })
        }
      }
    }

  }

</script>
