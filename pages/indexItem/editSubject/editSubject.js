Page({
  data: {
    dialogShow: false,
    buttons: [{ text: '确定' }],
    focus:false,
    deleteDialogShow: false,
    deleteButtons: [{ text: '取消' },{ text: '确定' }],
  },
  onShow: function () {
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
  subjectInput(){
    var that = this;
    that.setData({
      focus:true
    })
  }
});