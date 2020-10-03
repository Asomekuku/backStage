import React from 'react'
//引入局部css
import style from './layout.module.scss'
//引入组件开始
import SiderChildren from '@/components/common/siderChildren'
import ContentChildren from '@/components/common/contentChildren'
//引入组件结束



//引入antd组件开始
import { Layout } from 'antd'
const { Header,  Sider, Content } = Layout
// 引入antd组件介绍

class Layouts extends React.Component{
    render(){
        return <>
                <Layout className={style.ant_layout}>
                <Sider className={style.sider}>
                    <SiderChildren/>
                </Sider>
                <Layout>
                    <Header className={style.header}>Header</Header>
                    <Content className={style.content}>
                        <ContentChildren/>
                    </Content>
    
                </Layout>
                </Layout>
                
            </>
    }
}
export default Layouts