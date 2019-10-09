var util = require('../../utils/util.js');
// components/dayDynamic/dayDynamic.js
Component({
  data: {
    dynamicLen: 0,
    src: '/static/images/illustrator001.png',
    previewBg: '#E7EBF6',
    notBgColorChoose: 'true',
    previewBgBorder: '',
    fontSize: '13px',
    lineHight: '20px',
    textAlign: 'left',
    fontColor: '#464646',
    title: '这里是标题',
    lastArea: '15',
    // questionImages: '{}',
    questionImage: '',
    questionText: '这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字这是一道题目的文字',
    subject: '科目',
    questionImageHidden: false,
  },
  /**
   * 组件传值
   */
  properties: {
    dayDynamicCount: {
      type: Number
    }
  },
  /**
 * 组件挂载后执行
 */
  ready: function () {
    var DATE = util.formatDate(new Date());
    this.setData({
      date: DATE
    });
    if (this.data.dayDynamicCount > 0) {
      this.setData({
        dynamicLen: this.data.dayDynamicCount
      });
    } else {
      this.setData({
        dynamicLen: 0
      });
    }
    console.log(this.data.dayDynamicCount),
      console.log(this.data.dynamicLen),
      /* 测试题目图片显示*/
      this.setData({
        questionImage: '/static/images/question-image.png',
      })
  },

})