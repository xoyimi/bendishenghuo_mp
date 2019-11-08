// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    id: 1,
    page: 1,
    pageSize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
        id: options.id
      }),
      this.getShopList()
  },
  getShopList() {
    //
    wx.showLoading({
      title: '加载中。。。',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request({
      url: 'https://www.liulongbin.top:8081/categories/' + this.data.id + '/shops?_page=' + this.data.page + '&_limit=' + this.data.pageSize,
      success: res => {
        this.setData({
          // es6展开运算符
          shopList: [...this.data.shopList, ...res.data]
        })
      },
      complete: () => {
        //只要完成了请求 就立即关闭下拉刷新效果
        wx.stopPullDownRefresh()
        //隐藏Loadong效果
        wx.hideLoading()
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //初始化数据
    this.setData({
      page: 1,
      shopList: []
    });
    this.getShopList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      page: this.data.page + 1
    });
    this.getShopList()
  }
})