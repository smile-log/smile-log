import React from 'react'
import { Menu, Icon  } from 'antd';
import {Link} from 'react-router-dom'
import MenuList from './MenuList'
import './index.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class NavList extends React.Component{
  renderNav(){
    return this.renderMentItem(MenuList)
  }
  renderMentItem(arr){
      return arr.map((item)=>{
        if (item.children) {
          return(
            <SubMenu  key={item.path} title={item.title}>
              {this.renderMentItem(item.children)}
            </SubMenu >
          )
        }else{
          return <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </Menu.Item>
        }
      })
  }
  
    render(){
        return(
          <div className="navleft">
            <div className="title">
              <img src="/asset/antd.svg" alt=""/>
              <h2 id='title'>小不点儿</h2>
            </div>
            <Menu theme ='dark' style={{ width: 256 }} mode="inline">
              {this.renderNav()}
            </Menu>
          </div>
            
        )
    }
}
export default NavList