import React, { Component } from 'react'
import {Link,HashRouter as Router,} from 'react-router-dom';
import {Icon,NavBar} from "antd-mobile";
import MyCood from './MyCood'
import Alert from '../component/Alert';
import ReactDom from 'react-dom';

export default class ShopCar extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            msg:'',
            btn:'',
            src:'',
            fun:()=>{

            },
            count:0
            
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
        if(localStorage.getItem('ShopCar')){
            let num = 0;
            let arr = JSON.parse(localStorage.getItem('ShopCar'));
            arr.map(item=>{
                num += item.price;
            })
            this.setState({
                count:num
            }) 
        }else{
            this.setState({
                count:0
            })
        }

    }
    render() {
        let style = {
            color:'orange',
            marginTop:'15px',
            fontSize:"16px",
            width:"60%",
            float:'left'
        }
        return (
         
            <div>
                <Router>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}                                                               
                    >购物车</NavBar>
                <div>
                <Alert
                        msg={this.state.msg}
                        src={this.state.src}
                        toPath={this.state.fun}
                        btn={this.state.btn}
                    />
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
                                        <img src={item.path} style={{width:'80%',height:'50%',margin:'10px 0 0 10%'}} alt=''/>
                                        
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
            <div style={{height:'50px',width:'100%',marginTop:'40px',float:'left'}}></div>
            <div style={{
                width: '100%',
                height: '50px',
                position:'fixed',
                right:'0px',
                bottom:'0px',
                zIndex:"10000",
                backgroundColor:'white'
            }}>
            <p style={style} id='count'>总价：{this.state.count}元</p>
                        <button 
                             onClick={(e)=>{this.fetch_bug(e)}}
                            style={{width:'30%',backgroundColor:'blue',float:'right',
                              height: '50px',border:'none'}}>结算</button>         
                        </div>
            </Router>
            </div>
                
        )
    }
    fetch_bug(){
        this.setState({
            msg:'确认购买',
            btn:'确认',
            src:'/images/success.png',
            fun:()=>{
                ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='none';
            }
        },()=>{
            ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='block';
        })   
    }
}
