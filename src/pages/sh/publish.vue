<template>
  <div>
    <date-picker label="开始时间" :date="startTime" :option="option" ></date-picker>
    <vue-summernote ref="editer"></vue-summernote>
    <button @click="setVal">初始化</button>
    <button @click="getVal">获取</button>
  </div>
</template>
<style>

</style>
<script>
  import myDatepicker from 'components/calendar-component/datepicker'
  export default{
    name: 'publish',
    data(){
      return {
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
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '50px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '0px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY-MM-DD HH:mm'
        },
        multiOption: {
          type: 'multi-day',
          week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format:"YYYY-MM-DD HH:mm"
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5]
        },
          {
            type: 'fromto',
            from: '2016-02-01',
            to: '2016-02-20'
          }]
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
        console.log('onChange:', contents)
      })
    },
    methods: {
      setVal () {
        // 设置初始值
        this.$refs.editer.run('code', '这里是富文本的初始值')
      },
      getVal () {
        // 获取初始值
        this.$refs.editer.run('code');
        console.log(this.startTime.time);

      }
    },
    components: {'date-picker': myDatepicker}
  }
</script>
