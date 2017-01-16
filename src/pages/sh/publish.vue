<template>
  <div>

    <div class="row">
      <date-picker label="开始时间" :date="startTime" :option="option" ></date-picker>
    </div>

    <vue-summernote ref="editer"></vue-summernote>
    <button @click="setVal">初始化</button>
    <button @click="getVal">获取</button>
    <div class="row">
      <div class="col-md-4">
        <file-upload :returnData="result" fileType="img"></file-upload>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import myDatepicker from 'components/calendar-component/datepicker'
  import upload from 'components/upload'

  export default{
    name: 'publish',
    data(){
      return {
        result:{val:''},
        startTime: {
          time: ''
        },
        endtime: {
          time: ''
        },
        option: {
          type: 'min',
          week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY-MM-DD HH:mm',
          placeholder: '请选择时间',
          buttons: {
            ok: '确定',
            cancel: '取消'
          }
        },
        richText:'',
        action:'https://' + window.shop.domain + 'sys/files/upload'
      }
    },
    created () {
      this.$on('onImageUpload', function (files) {
//        if (files && files.length) {
//          for (var i = 0; i < files.length; i++) {
//            Upload.upload({
//              // 上传服务器地址
//              url: config.global.nc_server + config.global.upload_service,
//              sendFieldAs: 'form',
//              file: files[i]
//            }).success(function (data, status, headers, config) {
//
//              $scope.editor.summernote('insertImage', $scope.fileDomin + data.value, function ($image) {
//                $image.css('width', '50%');
//                $image.addClass('lazy');
//              });
//
//            });
//          }
//        }
        // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
        this.$refs.editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
      });
      this.$on('onChange', function (contents) {
        // 当富文本框内容发生变化时做什么事
        this.richText=contents;
        console.log('onChange:', this.richText)
      });

    },
    methods: {
      setVal () {
        // 设置初始值
        this.$refs.editer.run('code', '这里是富文本的初始值')
      },
      getVal () {
        // 获取初始值
        this.$refs.editer.run('code');
        console.log(this.startTime.time,this.result);

      }
    },
    components: {
      'date-picker': myDatepicker,
      'file-upload':upload
    }
  }
</script>
