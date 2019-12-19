import React, { Component } from 'react'
import { NavBar, List, Switch,Icon} from 'antd-mobile';
export default class About extends Component {
    render() {
        return (
            <div style={{textAlign:'center',lineHeight:'50px'}}>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >关于我们</NavBar>
                <div style={{marginTop:'45px'}}>
                    <img src='/img/back.jpg' style={{width:'50%',height:'50%'}}/>
                    <h3>后台：代天放、粟慧军</h3>
                </div>
                <div>
                    <img src='/img/front.jpg' style={{width:'50%',height:'50%'}}/>
                    <h3>前端：赵晓宇、冯菲珂、赵政</h3>
                </div>
            </div>
        )
    }
}
