//封装而不是单独文件就来一次网络请求,封装成一个模块，便于复用,扩展和维护。
;(function(window, $) {

  // 这是公共请求 request -> $.ajax
  function request(config = {}) {
    return $.ajax({
      url: config.url || '',
      method: config.method || "GET",
      timeout: config.timeout || 5000,
      data: config.data || {},
      headers: config.headers || {},


      //这里解构config,不会覆盖前面的参数，要是覆盖前面参数的值还是一样,但前面参数没有比如contentType,解构config就会添加上
      ...config
    })
  }

  //request的参数是对象而url和data没有值,因为get调用后传入的参数会等于url和data的值
  function get(url, data, config) {
    return request({
      url,
      method: 'GET',
      data,
      ...config
    })
  }

  function post(url, data, config) {
    return request({
      url,
      method: 'POST',
      data,
      ...config
    })
  }

  window.HYReq = {
    request,
    get,
    post
  }
}(window, jQuery))