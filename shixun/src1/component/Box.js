import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div className='box'>
                <img src={this.props.src}/>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
