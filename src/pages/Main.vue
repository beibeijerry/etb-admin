<template>
  <div>
    <Topbar></Topbar>
    <Menubar></Menubar>
    <section id="content_wrapper" class="fill">
      <!-- Start: Topbar -->
      <header id="topbar" class="alt">
          <breadcrumb></breadcrumb>
      </header>
      <!-- End: Topbar -->

      <section id="content" class="pn fill">
        <router-view></router-view>
      </section>
      <!-- content -->
    </section>
  </div>
</template>
<style>

</style>
<script>
    import Topbar from '../components/top-component/Topbar.vue'
    import Menubar from '../components/menu-component/Menubar.vue'
    import Breadcrumb from '../components/bread-crumb/Breadcrumb.vue'

    export default{
        name:'main',
        data(){
            return{

            }
        },
        mounted:function () {

        },
        components: {
            Topbar,
            Menubar,
            Breadcrumb
        },
        methods: {

        }
    }



</script>
