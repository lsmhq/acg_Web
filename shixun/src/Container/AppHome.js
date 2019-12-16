import React, { Component } from 'react'

import {Link,HashRouter as Router,Route} from 'react-router-dom'
import Box from '../component/Box';
import Header from '../component/Header';
import Main from '../component/pages/Main';
import Game from '../component/pages/Game';
import Comic from '../component/pages/Comic';
import Animat from '../component/pages/Animat';

export default class AppHome extends Component {
    render() {
        return (
            <Router>
                <div>
                <Header/>
                <div>
                <Route path='/apphome'    component={Main}/>
                    <Route path='/game'   component={Game}/>
                    <Route path='/animat'  component={Animat}/>
                    <Route path='/comic'  exact component={Comic}/>
                </div>

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
            </Router>
            
        )
    }
}
