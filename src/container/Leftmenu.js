import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Leftmenu extends Component {
    render() {
        return (
            <div className='menu0'>
                
                <div className='menu1'>
                    <img src='/Logo.png' style={{width:'25%',height:'25%'}}/>
                    <p>ACG-wiki</p>
                    <p style={{fontSize:'12px'}}>这个人很懒，什么也没留下</p>
                </div>
                <div>
                    <div className='menu1'>
                        <ul className='menu2'>
                        <Link to='/person'>个人中心</Link>
                        </ul>
                        <ul className='menu2'>
                        <Link to='/concern'>关注</Link>
                        </ul>
                        <ul className='menu2'>
                        <Link to='/leftmenu'>活动</Link>
                        </ul>
                        <ul className='menu2'>
                        <Link to='/funs'>粉丝</Link>
                        </ul>
                        <ul className='menu2'>
                        <Link to='/leftmenu'>收藏</Link>
                        </ul>
                        <ul className='menu2'>
                        <Link to='/appgood'>商城</Link>
                        </ul>
                    </div>

                </div>
                <div>
                    
                    <Link to = '/setting'><img src='/setting.png' className='menu3'/></Link>
                    <Link to = '/'><img src='/return.png' className='menu4'></img></Link>
                </div>
            </div>
        )
    }
}