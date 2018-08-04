Page({
  data: {
    status: '初始化...',
    number: 0,
  },
  onLoad: function (options) {
  },
  match_time_run() {
    let number = 1;
    let time = setInterval(() => {
      this.setData({
        number
      })
      number++
    }, 1000)
  },
})