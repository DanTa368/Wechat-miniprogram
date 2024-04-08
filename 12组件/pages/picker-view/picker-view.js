// pages/picker-view/picker-view.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value:"海淀",
        region:[ "海淀","朝阳","东城","西城","昌平","丰台","大兴","房山","门头沟","石景山","顺义","延庆","怀柔","密云"]
      },
      bindChange(e) {
        console.log(e)
        const val = e.detail.value
        var value = this.data.region[val];
        this.setData({
          value: value
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})