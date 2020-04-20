import React, { Component } from 'react'
import {NavBar, Icon, Tabs,WingBlank,Carousel,Grid,List, InputItem,Button,Card,WhiteSpace,TabBar} from 'antd-mobile';
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >我的粉丝</NavBar>
            </div>
            </div>
        )
    }
}
