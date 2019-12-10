import React, { Component } from 'react'
import AppHome from './Container/AppHome'
import {HashRouter as Router,Route} from 'react-router-dom'
import AppGppd from './Container/AppGood';
import Person from './Container/Person'
import AppAction from './Container/AppAction';
import Funs from './Container/Funs';
import History from './Container/History';
import Concern from './Container/Concern';
import Main from './component/pages/Main';
import Game from './component/pages/Game';
import Comic from './component/pages/Comic';
import Animat from './component/pages/Animat';
import ShopCar from './Container/ShopCar';
import GoodMsg from './Container/GoodMsg';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/'  component={AppHome}/>
                <Route path='/appgood' component={AppGppd}/>
                <Route path='/person' component={Person}/>
                <Route path='/appaction' component={AppAction}/>
                <Route path='/funs' component={Funs}/>
                <Route path='/history' component={History}/>
                <Route path='/concern' component={Concern}/>
                <Route path='/game'   component={Game}/>
                <Route path='/animat'  component={Animat}/>
                <Route path='/comic'  exact component={Comic}/>
                <Route path='/shopcar'  component={ShopCar}/>
                <Route path='/goodmsg/:id'  component={GoodMsg}/>
             
                 
            </Router>
        )
    }
}