// 右侧个人栏信息组件
import React from 'react'
import { Avatar, Divider } from 'antd' //引入头像以及分割线
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author_div comm_box">
      <div>
        <Avatar size={100} src="http://imgup04.iefans.net/iefans/2019-02/13/13/15500370527957_0.jpg" />
      </div>
      <div className="author_introduce">
        光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
      </div>
      <Divider>社交账号</Divider>
      <Avatar className="account" size={28} icon="github" src="" />
      <Avatar className="account" size={28} icon="qq" src="" />
      <Avatar className="account" size={28} icon="wechat" src="" />
      <Divider />
    </div>
  )
}
export default Author