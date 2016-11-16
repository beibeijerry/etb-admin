<template>
  <aside id="sidebar_left" class="nano nano-light affix sidebar-light">

    <!-- Start: Sidebar Left Content -->
    <div class="sidebar-left-content nano-content">

      <!-- Start: Sidebar Header -->
      <header class="sidebar-header">

        <!-- Sidebar Widget - Author -->
        <div class="sidebar-widget author-widget">
          <div class="media">
            <a class="media-left" href="">
              <img src="../../assets/img/avatars/default2.png" class="img-responsive">
            </a>
            <div class="media-body">
              <div class="media-links">
                <a ui-sref="admin.usercenter.userinfo" class="sidebar-menu-toggle">用户中心</a> - <a href=""
                                                                                                 ng-click="logout()">退出</a>
              </div>
              <div class="media-author">{{user.name}}</div>
            </div>
          </div>
        </div>

      </header>
      <!-- End: Sidebar Header -->

      <!-- Start: Sidebar Left Menu -->
      <ul class="nav sidebar-menu">
        <li v-for="menu in menus_data"  v-bind:class="{'sidebar-label pt20':menu.is_group,'active':(menu.isActive)}">
          <span v-if="menu.is_group">{{menu.name}}</span>
          <a class="accordion-toggle" v-if="menu.is_menu" :class="{'menu-open':menu.isOpen}">
            <span class="mr20" :class="menu.icon"></span>
            <span class="sidebar-title">{{menu.name}}</span>
            <span class="caret"></span>
          </a>
          <router-link :to="menu.path" v-if="menu.is_fold1">
            <span class="mr20" :class="menu.icon"></span>
            <span class="sidebar-title">{{menu.name}}</span>
          </router-link>
          <ul class="nav sub-nav" v-if="menu.is_menu">
            <li v-for="fold in menu.menus" @click="subActive(fold)" :class="{'active':fold.isActive}">
              <router-link :to="fold.path" v-if="fold.is_fold1">
                <span class="mr20" :class="fold.icon"></span>
                <span class="sidebar-title">{{fold.name}}</span>
              </router-link>
              <a class="accordion-toggle" v-if="fold.is_fold" :class="{'menu-open':fold.isOpen}">
                <span class="mr20" :class="fold.icon"></span>
                <span class="sidebar-title">{{fold.name}}</span>
                <span class="caret"></span>
              </a>
              <ul class="nav sub-nav" v-if="fold.is_fold">
                <li v-for="sub in fold.menus" @click="subActive(sub)" :class="{'active':sub.isActive}">
                  <router-link :to="sub.path">
                    <span class="mr20" :class="sub.icon"></span> {{sub.name}}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
          <a class="accordion-toggle" v-if="menu.is_fold" :class="{'menu-open':menu.isOpen}">
            <span class="mr20" :class="menu.icon"></span>
            <span class="sidebar-title">{{menu.name}}</span>
            <span class="caret"></span>
          </a>
          <ul class="nav sub-nav" v-if="menu.is_fold">
            <li v-for="sub in menu.menus" @click="subActive(sub)"  v-bind:class="{active:sub.isActive}">
              <router-link :to="sub.path" >
                <span :class="sub.icon"></span> {{sub.name}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- End: Sidebar Left Menu -->

      <!-- Start: Sidebar Collapse Button -->
      <div class="sidebar-toggle-mini">
        <a href="">
          <span class="fa fa-sign-out"></span>
        </a>
      </div>
      <!-- End: Sidebar Collapse Button -->

    </div>
    <!-- End: Sidebar Left Content -->

  </aside>

</template>
<style>

</style>

<script>
  import {menus} from '../config'
  var flat = [];
  var flatMenu = function (menus) {
    flat = [];
    for (let i = 0; i < menus.length; i++) {
      let value = menus[i];
      if (value.type === 'group') {
        value.isOpen = true;
        flat.push({name: value.name, type: value.type, is_group: true, isShow: value.isShow});
        flatFunction(value);
      }
    }
    return flat;
  };
  var flatFunction = function (menu) {
    if (menu.menus != null) {
      for (let j = 0; j < menu.menus.length; j++) {
        let sub = menu.menus[j];
        sub.parent = menu;
        sub.isActive=false;
        if (sub.type === 'fold1') {
          sub.is_fold1 = true;
        }
        if (sub.type === 'menu') {
          sub.is_menu = true;
        }
        if (sub.type === 'fold') {
          sub.is_fold = true;
        }
        flat.push(sub);
        flatFunction(sub);
      }
    }
  }

  var initMenu = function () {
    $('.sidebar-menu li a.accordion-toggle').on('click', function (e) {
      e.preventDefault();

      // If the clicked menu item is minified and is a submenu (has sub-nav parent) we do nothing
      if ($('body').hasClass('sb-l-m') && !$(this).parents('ul.sub-nav').length) {
        return;
      }

      // If the clicked menu item is a dropdown we open its menu
      if (!$(this).parents('ul.sub-nav').length) {

        // If sidebar menu is set to Horizontal mode we return
        // as the menu operates using pure CSS
        if ($(window).width() > 900) {
          if ($('body.sb-top').length) {
            return;
          }
        }

        $('a.accordion-toggle.menu-open').next('ul').slideUp('fast', 'swing', function () {
          $(this).attr('style', '').prev().removeClass('menu-open');
        });
      }
      // If the clicked menu item is a dropdown inside of a dropdown (sublevel menu)
      // we only close menu items which are not a child of the uppermost top level menu
      else {
        var activeMenu = $(this).next('ul.sub-nav');
        var siblingMenu = $(this).parent().siblings('li').children('a.accordion-toggle.menu-open').next('ul.sub-nav')

        activeMenu.slideUp('fast', 'swing', function () {
          $(this).attr('style', '').prev().removeClass('menu-open');
        });
        siblingMenu.slideUp('fast', 'swing', function () {
          $(this).attr('style', '').prev().removeClass('menu-open');
        });
      }

      // Now we expand targeted menu item, add the ".open-menu" class
      // and remove any left over inline jQuery animation styles
      if (!$(this).hasClass('menu-open')) {
        $(this).next('ul').slideToggle('fast', 'swing', function () {
          $(this).attr('style', '').prev().toggleClass('menu-open');
        });
      }

    });

  };

  var data = [];
  export default{
    data(){
      return {
        user: {name: 'admin'},
        menus_data: data,
        isActive: false,
      }
    },
    beforeCreate: function () {
      data = flatMenu(menus);
    },
    mounted: function () {
      initMenu();
    },
    methods: {
      subActive: function (sub) {
        for (let m of this.menus_data) {
          if (m.name === sub.name && m.type === sub.type) {
            m.isActive=true;
          }else {
            m.isActive=false;
          }
          this.isActive=m.isActive;
        }
        if (sub.isOpen) {
          sub.parent.isOpen = true;
        }
        var para=this.$router.currentRoute;
        this.$store.dispatch('updateBread', para);
        return sub;
      }

    },
    props: {}
    ,
    components: {}
  }


</script>
