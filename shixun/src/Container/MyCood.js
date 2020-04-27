import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactDom from 'react-dom';

export default class MyCood extends Component {
    constructor(){
        super();
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state ={
            data:[],
            data2:[],
            timebig:date,         
            time:new Date(),
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
        fetch('https://daitianfang.1459.top/api/v1/shoppingcart?id='+this.state.cookie_obj.userid)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data},()=>{
                var arr=[];
                for(var i=0;i<this.state.data.length;i++){
                    fetch('https://daitianfang.1459.top/api/v1/goods?id='+this.state.data[i].goodsid)
                    .then((res)=>res.json())
                    .then((res)=>{
                        console.log(res.data[0]);
                        arr.push(res.data[0]);
                        console.log(arr);
                    }).then(()=>{
                        this.setState({
                            data2:arr
                        },()=>{
                            console.log(this.state.data2);
                        })
                    })
                }
                
            });

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
                        this.state.data2.map((item,index)=>{ 
                                                      
                            return(                                                                                                                                                                                                                                                                                                         
                                <ul style={{padding:'0',}}  key={index}>   
                                 <button  style={{float:'right',marginRight:'4.8%',border:'none',backgroundColor:'red',color:'white'}} name={`del#${index}`}
                                            onClick={(id)=>{this.fetch_del(item.goodsid)}}
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
    fetch_del(id){
        let data = {};
        var timesign=this.state.timebig+this.state.time.toLocaleTimeString();
        var goodsid=id;
        data.type='del';
        data.userid=this.state.cookie_obj.userid;
        data.goodsid=goodsid;
        data.timetemp=timesign;
        console.log(data.goodsid)
        console.log(data.userid)
        console.log(data.timetemp)
        fetch('https://daitianfang.1459.top/api/v1/shoppingcart?id='+this.state.cookie_obj.ueserid,{
            method:'POST',
            mode:'cors',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(req=>{
            return req.text();
        }).then(data=>{
            switch (data) {
                case 'success':{
                 
                    this.componentDidMount();
                    
                    break;
                }
                case 'error':{
                  
                    break;
                }
            }
        })
      }

    
}
