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
    lastArea: '15',
    // questionImages: '{}',
    questionImage: '',
    questionText: '',
    answerImage: '',
    answerImageP: '',
    answerPreview: false,
    answerImagePHidden: true,
    answerText: '',
    subject: '科目',
    status1: 0,
    status2: 0,
    status3: 0,
    image: [],
    questionImageHidden: true,
    questionTextTemp: '',
    answerImageHidden: true,
    answerTestHidden: true,
    answerTextTemp: '',
    isFocus: false,
    isFocus2: false,
    subjectChoose: '请选择',
    selectSubjectDialogShow: false,
    selectSubjectButtons: [],
    subjectN: '数学',
    redoTimeChoose: '请选择',
    addTimeDialogShow: false,
    addTimeButtons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    thisYear: new Date().getFullYear(),
    thisMonth: new Date().getMonth() + 1,
    thisDate: new Date().getDate(),
    clickY: '',
    clickM: '',
    clickD: '',
    dayStyle: [{
      month: 'current',
      day: '',
      color: 'white',
      background: '#1AA85C'
    }, {
      month: 'current',
      day: new Date().getDate(),
      color: '#7F2FF0',
      background: 'white'
    }, {
      month: 'current',
      day: new Date().getDate() + 4,
      color: 'white',
      background: '#4A81F8'
    }, {
      month: 'current',
      day: new Date().getDate() + 15,
      color: 'white',
      background: '#F6B933'
    },],
    status4: 0,
    chooseSize: false,
    bgChoose: false,
    fontChoose: false,
    alignChoose: false,
    colorChoose: false,
    characterChoose: true,
    noBgColorChoose: true,
    noCharacterChoose: false,
    bgColorChoose: false,
    deleteDialogShow: false,
    deleteButtons: [{ text: '取消' }, { text: '确定' }],
    items: [{
      name: 'illustrator001',
      value: '../../../static/images/illustrator001.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator002.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator003.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator004.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator005.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator006.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator007.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator008.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator009.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator010.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator011.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator012.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator013.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator014.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator015.png'
    },
    {
      name: 'illustrator001',
      value: '../../../static/images/illustrator016.png'
    },
    ],
    items2: [{
      name: 'pureBgColor001',
      value: 'background-color: #F5F6F7;border: 4px solid #F5F6F7'
    },
    {
      name: 'pureBgColor002',
      value: 'background-color: white;border: 4px solid #F5F6F7'
    },
    {
      name: 'pureBgColor003',
      value: 'background-color: #CECECF;border: 4px solid #CECECF'
    },
    {
      name: 'pureBgColor004',
      value: 'background-color: white;border: 4px solid #CECECF'
    },
    {
      name: 'pureBgColor005',
      value: 'background-color: #585859;border: 4px solid #585859'
    },
    {
      name: 'pureBgColor006',
      value: 'background-color: white;border: 4px solid #585859'
    },
    {
      name: 'pureBgColor007',
      value: 'background-color: #333332;border: 4px solid #333332'
    },
    {
      name: 'pureBgColor008',
      value: 'background-color: white;border: 4px solid #333332'
    },
    {
      name: 'pureBgColor009',
      value: 'background-color: #37C1F0;border: 4px solid #37C1F0'
    },
    {
      name: 'pureBgColor010',
      value: 'background-color: white;border: 4px solid #37C1F0'
    },
    {
      name: 'pureBgColor011',
      value: 'background-color: #0E76BC;border: 4px solid #0E76BC'
    },
    {
      name: 'pureBgColor012',
      value: 'background-color: white;border: 4px solid #0E76BC'
    },
    {
      name: 'pureBgColor013',
      value: 'background-color: #1E3C7C;border: 4px solid #1E3C7C'
    },
    {
      name: 'pureBgColor014',
      value: 'background-color: white;border: 4px solid #1E3C7C'
    },
    {
      name: 'pureBgColor015',
      value: 'background-color: #EAA12E;border: 4px solid #EAA12E'
    },
    {
      name: 'pureBgColor016',
      value: 'background-color: white;border: 4px solid #EAA12E'
    },
    ],
    items3: [{
      name: 'fontSize001',
      value: '10号'
    },
    {
      name: 'fontSize002',
      value: '11号'
    },
    {
      name: 'fontSize003',
      value: '12号'
    },
    {
      name: 'fontSize004',
      value: '13号'
    },
    {
      name: 'fontSize005',
      value: '14号'
    },
    {
      name: 'fontSize006',
      value: '15号'
    },
    {
      name: 'fontSize007',
      value: '16号'
    },
    {
      name: 'fontSize008',
      value: '17号'
    },
    {
      name: 'fontSize009',
      value: '18号'
    },
    {
      name: 'fontSize010',
      value: '20号'
    },
    {
      name: 'fontSize011',
      value: '22号'
    },
    {
      name: 'fontSize012',
      value: '24号'
    },
    {
      name: 'fontSize013',
      value: '26号'
    },
    {
      name: 'fontSize014',
      value: '28号'
    },
    ],
    items4: [{
      name: 'align001',
      value: '../../../static/images/align-left.png'
    },
    {
      name: 'align002',
      value: '../../../static/images/align-center.png'
    },
    {
      name: 'align003',
      value: '../../../static/images/align-right.png'
    },
    ],
    items5: [{
      name: 'color001',
      value: 'background-color: #464646'
    },
    {
      name: 'color002',
      value: 'background-color: #585859'
    },
    {
      name: 'color003',
      value: 'background-color: #CECECF'
    },
    {
      name: 'color004',
      value: 'background-color: #F5F6F7'
    },
    {
      name: 'color005',
      value: 'background-color: white'
    },
    {
      name: 'color006',
      value: 'background-color: #1E3C7C'
    },
    {
      name: 'color007',
      value: 'background-color: #0E76BC'
    },
    {
      name: 'color008',
      value: 'background-color: #37C1F0'
    },
    {
      name: 'color009',
      value: 'background-color: #EAA12E'
    },
    ],
  },
  /**
   * 控制day状态只在本月显示
   */
  next: function (e) {
    var date = new Date();
    var todayDate = new Date(date.getTime());
    var fourDate = new Date(date.getTime() + 4 * 24 * 60 * 60 * 1000);
    var fifteenDate = new Date(date.getTime() + 15 * 24 * 60 * 60 * 1000);
    var tY = todayDate.getFullYear();
    var tM = todayDate.getMonth() + 1;
    var tD = todayDate.getDate();
    var fourY = fourDate.getFullYear();
    var fourM = fourDate.getMonth() + 1;
    var fourD = fourDate.getDate();
    var fifteenY = fifteenDate.getFullYear();
    var fifteenM = fifteenDate.getMonth() + 1;
    var fifteenD = fifteenDate.getDate();
    var currentMonth = e.detail.currentMonth;
    var currentYear = e.detail.currentYear;
    let changeClickDay = `dayStyle[0].day`;
    let changeClickBg = `dayStyle[0].background`;
    let changeClickColor = 'dayStyle[0].color';
    let changeTDay = `dayStyle[1].day`;
    let changeTBg = `dayStyle[1].background`;
    let changeTColor = 'dayStyle[1].color';
    let changeFourDay = `dayStyle[2].day`;
    let changeFourBg = `dayStyle[2].background`;
    let changeFourColor = 'dayStyle[2].color';
    let changeFifteenDay = `dayStyle[3].day`;
    let changeFifteenBg = `dayStyle[3].background`;
    let changeFifteenColor = 'dayStyle[3].color';

    if (this.data.clickY == currentYear && this.data.clickM == currentMonth && tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && fifteenY == currentYear && fifteenM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C'
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && fifteenY == currentYear && fifteenM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if (fifteenY == currentYear && fifteenM == currentMonth && fourY == currentYear && fourM == currentMonth && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && (fifteenY != currentYear || fifteenM != currentMonth) && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && fourY == currentYear && fourM == currentMonth && fifteenY == currentYear && fifteenM == currentMonth && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && (fourY != currentYear || fourM != currentMonth) && fifteenY == currentYear && fifteenM == currentMonth && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      if (this.data.clickD == fourD) {
        this.setData({
          dayStyle: [{
            month: 'current',
            day: this.data.clickD,
            color: 'white',
            background: '#1AA85C',
          }, {
            month: 'current',
            day: tD,
            color: '#464646',
            background: 'white'
          }, {
            month: 'current',
            day: fourD,
            color: 'white',
            background: '#1AA85C'
          }, {
            month: 'current',
            day: fifteenD,
            color: 'white',
            background: '#F6B933'
          },]
        })
      } else {
        this.setData({
          dayStyle: [{
            month: 'current',
            day: this.data.clickD,
            color: 'white',
            background: '#1AA85C',
          }, {
            month: 'current',
            day: tD,
            color: '#464646',
            background: 'white'
          }, {
            month: 'current',
            day: fourD,
            color: '#464646',
            background: 'white'
          }, {
            month: 'current',
            day: fifteenD,
            color: 'white',
            background: '#F6B933'
          },]
        })
      }

    } else if (tY == currentYear && tM == currentMonth && (fourY != currentYear || fourM != currentMonth) && (fifteenY != currentYear || fifteenM != currentMonth) && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && (fourY != currentYear || fourM != currentMonth) && (fifteenY != currentYear || fifteenM != currentMonth) && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && (fourY != currentYear || fourM != currentMonth) && fifteenY == currentYear && fifteenM == currentMonth && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && (fourY != currentYear || fourM != currentMonth) && (fifteenY != currentYear || fifteenM != currentMonth) && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    }
  },

  prev: function (e) {
    var date = new Date();
    var todayDate = new Date(date.getTime());
    var fourDate = new Date(date.getTime() + 4 * 24 * 60 * 60 * 1000);
    var fifteenDate = new Date(date.getTime() + 15 * 24 * 60 * 60 * 1000);
    var tY = todayDate.getFullYear();
    var tM = todayDate.getMonth() + 1;
    var tD = todayDate.getDate();
    var fourY = fourDate.getFullYear();
    var fourM = fourDate.getMonth() + 1;
    var fourD = fourDate.getDate();
    var fifteenY = fifteenDate.getFullYear();
    var fifteenM = fifteenDate.getMonth() + 1;
    var fifteenD = fifteenDate.getDate();
    var currentMonth = e.detail.currentMonth;
    var currentYear = e.detail.currentYear;
    if (this.data.clickY == currentYear && this.data.clickM == currentMonth && tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && fifteenY == currentYear && fifteenM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: white,
          background: '#1AA85C'
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && fifteenY == currentYear && fifteenM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if (fifteenY == currentYear && fifteenM == currentMonth && fourY == currentYear && fourM == currentMonth && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && fourY == currentYear && fourM == currentMonth && (fifteenY != currentYear || fifteenM != currentMonth) && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && fourY == currentYear && fourM == currentMonth && fifteenY == currentYear && fifteenM == currentMonth && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: 'white',
          background: '#4A81F8'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && (fourY != currentYear || fourM != currentMonth) && fifteenY == currentYear && fifteenM == currentMonth && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && (fourY != currentYear || fourM != currentMonth) && (fifteenY != currentYear || fifteenM != currentMonth) && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '#1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if (tY == currentYear && tM == currentMonth && (fourY != currentYear || fourM != currentMonth) && (fifteenY != currentYear || fifteenM != currentMonth) && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#7F2FF0',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && (fourY != currentYear || fourM != currentMonth) && fifteenY == currentYear && fifteenM == currentMonth && (this.data.clickY != currentYear || this.data.clickM != currentMonth)) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: 'white',
          background: '#F6B933'
        },]
      })
    } else if ((tY != currentYear || tM != currentMonth) && (fourY != currentYear || fourM != currentMonth) && (fifteenY != currentYear || fifteenM != currentMonth) && this.data.clickY == currentYear && this.data.clickM == currentMonth) {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: 'white',
          background: '1AA85C',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    } else {
      this.setData({
        dayStyle: [{
          month: 'current',
          day: this.data.clickD,
          color: '#464646',
          background: 'white',
        }, {
          month: 'current',
          day: tD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fourD,
          color: '#464646',
          background: 'white'
        }, {
          month: 'current',
          day: fifteenD,
          color: '#464646',
          background: 'white'
        },]
      })
    }
  },

  /**
   * 获取当前日期
   */
  onLoad: function (options) {
    var DATE = util.formatDate(new Date());
    let todayDay = util.getDates(1, DATE);
    this.setData({
      date: DATE,
      toDay: todayDay
    });
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
        answerTestHidden: false,
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
        answerTestHidden: true,
      })
    } else if (this.data.answerSwitch == '隐藏答案' && this.data.switchTriangle == '../../../static/images/choose-triangle-dark-180.png') {
      this.setData({
        answerSwitch: '显示答案',
        switchTriangle: '../../../static/images/choose-triangle-dark.png',
        answerImagePHidden: true,
        answerTestHidden: true,
      })
    }
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
  focus3: function (e) {
    this.setData({
      status3: 1
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
    if (e.detail.value.length < 1) {
      this.setData({
        questionTextTemp: ''
      })
    } else {
      this.setData({
        questionTextTemp: e.detail.value
      })
    }
  },
  blur3: function (e) {
    this.setData({
      status3: 0
    })
    if (e.detail.value.length < 1) {
      this.setData({
        answerTextTemp: ''
      })
    } else {
      this.setData({
        answerTextTemp: e.detail.value
      })
    }
  },
  /* 获取输入的题目标题*/
  titleChange: function (e) {
    let that = this;
    if (e.detail.value.length < 1) {
      that.setData({
        title: '这里是标题',
      })
    } else {
      that.setData({
        title: e.detail.value,
      })
    }
    var information = e.detail.value; //输入的内容
    var value = e.detail.value.length; //输入内容的长度
    var lastArea = 20 - value; //剩余字数
    that.setData({
      information: information,
      lastArea: lastArea
    })
  },
  /* 上传题目照片*/
  chooseImage(e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths
        })
      }
    }),
      /* 测试传图片显示*/
      this.setData({
        // questionImages: '{../../../static/images/question-image.png}',
        questionImage: '../../../static/images/question-image.png',
        questionImageHidden: false
      })
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



  /* 点击“请输入错题文字内容”后显示输入面板*/
  inputQuestionText: function (e) {
    this.setData({
      questionTextHidden: false,
      status2: 1,
      isFocus: true
    })
  },

  changeQuestionText: function (e) {
    let that = this;
    if (e.detail.value.length < 1) {
      that.setData({
        questionText: '',
      })
    } else {
      that.setData({
        questionText: e.detail.value,
      })
    }
  },
  /* 点击“请输入答案”后显示输入面板*/
  inputAnswerText: function (e) {
    this.setData({
      answerTextHidden: false,
      status3: 1,
      isFocus2: true
    })
  },

  changeAnswerText: function (e) {
    let that = this;
    if (e.detail.value.length < 1) {
      that.setData({
        answerText: '',
      })
    } else {
      that.setData({
        answerText: e.detail.value,
      })
    }
  },

  /* 上传答案照片*/
  chooseAnswerImage(e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths,
        })
      }
    }),
      /* 测试传图片显示*/
      this.setData({
        answerImage: '../../../static/images/answer-image.png',
        answerImageHidden: false,
        answerImageP: '../../../static/images/answer-image.png'
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

  /*选择科目弹窗控制*/
  onShow: function () {
    this.setData({
      selectSubjectDialogShow: false,
      addTimeDialogShow: false,
      deleteDialogShow: false
    })
  },
  selectSubjectTapDialogButton(e) {
    console.log('dialog', e.detail)
    this.setData({
      selectSubjectDialogShow: false
    })
  },
  selectSubjectTapDialog(e) {
    this.setData({
      selectSubjectDialogShow: true,
    })
  },
  changeSubject: function (e) {
    this.setData({
      subject: this.data.subjectN,
      selectSubjectDialogShow: false,
      subjectChoose: this.data.subjectN
    })
  },
  /**
   * 跳转到编辑科目页面
   */
  editSubjects: function () {
    wx.navigateTo({
      url: '../editSubject/editSubject',
    })
  },
  /*添加重做时间弹窗控制*/
  addTimeTapDialogButton(e) {
    console.log(e);
    if (e.detail.index == 1) {
      this.setData({
        redoTimeChoose: this.data.clickY + '.' + this.data.clickM + '.' + this.data.clickD,
        addTimeDialogShow: false
      })
    } else {
      this.setData({
        addTimeDialogShow: false
      })
    }
  },
  addTimeTapDialog(e) {
    this.setData({
      addTimeDialogShow: true,
    })
  },
  //给点击的日期设置一个背景颜色
  dayClick: function (event) {
    console.log(event)
    var date = new Date();
    var todayDate = new Date(date.getTime());
    var tY = todayDate.getFullYear();
    var tM = todayDate.getMonth() + 1;
    var tD = todayDate.getDate();
    let clickDay = event.detail.day;
    let clickMonth = event.detail.month;
    let clickYear = event.detail.year;
    let changeDay = `dayStyle[0].day`;
    let changeBg = `dayStyle[0].background`;
    let changeColor = 'dayStyle[0].color';
    if ((clickDay > tD && clickMonth == tM && clickYear == tY) || clickMonth > tM || clickYear > tY) {
      this.setData({
        [changeDay]: clickDay,
        [changeBg]: "#1AA85C",
        [changeColor]: "white",
        clickY: clickYear,
        clickM: clickMonth,
        clickD: clickDay
      });
      console.log(changeBg),
        console.log(this.data.dayStyle[0].background),
        console.log(this.data.dayStyle[3].background)
    }
  },
  /* 点击富文本编辑样式按钮时时更改状态*/
  /* 显示遮罩层*/
  showBgSetting: function (e) {
    this.setData({
      status4: 1,
      bgChoose: true,
      fontChoose: false,
      alignChoose: false,
      colorChoose: false,
    })
    if (this.data.chooseSize == false) {
      this.chooseSezi()
    }
  },
  showFontSetting: function (e) {
    this.setData({
      status4: 1,
      bgChoose: false,
      fontChoose: true,
      alignChoose: false,
      colorChoose: false,
    })
    if (this.data.chooseSize == false) {
      this.chooseSezi()
    }
  },
  showAlignSetting: function (e) {
    this.setData({
      status4: 1,
      bgChoose: false,
      fontChoose: false,
      alignChoose: true,
      colorChoose: false,
    })
    if (this.data.chooseSize == false) {
      this.chooseSezi()
    }
  },
  showColorSetting: function (e) {
    this.setData({
      status4: 1,
      bgChoose: false,
      fontChoose: false,
      alignChoose: false,
      colorChoose: true,
    })
    if (this.data.chooseSize == false) {
      this.chooseSezi()
    }
  },
  // 动画函数
  chooseSezi: function (e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 100,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(1000).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      chooseSize: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动 滑动时间
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        clearcart: false
      })
    }, 100)
  },
  // 隐藏
  hideModal: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(700).step()
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 500)
    that.setData({
      status4: 0
    })
  },
  /* 富文本设置背景模式切换 */
  bgColorChooseTap: function (e) {
    this.setData({
      characterChoose: false,
      noBgColorChoose: false,
      noCharacterChoose: true,
      bgColorChoose: true
    })
  },
  characterChooseTap: function (e) {
    this.setData({
      characterChoose: true,
      noBgColorChoose: true,
      noCharacterChoose: false,
      bgColorChoose: false
    })
  },
  /* 带卡通人物背景模式下选择背景 */
  click: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id,
      notBgColorChoose: true,
    })
    if (that.data.id == 0) {
      that.setData({
        src: '../../../static/images/illustrator001.png',
        previewBg: '#E7EBF6',
        previewBgBorder: '',
      })
    } else if (that.data.id == 1) {
      that.setData({
        src: '../../../static/images/illustrator002.png',
        previewBg: '#EAFAF6',
        previewBgBorder: '',
      })
    } else if (that.data.id == 2) {
      that.setData({
        src: '../../../static/images/illustrator003.png',
        previewBg: '#FFFCF4',
        previewBgBorder: '',
      })
    } else if (that.data.id == 3) {
      that.setData({
        src: '../../../static/images/illustrator004.png',
        previewBg: '#FBEEF1',
        previewBgBorder: '',
      })
    } else if (that.data.id == 4) {
      that.setData({
        src: '../../../static/images/illustrator005.png',
        previewBg: '#EBF6FC',
        previewBgBorder: '',
      })
    } else if (that.data.id == 8) {
      that.setData({
        src: '../../../static/images/illustrator009.png',
        previewBg: 'white',
        previewBgBorder: '2px solid #9377A8',
      })
    }
  },
  /* 不带卡通人物背景模式下选择背景 */
  click2: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id,
      notBgColorChoose: false,
    })
    if (that.data.id == 0) {
      that.setData({
        previewBg: '#F5F6F7',
        previewBgBorder: '2px solid #F5F6F7',
      })
    } else if (that.data.id == 1) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #F5F6F7',
      })
    } else if (that.data.id == 2) {
      that.setData({
        previewBg: '#CECECF',
        previewBgBorder: '2px solid #CECECF',
      })
    } else if (that.data.id == 3) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #CECECF',
      })
    } else if (that.data.id == 4) {
      that.setData({
        previewBg: '#585859',
        previewBgBorder: '2px solid #585859',
      })
    } else if (that.data.id == 5) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #585859',
      })
    } else if (that.data.id == 6) {
      that.setData({
        previewBg: '#333332',
        previewBgBorder: '2px solid #333332',
      })
    } else if (that.data.id == 7) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #333332',
      })
    } else if (that.data.id == 8) {
      that.setData({
        previewBg: '#37C1F0',
        previewBgBorder: '2px solid #37C1F0',
      })
    } else if (that.data.id == 9) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #37C1F0',
      })
    } else if (that.data.id == 10) {
      that.setData({
        previewBg: '#0E76BC',
        previewBgBorder: '2px solid #0E76BC',
      })
    } else if (that.data.id == 11) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #0E76BC',
      })
    } else if (that.data.id == 12) {
      that.setData({
        previewBg: '#1E3C7C',
        previewBgBorder: '2px solid #1E3C7C',
      })
    } else if (that.data.id == 13) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #1E3C7C',
      })
    } else if (that.data.id == 14) {
      that.setData({
        previewBg: '#EAA12E',
        previewBgBorder: '2px solid #EAA12E',
      })
    } else if (that.data.id == 15) {
      that.setData({
        previewBg: 'white',
        previewBgBorder: '2px solid #EAA12E',
      })
    }
  },
  /* 选择字号 */
  click3: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id,
    })
    if (that.data.id == 0) {
      that.setData({
        fontSize: '10px',
        lineHight: '16px',
      })
    } else if (that.data.id == 1) {
      that.setData({
        fontSize: '11px',
        lineHight: '17px',
      })
    } else if (that.data.id == 2) {
      that.setData({
        fontSize: '12px',
        lineHight: '18px',
      })
    } else if (that.data.id == 3) {
      that.setData({
        fontSize: '13px',
        lineHight: '20px',
      })
    } else if (that.data.id == 4) {
      that.setData({
        fontSize: '14px',
        lineHight: '21px',
      })
    } else if (that.data.id == 5) {
      that.setData({
        fontSize: '23px',
      })
    } else if (that.data.id == 6) {
      that.setData({
        fontSize: '16px',
        lineHight: '24px',
      })
    } else if (that.data.id == 7) {
      that.setData({
        fontSize: '17px',
        lineHight: '26px',
      })
    } else if (that.data.id == 8) {
      that.setData({
        fontSize: '18px',
        lineHight: '27px',
      })
    } else if (that.data.id == 9) {
      that.setData({
        fontSize: '19px',
        lineHight: '29px',
      })
    } else if (that.data.id == 10) {
      that.setData({
        fontSize: '20px',
        lineHight: '30px',
      })
    } else if (that.data.id == 11) {
      that.setData({
        fontSize: '22px',
        lineHight: '33px',
      })
    } else if (that.data.id == 12) {
      that.setData({
        fontSize: '24px',
        lineHight: '36px',
      })
    } else if (that.data.id == 13) {
      that.setData({
        fontSize: '26px',
        lineHight: '39px',
      })
    } else if (that.data.id == 14) {
      that.setData({
        fontSize: '28px',
        lineHight: '42px',
      })
    }
  },
  /* 选择对齐方式 */
  click4: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id,
    })
    if (that.data.id == 0) {
      that.setData({
        textAlign: 'left',
      })
    } else if (that.data.id == 1) {
      that.setData({
        textAlign: 'center',
      })
    } else if (that.data.id == 2) {
      that.setData({
        textAlign: 'right',
      })
    }
  },
  /* 选择对齐方式 */
  click5: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id,
    })
    if (that.data.id == 0) {
      that.setData({
        fontColor: '#464646',
      })
    } else if (that.data.id == 1) {
      that.setData({
        fontColor: '#585859',
      })
    } else if (that.data.id == 2) {
      that.setData({
        fontColor: '#CECECF',
      })
    } else if (that.data.id == 3) {
      that.setData({
        fontColor: '#F5F6F7',
      })
    } else if (that.data.id == 4) {
      that.setData({
        fontColor: 'white',
      })
    } else if (that.data.id == 5) {
      that.setData({
        fontColor: '#1E3C7C',
      })
    } else if (that.data.id == 6) {
      that.setData({
        fontColor: '#0E76BC',
      })
    } else if (that.data.id == 7) {
      that.setData({
        fontColor: '#37C1F0',
      })
    } else if (that.data.id == 8) {
      that.setData({
        fontColor: '#EAA12E',
      })
    }
  },
  /* 删除错题弹窗 */
  deleteTapDialogButton(e) {
    console.log('delete dialog', e.detail)
    let index = e.detail.index;
    console.log(index);
    if (index == 1) {
      wx.navigateBack({
        url: '../index/index',
      })
      this.setData({
        deleteDialogShow: false,
        showOneButtonDialog: false
      })
    } else {
      this.setData({
        deleteDialogShow: false,
        showOneButtonDialog: false
      })
    }
  },
  deleteTapDialog(e) {
    this.setData({
      deleteDialogShow: true,
    })
  },
  /* 保存错题返回错题列表 */
  savePost(e) {
    wx.navigateBack({
      url: '../index/index',
    })
  },
})