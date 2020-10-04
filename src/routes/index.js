import React from 'react'
//引入icon图标
import {
    FileTextOutlined,
    PlusOutlined,
    StarOutlined,
    EditOutlined,
    SettingFilled,
    ExclamationOutlined
} from '@ant-design/icons'
//引入组件
import loadble from '@loadable/component'
const UserList = loadble(()=>import('./dataManageMent/userList/userList'))

const routes=[
    {
        id:1,
        test:'数据管理',
        icon:<FileTextOutlined/>,
        children:[
            {id:1-1,test:'用户列表',path:'/userlist',component:UserList}
        ]
    },
    {
        id:2,
        test:'添加数据',
        icon:<PlusOutlined />,
        children:[
            {id:2-1,test:'用户列表',path:'',component:''}
        ]
    },
    {
        id:3,
        test:'图标',
        icon:<StarOutlined />,
        children:[
            {id:3-1,test:'用户列表',path:'',component:''}
        ]
    },
    {
        id:4,
        test:'编辑',
        icon:<EditOutlined />,
        children:[
            {id:4-1,test:'用户列表',path:'',component:''}
        ]
    },
    {
        id:5,
        test:'设置',
        icon:<SettingFilled />,
        children:[
            {id:5-1,test:'用户列表',path:'',component:''}
        ]
    },
    {
        id:6,
        test:'说明',
        icon:<ExclamationOutlined />,
        children:[
            {id:6-1,test:'用户列表',path:'',component:''}
        ]
    }

]
export default routes