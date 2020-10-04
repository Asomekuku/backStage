import React from 'react'
import style from './userlist.module.scss'
import { Table } from 'antd';


class UserList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            columns : [
                    {
                    title: '#',
                    dataIndex: 'Serial',
                    key: 'Serial',
                    },
                    {
                        title: '注册日期',
                        dataIndex: 'date',
                        key: 'date',
                    },
                  {
                    title: '用户姓名',
                    dataIndex: 'name',
                    key: 'name',
                  },
                  {
                    title: '注册地址',
                    dataIndex: 'address',
                    key: 'address',
                  },
            ],
            data : [
                {
                    key: '1',
                    Serial: '1',
                    date:'2020-09-20 01:46',
                    name: 'sadasdsad',
                    address: '上海',
                    tags: ['nice', 'developer'],
                  },
                  {
                    key: '2',
                    Serial: '2',
                    date:'2020-09-20 01:46',
                    name: 'sadasdsad',
                    address: '上海',
                    tags: ['loser'],
                  },
                  {
                    key: '3',
                    Serial: '3',
                    date:'2020-09-20 01:46',
                    name: 'sadasdsad',
                    address: '北京',
                    tags: ['cool', 'teacher'],
                  },
              ]
        }
    }
    onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      };
    render(){
        let { columns,data }=this.state
        return<>

            <div className={style.userlist}>
                <Table 
                columns={columns} 
                
                pagination={{total:10,pageSize:3,position:['bottomLeft'],onChange:this.onChange}}
                dataSource={data} 
                />
            </div>
        </>
    }
}
export default UserList