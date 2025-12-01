$(function() {


  // 初始化插件:当出现问题就知道是主函数的问题了
  initPage()

  function initPage() {
    HYReq.get('http://123.207.32.32:9060/beike/api/homePageInfo').then(function(res) {
      // 1.渲染头部的地址
      rederHeaderAddress(res)
    })
  }

  function rederHeaderAddress(res) {
    // 1. 更新左上角的地址
    let addr = res.curLocation || {}
    $('.header .address').text(addr.city)
  }
})