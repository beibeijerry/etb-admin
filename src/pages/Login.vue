<template>
<div class="content">
    <div class="admin-form theme-info mw500" id="login">
      <!-- Login Logo -->
      <div class="row table-layout">
        <a href="" title="">
          <img src="../../static/images/property-logo.png" class="center-block img-responsive"
               style="max-width: 275px;">
        </a>
      </div>
      <!-- Login Panel/Form -->
      <div class="panel mt30 mb25" cg-busy="{promise:signinPromise,message:'登录中...'}">
        <div class="panel-body bg-light p25 pb15">
          <!-- Username Input -->
          <div class="section">
            <label for="username" class="field-label text-muted fs18 mb10">用户名</label>
            <label for="username" class="field prepend-icon"
                   ng-class="{'state-error':signinForm.username.$invalid && signinForm.username.$dirty,'state-success':signupForm.username.$valid}">
              <input type="text" name="username" id="username" class="gui-input" placeholder="输入用户名" required
                     v-model="username">
              <label for="username" class="field-icon">
                <i class="fa fa-user"></i>
              </label>
            </label>
          </div>
          <!-- Password Input -->
          <div class="section">
            <label for="username" class="field-label text-muted fs18 mb10">密码</label>
            <label for="password" class="field prepend-icon"
                   ng-class="{'state-error':signinForm.password.$invalid && signinForm.password.$dirty,'state-success':signupForm.password.$valid}">
              <input type="password" name="password" id="password" class="gui-input" placeholder="输入密码" required
                     v-model="password">
              <label for="password" class="field-icon">
                <i class="fa fa-lock"></i>
              </label>
            </label>
          </div>
        </div>
        <div class="panel-footer clearfix">
          <button type="submit" class="button btn-primary mr10 pull-right" ng-disabled="signined" @click="Login">登录
          </button>
          <label class="switch ib switch-primary mt10 ml10">
            <input type="checkbox" name="remember" id="remember" v-model="check">
            <label for="remember" data-on="是" data-off="否"></label>
            <span>记住我</span>
          </label>
        </div>
      </div>
    </div>

</div>
</template>

<script>
  import md5 from 'js-md5'
  import { alert } from 'vue-strap'
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        curYear: '2016',
        check: false,
        username: '',
        password: '',
        companyName: '幕然科技',
        showRight: false,
        showTop: false
      }
    },
    mounted: function () {
      let date = new Date();
      this.curYear = date.getFullYear();
    },
    methods: {
      iCheck: function () {
        this.check = !this.check;
      },
      Login: function () {
        var para = {username: this.username, password: md5(this.password)};
        this.$store.dispatch('adminLogin', para).then((ret)=> {
          this.showTop=true;
          this.$router.push({name: 'main'});
        });
      }
    },
    components: {
      alert
    }
  }


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  margin-left: auto;
  margin-right: auto;
  padding-top: 120px;
}
  #login{
    margin: 0px auto;
  }
</style>
