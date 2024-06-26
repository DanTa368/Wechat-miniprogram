// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航的菜单的索引
    currentIndexNav: 0,
    //首页导航数据 声明变量 空数组
    navList: [],
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videosList: [],
    swiperHeight:2225,
    arr:['.v1','.v2','.v3']
  },

  // 点击首页导航按钮
  activeNav(e) {
    //console.log(123);
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  /**
   *获取首页导航数据 getNavList 函数
   */
  getNavList() {
    // let that = this;
    // //利用小程序内置发送请求的request方法 获取数据
    // wx.request({
    //   url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/navList",
    //   //请求成功后启用回调函数success res 参数表示返回值
    //   success(res) {
    //     // console.log(res);
    //     if (res.data.code === 0) {
    //       that.setData({
    //         navList: res.data.data.navList
    //       })
    //     }
    //   }
    // })
    request({ url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/navList" })
    .then(result => {
      this.setData({
        navList: result.data.data.navList
      })
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    // let that = this;
    // wx.request({
    //   url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/swiperList",
    //   success(res) {
    //     // console.log(res);
    //     if (res.data.code === 0) {
    //       that.setData({
    //         swiperList: res.data.data.swiperList
    //       })
    //     }
    //   }
    // })
    request({ url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/swiperList" })
    .then(result => {
      this.setData({
        swiperList: result.data.data.swiperList
      })
    })
  },
  /**
  * 获取视频列表
  */
  getVideosList() {
    // let that = this;
    // wx.request({
    //   url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/videosList",
    //   success(res) {
    //     // console.log(res);
    //     if (res.data.code === 0) {
    //       that.setData({
    //         videosList: res.data.data.videosList
    //       })
    //     }
    //   }
    // })
    request({ url: "https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/videosList" })
    .then(result => {
      this.setData({
        videosList: result.data.data.videosList
      })
    })
  },
  //赋值高度
  setSwiperHeight(v) {
    let query = wx.createSelectorQuery().in(this);
    query.select(v).boundingClientRect();
    query.exec((res)=>{
        let headerHeight = res[0].height;
        console.log(headerHeight);
         this.setData({
          swiperHeight: headerHeight
        }); 
    })
  },

  //滑动切换
  bindChange(e){
    var that =this;
    that.setData({
        currentIndexNav:e.detail.current
    });
    this.setSwiperHeight(this.data.arr[e.detail.current]);
  },
  //下拉滚动
  onPageScroll(){
    this.setSwiperHeight(this.data.arr[this.data.currentIndexNav]);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取首页导航数据
    this.getNavList();
    // 2 调用获取轮播图数据的函数
    this.getSwiperList();
    // 3 调用获取视频列表函数
    this.getVideosList();
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