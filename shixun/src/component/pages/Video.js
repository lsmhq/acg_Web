import React, { Component } from 'react';
import Body from '../Body';
import {Link,HashRouter as Router,} from 'react-router-dom';
import Box from '../Box';
import Header from '../Header';
import {Player} from 'video-react';
import './../../../node_modules/video-react/dist/video-react.css';
export default class Video extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/video').then(data=>data.json()).then(res=>{
            this.setState({
                data:res.data
            })
        })
        //弹幕加载
    }
    render() {
        return (
            <div>
                <div>
                <Header/>
                </div>
                <div style={{height:'120px'}}>
                </div>
                <div>
                    {
                        this.state.data.map(val=>{
                            <div className='video'>
                                <Player>
                                    <source src={val.vedio_src}/>
                                </Player> 
                            </div>
                        })
                    }
                </div>
                <div id='footer'>
                        <Link to='/apphome'>
                        <Box src='/img/首页.png' title='首页' />
                        </Link>
                        <Link to='/appaction'>
                        <Box src='/img/动态.png' title='动态' />
                        </Link>
                        <Link to='/appgood'>
                        <Box src='/img/商城.png' title='商城'/>
                        </Link>
                        <Link to='/person'>
                            <Box src='/img/个人中心.png' title='个人' />
                        </Link>
                </div>
            </div>
        )
    }
}
