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
        console.log(this.props.match.params.id);
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
        setInterval(()=>{
            if(document.getElementById('video-1'))
                this.shoot();
        },1000);
    }
    send = (e)=>{
        console.log(this.props.match.params.id);
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
        var span = document.createElement('span');
        span.innerHTML = document.getElementById('barrage').value;
        span.classList.add('barrage');
        span.classList.add('move');
        span.style.color = this.color();
        span.style.top = - document.getElementsByClassName('myPlayer')[0].clientHeight/15 + document.getElementsByClassName('myPlayer')[0].clientHeight * Math.random()+60 + 'px';
        span.style.left = `${100+(Math.random()+0.1)*20}%`;
        span.style.textAlign = 'center';
        span.style.border = '1px solid white';
        span.style.wordWrap = 'break-word';
        span.style.whiteSpace = 'nowrap';
        document.getElementsByClassName('myPlayer')[0].append(span);
        document.getElementById('barrage').value = '';
    }
    shoot = ()=>{
        //弹幕效果
        this.state.barrage.map(val=>{
            if(parseInt(document.getElementById('video-1').currentTime) === parseInt(val.timetemp) && !document.getElementById('video-1').paused){
                var span = document.createElement('span');
                span.innerHTML = val.content;
                span.classList.add('barrage');
                span.classList.add('move');
                span.style.color = 'white';
                span.style.top = - parseInt(document.getElementsByClassName('myPlayer')[0].clientHeight)/10 + parseInt(document.getElementsByClassName('myPlayer')[0].clientHeight) * (Math.random()+0.2) + 'px';
                span.style.left = `${100+(Math.random()+0.1)*20}%`;
                span.style.wordWrap = 'break-word';
                span.style.whiteSpace = 'nowrap';
                var timer = setTimeout(()=>{
                    span.style.display = 'none';
                    clearInterval(timer);
                },5000);
                document.getElementsByClassName('myPlayer')[0].append(span);
            }
        })
    }
    color = ()=>{
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let color = `rgb(${r},${g},${b})`;
        return(color);
    }
    render() {
        return (
            <div style={{height:'100%',width:'100%'}}>
                <NavBar
                style={{backgroundColor:'rgb(255,64,129)',
                position:'fixed',zIndex:'1000',left:'0px' ,top:'0px',width:'100%'
            }}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    window.history.back(-1);
                    this.setState({
                        barrage:[]
                    });
                }}
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
