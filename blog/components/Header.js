// 头部组件
import React from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

// 博客头部，一行两列
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center" align="middle">
      {/* xs、sm在手机上显示上全部显示，中等显示10依次类推 */}
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header_logo">技术胖</span>
        <span className="header_text">专注前端开发，每年100集免费视频</span>
      </Col>
      {/* xs、sm在手机上不显示，中等显示14依次类推 */}
      <Col className="menu_div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <a href="/list">
              <Icon type="youtube" />
              视频
            </a>
          </Menu.Item>
          <Menu.Item key="life">
            <Icon type="smile" />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header