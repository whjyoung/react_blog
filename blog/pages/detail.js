// 详情页
import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd' //建立了—app.js全局引入了antdcss后，这边就可以按需引入了
import Header from '../components/Header'
import Author from '../components/Author' //个人信息组件
import Advertisement from '../components/Advertisement' //通用广告组件
import Footer from '../components/Footer' //底部版权组件
import '../public/style/pages/detail.css'
import ReactMarkdown from 'react-markdown' // 引入markdown插件
import MarkNav from 'markdown-navbar' // markdown导航栏
import 'markdown-navbar/dist/navbar.css' // 导航栏样式
import axios from 'axios'

const Detail = () => {
  // markdown
  let markdown = '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'
  return (
    <div>
      <Head>
        <title>Detail</title>
      </Head>
      {/* 头部组件 */}
      <Header></Header>
      <Row className="comm_main" type="flex" justify="center">
        <Col className="comm_left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {/* 左侧 */}
          <div className="bread_div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">XXX</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="detail_title">
            React实战视频教程-技术胖Blog开发
        </div>
          <div className="list_icon center">
            <span>
              <Icon type="calendar" />2019-06-28
          </span>
            <span>
              <Icon type="folder" />视频教程
          </span>
            <span>
              <Icon type="fire" />5498人
          </span>
          </div>
          {/* 这边存放的是markdown内容 */}
          <div className="detail_content">
            <ReactMarkdown
              source={markdown}
              escapeHtml={false}
            />
          </div>
        </Col>
        <Col className="comm_right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* 右侧单独一个组件 */}
          <Author />
          <Advertisement />
          <Affix offsetTop={5}>
            <div className="detail_nav comm_box">
              <div className="nav_title">文章目录</div>
              <MarkNav
                className="title_anchor"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detail.getInitialProps = async(context) => {
  console.log(context.query.id)
  let id = context.query.id // 文章id
  const promise = new Promise((resolve) => {
    //默认get方法，不需要再加axios.get啥的
    axios('http://localhost:7001/default/getArticleById/'+id)
    .then(res =>{
      console.log(res.data)
      resolve(res.data)
    })
  })
  //需要返回值，否则报错
  return await promise
}
export default Detail