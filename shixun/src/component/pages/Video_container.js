import React, { Component } from 'react';
import {Player} from 'video-react';
import './../../../node_modules/video-react/dist/video-react.css';
export default class Video_container extends Component {
    render() {
        return (
            <div>
                <div className='video_title'>
                    <h4>{this.props.title}</h4>
                </div>
                    <Player>
                        <source src={this.props.src}/>
                    </Player>
            </div>
        )
    }
}
