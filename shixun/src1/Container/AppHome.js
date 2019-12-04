import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Box from '../component/Box';
import Header from '../component/Header';
import Main from '../component/pages/Main';
import Game from '../component/pages/Game';
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{lineHeight:'50px',width:'100%',}}>
                    <Link to={'/main'} className='tab'>首页</Link>
                    <Link to={'/start'} className='tab'>动画</Link>
                    <Link to='/api' className='tab'>卡通</Link>
                    <Link to='/about' className='tab'>游戏</Link>
                    <Route path='/main' exact component={Main}/>
                    <Route path='/start' exact component={Game}/>
                </div>


                <div id='footer'>
                    <div className='box'>
                        <Link to='/' >
                            <img src='/img/首页.png'       alt=''   className='footerimg'/  >
                            <span className='text'>首页</span>
                        </Link>
                    </div>
                    <div className='box'>
                        <Link to='/'>
                            <img src='/img/动态.png'       alt=''  className='footerimg'/ >
                            <span className='text'>动态</span>
                        </Link>
                    </div>
                        <Link to='/appgood'>
                        <Box src='/img/' title='个人' className_img='footerimg' className_span='text'/>
                        </Link>
                        <Link to='/'>
                            <Box src='/img/' title='个人' className_img='footerimg' className_span='text'/>
                        </Link>
                    
                    
                    
                </div>

            </div>
        )
    }
}
