// pages/index/carousel/carousel.js
Page({
  /**
   * 用户点击右上角分享
   */
      onShareAppMessage() {
        return {
          title: 'swiper',
          path: '../../../images/carousel-img/gbjd.jpg'
        }
      },
  /**
   * 页面的初始数据
   */
  data: {
    carouselList: [
      {img: '../../../images/carousel-img/gbjd.jpg', name: '麻婆豆腐', user: '../../../images/carousel-img/swj.jpg', username: '美食小编'},
      {img: '../../../images/carousel-img/hsbx.jpg', name: '红烧大虾', user: '../../../images/carousel-img/qbzcs.jpg', username: '美食小编'},
      {img: '../../../images/carousel-img/yrxf.jpg', name: '椰蓉蟹粉', user: '../../../images/carousel-img/xscc.jpg', username: '美食小编'}
    ],
    recommenList: [
      {icon: 'iconfont icon-vip', text: '每日优惠'},
      {icon: 'iconfont icon-huajian', text: '食材大全'},
      {icon: 'iconfont icon-remenhuatibeifen', text: '热门专题'},
      {icon: 'iconfont icon-fenlei', text: '菜谱分类'},
      {icon: 'iconfont icon-shipin', text: '视频菜谱'}],
    curre: '每日优惠',
    curreClass: 'recommen-box-color',
    otherClass: 'recommen-box-other',
  },

  /**
   * JS
   */
  clickTab(e) {
    this.setData({
      curre: e.currentTarget.dataset.current
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

})