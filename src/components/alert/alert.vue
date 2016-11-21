<template>
  <div v-if="showAlert" :class="{
      'alert':		true,
      'alert-success':(claType == 'success'),
      'alert-warning':(claType == 'warning'),
      'alert-info':	(claType == 'info'),
      'alert-danger':	(claType == 'danger'),
      'top': 			(placement === 'top'),
      'top-right': 	(placement === 'top-right')
    }" transition="fade" :style="{width:width}" role="alert">
    <button v-show="dismissable" type="button" class="close"
            @click="showAlert = false">
      <span>&times;</span>
    </button>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        showAlert: false,
        duration: 1500,
        claType:'success'
      }
    },
    props: {
      type: {
        type: String,
        default:'success'
      },
      dismissable: {
        type: Boolean,
        default: false,
      },
      show: {
        type: Boolean,
        default: true
      },
      width: {
        type: String
      },
      placement: {
        type: String
      }
    },
    watch: {
      show(val) {
        this.showAlert = val;
        if (this._timeout)
          clearTimeout(this._timeout);
        if (val) {
          this._timeout=setTimeout(this.cancel,this.duration);
        }
      },
      type(val){
        console.log(val);
        this.claType=val;
      }

    },
    methods: {
      cancel: function () {
          let al = {show: false, msg: ''};
          this.$store.dispatch('showAlert', al);
      }
    }
  }


</script>

<style>

  .fade-enter-active {

  }

  .fade-leave-active {
    opacity: 0;
  }

  .alert.top {
    position: fixed;
    top: 30px;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .alert.top-right {
    position: fixed;
    top: 30px;
    right: 50px;
    z-index: 2;
  }


</style>
