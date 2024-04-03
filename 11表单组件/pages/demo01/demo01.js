// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:"",
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"grape"
      },
      {
        id:2,
        name:"香蕉",
        value:"banana"
      },
    ],
    checkList:[],
    sliderValue:'',
  },
  handleChange(e){
    console.log(e.detail.value)
    this.setData({
      gender :e.detail.value
    })
  },
  handleItemChange(item){
    console.log(item)
    this.setData({
      checkList:item.detail.value
    })
  },
  sliderChange(value){
    console.log(value)
    this.setData({
      sliderValue:value.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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