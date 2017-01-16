<template>
  <div class="upload">

        <span class="btn btn-success fileinput-button">
            <i class="glyphicon glyphicon-plus"></i>
            <span>上传</span>
            <input class="fileupload" type="file" name="file" hidden="true">
        </span>

    <div class="progress" >
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0"
           aria-valuemax="100" :style="{width:progress}">
        <span class="sr-only">{{progress}}% Complete</span>
      </div>
    </div>
    <div class="preview" v-if="fileType=='img'">
      <div class="upload-image mw140 mr20 mb20" v-for="f in rData" v-show="rData.length > 0">
        <img :class="item-clip" :src="f.fullImageUrl" v-if="f.fileName"/>
        <a class="badge badge-danger" v-if="f.uploaded" @click="deleteUploadFile(index,f)">x</a>
      </div>
    </div>
  </div>
</template>
<script>
  import lodash from 'lodash'
  export default{
    name: 'file-upload',
    props: {
      fileType:{type:String},
      // 上传选项
      uploadOptions: {
        type: Object,
        default () {
          // 同时使用多个组件 instance
          let upload = this;
          let headers = {};
          var sessionId = window.sessionStorage.getItem("sessionId");
          if (sessionId != null)
            headers['session-id'] = sessionId;
          headers['user-sys'] = 'admin';
          headers['version'] = 'admin';
          headers['client-ip'] = 'admin';
          headers['client-key'] = 'admin';
          headers['client-net-env'] = 'admin';
          return {
            url: 'https://' + window.shop.domain + '/api/sys/files/upload',
            headers: headers,
            dataType: 'json',
            progress (e, data) {
              upload.progress = parseInt(data.loaded / data.total * 100, 10) + '%';
              if(parseInt(data.loaded / data.total * 100, 10) ==100)
              {
                upload.progress='0%';
              }
            },
            done (e, data)  {
              upload.rData.push({fileName:data.result.value,fullImageUrl:'http://'+window.shop.img+'/'+data.result.value,uploaded:true})
              upload.text = '上传成功';
              upload.progress = parseInt(data.loaded / data.total * 100, 10) + '%';
              let tmp = [];
              lodash.forEach(upload.rData, function (f) {
                tmp.push(f.fileName);
              });
              upload.returnData.val = tmp.join(',');
              console.log(upload.returnData.val);
            },
            fail (e, data) {
              console.log(e);
            }
          }
        }
      },
      returnData: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    watch: {
      returnData: function (val) {
        this.rData = val;
      }
    },
    mounted () {
      this.init()
    },
    data () {
      return {
        text: '',
        prefix_url: '',
        progress: '0%',
        rData: []
      }
    },
    methods: {
      init () {
        this.progress = '0%';
        $(this.$el).find('input.fileupload').fileupload(this.uploadOptions);
      },
      deleteUploadFile:function (index,file) {
        this.rData.splice(index,1);
      }
    }
  }
</script>
