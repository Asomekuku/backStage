import React from 'react'
//引入局部css
import style from './layout.module.scss'



//引入antd组件开始
import { Layout } from 'antd'
const { Header,  Sider, Content } = Layout
// 引入antd组件介绍

class Layouts extends React.Component{
    render(){
        return <>
                <Layout className={style.ant_layout}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
    
                </Layout>
                </Layout>
                
            </>
    }
}
export default Layouts