import React, { Component } from 'react'
import Body from '../Body';
import {Link,HashRouter as Router,} from 'react-router-dom'
import Box from '../Box';
import Header from '../Header';

export default class Comic extends Component {
    render() {
        return (
            <div>
                <div>
                <Header/>
                </div>
                <div style={{height:'120px'}}>

                </div>
                <Body url='https://daitianfang.1459.top/api/v1/chapter?type=comic'/>
                <div id='footer'>
                        <Link to='/apphome'>
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
