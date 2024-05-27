export const request=(params)=>{
    return new Promise((resolve,reject)=>{
      wx.request({
        // 使用参数的方式...相当于请求的url地址
       ...params,
       success:(result)=>{
         resolve(result);
       },
       fail:(err)=>{
         reject(err);
       }
      });
    })
  }