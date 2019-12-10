import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div className='box'>
                <img src={this.props.src}  alt='' className='footerimg'/>
                <span className='text'>{this.props.title}</span>
            </div>
        )
    }
}
