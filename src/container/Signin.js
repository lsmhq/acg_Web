import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { NavBar, Icon, Tabs,WingBlank,Carousel,Grid,List, InputItem,Button} from 'antd-mobile';
import Person from './Person';
import Signup from './Signup';
import setting from './Setting'
// ACG图片
const data1 = Array.from(new Array(1)).map(() => ({
    icon: '/Logo.png',
  }));
export default class Signin extends Component {
    render() {
        return(
            <div>
            <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',color:'white'}}
                    >登录</NavBar>
                {/* ACG图片 */}
                <Grid data={data1} columnNum={1} itemStyle={{ height: '150px',marginTop:'50px'}} />
                {/* 文本框 */}
                <List style={{margin:'auto',marginTop:'20px',border:'1px solid rgb(255,64,129)',borderRadius:'5px',width:'70%'}}>
                <InputItem
                type="text"
                placeholder="请输入用户名"
                >用户名</InputItem>
                </List>
                <List style={{margin:'auto',marginTop:'20px',border:'1px solid rgb(255,64,129)',borderRadius:'5px',width:'70%'}}>
                <InputItem
                
                type="password"
                placeholder="****"
                >密码</InputItem>
                </List>                
                </div>
                <div style={{margin:'auto',width:'50%',marginTop:'20px'}}>
                <Link to='/signup'>注册</Link>
                <div style={{float:'right'}}>忘记密码?</div>
                </div>
                {/* 登录button */}
                <Link to= '/person'><Button type="primary" style={{width:"70%",margin:'auto',marginTop:'20px'}}>登录</Button></Link>
            </div>
        )
    }
}
