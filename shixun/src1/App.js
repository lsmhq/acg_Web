import React, { Component } from 'react'
import AppHome from './Container/AppHome'
import {HashRouter as Router} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <Router>
                <AppHome/>
            </Router>
        )
    }
}