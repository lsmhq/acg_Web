import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link,HashRouter as Router,Route} from 'react-router-dom';
import ShopCar from './ShopCar'

export default class AppGood extends Component {
    
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=')
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
                                <Link to={'/topics/'+item.id}  style={{fontSize:'10px',}}>
                                    <li style={{height:'200px' ,width:'45%',float:'left',border: '1px solid #cfcfcf',
                                    margin:'10px 2.5% 0 2.5%',backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                        <img src={item.author.avatar_url} style={{width:'80%',height:'50%',margin:'10px 0 0 10%'}} alt=''/>
                                        
                                        <p style={{margin:'20px 0 0 10%'}}>
                                            商品名称：{}
                                            <span style={{marginLeft:'10px',color:"orange"}}>
                                                价格：{}元
                                            </span>
                                        </p>
                                        <p style={{margin:'20px 0 0 10%'}}>商家：{}</p>

                                        
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                }
            </div>
            </Router>

                
            </div>
            
        )
    }
}
