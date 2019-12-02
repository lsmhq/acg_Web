import React, { Component } from 'react'
import Signin from './container/Signin'
import Signup from './container/Signup'
import Person from './container/Person'
import History from './container/History'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
        <Signin/>
    )
  }
}

