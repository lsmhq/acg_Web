import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile';
import Player from 'video-react/lib/components/Player';
import './../../../node_modules/video-react/dist/video-react.css';
export default class Video_play extends Component {
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }
    componentDidMount(){
        fetch(`https://daitianfang.1459.top/api/v1/video?id='${this.props.match.params.id}'`).then(data=>data.json()).then(res=>{
            this.setState({
                data:res.data[0]
            },()=>{
                this.player.load();

            })
        })
        if(document.getElementById('video-1').paused){
            clearInterval(timer);
        }else{
            var timer = setInterval(() => {
                console.log(document.getElementById('video-1').currentTime);
            }, 1000);
        }
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'rgb(255,64,129)',
                position:'fixed',zIndex:'1000',left:'0px' ,top:'0px',width:'100%'
            }}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back(-1)}
                >{`视频播放--${this.state.data.titel}`}</NavBar>
                <div className='myPlayer'>
                    <Player ref={player => {this.player = player;}} videoId="video-1">
                        <source src={this.state.data.barragefile}/>
                    </Player>
                </div>
                <div className='video_title animated fadeIn'>
                    <div className='danmu'>
                        <input type='text' placeholder="发点什么吧" className='input'/>
                        <input type='button' value='发送' className='send'/>
                    </div>
                    <div>
                        <img src={this.state.data.cover} className='videoImg' style={{marginLeft:'20px',marginTop:'20px'}}/>
                        <span className='video_content'>{this.state.data.titel}</span>
                    </div>
                </div>
            </div>
        )
    }
}
