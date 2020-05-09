import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link,HashRouter as Router,} from 'react-router-dom';
import Box from '../component/Box';

export default class AppGood extends Component {
    
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    render() {
        
        
        return (
            
            <div style={{backgroundImage:'url("/img/storebg.png")'}}>
                
                 
                <Router>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    rightContent={
                        <div>
                            <Link to='/shopcar'>
                            <img  src='/img/购物车.png' style={{width:'40%',heightL:'40%',float:"right"}}  alt=''/>
                        </Link>
                        
                
                        </div>                        
                    }
                    >商城</NavBar>
                <div style={{marginTop:'45px'}}>
                <input type='search'  id='search' style={{
                    width:'70%',height:'30px',textAlign:'center',margin:'15px 0 0 15%',borderRadius:'10px',border:'none'
                }} placeholder='搜索商品'  onChange={(e)=>this.changeEvent(e)}></input>
                <button style={{float:'right',width:'30px',height:'30px',
                    backgroundColor:'#FFC125 ' ,border:'none',margin:'15px 7px 0 0',borderRadius:'3px'

                }} onClick={(e)=>{this.fetch_select(e)}}>
                        <Icon key="0" type="search" style={{ color:'white'}} />
                </button> 
                <div style={{marginBottom:'-8500px'}}>
                    {this.state.data.map((item,key)=>(
                            <ul style={{padding:'0',margin:'0 auto'}} key={key} className='animated fadeInUp'>                           
                                    <Link to={'/goodmsg/'+item.id}  style={{fontSize:'10px',}}>
                                        <li style={{height:'200px' ,width:'42.5%',float:'left',border: '1px solid #cfcfcf',
                                        margin:'10px 2.5% 0 4%',backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                            <img src={'https://daitianfang.1459.top/'+item.path} style={{width:'80%',height:'50%',margin:'10px 0 0 10%'}} alt=''/>
                                            <h4 style={{margin:'20px 0 0 10%'}}>
                                                商品名称：{item.name}
                                                <br/>
                                                <br/>
                                                <span style={{color:"orange"}}>
                                                    价格：{item.price}元
                                                </span>
                                            </h4>
                                            <h4 style={{margin:'20px 0 0 10%'}}>商家：{item.source}  {item.brand}</h4>

                                            
                                        </li>                                  
                                    </Link>                                                                                                               
                            </ul>    
                        ))
                    }
                </div>
                
                  
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
            </Router>
            <div id='abc' style={{width:'100%',height:'10000px'}}>

            </div>
                
            </div>
            
        )
    }
    changeEvent(e){
        this.setState({value:e.target.value})      
    }
    fetch_select = (e)=>{
        let data = {
            search:''
        };
        let search=this.state.value
        data.search=search
        data.type = 'select';
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },mode:"cors",
            body: JSON.stringify(data)
        }).then(req=>req.json()).then(data=>{
            this.setState({
                data:data
            })
        })
    }   
}
