<template>
  <div>
    <transition>
      <!-- 路由外链 -->
      <router-view></router-view>
    </transition>
    <alert :type="alertData.type"
      width="400px"
      placement="top-right"
      :dismissable="true"
      :show="alertData.show">
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>{{alertData.msg}}</strong>
    </alert>
  </div>
</template>

<script>
  import alert from './components/alert'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    data(){
      return {
      }

    },
    computed: {
      ...mapGetters({
        alertData: 'getAlert'
      })
    },
    components: {
      alert
    }

  }

</script>

<style>

</style>
