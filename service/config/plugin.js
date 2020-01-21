'use strict';
// 所有的插件配置
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
// 配置mysql插件 用于连接数据库
// exports.mysql = {
//   enable: true, // 是否开启
//   package: 'egg-mysql'
// }