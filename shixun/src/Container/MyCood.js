import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class MyCood extends Component {
    constructor(){
        super();
        this.state ={
            data:[],
            cookie_obj:this.cookieToObj(document.cookie),
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
      componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
        }
        
    render() {
        if(this.state.data.length === 0){
            return (
                <div style={{textAlign:'center'}}>
                    <div style={{height:"50px"}}></div>
                    <h3>购物车空空如也,真的不想买点什么吗</h3>
                </div>
            )
        }else{
            return (
                <div style={{marginTop:'45px'}}>
                    {
                        this.state.data.map((item,index)=>{
                            return(                                                                                                                                                                                                                                                                                                         
                                <ul style={{padding:'0',}}  key={index}>   
                                 <button  style={{float:'right',marginRight:'4.8%',border:'none',backgroundColor:'red',color:'white'}} name={`del#${index}`}
                                            onClick={(e)=>{this.fetch_del(e)}}
                                            >X</button>                        
                                    <Link to={'/goodmsg/'+item.id}  style={{fontSize:'10px',}}>
                                        <li style={{height:'100px' ,width:'90%',border: '1px solid #cfcfcf',margin:' 0 5%',
                                        backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                           
                                            <img src={item.path} style={{width:'25%',height:'80%',float:'left',
                                            margin:'10px 0 0 10%'}} alt='商品'/>
                                            
                                            <h3 style={{margin:'20px 0 0 150px'}}>
                                                商品名称：{item.name}
                                                <br/>
                                                <br/>
                                                <span style={{color:"orange"}}>
                                                    价格：{item.price}元
                                                </span>
                                            </h3>
                                        </li>                                  
                                    </Link>                                                                                                               
                            </ul>
                            )
                        })
                    }
                </div>
            )
        }

    }
    

    
}
