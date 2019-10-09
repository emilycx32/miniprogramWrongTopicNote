var util = require('../../../utils/util.js');

Page({
  data: {
    src: '../../../static/images/illustrator001.png',
    previewBg: '#E7EBF6',
    previewBgBorder: '',
    pureBgColor: '',
    pureBgBorder: '',
    notBgColorChoose: true,
    fontSize: '13px',
    lineHight: '20px',
    textAlign: 'left',
    fontColor: '#464646',
    lightImage: '../../../static/images/light-dark.png',
    answerSwitch: '显示答案',
    switchTriangle: '../../../static/images/choose-triangle-dark.png',
    title: '这里是标题',
    // questionImages: '{}',
    questionImage: '',
    questionText: '',
    answerImageP: '',
    answerPreview: false,
    answerImagePHidden: true,
    answerText: '',
    subject: '科目',
    questionImageHidden: false,
    answerImageHidden: true,
    answerTestHidden: true,
    redoLen: 4,
    fourDre:'#929292',
    redoDateStatus1: '待重做',
    fifteenDre: '#929292',
    redoDateStatus2: '待重做',
    meDre1: '#929292',
    redoDateStatus3: '待重做',
    meDre2: '#929292',
    redoDateStatus4: '待重做',
    doneButtonC: '#B8B8B8'
  },

  /**
   * 获取当前日期
   */
  onLoad: function (options) {
    var DATE = util.formatDate(new Date());
    this.setData({
      date: DATE
    });
    this.setData({
      questionImage: '../../../static/images/question-image.png',
      answerImageP: '../../../static/images/answer-image.png',
      questionText: '这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字',
      answerText: 'C',
      fourDre: '#4A81F8',
      redoDateStatus1: '已重做',
      fifteenDre: '#FA1010',
      redoDateStatus2: '未重做',
      meDre1: '#1AA85C',
      redoDateStatus3: '已重做',
      doneButtonC: '#1AA85C'
    })
  },

  /* 打卡成功跳转到成功页面*/
  editTap: function () {
    wx.navigateTo({
      url: '../editWrong/editWrong',
    })
  },

  /**
   * 隐藏或显示答案
   */
  answerSwitchTap: function (e) {
    if (this.data.answerSwitch == '显示答案' && this.data.switchTriangle == '../../../static/images/choose-triangle-dark.png') {
      this.setData({
        answerSwitch: '隐藏答案',
        switchTriangle: '../../../static/images/choose-triangle-dark-180.png',
        answerImagePHidden: false,
        answerTestHidden: false
      })
    } else if (this.data.answerSwitch == '显示答案' && this.data.switchTriangle == '../../../static/images/choose-triangle-light.png') {
      this.setData({
        answerSwitch: '隐藏答案',
        switchTriangle: '../../../static/images/choose-triangle-light-180.png',
        answerImagePHidden: false,
        answerTestHidden: false
      })
    } else if (this.data.answerSwitch == '隐藏答案' && this.data.switchTriangle == '../../../static/images/choose-triangle-light-180.png') {
      this.setData({
        answerSwitch: '显示答案',
        switchTriangle: '../../../static/images/choose-triangle-light.png',
        answerImagePHidden: true,
        answerTestHidden: true
      })
    } else if (this.data.answerSwitch == '隐藏答案' && this.data.switchTriangle == '../../../static/images/choose-triangle-dark-180.png') {
      this.setData({
        answerSwitch: '显示答案',
        switchTriangle: '../../../static/images/choose-triangle-dark.png',
        answerImagePHidden: true,
        answerTestHidden: true
      })
    }
  },

  /* 点击题目图片预览*/
  questionImagePreview: function (e) {
    var that = this;
    var src = that.data.questionImage;//获取data-src
    var imgList = [that.data.questionImage];//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },

  /* 点击答案图片预览*/
  answerImagePreview: function (e) {
    var that = this;
    var src = that.data.answerImage;//获取data-src
    var imgList = [that.data.answerImage];//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
/* 打卡成功跳转到成功页面*/
  doneTap: function() {
    wx.navigateTo({
      url: '../freeSuccess/freeSuccess',
    })
  },

});