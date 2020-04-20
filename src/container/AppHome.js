import React, { Component } from 'react'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
import Person from './Person';
import Address from './Address';
import Setting from './Setting';
import History from './History';
import Concern from './Concern';
import Funs from './Funs';
import Chat from './Chat';
import Msg from './Msg';
import Action from './Action';
import Leftmenu from './Leftmenu';
import About from './About';
import Actiona from './Actiona';
import Vedio from './Video';
export default class AppHome extends Component {
    render() {
        return (
            <Router>
                <Route path='/signin' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/person' component={Person}/>
                <Route path='/history' component={History}/>
                <Route path='/concern' component={Concern}/>
                <Route path='/setting' component={Setting}/>
                <Route path='/address' component={Address}/>
                <Route path='/funs' component={Funs}/>
                <Route path='/chat' component={Chat}/>
                <Route path='/msg' component={Msg}/>
                <Route path='/action' component={Action}/>
                <Route path='/leftmenu' component={Leftmenu}/>
                <Route path='/about' component={About}/>
                <Route path='/actiona' component={Actiona}/>
                <Route path='/vedio' component={Vedio}/>
            </Router>
                
        )
    }
}
