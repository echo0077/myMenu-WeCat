// pages/index/meals/meals.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mealsNameList: [{
      text: '早餐',
      id: 0
    }, {
      text: '午餐',
      id: 1
    }, {
      text: '下午茶',
      id: 2
    }, {
      text: '晚餐',
      id: 3
    }, {
      text: '夜宵',
      id: 4
    }],
    mealsTabContent: [{
        img: ['../../../images/meals-img/ym.jpg', '../../../images/meals-img/sjb.jpg', ],
        id: 0,
        name1: '玉米炒鸡蛋',
        name2: '生煎包',
        msg: '营养丰富，早餐最爱'
      },
      {
        img: ['../../../images/meals-img/pg.jpg', '../../../images/meals-img/jc.jpg', ],
        id: 1,
        name1: '红烧排骨',
        name2: '可乐鸡翅',
        msg: '色香味俱全，惊爆味蕾'
      },
      {
        img: ['../../../images/meals-img/mb.jpg', '../../../images/meals-img/ssb.jpg'],
        id: 2,
        name1: '蔓越莓包',
        name2: '手撕面包',
        msg: '香气扑鼻，好吃过瘾  '
      },
      {
        img: ['../../../images/meals-img/tdb.jpg', '../../../images/meals-img/xbg.jpg'],
        id: 3,
        name1: '香煎土豆饼',
        name2: '杏鲍菇',
        msg: '家常经典，上桌被抢光'
      },
      {
        img: ['../../../images/meals-img/yy.jpg', '../../../images/meals-img/jz.jpg', ],
        id: 4,
        name1: '鱿鱼圈',
        name2: '香辣鸡爪',
        msg: '味道超赞，无比解馋'
      }
    ],
    mealsCarousel: ['../../../images/meals-img/1.jpg', '../../../images/meals-img/2.jpg', '../../../images/meals-img/3.jpg',],
    mealsName: 'mealsNametext',
    mealsActiviy: 'mealsNameactive',
    chooseId: 0,

  },

  /**
   * 页面的js方法 
   */

  // 点击事件
  clickTab(e) {
    var cur = e.target.dataset.current;
    if (this.data.chooseId == cur) {
      return false;
    } else {
      this.setData({
        chooseId: cur
      })
    }
  },
  // 滚动切换标签样式
  switchTab(e) {
    this.setData({
      chooseId: e.detail.current
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