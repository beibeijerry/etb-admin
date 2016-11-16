<template>
  <div class="topbar-left">
    <ol class="breadcrumb">
      <li class="crumb-active">
        <router-link :to="current_node.href">{{current_node.text}}</router-link>
      </li>
      <li class="crumb-icon">
        <a ui-sref="dashboard">
          <span class="glyphicon glyphicon-home"></span>
        </a>
      </li>

      <li v-for="(crumb,index) in breads" :class="{'crumb-link':!is_trail(index),'crumb-trail':is_trail(index)}">
        <router-link :to="crumb.href" v-if="!is_trail(index)">{{crumb.text}}</router-link>
        <span v-if="is_trail(index)">{{crumb.text}}</span>
      </li>
    </ol>
  </div>

</template>
<style>

</style>
<script>
  import {bread} from '../config'
  import { mapGetters } from 'vuex'
  export default{
    name: 'breadcrumb',
    computed: {
      ...mapGetters({
        current_node: 'getCurrNode',
        breads: 'getBreads'
      })
    },
    methods: {
      is_trail: function (index) {
        return index == this.breads.length - 1;
      }
    },
    components: {}
  }
</script>
