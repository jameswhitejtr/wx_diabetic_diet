//获取应用实例
var app = getApp()
Page({
  data: {
    totalIncome: 0.0,
    runningMoney: 0.0,
    publicWelfareMoney: 0.0,
    orderNum: 123456789,
    appointmentNum: 5,
    appointmentTime: '2017年2月16日  11:42',
    orderTime: '2017年1月16日  11:42',
    hasData: true,
    navTab: ["全部", "待处理", "待接待", "已完成", "客户处理"],
    moneyInfo: [,,,,,,,],
    nickName: '恋人心',
    phoneNum: '18202801506',
    url: 'http://60.205.161.252//Public/uploads/app/2016-12-15/58523b031fa7b.png',
    statusImage: ['../images/daijiedai.png'],
    currentNavtab:1,
    statusText: ['待接待未付款'],
    startPoint:[0,0]
  },

  catchtouchstart:function(e){
    var that = this;
    that.setData({
      startPoint: [e.touches[0].clientX,e.touches[0].clientY]
    })
  },

  catchtouchend:function(e){
    var that = this;
    var currentNum = parseInt(this.data.currentNavtab);

    // that.endX = e.changedTouches[0].clientX;
    // that.endY = e.changedTouches[0].clientY;

    // if(that.endX  - that.startX > 10 && currentNum > 0){
    //   currentNum -= 1;
    // }

    // if(that.endX - that.startX < -10 && currentNum< this.data.navTab.length -1){
    //   currentNum=currentNum + 1;
    // }

    var endPoint = [e.changedTouches[0].clientX,e.changedTouches[0].clientY];
    var startPoint = that.data.startPoint
    if(endPoint[0] <= startPoint[0]) {
      if(Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum< this.data.navTab.length -1) {
         currentNum=currentNum + 1;  
      }
    }else {
      if(Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum > 0) {
          currentNum -= 1;
      }
    }

    this.setData({
      currentNavtab: currentNum
    });
  },

  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


callEvent: function (e) {
  console.log(e)
  wx.makePhoneCall({
      phoneNumber: this.data.phoneNum
    })
},

goDeatailEvent: function () {
  wx.navigateTo({
      url: '../orderManage/orderDeatail/orderDeatail'
    })
},

// 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
        title: '身孕期糖尿病饮食'
    })
    var that = this
    //更新数据
      that.setData({
      })
  }
})
