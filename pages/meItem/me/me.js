// pages/meItem/me/me.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * 跳转到意见反馈页面
   */
  feedbackTap: function () {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
})