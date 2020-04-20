import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank,Carousel,Grid,List, InputItem,Button} from 'antd-mobile';
import Signin from './Signin'
import {Link} from 'react-router-dom'
const data1 = Array.from(new Array(1)).map(() => ({
    icon: '/Logo.png',
  }));
export default class Signup extends Component {
    
    render() {
        
        return (
            <div>
                <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >注册</NavBar>
                {/* ACG图片 */}
                <Grid data={data1} columnNum={1} itemStyle={{ height: '150px',marginTop:'50px'}} />
                {/* 文本框 */}
                
                <List style={{margin:'auto',marginTop:'20px',border:'1px solid rgb(255,64,129)',borderRadius:'5px',width:'70%'}}>
                <InputItem
                type="text"
                placeholder="请输入昵称"
                >昵称</InputItem>
                </List>
                
                <List style={{margin:'auto',marginTop:'20px',border:'1px solid rgb(255,64,129)',borderRadius:'5px',width:'70%'}}>
                <InputItem
                type="email"
                placeholder="请输入邮箱"
                >邮箱</InputItem>
                </List>

                <List style={{margin:'auto',marginTop:'20px',border:'1px solid rgb(255,64,129)',borderRadius:'5px',width:'70%'}}>
                <InputItem
                type="password"
                placeholder="****"
                >密码</InputItem>
                </List>

                <List style={{margin:'auto',marginTop:'20px',border:'1px solid rgb(255,64,129)',borderRadius:'5px',width:'70%'}}>
                <InputItem
                type="password"
                placeholder="****"
                >确认密码</InputItem>
                </List>
                
                {/* 注册button */}
                <Link to='/setting'><Button type="primary" style={{width:"70%",margin:'auto',marginTop:'20px'}}>注册</Button></Link>
                </div>
            </div>
        )
    }
}
