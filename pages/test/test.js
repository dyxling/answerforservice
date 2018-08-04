// pages/test/test.js
var get_data = require("../../utils/getdata.js");
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: "",
    click_index: "",
    answer_color: "",
    isclick: false,
    countdown: 10,
    current_score:0
  },
  //点击选项触发函数
  select: function(event) {
    const that = this;
    if (event.currentTarget.dataset.right) {
      that.setData({
        click_index: event.currentTarget.dataset.index,
        answer_color: 'right',
        current_score:that.data.current_score+10
      });
      //console.log(that.data.current_score);
    } else {
      that.setData({
        click_index: event.currentTarget.dataset.index,
        answer_color: 'error'
      });
    }
    that.setData({
      isclick: true
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const that = this;
    let get_next_q, d_timer;
    reset(that);

    function reset(that) {
      //重置参数
      let qs = get_data.read_local();
      if (qs) {
        that.setData({
          questions: qs
        });
        that.setData({
          countdown: 10,
          isclick: false,
          click_index: '',
          answer_color: ''
        });
        //开始倒计时
        //clearInterval(d_timer);
        let cdown = that.data.countdown;
        d_timer = setInterval(function() {
          cdown = cdown - 1;
          that.setData({
            countdown: cdown
          });
          if (cdown <= 0) {
            clearInterval(d_timer);
            that.setData({
              questions: ""
            });
          }
          if (that.data.isclick == true) {
            clearInterval(d_timer);
            clearTimeout(get_next_q);
            that.setData({
              questions: "",
              countdown:0
            });
            let prolong=setTimeout(function() {reset(that)}, 1000);
            //clearTimeout(prolong);
            //reset(that);
          }
        }, 1000);
        get_next_q = setTimeout(function() {
          reset(that)
        }, 11000);
      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    const that=this;
    app.globalData.score=that.data.current_score+app.globalData.score;//切换页面时把本次得分赋给全局计分变量
    wx.showModal({
      title: '提示',
      content: '您本次一共得'+that.data.current_score+'分',
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})