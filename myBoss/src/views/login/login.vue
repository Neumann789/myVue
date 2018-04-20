<template>
  <div id="loginDiv" class="loginClass">
    <div class="loginFormClass">
    <h1 class="boss-title">运营台</h1>
    <el-form ref="form" :model = "form" :rules="rules" @submit.native.prevent="onSubmit">
      <el-form-item prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button id="loginB" :class="{error:loginError}"
        nativeType="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

  export default{
    components: {
      ElButton,
      ElInput,
      ElFormItem},
    data(){
      return {
        form:{
          name:'',
          password:''
        },
        rules:{
          name:[{
            required:true,message:'请输入用户名',trigger:'blur'
          }],
          password:[{
            required:true,message:'请输入密码',trigger:'blur'
          }]
        },
        loading:false,
        valid:false,
        loginError:false

      }

    },
    methods:{
      onSubmit(){
        this.$refs.form.validate((valid)=>{
          if(valid){
            this.loading = true
            this.$store.dispatch('saveCurrentLoginInfo',this.form).then((resp)=>{
              this.loading = false
              this.$router.replace({path:'/'})
            }).catch(()=>{
              this.loading = false
            })
          }
        })
      }
    }
  }


</script>

<style rel="stylesheet/scss" lang="scss">
  h1{
    position:relative;
    margin:0 0 1rem;
    /*z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。*/
    z-index:1;

  }
  .loginClass{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    width:100%;
    height: 100%;
    padding-top:8%;
    /**
    cover:把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
    背景图像的某些部分也许无法显示在背景定位区域中。
     */
    background-size:cover;
    background-position: 100%;
    background-image:url('../../assets/bg_02.jpg');
    .el-input__inner{
      height:45px;
      width: 100%;
    }
  }




  .loginFormClass{
    width:500px;
    height:350px;
    position:fixed;
    margin:auto;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
  }
  .boss-title{
    text-align: center;
    font-size:40px;
    color: #ffffff;
  }

  #loginB{
    background-color: #f29200;
    border-color: #f29200;
    color: #fff;
    width: 100%;
    font-size:20px;
    font-family: monospace;
  }

</style>
