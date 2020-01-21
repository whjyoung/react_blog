'use strict';
// 引入路由
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default')(app)//是对方法的调用，传入 app 参数。
};
