// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    girdsList: [],
    swiperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://www.liulongbin.top:8081/slides',
      success:res=>{
        this.setData({
          swiperList:res.data
        })
      }
    }),
    wx.request({
      url: 'https://www.liulongbin.top:8081/categories',
      success: res => {
        this.setData({
          girdsList: res.data
        })
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  }

})