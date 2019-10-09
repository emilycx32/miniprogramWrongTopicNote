Page({
  data: {
    dialogShow: false,
    buttons: [{
      text: '确定'
    }],
    focus: false,
    deleteDialogShow: false,
    deleteButtons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    subjects: [{
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
  onShow: function() {
    this.setData({
        dialogShow: false
      }),
      this.setData({
        deleteDialogShow: false
      })
  },
  tapDialogButton(e) {
    console.log('dialog', e.detail)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  tapDialog(e) {
    this.setData({
      dialogShow: true,
    })
  },
  deleteTapDialogButton(e) {
    console.log('delete dialog', e.detail)
    this.setData({
      deleteDialogShow: false,
      showOneButtonDialog: false
    })
  },
  deleteTapDialog(e) {
    this.setData({
      deleteDialogShow: true,
    })
  },
  subjectInput() {
    var that = this;
    that.setData({
      focus: true
    })
  }
});