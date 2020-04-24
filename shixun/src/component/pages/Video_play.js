import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile';
import Player from 'video-react/lib/components/Player';
import './../../../node_modules/video-react/dist/video-react.css';
export default class Video_play extends Component {
    constructor(){
        super();
        this.state = {
            data:{},
            barrage:[]
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
        //弹幕加载
        fetch(`https://daitianfang.1459.top/api/v1/barrage?id='${this.props.match.params.id}'`).then(res=>res.json()).then((data)=>{
            console.log(data.data);
            this.setState({
                barrage:data.data
            })
        })
    }
    send = (e)=>{
        let data = {
            type:'insert',
            id:this.props.match.params.id,
            time:parseInt(document.getElementById('video-1').currentTime),
            val:document.getElementById('barrage').value
        }
        console.log(data);
        fetch(`https://daitianfang.1459.top/api/v1/barrage`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
              },
            body:JSON.stringify(data)
        }).then(res=>{
            fetch(`https://daitianfang.1459.top/api/v1/barrage?id='${this.props.match.params.id}'`).then(res=>res.json()).then((data)=>{
                console.log(data.data);
                this.setState({
                    barrage:data.data
                })
            })
        })
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
                        <input type='text' placeholder="发点什么吧" className='input' id='barrage'/>
                        <input type='button' value='发送' className='send' onClick={(e)=>{this.send(e)}}/>
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
