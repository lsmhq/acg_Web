import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank,Carousel,Grid,List, InputItem,Button} from 'antd-mobile';

export default class Person extends Component {
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
                    >个人中心</NavBar>
                {/* 个人资料 */}
                <div class="container">
                <div class="bg"></div>
                <div class="bg-mask"></div>
                <div class="content">
                    <img class="avatar" src="/Logo.png"/>
                    <div class="info">
                    <p>昵称</p>
                    <p>这个人很懒，什么都没留下</p>
                    </div>
                </div>
                </div>
                {/* 粉丝关注历史 */}
                <div style={{marginTop:'3%'}}>
                    <div className='person2'>
                        粉丝 <br/> 0 <hr/>
                    </div>
                    <div className='person2'>
                        关注 <br/> 112 <hr/>
                    </div>
                    <div className='person2'>
                        历史 <br/> 1231 <hr/>
                    </div>
                </div>
                {/* 个人简介 */}
                <div className='person3'>
                <p style={{marginTop:'20%'}}>性别：</p><hr/>
                <p style={{marginTop:'10%'}}>爱好：</p><hr/>
                <p style={{marginTop:'10%'}}>家乡：</p><hr/>
                <p style={{marginTop:'10%'}}>生日：</p><hr/>
                </div>
                <div style={{margin:'auto',width:'60%'}}>
                <textarea className='person4' placeholder='我的【个性】' />
                </div>
            </div>
            </div>
        )
    }
}
