<template>
  <div class="col-md-12">
    <div class="bs-component">
      <div class="input-group">
        <span class="input-group-addon">{{title}}</span>
        <label class="field select">

          <select v-model="selectValue">
            <option :value="item.val" v-for="item in selectData">{{item.name}}</option>
          </select>

          <i class="arrow"></i>
        </label>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>

  export default{
    props: {
      title: {
        type: String
      },
      itemData: {
        type: Array
      },
      valKey: {
        type: String
      },
      nameKey: {
        type: String
      },
      value: {
        type: String
      }
    },
    computed: {
      selectData: function () {
        let d = [];
        for (let model of this.itemData) {
          let m = {};
          for (var p in model) {
            if (p === this.valKey) {
              m.val = model[p];
            }
            if (p === this.nameKey) {
              m.name = model[p];
            }
          }
          d.push(m);
        }
        return d;
      },
      selectValue: {
        get () {
          if (this.value === "") {
            this.selectData[0].val='';
            return '';
          }
          return this.value;
        },
        set(val) {
          this.changeValue(val);
        }
      }
    },
    methods: {
      changeValue: function (val) {
        this.$emit('on-change', val);
      }
    },
    beforeDestroy () {
      this.changeValue(this.selectData[0].val);
    },
  }
</script>
