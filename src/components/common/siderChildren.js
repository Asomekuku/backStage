import React from 'react'
import { Menu} from 'antd';
//引入css
import style from './style.module.scss'
//引入路由
import {Link} from 'react-router-dom'
//引入ixon
import {
  AppstoreOutlined, 
} from '@ant-design/icons'
//引入路由列表
import routes from '@/routes'
const { SubMenu } = Menu

export default class siderChildren extends React.Component{
    //创建菜单
    createSider(){
        const item = (children)=>{
            if(!children) return
           return children.map(ele=>(
                <Menu.Item key={ele.id}>
                    <Link to={ele.path} replace>
                        {ele.test}
                    </Link>
                </Menu.Item>
            ))
            
        }
      return routes.map(ele=>(
            <SubMenu key={ele.id} icon={ele.icon} title={ele.test}>
                {item(ele.children)}
            </SubMenu>
        ))
    }
    render(){
        return (
            <div className={style.siderChildren}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {/* 首页跳转 */}
                    
                        <Menu.Item key="9" icon={<AppstoreOutlined />}>
                            <Link to='/home' replace>
                                首页
                            </Link>
                        </Menu.Item>
                    
                    {this.createSider()}
                  
                    
                </Menu>
            </div>
        )

    }
    
    
}
 