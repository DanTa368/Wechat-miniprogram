// 引入请求方法
import {request} from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航的菜单索引
    currentIndexNav:0,
    //首页导航数据 声明变量 空数组
    navList:[],
    //轮播图数组
    swiperList:[],
    //视频列表数据
    videosList:[]
  },
  //获取首页导航数据 getNavList 函数
  getNavList(){
    let that =this;
    //利用小程序内置发送请求request方法 获取数据
    wx.request({
      url: 'https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/navList',
      //请求成功后用回调函数 success  res参数表示返回值
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  //点击首页导航按钮
  activeNav(e){
    //  console.log(e.target.dataset.index);
     this.setData({
       currentIndexNav:e.target.dataset.index
     })
  },
   //获取首页轮播图数据 getSwiperList 函数
   getSwiperList(){
    // let that =this;
    // 利用小程序内置发送请求request方法 获取数据
    // wx.request({
    //   url: 'https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/swiperList',
    //   //请求成功后用回调函数 success  res参数表示返回值
    //   success(res){
    //     // console.log(res);
    //     if(res.data.code===0){
    //       that.setData({
    //         swiperList:res.data.data.swiperList
    //       })
    //     }
    //   }
    // })
    request({url:"https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/swiperList"})
    .then(result =>{
      this.setData({
        swiperList:result.data.data.swiperList
      })
    })
  },
    //获取首页视频列表数据 getVideosList 函数
    getVideosList(){
      // let that =this;
      //利用小程序内置发送请求request方法 获取数据
      // wx.request({
      //   url: 'https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/videosList',
      //   //请求成功后用回调函数 success  res参数表示返回值
      //   success(res){
      //     // console.log(res);
      //     if(res.data.code===0){
      //       that.setData({
      //         videosList:res.data.data.videosList
      //       })
      //     }
      //   }
      // })
      request({url:'https://mock.mengxuegu.com/mock/66225d53faa39b45675966ef/bi/videosList'})
      .then(result =>{
        this.setData({
          videosList:result.data.data.videosList
        })
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取首页数据导航
    this.getNavList();
    //2调用获取轮播图数据的函数
    this.getSwiperList();
    //3调用获取视频列表数据的函数‘
    this. getVideosList();
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