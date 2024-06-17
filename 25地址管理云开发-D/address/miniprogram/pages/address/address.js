var app = getApp();
Page({
  data: {
    flag: 0,
    addresses: []
  },
  onLoad: function(e) {
    this.loadAddress();
  },
  loadAddress: function() { //加载地址列表
    wx.cloud.callFunction({ // 调用云函数  
      name: 'getAddresses',
      success: res => {
        console.log('[云函数] [getAddresses] 地址列表: ', res);
        var addresses = res.result.data;
        this.setData({
          addresses: addresses
        });
      },
      fail: err => {
        console.error('[云函数] [getAddresses] 调用失败', err);
      }
    })
  },
  addAddress: function(e) { //新增地址跳转
    wx.navigateTo({
      url: '../addressAdd/addressAdd'
    })
  },
  editAddress: function(e) { //编辑地址跳转
    wx.navigateTo({
      url: '../addressAdd/addressAdd?addressId=' + e.currentTarget.id
    })
  },
  deleteAddress: function(e) { //删除地址
    var that = this;
    wx.cloud.callFunction({ // 调用云函数  
      name: 'deleteAddress',
      data: {
        id: e.currentTarget.id
      },
      success: res => {
        console.log('[云函数] [deleteAddress] 地址删除返回信息: ', res);
        var count = res.result.stats.removed;
        if (count == 1) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              that.loadAddress();
            }
          })
        }
      },
      fail: err => {
        console.error('[云函数] [deleteAddress] 调用失败', err);
      }
    })
  }, 
  switchNav: function (e) {//选中地址
    var index = e.currentTarget.id;
    this.setData({ flag: index });
  }
})