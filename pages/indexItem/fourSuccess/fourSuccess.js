Page({
  data: {
  },
  /**
  * 点击返回键跳转到首页
  */
  onUnload: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },

  backToIndexTap: function() {
    wx.switchTab({
      url: '../index/index',
    })
  }
});