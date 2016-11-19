<template>
  <ul class="pagination mt5 mb5">
    <li class="paginate_button previous" :class="{'disabled': noPrev()}"><span @click="selectHome">首页</span></li>
    <li class="paginate_button previous" :class="{'disabled': noPrev()}"><span @click="selectPrev()">上一页</span></li>
    <li class="paginate_button" v-for="p in pages" :class="{'active':isActive(p)}"><span
      @click="selectPage(p)">{{p}}</span>
    </li>
    <li class="paginate_button next" :class="{'disabled':noNext()}"><span @click="selectNext()">下一页</span>
    </li>
    <li class="paginate_button next" :class="{'disabled': noNext()}"><span @click="selectEnd">末页</span></li>
  </ul>

</template>
<style>
  .pagination > li > span {
    cursor: pointer;
  }
</style>
<script>
  export default{
    name: 'pager',
    data(){
      return {
        curPage: 1
      }
    },
    props: {
      pageIndex: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pageTotal: {
        type: Number,
        default: 1
      }
    },

    computed: {
      pages: function () {
        let pages = [];
        var maxSize=10
        if (maxSize > this.pageTotal) {
          maxSize = this.pageTotal;
        }
        var startPage = this.curPage - Math.floor(maxSize / 2);

        if (startPage < 1) {
          startPage = 1;
        }
        if ((startPage + maxSize - 1) > this.pageTotal) {
          startPage = startPage - ((startPage + maxSize - 1) - this.pageTotal);
        }
        for (var i = 0; i < maxSize && i < this.pageTotal; i++) {
          pages.push(startPage + i);
        }
        return pages;
      }
    },
    watch: {
      pageIndex: function (val) {
        this.curPage = val;
      }
    },
    methods: {
      noPrev: function () {
        return this.curPage === 1;
      }
      ,
      noNext: function () {
        return this.curPage === this.pageTotal;
      }
      ,
      selectPage: function (page) {
        this.curPage = page;
        this.$emit('on-change', page);
      }
      ,
      isActive: function (page) {
        return this.curPage === page;
      }
      ,
      selectPrev: function () {
        if (!this.noPrev()) {
          this.selectPage(this.curPage - 1);
        }
      }
      ,
      selectNext: function () {
        if (!this.noNext()) {
          this.selectPage(this.curPage + 1);
        }
      },
      selectHome: function () {
        if (!this.noPrev()) {
          this.selectPage(1);
        }
      },
      selectEnd: function () {
        if (!this.noNext()) {
          this.selectPage(this.pageTotal);
        }
      }

    }
  }
</script>
