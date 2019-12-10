import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link,HashRouter as Router,Route} from 'react-router-dom';
export default class GoodMsg extends Component {
    
     constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=')
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
                    >商品</NavBar>

                    <img src='/img/Logo-大.png'  alt='' style={{width:'100%',height:'180px',}} />
                    <div style={{margin:'20px 30px'}}>
                        <h2>￥{}</h2>   
                        <h3>商品名称：{this.props.match.params.id}</h3>
                        <h4>公司商家：{}</h4>
                    </div>
                    <hr/>
                    <h3 style={{textAlign:'center'}}>详细信息</h3>
                <p>aaa{}</p>

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
                
                </Router>
               
            </div>
        )
    }
    
}
