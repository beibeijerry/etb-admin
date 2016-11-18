<template>
  <div class="col-md-12">
    <div class="bs-component">
      <div class="input-group">
        <span class="input-group-addon">
        <i class="mr5" :class="icon" v-if="icon"></i>{{label}}
         </span>
        <label class="field input-text">
          <span class="label label-danger" v-if="required" v-show="error.required">必填</span>
          <span class="label label-danger" v-show="error.pattern">填写无效</span>
          <input class="form-control" type="text"  ref="input"
                 v-bind:value="value"
                 :name="name"
                 :max="maxlength"
                 :required="required"
                 :disabled="isDisabled"
                 v-on:input="updateValue($event.target.value)"
                />
        </label>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default{
    name: 'inputText',
    data () {
      return {
        valid: null,
        error:{}
      }
    },
    props: {
      name: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      icon: {
        type: String,
        default: ""
      },
      maxlength: {
        type: Number,
        default: 50
      },
      value: {
        twoWay: true,
        default: null
      },
      required: {
        type: Boolean,
        default: false
      },
      pattern: {
        type: String,
        default: ''
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      sizeClass: {
        type: String,
        default: ''
      },
      blur: {
        type: Boolean,
        default: false
      }
    },

    computed: {

    },
    watch: {

    },
    created () {

    },
    methods:{
      updateValue: function (value) {
        var formattedValue = value.trim()
        this.$emit('input', formattedValue)
      }
    },
    mounted: function () {

    },
    beforeDestroy () {

    }
  }
</script>
