// default 表示前台所需要的controller层都在default里
// admin 表示后台所需要的controller层
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api接口';// 测试
  }

  // 连接数据库，获取首页文章列表
  async getArticleList() {
    // let sql = `SELECT article.id as id FROM article LEFT JOIN type ON article.type_id=type.id` // 左连接
    let sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.addTime as addTime,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id' // 左连接
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }

  //获取文章列表各个详情
  async getArticleById() {
    let id = this.ctx.params.id // 前端传递的文章id
    let sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      'article.addTime as addTime,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName, ' +
      'type.id as typeId ' +
      'FROM article LEFT JOIN type ON article.type_id = type.id' // 左连接
    'WHERE article.id =' + id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }
}

module.exports = HomeController;
