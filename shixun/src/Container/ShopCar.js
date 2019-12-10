import React, { Component } from 'react'
import {Link,HashRouter as Router,} from 'react-router-dom';
import {Icon,NavBar} from "antd-mobile";
import MyCood from './MyCood'
export default class ShopCar extends Component {
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
                    >购物车</NavBar>
                <div>
                <MyCood/>


                <hr/>
                <h3 style={{width:'100%',textAlign:'center'}}>
                    推荐商品
                </h3>
                {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',}} key={key}>                           
                                <Link to={'/goodmsg/'+item.id}  style={{fontSize:'10px',}}>
                                    <li style={{height:'200px' ,width:'42.5%',float:'left',border: '1px solid #cfcfcf',
                                    margin:'10px 2.5% 0 4%',backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                        <img src={"https:\\daitianfang.1459.top"+item.path+".jpg"} style={{width:'80%',height:'50%',margin:'10px 0 0 10%'}} alt=''/>
                                        
                                        <p style={{margin:'20px 0 0 10%'}}>
                                            商品名称：{item.name}
                                            <br>
                                            </br>
                                            <span style={{color:"orange"}}>
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
            <div style={{
                width: '100%',
                height: '50px',
                position:'fixed',
                right:'0px',
                bottom:'0px',
            
                backgroundColor:'white'
            }}>
                        <p style={{
                            color:'orange',
                            marginTop:'15px',
                            fontSize:"16px",
                            width:"60%",
                            float:'left'
                        }}>
                            总价：{}
                            
                        </p>
                        <button style={{width:'30%',backgroundColor:'blue',float:'right',
                              height: '50px',border:'none'}}>结算</button>         
                </div>
            </Router>
            </div>
                
        )
    }
}
