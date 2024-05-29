// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频详情
    videoInfo: null,
    // 推荐视频
    othersList: [],
    // 评论数据
    commentData: null

  },
  /**
   * 根据视频的id获取视频详情
   */
  getCurrentVideo(videoId) {
    // let that = this;
    // wx.request({
    //   url: 'https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/videoInfo?id=' + videoId,
    //   success(res) {
    //     //  console.log(res);
    //      if (res.statusCode === 200) {
    //         that.setData({
    //             videoInfo: res.data.data.videoInfo
    //            })
    //         }
    //     }
    // })
    request({ url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/videoInfo?id="+videoId })
    .then(result => {
      this.setData({
        videoInfo: result.data.data.videoInfo
      })
    })
  },
  /**
   * 获取推荐视频
   */
  getOthersList(videoId) {
    // let that = this;
    // wx.request({
    //   url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/othersList?id=" + videoId,
    //   success(res) {
    //     console.log(res);
    //     if (res.statusCode === 200) {
    //       that.setData({
    //         othersList: res.data.data.othersList
    //       })
    //     }
    //   }
    // })
    request({ url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/othersList?id="+videoId })
    .then(result => {
      this.setData({
        othersList: result.data.data.othersList
      })
    })
    // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错  
      wx.stopPullDownRefresh();
  },
    /**
  * 获取评论数据
  */
 getCommentList(videoId) {
    // let that = this;
    // wx.request({
    //   url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/commentsList?id=" + videoId,
    //   success(res) {
    //     console.log(res);
    //     if (res.statusCode === 200) {
    //       that.setData({
    //         commentData: res.data.data.commentData
    //       })
    //     }
    //   }
    // })
    
    request({ url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/commentsList?id="+videoId })
    .then(result => {
      this.setData({
        commentData: result.data.data.commentData
      })
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    let videoId = options.id;

    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
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
    //  console.log('%c'+"刷新","color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
      wx.showLoading({
          title: '加载中',
        })
         setTimeout(function() {
          wx.hideLoading()
        }, 3000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //   console.log('页面触底');
    wx.showToast({ title: '没有下一页数据' });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})