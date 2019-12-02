import React, { Component } from 'react'
import {NavBar, Icon, Tabs,WingBlank,Carousel,Grid,List, InputItem,Button,Card,WhiteSpace} from 'antd-mobile';

export default class History extends Component {
    render() {
        return (
            <div>
                <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(225,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >历史记录</NavBar>
                </div>
                {/* 历史记录 */}
                <WhiteSpace size="lg" />
                <Card full>
                <Card.Header
                    
                    thumb="/Logo.png" 
                />
                <Card.Body>
                    <p>柯南最新剧场版———绀青之拳</p>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
