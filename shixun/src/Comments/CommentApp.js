import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
export default class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            content:'',
            data:[],
            time:'',
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
        if(this.state.cookie_obj.loginStatus !== 'b326b5062b2f0e69046810717534cb09'){
            return(
                <div style={{width:'100%',}}>
                        <h2 style={{marginTop:"40px",color:'green',textAlign:'center'}}>您还没有登录，请登录后进行评论</h2>
                        <Link  to='/' style={{ textAlign:'center',}}>
                           <button   style={{
                               fontSize:'16px',
                               width:'30%',
                               height:'50px',
                               border:'none',
                               borderRadius:'5px',
                               margin:'20px 35% 0 35%',
                               backgroundColor:' rgb(0, 180, 204)',
                               color:'white',
                               cursor: 'pointer',
                               fontWeight:'bolder'
                           }}>登录</button>
                        </Link>
                        <div style={{height:'100px',width:"100%"}}></div>
                    </div>

            
            )
        }
        else{
        return (
            <div className='wrapper'>
                <h3 style={{textAlign:'center',color:'red',margin:'0px'}}>评论席</h3>
                <textarea rows='3' value={(this.state.content)} className='comment-input'
                    onChange={(event)=>{
                        this.setState(
                            {
                                content:event.target.value
                            }
                        )
                    }} placeholder='请输入评论内容'>    
                </textarea>
                <button onClick={this.submit} className='comment-btn'>发布</button>

                
                {this.state.data.map((item,key)=>(
                    <ul  key={key} style={{}}>
                            <li  className='animated fadeInUp'
                                style={{
                                    listStyle:'none', 
                                }}
                            > 
                                   <p className='person'>
                                        <img src='/img/个人中心.png'   alt='' style={{width:'20px',height:'20px',}}/>   
                                       {item.name} ：</p> 
                                    <p style={{width:'70%',overflow:'hidden'}}>{item.content}aaaaaaaaaaa</p> 
                                    <p>
                                        <span>
                                            {item.time}2020年1月1日
                                        </span>                                        
                                    </p> 
                                    <a   onClick={this.delete} className='comment-btn2'>删除</a>                                                                                                       
                            </li> 
                            </ul>   
                        ))
                       
                    }
                    
                    
            </div>
        )
        }
    }
}
