<template>
  <div class="table-layout">

    <!-- begin: .tray-center -->
    <div class="p20 va-t">

      <!-- list table -->
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
                            <div class="col-lg-12">
                              <div class="bs-component">
                                <div class="input-group">
                                  <span class="input-group-addon">姓名</span>
                                  <input type="text" name="keyword" id="keyword" class="form-control"
                                         ng-model="the_search.name">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="section">
                          <div class="form-group">

                            <div daterange-select="start_time"
                                 value="datePicker.startTime"
                                 label="注册开始时间"
                                 time-picker="true"
                                 format="YYYY-MM-DD HH:mm"
                                 single="true"
                                 on-change="dateChange"
                                 max-date="datePicker.endTime.startDate"></div>

                          </div>
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="section">
                          <div class="form-group">

                            <div daterange-select="end_time"
                                 value="datePicker.endTime"
                                 label="注册结束时间"
                                 time-picker="true"
                                 format="YYYY-MM-DD HH:mm"
                                 single="true"
                                 on-change="dateChange"
                                 min-date="datePicker.startTime.startDate"
                                 need="datePicker.startTime"></div>

                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="row">
                      <!--<div class="col-md-3">-->
                      <!--<div class="section">-->
                      <!--<div class="form-group">-->
                      <!--<div input-text="title" value="the_search.agCode" label="经销商编号"></div>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->
                      <div class="col-md-3">
                        <div class="section">
                          <div class="form-group">
                            <div item-select item-data="memberLevel" selected-value="the_search.grade" title="会员级别"
                                 name-key="name" val-key="grade" required="false" disabled="false"></div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="section">
                          <div class="form-group">
                            <div class="col-md-12">
                              <button class="button btn-primary btn-md" type="submit" ng-click="search()">查询</button>
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
      <!-- message listings table -->

    </div>
  </div>

</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
