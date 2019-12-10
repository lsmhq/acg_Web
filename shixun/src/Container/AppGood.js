import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link,HashRouter as Router,Route} from 'react-router-dom';
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
            
            <div>
                
                 
                <Router>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
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
                <div>
                <input type='search' style={{
                    width:'80%',height:'30px',textAlign:'center',margin:'15px 0 0 10%',borderRadius:'10px',border:'none'
                }} placeholder='搜索商品' ></input>
                {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',}} key={key}>                           
                                <Link to={'/goodmsg/'+item.id}  style={{fontSize:'10px',}}>
                                    <li style={{height:'200px' ,width:'42.5%',float:'left',border: '1px solid #cfcfcf',
                                    margin:'10px 2.5% 0 4%',backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                        <img src={"https:\\daitianfang.1459.top"+item.path+".jpg"} style={{width:'80%',height:'50%',margin:'10px 0 0 10%'}} alt=''/>
                                        
                                        <p style={{margin:'20px 0 0 10%'}}>
                                            商品名称：{item.name}
                                            <br/>
                                            <span style={{marginLeft:'10px',color:"orange"}}>
                                                价格：{item.price}元
                                            </span>
                                        </p>
                                        <p style={{margin:'20px 0 0 10%'}}>商家：{item.source}  {item.brand}</p>

                                        
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                }
            </div>
            <div id='footer'>
                        <Link to='/'>
                        <Box src='/img/首页.png' title='首页' />
                        </Link>
                        <Link to='/'>
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

                
            </div>
            
        )
    }
}
