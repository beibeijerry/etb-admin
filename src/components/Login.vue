<template>
  <div>
    <div class="color-line"></div>
    <div class="login-container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center m-b-md">
            <h3>吃托邦</h3>
            <small>后台管理系统!</small>
          </div>
          <div class="hpanel">
            <div class="panel-body">
              <form id="loginForm" method="post">
                <div class="form-group">
                  <label class="control-label" for="username">用户名：</label>
                  <input type="text" placeholder="example@gmail.com" title="Please enter you username"
                         required="" value="" name="username" id="username" class="form-control"
                         v-model="username">
                  <!--<span class="help-block small">Your unique username to app</span>-->
                </div>
                <div class="form-group">
                  <label class="control-label" for="password">密码：</label>
                  <input type="password" title="Please enter your password" placeholder="******"
                         required="" value="" name="password" id="password" class="form-control"
                         v-model="password">
                  <!--<span class="help-block small">Yur strong password</span>-->
                </div>

                <div class="checkbox">
                  <!--<input type="checkbox" class="i-checks" checked>-->

                  <div class="icheckbox_square-green" :class="{'checked':check}"
                       style="position: relative;" @click="iCheck">
                    <input type="checkbox" class="i-checks" v-bind="check"
                           style="position: absolute; opacity: 0;">
                    <ins class="iCheck-helper"
                         style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins>
                  </div>
                  记住我
                </div>
                <button class="btn btn-success btn-block" @click="Login">登陆</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <!--{{curYear}} Copyright {{companyName}}-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
