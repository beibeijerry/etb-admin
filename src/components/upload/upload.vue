<template>
  <div class="col-md-12">
    <div class="bs-component">
      <div class="input-group">
        <span class="input-group-addon">
        <i class="mr5" :class="icon" v-if="icon"></i>{{label}}
         </span>
        <div class="field input-text form-control" style="text-align:right;">

          <vue-file-upload :url="url"
                           :files="files"
                           :filters="filters"
                           :events="cbEvents"
                           :request-options="reqopts"
                           :autoUpload=true class="btn-primary">


          </vue-file-upload>
          <!--<table>-->
            <!--<thead>-->
            <!--<tr>-->
              <!--<th>name</th>-->
              <!--<th>size</th>-->
              <!--<th>progress</th>-->
              <!--<th>status</th>-->
              <!--<th>action</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="file in files">-->
              <!--<td>{{file.name}}</td>-->
              <!--<td>{{file.size}}</td>-->
              <!--<td>{{file.progress}}</td>-->
              <!--<td>{{onStatus(file)}}</td>-->
              <!--<td>-->
                <!--<button @click="uploadItem(file)"></button>-->
                <!--上传-->
              <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
          <!--</table>-->
          <!--<button @click="uploadAll">上传所有文件</button>-->
        </div>
      </div>
    </div>
  </div>
  </div>

</template>
<script>
  import VueFileUpload from 'vue-file-upload';
  export default{
    name: 'file-upload',
    props: {
      //过滤文件类型,image,video
      filterType: {
        type: String
      },
      label: {
        type: String
      }

    },
    data(){
      return {
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
      VueFileUpload
    }
  }
</script>
