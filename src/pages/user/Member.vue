<template>
  <div>
    <div class="table-layout">
      <!-- begin: .tray-center -->
      <div class="p20 va-t">

        <!-- search -->
        <div class="panel">
          <!-- message toolbar header -->
          <div class="admin-form theme-primary">
            <div class="panel heading-border panel-primary">
              <div class="panel-body bg-light">
                <div class="row">
                  <!-- begin: .tray-right -->
                  <!-- menu quick links -->
                  <div class="col-md-12">
                    <div class="row">
                      <div class="row">
                        <div class="col-md-3">
                          <div class="section">
                            <div class="form-group">
                              <input-text name="txtMemberName" label="会员名称" v-model="search_info.name"></input-text>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="section">
                            <div class="form-group">
                              <calendar label="注册开始时间" :value="startTime" :disabled-days-of-week="disabled"
                                        :format="format"
                                        :clearButton="clear" :placeholder="placeholder"
                                        @on-date-change="dateStartChange"></calendar>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="section">
                            <div class="form-group">
                              <calendar label="注册截止时间" :value="endTime" :disabled-days-of-week="disabled"
                                        :format="format"
                                        :clearButton="clear" :placeholder="placeholder"
                                        @on-date-change="dateEndChange"></calendar>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="section">
                            <div class="form-group">
                              <item-select title="会员级别" :itemData="memberLevels" valKey="grade" nameKey="name"
                                           @on-change="levelChange"></item-select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="section">
                            <div class="form-group">
                              <div class="col-md-12">
                                <button class="button btn-primary btn-md" type="submit" @click="search">查询</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end: .tray-right -->
              </div>
            </div>
          </div>
        </div>
        <!-- table -->
        <div class="panel">
          <div class="panel-body pn">
            <div class="table-responsive">
              <table class="table table-hover admin-form theme-warning tc-checkbox-1 fs13">
                <tbody>
                <tr>
                  <td class="text-center w50" style="text-align: center;height: 35px; line-height: 35px;">序号</td>
                  <td class="w50"> 头像</td>
                  <td class="w200">姓名</td>
                  <td class="mnw100">会员级别</td>
                  <td class="w50">性别</td>
                  <td class="mnw100">邀请码</td>
                  <td class="w80">已邀请人数</td>
                  <td class="mnw100">注册时间</td>
                  <td class="w200">操作</td>
                </tr>
                </tbody>
                <tbody>
                <tr v-for="item in members.data">
                  <td class="text-center w50" data-title="'#'">{{item.usId}}</td>
                  <td class="w50" data-title="'头像'"><img class="img-responsive mw30 ib mr10" :src='item.avatar'>
                  </td>
                  <td class="w200" data-title="'姓名'" sortable="'title'">{{item.name}}</td>
                  <td class="mnw100" data-title="'会员级别'">{{item.gradeName}}</td>
                  <td class="w50" data-title="'性别'">{{item.gender}}</td>
                  <td class="mnw100" data-title="'邀请码'">{{item.inviteCode}}</td>
                  <td class="w80" data-title="'已邀请人数'">{{item.inviteCount}}</td>
                  <td class="mnw100" data-title="'注册时间'">{{item.createTime}}</td>
                  <td class="w200" data-title="'操作'">
                    <button class="btn btn-xs btn-success"
                            @click="entry(item)">详情
                    </button>
                    <button class="btn btn-xs btn-danger" @click="lock(item,true)" v-if="!item.isLock">
                      禁用
                    </button>
                    <button class="btn btn-xs " @click="lock(item,false)" v-if="item.isLock">
                      解封
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--分页-->
          <div style="text-align: center">
            <pager :pageIndex="members.pageIndex" :pageSize="members.pageSize" :pageTotal="members.pageTotal"
                   @on-change="getPageList"></pager>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import pager from '../../components/table-pager/Pager.vue'
  import inputText from '../../components/input-component/input-text.vue'
  import calendar from "../../components/calendar-component/calendar.vue"
  import itemSelect from '../../components/DropdownList/Dropdown.vue'
  import {isUndefined} from '../../components/utils/utils'
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import moment from 'moment'
  export default{
    data(){
      return {
        search_info: {
          grade:'',
          startTime:this.startTime,
          endTime:this.endTime
        },
        disabled: [],
        format: 'yyyy-MM-dd ',
        clear: true,
        startTime: '',
        endTime: '',
        placeholder: '',
      }
    },
    computed: {
      ...mapGetters({
        members: 'getMembers',
        memberLevels: 'getMemberLevelList'
      })
    },

    components: {
      pager,
      'inputText': inputText,
      calendar,
      itemSelect
    },
    mounted: function () {
      this.getLevelList();
      this.getPageList(1);

    },
    methods: {
      dateStartChange: function (val) {
        this.search_info.startTime = isUndefined(val) || val === '' ? null : moment(val).format('YYYY-MM-DD HH:mm:ss');

      },
      dateEndChange: function (val) {
        this.search_info.endTime = isUndefined(val) || val === '' ? null : moment(val).format('YYYY-MM-DD HH:mm:ss');
      },
      levelChange: function (val) {
        this.search_info.grade = val;
      },
      search: function () {
        this.getPageList(1);
      },
      getPageList: function (curPage) {
        var para = {pageIndex: curPage, pageSize: this.members.pageSize, ...this.search_info};
        this.$store.dispatch('getMembers', para);
      },
      getLevelList: function () {
        this.$store.dispatch('getMemberLevelList');
      }
    }
  }
</script>
