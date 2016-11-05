<template>
  <div>
    <Topbar></Topbar>
    <!-- Main Wrapper -->
    <div id="wrapper">
      <div class="normalheader transition animated fadeIn small-header">
        <div class="hpanel tour-1">
          <div class="panel-body">
            <div id="hbreadcrumb" class="pull-left-center">
              <ol class="hbreadcrumb breadcrumb">
                <li v-for="item in menu">
                  <router-link to="item.path">{{item.name}}</router-link>
                </li>

              </ol>
            </div>
          </div>
        </div>
      </div>
      <div id="app">
        <!-- 路由外链 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
    body{
        background-color:#cecece;
    }

</style>
<script>
    import Topbar from '../components/top-component/Topbar.vue'
    export default{
        name:'main',
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {
            Topbar
        },
    }

</script>
