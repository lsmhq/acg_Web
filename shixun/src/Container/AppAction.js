import React, { Component } from 'react'
import {Link,HashRouter as Router,Route} from 'react-router-dom';
import Box from '../component/Box';
export default class AppAction extends Component {
    render() {
        return (
            <Router>
            <div>
                动态
            </div>
            <div>
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
            </Router>
            
        )
    }
}
