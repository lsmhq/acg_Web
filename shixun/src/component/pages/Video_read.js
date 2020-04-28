import React, { Component } from 'react'

export default class Video_read extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.state.data.cover} className='videoImg' style={{marginLeft:'20px',marginTop:'20px'}}/>
                    <div className='content_title'>
                        <span className='video_content'>{this.state.data.titel}</span>
                        <span className='video_read'>简介:</span>
                    </div>
                </div>
            </div>
        )
    }
}
