import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
export default class Searchmsg extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    rightContent={
                        <Icon key="0" type="search" style={{ color:'#000'}} />                                           
                    }
                    >搜一搜</NavBar>
                     <input type='search'  id='search' style={{
                    width:'70%',height:'30px',textAlign:'center',margin:'15px 0 0 15%',borderRadius:'10px',border:'none'
                    }} placeholder='搜索文章'  onChange={(e)=>this.changeEvent(e)}></input>
                    <button style={{float:'right',width:'30px',height:'30px',
                    backgroundColor:'#FFC125 ' ,border:'none',margin:'15px 7px 0 0',borderRadius:'3px'

                    }} onClick={(e)=>{this.fetch_select(e)}}>
                        <Icon key="0" type="search" style={{ color:'white'}} />
                </button> 

                <ol className='hot' style={{width:'100%',fontSize:'16px',color:'red',float:'left'}}>
                    <li >蒜头王八</li>
                    <li>LOL转会详情</li>
                    <li>超级赛亚人之神</li>
                    <li>驱魔录</li>
                    <li>石纪元</li>
                    <li>蓝色灭火器</li>
                    <li>斗破苍穹</li>
                    <li>庆余年</li>
                </ol>
            </div>
        )
    }
}
