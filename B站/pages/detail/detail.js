import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoInfo: [],
    },
    // 根据id查询视频信息
    getCurrentVideoInfo(videoId) {
        request({url:`https://mock.mengxuegu.com/mock/662f3242026ee44c07ff9eb9/bi/videoInfo?id=${videoId}`,})
        .then(res =>{
            this.setData({
                videoInfo:res.data.data.videoInfo
            })
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let videoId = options.id;
        this.getCurrentVideoInfo(videoId);
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