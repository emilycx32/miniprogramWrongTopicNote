// pages/calendarItem/calendar/calendar.js
Page({

  /**
   * Page initial data
   */
  data: {
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate(),
    dayStyle: [],
    days_addon: [],
    lunar: true,  
    dayDynamicCount: 6
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    let dayStyle = new Array;
    let array = [];
    for (let i = 1; i <= days_count; i++) {
      if (i == this.data.day) {
        dayStyle.push({
          month: 'current', day: i, color: 'white', background: '#7F2FF0'
        });
      } else {
        dayStyle.push({
          month: 'current', day: i, color: '#464646', background: 'white'
        });
      }
    }
    for (let i = 0; i <= days_count; i++) {
      if (i % 2 == 0) {
        array.push('.');
      } else {
        array.push('');
      }
    }
    this.setData({
      dayStyle,
      days_addon: array
    });
  },
/**
   * 点击某天的样式
   */
  dClick: function(event) {
    const clickDay = event.detail.day;
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    let dayStyle = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == clickDay) {
        dayStyle.push({
          month: 'current', day: i, color: 'white', background: '#7F2FF0'
        });
      } else {
        dayStyle.push({
          month: 'current', day: i, color: '#464646', background: 'white'
        });
      }
    }
    this.setData({
      dayStyle
    });
  }

})