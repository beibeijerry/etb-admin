/**
 * Created by muran001 on 16/11/14.
 */
export const menus=[

  {
    name: '功能菜单', type: 'group', menus: [
    {
      name: '会员管理', type: 'fold', icon: 'imoon imoon-users2', menus: [
      {name: '会员管理', type: 'sub', icon: 'imoon imoon-users', path: '/member'},
      {name: '会员级别设置', type: 'sub', icon: 'imoon imoon-feed', path: '/memberLevel'}
      ]
    },
    {
      name: '账户管理', type: 'fold', icon: 'imoon imoon-notebook', menus: [
      {name: '账单查询', type: 'sub', icon: 'imoon imoon-copy2', path: 'admin.ac.order'},
      {name: '账户统计', type: 'sub', icon: 'imoon imoon-stats', path: 'admin.ac.stat'},
      {name: '系统对账', type: 'sub', icon: 'imoon imoon-checkmark', path: 'admin.ac.check'}
    ]
    },
    {
      name: '商城管理', type: 'fold', icon: 'imoon imoon-cart3', menus: [
      {name: '发布宝贝', type: 'sub', icon: 'imoon imoon-quill', path: '/publish'},
      {name: '仓库管理', type: 'sub', icon: 'imoon imoon-cabinet', path: 'admin.goods.warehouse'},
      {name: '订单管理', type: 'sub', icon: 'imoon imoon-file2', path: 'admin.goods.order'},
      {name: '退换货', type: 'sub', icon: 'imoon imoon-file2', path: 'admin.goods.afterorder'},
      {name: '评论管理', type: 'sub', icon: 'imoon imoon-bubbles2', path: 'admin.goods.comment'},
      {name: '首页轮播', type: 'sub', icon: 'imoon imoon-dice', path: 'admin.goods.homesetting'},
      {name: '分类管理', type: 'sub', icon: 'imoon imoon-bookmarks', path: 'admin.goods.category'},
      {name: '退货管理', type: 'sub', icon: 'imoon imoon-file2', path: 'admin.goods.refundOrder'}
    ]
    }
  ]
  }
]

export const bread={
  'welcome': {parent: '', text: '吃托邦管理平台', href: '/welcome'},
  'member': {parent: 'welcome', text: '会员管理', href: '/member'},
  'memberLevel': {parent: 'welcome', text: '会员级别设置', href: '/memberLevel'},

  'admin.rp.set': {parent: 'admin.welcome', text: '摇红包设置', href: 'admin.rp.set'},
  'admin.rp.vip': {parent: 'admin.welcome', text: '发VIP红包', href: 'admin.rp.vip'},
  'admin.rp.check': {parent: 'admin.welcome', text: '签到配置', href: 'admin.rp.check'},
  'admin.rp.vipHistory': {parent: 'admin.welcome', text: '特权红包历史', href: 'admin.rp.vipHistory'},

  'admin.ag.add': {parent: 'admin.welcome', text: '添加经销商', href: 'admin.ag.add'},
  'admin.ag.edit': {parent: 'admin.welcome', text: '修改经销商', href: 'admin.ag.edit'},
  'admin.ag.list': {parent: 'admin.welcome', text: '查询经销商', href: 'admin.ag.list'},
  'admin.ag.order': {parent: 'admin.welcome', text: '账单管理', href: 'admin.ag.order'},
  'admin.ag.set': {parent: 'admin.welcome', text: '佣金配置查询', href: 'admin.ag.set'},

  'admin.supplier.add': {parent: 'admin.welcome', text: '添加供货商', href: 'admin.supplier.add'},
  'admin.supplier.edit': {parent: 'admin.welcome', text: '修改供货商', href: 'admin.supplier.edit'},
  'admin.supplier.list': {parent: 'admin.welcome', text: '查询供货商', href: 'admin.supplier.list'},

  'admin.card.add': {parent: 'admin.welcome', text: '批量制卡', href: 'admin.card.add'},
  'admin.card.batch': {parent: 'admin.welcome', text: '制卡列表', href: 'admin.card.batch'},
  'admin.card.list': {parent: 'admin.welcome', text: '查询充值卡', href: 'admin.card.list'},
  'admin.card.history': {parent: 'admin.welcome', text: '充值历史查询', href: 'admin.card.history'},

  'publish': {parent: 'welcome', text: '发布宝贝', href: '/publish'},
  'admin.goods.edit': {parent: 'admin.welcome', text: '编辑宝贝', href: 'admin.goods.edit'},
  'admin.goods.warehouse': {parent: 'admin.welcome', text: '仓库管理', href: 'admin.goods.warehouse'},
  'admin.goods.order': {parent: 'admin.welcome', text: '订单管理', href: 'admin.goods.order'},
  'admin.goods.comment': {parent: 'admin.welcome', text: '评论管理', href: 'admin.goods.comment'},
  'admin.goods.category': {parent: 'admin.welcome', text: '分类管理', href: 'admin.goods.category'},
  'admin.goods.homesetting': {parent: 'admin.welcome', text: '首页轮播', href: 'admin.goods.homesetting'},
  'admin.goods.refundOrder': {parent: 'admin.welcome', text: '退货管理', href: 'admin.goods.refundOrder'},

  'admin.ac.order': {parent: 'admin.welcome', text: '账单查询', href: 'admin.ac.order'},
  'admin.ac.check': {parent: 'admin.welcome', text: '系统对账', href: 'admin.ac.check'},
  'admin.ac.stat': {parent: 'admin.welcome', text: '账户统计', href: 'admin.ac.stat'},

  'admin.usercenter.userinfo': {parent: 'admin.welcome', text: '用户中心', href: 'admin.usercenter.userinfo'},
  'admin.usercenter.password': {parent: 'admin.welcome', text: '密码管理', href: 'admin.usercenter.password'},

  'admin.sys.role':{parent:'admin.welcome',text:'权限分配',href:'admin.sys.role'},
  'admin.sys.account':{parent:'admin.welcome',text:'账户管理',href:'admin.sys.account'},
  'admin.sys.add':{parent:'admin.sys.account',text:'新增员工',href:'admin.sys.add'},
  'admin.sys.edit':{parent:'admin.sys.account',text:'修改员工',href:'admin.sys.edit'},
}

