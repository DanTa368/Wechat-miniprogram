// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //接受数据的名称
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // tabs: [
    //   {
    //     id: 0,
    //     name: "首页",
    //     isActive: true
    //   },
    //   {
    //     id: 1,
    //     name: "原创",
    //     isActive: false
    //   },
    //   {
    //     id: 2,
    //     name: "分类",
    //     isActive: false
    //   },
    //   {
    //     id: 3,
    //     name: "关于",
    //     isActive: false
    //   }
    // ]
  },

  /**
   * 组件的方法列表
   */
    /**
   * 组件的方法列表
   * 1 页面.js文件中 存放事件回调函数的时候 存放在data同层级下！！！
   * 2 组件.js文件中 存放事件回调函数的时候 必须要存放在methods中！！！
   */
  methods: {
        /* 
     1 绑定点击事件  需要在methods中绑定
     2 获取被点击的索引 
     3 获取原数组 
     4 对数组循环
       1 给每一个循环项 选中属性 改为 false
       2 给 当前的索引的 项 添加激活选中效果就可以了！！！
      */
    //  1 绑定点击事件  需要在methods中绑定
     handleItemTap(e) {
    // console.log("点击我试试");
    // console.log(e);
    //{index} 是ES6中的解构赋值
    // const {index}= e.currentTarget.dataset
    //2获取被点击的索引 
    const index = e.currentTarget.dataset.index
    // console.log(index);
    //不要直接修改数组
    //3 复制一份数据
    // let {tabs} = this.data;
    //相当于以下写法
    //let tabs = this.data.tabs;
    //4循环数组
    // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    //改变数据
    // this.setData({
    //   tabs:tabs
    // })
    this.triggerEvent("itemChange",{index})
  }
  }
})
