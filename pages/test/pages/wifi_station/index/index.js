const app = getApp()

Page({
    onLoad: function() {
      var devicesId = "503214182" 
      var api_key = "yBw5mHyDMUp3C3AbarDJbZHabg4 =" 
        const requestTask = wx.request({
          url: 'https://api.heclouds.com/devices/' + devicesId + '/datapoints?datastream_id=Light,Temperature,Weight&limit=15',
          header: {
            'content-type': 'application/json',
            'api-key': api_key
          },
          success: function (res) {
            var app = getApp()
            app.globalData.temperature = res.data.data.datastreams[0]
            app.globalData.light = res.data.data.datastreams[1]
            app.globalData.weight = res.data.data.datastreams[2]
            console.log(app.globalData.light)
             wx.navigateTo({
             url: '../tianqi/tianqi',
            })
          },

          fail: function (res) {
            console.log("fail!!!")
          },

          complete: function (res) {
            console.log("end")
          }
        })
    }
})