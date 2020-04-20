import React, { Component } from 'react'
import Signin from './container/Signin'
import Signup from './container/Signup'
import Person from './container/Person'
import History from './container/History'
import Concern from './container/Concern'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
import Setting from './container/Setting'
import AppHome from './container/AppHome'
import Msg from './container/Msg'
import Chat from './container/Chat'
import Address from './container/Address'
import CommentApp from './container/CommentApp'
import Action from './container/Action'
import Leftmenu from './container/Leftmenu'
import Actiona from './container/Actiona'
import Form from './container/Form'
import video from './container/Video'
export default class App extends Component {
  render() {
    return (
      <AppHome/>         
    )
  }
}

