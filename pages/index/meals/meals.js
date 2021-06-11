// pages/index/meals/meals.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mealsNameList: [{text: '早餐', id: '1'}, {text: '午餐', id: '2'}, {text: '下午茶', id: '3'}, {text: '晚餐', id: '4'}, {text: '夜宵', id: '5'}],
    className: 'mealsName-text',
  },
  
  /**
   * 页面的js方法
   */
  clickTab: function(e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      className: 'mealsName-active'
     })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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