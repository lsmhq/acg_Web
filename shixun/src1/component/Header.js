import React, { Component } from 'react';
import {Icon} from 'antd-mobile'

export default class Header extends Component {
    
    render() {
        let style ={

        };
        return (
            <div style={style}>
                <img src='/img/Logo.png' className='logo' alt='头像' />
                    <button className='button'>
                    <Icon key="0" type="search" style={{ color:'#000'}} />
                    </button>  
                    <input type='search' className='search' placeholder='单行输入' ></input>
                </div>
        )
    }
}
