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
                  <td class="w50" data-title="'性别'">{{item.gender | statesName('gender')}}</td>
                  <td class="mnw100" data-title="'邀请码'">{{item.inviteCode}}</td>
                  <td class="w80" data-title="'已邀请人数'">{{item.inviteCount}}</td>
                  <td class="mnw100" data-title="'注册时间'">{{item.createTime}}</td>
                  <td class="w200" data-title="'操作'">
                    <button class="btn btn-xs btn-success"
                            @click="showDialog(1,item.usId)">详情
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
    <etb-dialog v-if="dialog1Show" type="alert" title="会员信息"
                confirm-button="关闭" cancel-button="不关闭"
                @weui-dialog-confirm="handleDialogAction('确定', 1)"
                @weui-dialog-cancel="handleDialogAction('取消', 1)" :width="width">
      <div style="height:5px"></div>
      <div class="panel" style="margin: 10px 10px">
        <div class="panel-heading">
          <ul class="nav panel-tabs-border panel-tabs panel-tabs-left">
            <li class="active">
              <a href="#tab1_1" data-toggle="tab" aria-expanded="true">会员信息</a>
            </li>

          </ul>
        </div>
        <div class="panel-body">
          <div class="tab-content pn br-n">
            <div id="tab1_1" class="tab-pane active">
              <div class="row">
                <div class="col-md-3">
                  <img :src="the_detail.person.avatar" class="img-responsive thumbnail mr25">
                </div>
                <div class="col-md-9">
                  <table class="table table-striped">
                    <colgroup>
                      <col class="col-xs-2">
                      <col class="col-xs-3">
                      <col class="col-xs-2">
                      <col class="col-xs-3">
                    </colgroup>
                    <tbody>
                    <tr>
                      <td>姓名</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.person.name}}
                        </div>
                      </td>
                      <td>用户名</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.person.username}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>性别</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.person.gender}}
                        </div>
                      </td>
                      <td>手机号</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.person.mobile}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>生日</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.person.birthday}}
                        </div>
                      </td>
                      <td>注册时间</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.person.createTime}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>会员级别</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.relation.grade.name}}
                        </div>
                      </td>
                      <td>邀请码</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.relation.inviteCode}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>邀请人数</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.relation.inviteCount}}
                        </div>
                      </td>
                      <td>最大邀请人数</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.relation.grade.inviteMax}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>红包返佣比例</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.relation.grade.rpBonus}}%
                        </div>
                      </td>
                      <td>充值返佣比例</td>
                      <td>
                        <div class="bs-component">
                          {{the_detail.relation.grade.payBonus}}%
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>余额</td>
                      <td colspan="3">
                        <div class="bs-component">
                          {{the_detail.banlance}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>介绍人</td>
                      <td colspan="3">
                        <div class="bs-component">
                          {{the_detail.relation.intro==null?'':the_detail.relation.intro.person.name}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>邀请地址</td>
                      <td colspan="3">
                        <div class="bs-component">
                          {{the_detail.relation.inviteUrl}}
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </etb-dialog>
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
  import {mapGetters} from 'vuex'
  import moment from 'moment'
  import dialog from '../../components/dialog'
  export default{
    data(){
      return {
        search_info: {
          grade: '',
          startTime: this.startTime,
          endTime: this.endTime
        },
        disabled: [],
        format: 'yyyy-MM-dd ',
        clear: true,
        startTime: '',
        endTime: '',
        placeholder: '',
        dialog1Show: false,
        the_detail: {},
        width: 960
      }
    },
    computed: {
      ...mapGetters({
        members: 'getMembers',
        memberLevels: 'getMemberLevelList',
        the_detail: 'getMemberDetail'
      })
    },

    components: {
      pager,
      'inputText': inputText,
      calendar,
      itemSelect,
      'etbDialog': dialog
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
      },
      showDialog(id, autoId) {
        this[`dialog${id}Show`] = true;
        if (this.dialog1Show) {
          this.getMemberDetail(autoId);
        }

      },
      handleDialogAction(action, id) {
        if (action === '确定') {
          this[`dialog${id}Show`] = false;
        } else {
          alert('你点击了“不关闭”，所以对话框不会消失^^');
        }
      },
      getMemberDetail: function (id) {
        this.$store.dispatch('getMemberDetail', {'autoId': id});
      },
      lock: function (item, islock) {
        this.$store.dispatch('lockUser', {'usId': item.usId, 'lock': islock}).then((ret)=> {
          this.getPageList(this.members.pageIndex);
        })
      }

    }
  }
</script>
