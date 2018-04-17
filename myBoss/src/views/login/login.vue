<template>
  <div id="loginDiv">
    <h1>运营台</h1>
    <el-form ref="form" :model = "form" :rules="rules" @submit.native.prevent="onSubmit">

    </el-form>
  </div>
</template>

<script>
  export default{


    data(){
      return {
        form:{
          name:'',
          password:''
        },
        rules:{
          name:[{
            required:true,message:'请输入用户名',trigger:'blur'
          }]
        }

      }

    },

  }


</script>
