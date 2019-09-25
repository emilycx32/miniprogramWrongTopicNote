//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    boxInfo1: {
      num: 3,
      url: '../../pages/inningSetting/inningSetting',
      isChooseFields: true,
    },
    dynamicCount: 6
  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 跳转到编辑科目页面
   */
  editSubject: function () {
    wx.navigateTo({
      url: '../editSubject/editSubject',
    })
  },
  /**
   * 跳转到新建错题页面
   */
  editWrong: function () {
    wx.navigateTo({
      url: '../editWrong/editWrong',
    })
  },
  /**
  * 跳转到查看错题详情页面
  */
  wrongPreviewTap: function () {
    wx.navigateTo({
      url: '../wrongDetail/wrongDetail',
    })
  },

})
