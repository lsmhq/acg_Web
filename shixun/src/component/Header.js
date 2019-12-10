import React, { Component } from 'react';
import {Icon} from 'antd-mobile'
import {Link,HashRouter as Router,Route} from 'react-router-dom';
export default class Header extends Component {
    
    render() {
        
        return (
            <Router>
                    <div className='header'>
                <img src='/img/Logo.png' className='logo' alt='头像' />
                    <button className='button'>
                    <Icon key="0" type="search" style={{ color:'#000'}} />
                    </button>  
                    <input type='search' className='search' placeholder='单行输入' ></input>
            </div>
            <div>
                 <div  className='nav'>
                    <Link to={'/'} className='tab'>首页</Link>
                    <Link to={'/animat'} className='tab'>动画</Link>
                    <Link to='/comic' className='tab'>卡通</Link>
                    <Link to='/game' className='tab'>游戏</Link>
                    
                </div>
               
            </div>    
            </Router>
            
        )
    }
}
