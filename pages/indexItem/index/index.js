//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    navScrollLeft: 0,
    boxInfo1: {
      num: 3,
      url: '../../pages/inningSetting/inningSetting',
      isChooseFields: true,
    },
    dynamicCount: 6,
    navData: [{
        id: 0,
        name: '所有'
      },
      {
        id: 1,
        name: '数学'
      },
      {
        id: 2,
        name: '语文'
      },
      {
        id: 3,
        name: '英语'
      },
      {
        id: 4,
        name: '物理'
      },
      {
        id: 5,
        name: '生物'
      },
      {
        id: 6,
        name: '化学'
      },
      {
        id: 7,
        name: '历史'
      },
    ]
  },

  /** 
   * 点击tab切换 
   */
  swichNav: function(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/6
    var singleNavWidth = this.data.windowWidth / 6;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },
  /**
   * 跳转到编辑科目页面
   */
  editSubject: function() {
    wx.navigateTo({
      url: '../editSubject/editSubject',
    })
  },
  /**
   * 跳转到新建错题页面
   */
  editWrong: function() {
    wx.navigateTo({
      url: '../editWrong/editWrong',
    })
  },
  /**
   * 跳转到查看错题详情页面
   */
  wrongPreviewTap: function() {
    wx.navigateTo({
      url: '../wrongDetail/wrongDetail',
    })
  },

})