export const  states={
  cardStatus: [
    {val: 0, name: '无效'},
    {val: 1, name: '有效'},
    {val: 2, name: '已消费'}
    ],
  billType: [
    {val: 1, name: '摇红包'},
    {val: 2, name: '签到'},
    {val: 3, name: 'VIP红包'},
    {val: 4, name: '用户充值'},
    {val: 5, name: '充值卡'},
    {val: 6, name: '用户推荐佣金'},
    {val: 7, name: '用户商城消费'},
    {val: 8, name: '经销商返佣'},
    {val: 9, name: '经销商结算'},
    {val: 10, name: '自营商品退款'},
    {val: 11, name: '供货商商品购买'},
    {val: 12, name: '供货商商品退款'},
    {val: 13, name: '供货商结算'}
    ],
  rpType: [
    {val: 0, name: '普通红包'},
    {val: 1, name: '特权红包'}
    ],
  rpStatus: [
    {val: 0, name: '未开始'},
    {val: 1, name: '进行中'},
    {val: 2, name: '已领完'}
    ],
  national: [
    {val: '汉族', name: '汉族'}
    ],
  gender: [
    {val: false, name: '女'},
    {val: true, name: '男'}
    ],
  TrueOrFalse: [
    {val: true, name: '是'},
    {val: false, name: '否'}
    ],
  GoodsStatus:[
    {val:0,name:'编辑中'},
    {val:1,name:'已上架'},
    {val:2,name:'已下架'},
    {val:3,name:'已删除'},
    {val:4,name:'待审核'},
    {val:5,name:'已驳回'}
    ],
  OrderStatus:[
    {val:0,name:'待付款'},
    {val:1,name:'待发货'},
    {val:2,name:'已发货'},
    {val:3,name:'待评价'},
    {val:4,name:'已完毕'},
    {val:5,name:'关闭'},
    ],
  RefundOrderStatus:[
    {val:0,name:'退货/退款申请'},
    {val:1,name:'待买家发货'},
    {val:2,name:'退货/退款申请驳回'},
    {val:3,name:'买家已发货'},
    {val:4,name:'退货/退款完成'},
    ]
}
