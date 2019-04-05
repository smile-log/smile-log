import React, { Component } from 'react'
import {Button} from 'antd'
import './Header.less'

export class Header extends Component {

  constructor(props) {
    super(props);
    // console.log(this)
  }
  
  exit=()=>{
    console.log(this)
    this.props.router.history.push("/login")
  }

  render() {
    return (
      <div className='header'>
        <div className='userInfo'>
            <span>欢迎XX登陆</span>
            <Button type='danger' onClick={this.exit}>
              退出
            </Button>
        </div>
        <div className='crumb'>
            用户管理 > 用户添加
        </div>
      </div>
    )
  }
}
export default Header
