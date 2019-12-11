import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import Box from '../component/Box';
import {Link,HashRouter as Router,Route} from 'react-router-dom';

export default class Person extends Component {
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
                    >个人中心</NavBar>
                {/* 个人资料 */}
                <div className="container">
                <div className="bg"></div>
                <div className="bg-mask"></div>
                <div className="content">
                    <img className="avatar" src="/img/Logo.png" alt='' />
                    <div className="info">
                    <p>昵称</p>
                    <p>这个人很懒，什么都没留下</p>
                    </div>
                </div>
                </div>
                {/* 粉丝关注历史 */}
                <div style={{marginTop:'3%'}}>
                    <div className='person2'>
                    <Link to='/funs'>粉丝 <br/> 0 <hr/></Link>
                    </div>
                    <div className='person2'>
                    <Link to='/concern'>关注 <br/> 112 <hr/></Link>
                    </div>
                    <div className='person2'>
                        <Link to='/history'>历史 <br/> 1231 <hr/></Link>
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
            <div id='footer'>
                        <Link to='/'>
                        <Box src='/img/首页.png' title='首页' />
                        </Link>
                        <Link to='/appaction'>
                        <Box src='/img/动态.png' title='动态' />
                        </Link>
                        <Link to='/appgood'>
                        <Box src='/img/商城.png' title='商城'/>
                        </Link>
                        <Link to='/person'>
                            <Box src='/img/个人中心.png' title='个人' />
                        </Link>
                        
                        

                    
                </div>
            </div>
        )
    }
}
