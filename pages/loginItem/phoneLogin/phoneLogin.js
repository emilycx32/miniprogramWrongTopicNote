// pages/login/login.js
// 表单校验
import WxValidate from '../../../utils/WxValidate.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoginType: 'wx',
    wxCode: '',
    areaCodeList: ['+86', '+021'],
    index: 0,
    status1: 0,
    status2: 0,
    form: {
      phone: '',
      passward: ''
    },
    txtCode: '发送验证码',
    isTime: false
  },

  /* 文本框聚焦时更改状态*/
  focus1: function (e) {
    this.setData({
      status1: 1
    })
  },
  focus2: function (e) {
    this.setData({
      status2: 1
    })
  },
  /* 文本框失焦时更改状态*/
  blur1: function (e) {
    this.setData({
      status1: 0
    })
  },
  blur2: function (e) {
    this.setData({
      status2: 0
    })
  },

  /**
   * 用户微信登录
   */
  onLogin: function () {
    var that = this;
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          that.setData({
            wxCode: res.code
          })
          //发起网络请求
          // app.util.request({
          //   url: 'onLogin',
          //   data: {
          //     code: res.code
          //   },
          //   success(res){
          //     that.setData({
          //       code: res.code
          //     })
          //   },
          //   fail(){
          //     console.log('登录失败！' + res.errMsg)
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      fail() {
        // 登录失败
        console.log("登录失败！")
      }
    })
  },

  /**
  * 获取用户手机号
  */
  onGotPhoneNumber: function (e) {
    var that = this;
    console.log(e)
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      let encryptedData = e.detail.encryptedData;
      let iv = e.detail.iv;
      let errMsg = e.detail.errMsg;
      if (!iv || !encryptedData) {
        wx.showToast({
          title: "授权失败,请重新授权！",
          icon: 'none',
        })
        return false
      } else {
        wx.checkSession({
          success() {
            //session_key 未过期，并且在本生命周期一直有效
            console.log("未过期")
            var code = that.data.wxCode;
            wx.switchTab({
              url: '/pages/indexItem/index/index',
            })
            //调用后台接口获取用户手机号码
            // app.util.request({
            //   url: '/getPhoneNumber',
            //   data: {
            //     encrypted: encryptedData,
            //     iv: iv,
            //     code: code
            //   },
            //   success: function (res) {
            //     // 获取到的手机号码
            //     var phone = res.phone;
            //   },
            //   fail: function (msg) {
            //     wx.showToast({
            //       title: "获取手机号码失败，请重新获取",
            //       icon: 'none',
            //     })
            //   }
            // })
          },
          fail() {
            // session_key 已经失效，需要重新执行登录流程
            console.log("已经失效")
            this.onLogin() //重新登录
          }
        })
      }
    } else {
      wx.showToast({
        title: "授权失败,请重新授权！",
        icon: 'none',
      })
    }
  },

  /**
   * 切换为手机号登录
   */
  changeLogin: function () {
    this.setData({
      isLoginType: 'phone'
    })
  },

  /**
   * 返回微信登录
   */
  gobackWx: function () {
    this.setData({
      isLoginType: 'wx'
    })
  },

  /**
   * 获取手机区号
   */
  areaChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 忘记密码
   */
  changePwd: function () {
    this.setData({
      isLoginType: 'pwd'
    })
  },

  //验证时报错信息
  showToast(error) {
    wx.showToast({
      title: error.msg,
      icon: 'none',
    })
  },
  //验证函数
  initValidate() {
    console.log()
    const rules = {
      phone: {
        required: true,
        tel: true
      },
      password: {
        required: true,
        pwd: true
      }
    }
    const messages = {
      phone: {
        required: '请填写手机号',
        tel: '请填写正确的手机号'
      },
      password: {
        required: '请填写密码',
        pwd: '请填写6-15位正确密码'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
  },
  //调用验证函数
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showToast(error)
      return false
    }
    this.showToast({
      msg: '提交成功'
    })
  },

  /**
   * 获取手机号码
   */
  getPhoneValue: function (e) {
    this.setData({
      form: {
        phone: e.detail.value
      }
    })
  },

  /**
   * 发送验证码
   */
  sendCode: function (e) {
    var that = this;
    var time = 60;
    if (!this.data.form.phone) {
      var error = {
        msg: '请输入手机号码'
      }
      this.showToast(error);
      return;
    }
    if (!/^1[34578]\d{9}$/.test(this.data.form.phone)) {
      var error = {
        msg: '请输入正确的手机号码'
      }
      this.showToast(error);
      return;
    }
    var begin = setInterval(() => {
      console.log(time)
      if (time > 1) {
        time--;
        that.setData({
          txtCode: time + '秒后重新发送',
          isTime: true
        })
      } else {
        clearInterval(begin);
        that.setData({
          txtCode: '重新发送',
          isTime: false
        })
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onLogin();
    this.initValidate()//验证规则函数
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})