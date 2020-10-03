import React from 'react'
//引入路由
import routes from '@/routes'
//引入路由
import {Route , Switch , Redirect} from 'react-router-dom'
//组件
import Home from '@/routes/home/home'
export default class siderChildren extends React.Component{
    //创建content视图内容
    createView(){
        const view = (children)=>{
            if(!children) return
           return children.map(ele=>(
                <Route exact path={ele.path} component={ele.component}>

                </Route>
            ))
            
        }
        return routes.map(ele=>(
            view(ele.children)
        ))
    }
    render(){
        return <>
            <Switch>
                {/* 单独首页 */}
                <Route path='/home' component={Home}/>
                {this.createView()}
                <Redirect from='/*' to='/home'/>
            </Switch>
        </>
    }
}