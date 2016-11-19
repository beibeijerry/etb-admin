<template>
  <div :class="'weui_dialog_' + type" >
    <div class="weui_mask"></div>
    <div class="weui_dialog" :class="'dialog-width-'+width" >
      <!--<div class="weui_dialog_hd">-->
      <!--<div class="weui_dialog_title">{{title}}</div>-->
      <!--</div>-->
      <div class="panel-heading" style="text-align: left">
              <span class="panel-icon">
                <i class="fa fa-pencil"></i>
              </span>
        <span class="panel-title">{{title}}</span>
      </div>
      <div class="panel-body">
        <slot></slot>
      </div>
      <div class="panel-footer text-right">
        <a v-if="type === 'confirm'" href="javascript:;" class="btn"
           @click="dispathEventAndClose('weui-dialog-cancel')">{{cancelButton}}</a>
        <a href="javascript:;" class="btn btn-success" @click="dispathEventAndClose('weui-dialog-confirm')">{{confirmButton}}</a>
      </div>
    </div>
  </div>
</template>
<style>
  .dialog-width-500{
    width: 560px;
  }
  .dialog-width-760{
    width: 760px;
  }
  .dialog-width-860{
    width: 860px;
  }

  .dialog-width-960{
    width: 960px;
  }
  .dialog-width-1060 {
    width: 1060px;
  }
  .dialog-width-1160{
      width: 1160px;
  }
  .dialog-width-1260{
    width: 1260px;
  }
</style>
<script>
  export default {
    name: 'etb-dialog',
    props: {
      /**
       * 对话框类型
       * alert: 提示框，只包含确定按钮（默认）
       * confirm: 询问框，包含确定和取消按钮
       */
      type: {
        type: String,
        required: false,
        default: 'alert'
      },
      /**
       * 对话框标题
       */
      title: {
        type: String,
        required: true
      },

      /**
       * 对话框宽度
       * */
      width:{
        type:Number,
        default:960
      },

      /**
       * 确定按钮名称
       */
      confirmButton: {
        type: String,
        required: false,
        default: '确定'
      },
      /**
       * 取消按钮名称
       */
      cancelButton: {
        type: String,
        required: false,
        default: '取消'
      }
    },
    methods: {
      dispathEventAndClose(event) {
        this.$emit(event);
      }
    }
  }
</script>
