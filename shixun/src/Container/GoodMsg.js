import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link,HashRouter as Router,Route} from 'react-router-dom';
import CommentApp from '../Comments/CommentApp'
export default class GoodMsg extends Component {
    
     constructor(){
        super();
        this.state = {
            data: []
        }
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
                    >商品</NavBar>



                    {this.state.data.map((item,key)=>(
                        <div key={key}>
                            <img src={"https:\\daitianfang.1459.top"+item.path+".jpg" } alt='' style={{width:'100%',height:'180px',}} />
                            <div style={{margin:'20px 30px'}}>
                            <h2 style={{color:'orange'}}>￥{item.price}元</h2>   
                            <h3>商品名称：{item.name}</h3>
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
                            backgroundColor:'white'
                        }}>

                        <Link to='/shopcar'>
                            <button style={{width:'50%',backgroundColor:'red',color:'white',
                            height: '50px',border:'none'}}>加入购物车</button>  
                        </Link>

                            <button style={{width:'50%',backgroundColor:'orange',color:'white',
                            height: '50px',border:'none'}}>立即购买</button>         
                        </div>
                        </div>
                    ))
                }
                <br/>
               
                <CommentApp/>
                </Router>
               
            </div>
        )
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    
}
