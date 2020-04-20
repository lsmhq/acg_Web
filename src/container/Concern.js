import React, { Component } from 'react'
import {NavBar, Icon, Tabs,List, InputItem,Button,Card,WhiteSpace,TabBar} from 'antd-mobile';
import Navbar from './Navbar';
import Navbar2 from './Navbar2'
import {Link} from 'react-router-dom'
export default class Concern extends Component {
  constructor(){
    super();
    this.state = {
        data: []
    }
}
componentDidMount(){
    let page = this.props.match.params.page;
    fetch('https://cnodejs.org/api/v1/topics?page='+page)
    .then((res)=>res.json())
    .then((res)=>{
        this.setState({data:res.data});
    })
}
  render() {
    return (
      <div>
        {/* 顶栏 */}
        <NavBar
          style={{backgroundColor:'rgb(255,64,129)'}}
          mode="white"
          icon={<Icon type="left" />}
          onLeftClick={() => window.history.back(-1)}
          >我的关注</NavBar>
         {/* 我的关注 */}
         {
            this.state.data.map((item)=>(
                <Card>
                    <Card.Body>
                        <img src={item.author.avatar_url} style={{width:'30px',height:'30px',float:"left"}}/>
                        <Link to={'/topics/'+item.id} style={{marginLeft:"20px",color:"#778087",fontSize:"14px"}}>{item.title}</Link>
                        <button className='concern1'>取消关注</button>
                    </Card.Body>
                </Card>
                
                
            ))
        }
        <div id='footer'>
            <div className='box'>
                <Link to='/funs' >
                    <img src='/funs.png' alt=''   className='footerimg'/>
                    <span className='text'>我的粉丝</span>
                </Link>
            </div>
            <div className='box'>
                <Link to='/concern'>
                  <img src='/关注.png' alt='' className='footerimg'/>
                  <span className='text'>我的关注</span>
                </Link>
            </div>
                    
        </div>
      </div>
    )
  }
}

