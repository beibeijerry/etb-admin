<template>
  <div>
    <vue-summernote ref="editer"></vue-summernote>
    <button @click="setVal">初始化</button>
    <button @click="getVal">获取</button>
  </div>
</template>
<style>

</style>
<script>

  export default{
    name:'publish',
    data(){
      return {
        msg: 'hello vue'
      }
    },
    created () {
      this.$on('onImageUpload', function (files) {
        // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
        this.$refs.editer.run('insertImage', 'http://vuefe.cn/images/logo.png')
      })
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
        this.$refs.editer.run('code')
      }
    },
    components: {}
  }
</script>
