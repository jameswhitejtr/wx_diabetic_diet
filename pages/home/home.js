
//获取应用实例
Page({
  data: {
    imgUrls: [
      '../images/home_01.jpg',
      '../images/home_02.jpg',
      '../images/home_03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    topPicData: [
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57db6edca2672.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57db93b5d85f1.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57dbaa52c8f5b.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57dbb3efeca7f.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57dbb57f7c374.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57dbb67f8af00.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57dbb758362ce.jpg'
      },
      {
        id: '',
        pic: 'http://img2.xyyzi.com/Upload/images/20160916/57dbb7b715284.jpg'
      }
    ]
  },
  onLoad() {
    console.log('aa')
  },
  onShow() {
    wx.hideNavigationBarLoading()
  }
})