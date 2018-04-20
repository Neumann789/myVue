<template>
  <div id="userDiv">
      <el-form ref="form" :model="queryData" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="用户名:">
              <el-input v-model="queryData.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号:">
              <el-input v-model="queryData.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <el-form-item>
              <el-button type="primary" @click.native="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"  @click.native ="userAdd"><el-button type="success">新增</el-button></el-col>
        </el-row>
      </el-form>

    <el-table
      :data="userList"
      border
      style="width: 100%"
      :default-sort = "{prop: 'createTime', order: 'descending'}"
    >
      <el-table-column
        prop="userName"
        label="用户名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="realName"
        label="真实姓名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        align="center"
        label="手机号"
        :formatter="formatter">
      </el-table-column>

      <el-table-column
        property="email"
        label="邮箱"
        align="center">
      </el-table-column>
      <el-table-column
        property="createTime"
        label="创建时间"
        sortable
        align="center">
      </el-table-column>
      <el-table-column
        property="modifyTime"
        label="更新时间"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="130"
        align="center">
        <template slot-scope="scope">
                <span>
                    <el-button size="mini" type="primary" plain @click="userEdit(scope.row.userId)" href="javascript:;">修改</el-button>
                    <el-button size="mini" type="primary" @click="handleResetPwd(row.userId)" href="javascript:;">重置密码</el-button>
                    <el-button size="mini" type="primary" @click="handleAllotRole(row.userId)" href="javascript:;">分配角色</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(row.userId)" href="javascript:;">删除</el-button>
                </span>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-class">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="10"
        background
        layout="total,  prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
    <UserAddDialog ref="userAddDialog"></UserAddDialog>
    <UserEditDialog ref="userEditDialog"></UserEditDialog>
  </div>
</template>

<script>

  import ElRow from "element-ui/packages/row/src/row";
  import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item.vue";
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";
  import http from "../../../api/http";
  import UserAddDialog from './user.add.vue'
  import UserEditDialog from './user.edit.vue'

  export default {

    components: {
      ElButton,
      ElFormItem,
      ElRow,
      UserAddDialog,
      UserEditDialog
    },
    data(){
      return {
        selectedUserId: '',
        queryData:{
          userName:"",
          mobile: '',
          pageNo: 1,
          pageSize: 10
        },
        userList: [],
        totalCount: 0
      }
    },
    methods:{
      onSubmit(){
        const url = '/userservice/querybypage.html'
        http.post(url,this.queryData).then((resp)=>{
          this.userList = resp.body.data.list
          this.totalCount = resp.body.data.totalCount
        })
      },
      userAdd(){
       //console.log(this.$refs.dialog.$refs.addUserDialog)
        this.$refs.userAddDialog.$refs.userAddDialog.open()
      },
      handleCurrentChange (val) {
        this.queryData.pageNo = val
        this.onSubmit()
      },
      userEdit(userId){
        //console.log(row)
        this.selectedUserId = userId;
        this.$refs.userEditDialog.$refs.userEditDialog.open()
      }
    },
    mounted(){
      this.onSubmit()
    }

  }

</script>

<style>
  .pagination-class{
    margin: 18px;
  }

</style>
