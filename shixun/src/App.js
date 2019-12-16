import React, { Component } from 'react'
import AppHome from './Container/AppHome'
import {HashRouter as Router,Route} from 'react-router-dom'
import AppGppd from './Container/AppGood';
import Person from './Container/Person'
import AppAction from './Container/AppAction';
import Funs from './Container/Funs';
import Concern from './Container/Concern';
import Game from './component/pages/Game';
import Comic from './component/pages/Comic';
import Animat from './component/pages/Animat';
import ShopCar from './Container/ShopCar';
import GoodMsg from './Container/GoodMsg';
import Articlemsg from './Container/Articlemsg';
import Leftmenu from './Container/Leftmenu';
import Setting from './Container/Setting';
import Signin from './Container/Signin';
import Signup from './Container/Signup';
import Activate from './Container/Activate';
import Searchmsg from './Container/Searchmsg';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/apphome'  component={AppHome}/>
                <Route path='/appgood' component={AppGppd}/>
                <Route path='/person' component={Person}/>
                <Route path='/appaction' component={AppAction}/>
                <Route path='/funs/:id' component={Funs}/>
                <Route path='/concern/:id' component={Concern}/>
                <Route path='/game'   component={Game}/>
                <Route path='/animat'  component={Animat}/>
                <Route path='/comic'  exact component={Comic}/>
                <Route path='/shopcar'  component={ShopCar}/>
                <Route path='/goodmsg/:id'  component={GoodMsg}/>
                <Route path='/articlemsg/:id'  component={Articlemsg}/>
                <Route path='/leftmenu'  component={Leftmenu}/>
                <Route path='/setting' component={Setting}/>
                <Route path={'/'} exact component={Signin}/>
                <Route path={'/logup'} component={Signup}/>
                <Route path={'/email'} component={Activate}/>
                <Route path='/searchmsg' component={Searchmsg}/>
             
                 
            </Router>
        )
    }
}