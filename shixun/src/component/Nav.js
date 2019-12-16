import React, { Component } from 'react';
import '../login.css';
export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
