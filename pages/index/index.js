//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    high: 1.8,
    weight:[]
  },

  changeSlider(e) {
    this.setData({ high: e.detail.value });
    app.globalData.high = this.data.high;
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
     


    var weight = app.globalData.humidity;
    this.setData({
      weight: weight
    })
      var devicesId = "503131920"
      var api_key = "JLtZ4wtqKd8jCmJ6HZhPJPKmHs8="
      const requestTask = wx.request({
        url: 'https://api.heclouds.com/devices/' + devicesId + '/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',
        header: {
          'content-type': 'application/json',
          'api-key': api_key
        },
        success: function (res) {
          var app = getApp()
          app.globalData.temperature = res.data.data.datastreams[0]
          app.globalData.light = res.data.data.datastreams[1]
          app.globalData.humidity = res.data.data.datastreams[2]
          console.log(app.globalData.light)
          var length = app.globalData.humidity.datapoints.length
         app.globalData.Weight=app.globalData.humidity.datapoints[length-1].value;
        },

        fail: function (res) {
          console.log("fail!!!")
        },

        complete: function (res) {
          console.log("end")
        }
      })
    
  },





  start:function () {
    wx.navigateTo({
      url: '../start/start'
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
