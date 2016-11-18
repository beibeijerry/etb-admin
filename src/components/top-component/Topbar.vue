<template>
  <header class="navbar navbar-fixed-top navbar-shadow bg-primary">
    <div class="navbar-branding">
      <a class="navbar-brand" href="">
        吃托邦管理平台
      </a>
      <span id="toggle_sidemenu_l" class="ad ad-lines" @click="showSide"></span>
    </div>
    <ul class="nav navbar-nav navbar-left">
      <li class="dropdown menu-merge hidden-xs">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">帮助
          <span class="caret caret-tp"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
          <li><a href="">关于幕然</a></li>
          <li><a href="">更新日志</a></li>
          <li><a href="">问题反馈</a></li>
          <li class="divider"></li>
          <li><a href="">使用说明</a></li>
        </ul>
      </li>
      <li class="hidden-xs">
        <a class="request-fullscreen toggle-active"  @click="fullScreen">
          <span class="ad ad-screen-full fs18"></span>
        </a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">

      <li class="dropdown menu-merge" ng-if="user.userTag === 0 && flag.withdraw">
        <div class="btn-group mt15 mb15">
          <h3 class="pull-left mt5 mr20 ">
            账户余额: ￥<span id="my_balance" count-up ng-model="user.balance" data-num-decimals="0"
                         data-animation-length="3"></span>
          </h3>
          <button class="btn btn-sm pull-right btn-system" ng-click="withDraw()" ng-disabled="!flag.withdraw">
            <i class="glyphicons glyphicons-coins mr5"></i>提现
          </button>
        </div>
      </li>
      <li class="menu-divider hidden-xs">
        <i class="fa fa-circle"></i>
      </li>
      <li class="dropdown menu-merge">


        <a href="" class="dropdown-toggle fw600 p15" data-toggle="dropdown">
          <img src="../../assets/img/avatars/default2.png" alt="avatar" class="mw30 br64">
          <span class="hidden-xs pl15"> {{user.name}} </span>
          <span class="caret caret-tp hidden-xs"></span>
        </a>
        <ul class="dropdown-menu list-group dropdown-persist w250" role="menu">
          <li class="dropdown-header clearfix">
            <div class="pull-left ml10">

            </div>

            <div class="pull-right mr10">

            </div>
          </li>
          <li class="list-group-item">
            <a ui-sref="admin.usercenter.userinfo" class="animated animated-short fadeInUp">
              <span class="fa fa-info"></span> 账户信息
            </a>
          </li>

          <li class="list-group-item">
            <a ui-sref="admin.usercenter.password" class="animated animated-short fadeInUp">
              <span class="fa fa-lock"></span> 密码管理 </a>
          </li>
          <li class="list-group-item" ng-if="user.userTag === 0 && flag.withdraw">
            <a ui-sref="admin.usercenter.withdraw" class="animated animated-short fadeInUp">
              <span class="fa fa-cny"></span> 提款管理 </a>
          </li>
          <li class="dropdown-footer">
            <a href="" class="" ng-click="logout()">
              <span class="fa fa-power-off pr5"></span> 退出 </a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>
<style>
</style>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: 'topbar',
    computed: {
      ...mapGetters({
        user: 'getUserInfo'
      })
    },
    methods: {
      showSide: function (event) {
        event.preventDefault();
        if ($(window).width() < 769) {
          $("body").toggleClass.remove("sb-l-m sb-l-disable-animation");
        } else {
          $("body").toggleClass("sb-l-m sb-l-disable-animation");
        }
      },
      fullScreen:function (e) {
        e.preventDefault();
        console.log($(window).width());
        if ($(window).width() ==="100%") {
          $("html").toggleClass.remove("html-full");
        } else {
          $("html").toggleClass("html-full");
        }
      }
    }
  }

</script>
