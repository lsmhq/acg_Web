import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link,HashRouter as Router,} from 'react-router-dom';
import CommentApp from '../Comments/CommentApp'
import Alert from '../component/Alert';
import ReactDom from 'react-dom';

export default class GoodMsg extends Component {
    
     constructor(){
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            data: [],
            timebig:date,         
            time:new Date(), 
            cookie_obj:this.cookieToObj(document.cookie),
            a:localStorage.length,
            msg:'',
            btn:'',
            src:'',
            fun:()=>{

            }
        }
    }
    cookieToObj=(cookie)=>{
        let obj = {};
        if(cookie){
            cookie.split(';').map(item=>{
                item = item.trim();
                let arr = item.split('=');
                obj[arr[0]] = arr[1];
            });
        }
        return obj;
      }
   
    
    render() {
        
        
        return (
            <div style={{}}>
                <Router>
                <NavBar 
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'
                              
                }}
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
                    >商品</NavBar>



                    {this.state.data.map((item,key)=>(
                        <div key={key}>
                            <img src={item.path } alt='' style={{width:'100%',height:'180px',marginTop:'45px'}} />
                            <Alert
                                msg={this.state.msg}
                                src={this.state.src}
                                toPath={this.state.fun}
                                btn={this.state.btn}
                            />
                            <div style={{margin:'20px 30px'}}>
                            <h2 style={{color:'orange'}}>￥{item.price}元</h2>   
                            <h3 id='goodsname'>商品名称:{item.name}</h3>
                            <h3>公司商家：{item.source}  {item.brand}</h3>
                        </div>
                        <hr/>
                            <h3 style={{textAlign:'center'}}>详细信息</h3>
                            <p style={{
                                margin:'20px',
                                fontSize:'14px',    
                            }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</p>
                            <hr/>

                        <div style={{
                            width: '100%',
                            height: '50px',
                            position:'fixed',
                            right:'0px',
                            bottom:'0px',
                            color:'white',
                            backgroundColor:'white',
                        }}>

                        
                            <button   onClick={(e)=>this.fetch_addgood(e)} style={{width:'50%',backgroundColor:'red',color:'white', 
                            height: '50px',border:'none',zIndex:'1'}}>加入购物车</button>  
                        

                            <button style={{width:'50%',backgroundColor:'orange',color:'white', 
                            height: '50px',border:'none' ,zIndex:'1'}}  onClick={()=>this.buy()}>立即购买</button>         
                        </div>
                        </div>
                    ))
                }
                <br/>
               
                <CommentApp data={this.props.match.params.id}/>
                </Router>
               
            </div>
        )
    }
    buy(){
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
    fetch_addgood(e){
        let data = {

        };
        var timesign=this.state.timebig+this.state.time.toLocaleTimeString();
        data.type='insert';  
        data.userid=this.state.cookie_obj.userid;
        data.goodsid=this.props.match.params.id;       
        data.timetemp=timesign;
        data.goodsname=document.getElementById('goodsname').innerText.split(':')[1];
        console.log(data.goodsid)
        console.log(data.goodsname)
        console.log(data.timetemp)
        console.log(data.userid)
        fetch('https://daitianfang.1459.top/api/v1/shoppingcart?id='+this.state.cookie_obj.userid,{
            method:'POST',
            mode:'cors',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(req=>{
            return req.text();
        }).then(data=>{
            switch (data) {
                case 'success':{
                    this.setState({
                        msg:'添加成功',
                        btn:'确认',
                        src:'/images/success.png',
                        fun:()=>{
                            ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='none';
                        }
                    },()=>{
                        ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='block';
                    })   
                    this.componentDidMount();
                    break;
                }
                case 'error':{
                    this.setState({
                        msg:'添加失败',
                        btn:'确认',
                        src:'/images/failed.png',
                        fun:()=>{
                            ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='none';
                        }
                    },()=>{
                        ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='block';
                    })   
                    break;
                }
            }
        })
      }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            
            this.setState({data:res.data});
        })
    }
    
}
