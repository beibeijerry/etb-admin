<template>
  <div class="col-md-12">
    <div class="bs-component">
      <div class="input-group">
        <span class="input-group-addon">
         <i class="mr5" :class="icon" v-if="icon"></i>{{label}}
        </span>
          <!--<input class="field file" v-show="!isButton" :class="{'state-error':!isValid}">-->
          <!--<span class="button btn-primary"> {{title}}</span>-->
          <!--<input type="file" class="gui-file" v-model="selected" >-->
          <!--<input type="text"-->
                 <!--class="gui-input"-->
                 <!--:placeholder="placeholder"-->
                 <!--v-model="result"-->
                 <!--required="isRequired">-->
        <!--</label>-->
        <!--<button v-model="selected"-->
                <!--class="btn btn-default"-->
                <!--v-show="isButton">-->
          <!--{{title}}-->
        <!--</button>-->
      </div>
    </div>
  </div>

</template>
<script>

  export default{
    name: 'file-upload',
    props: {
      //过滤文件类型,image,video
      filterType: {
        type: String
      },
      label: {
        type: String
      },
      title: {
        type: String
      },
      placeholder:{
        type:String
      }

    },
    data(){
      return {
        isButton:true,
        result:{},
        selected:[],
        files: [],
        //文件过滤器，只能上传图片
        filters: [
          {
            name: "imageFilter",
            fn(file){
              var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
          }
        ],
        //回调函数绑定
        cbEvents: {
          onCompleteUpload: (file, response, status, header)=> {
            console.log(file);
            console.log("finish upload;")
          }
        },
        //xhr请求附带参数
        reqopts: {
          formData: {
            tokens: 'tttttttttttttt'
          },
          responseType: 'json',
          withCredentials: false
        },
        url: 'https://' + window.shop.domain + 'sys/files/upload'
      }
    },
    methods: {
      onStatus(file){
        if (file.isSuccess) {
          return "上传成功";
        } else if (file.isError) {
          return "上传失败";
        } else if (file.isUploading) {
          return "正在上传";
        } else {
          return "待上传";
        }
      },
      uploadItem(file){
        //单个文件上传
        file.upload();
      },
      uploadAll(){
        //上传所有文件
        this.$broadcast('DO_POST_FILE');
      }
    },
    components: {
    }
  }
</script>
