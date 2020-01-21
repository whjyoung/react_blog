// 前台展示所需要的路由
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);//路径，访问模块
  router.get('/default/getArticleList', controller.default.home.getArticleList);//路径，访问模块
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);//路径，访问模块 列表详情
};
