/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(
    {"success":true,"message":"\u767b\u5f55\u6210\u529f","code":"","data":{"user_id":"90","user_name":"Lily","phone":"159571171111","photo":"","product_status":8,"service_id":0,"product_id":0,"customer":"aaaaa","user_role":"1"}}
    );
  }
}