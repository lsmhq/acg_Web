import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class video_title extends Component {
    
    render() {
        return (
            <Link to={this.props.path}>
            <div className='movie animated fadeIn'>
                <img src={this.props.src} className='videoImg'/>
                <p className='videoTitle'>{this.props.title}</p>
            </div>
            </Link>
        )
    }
}
