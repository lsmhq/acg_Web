import React, { Component } from 'react'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
import ReactDom from 'react-dom';
import Alert from '../component/Alert';
export default class CommentApp extends Component {
    constructor(){
        super()   
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();    
        this.state={
            content:'',
            data:[],  
            timebig:date,         
            time:new Date(),         
            cookie_obj:this.cookieToObj(document.cookie),
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
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all')
        // fetch('https://daitianfang.1459.top/api/v1/talk?id='+this.props.data)
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
                <textarea rows='3' value={this.state.content}
                    onChange={(event)=>{
                        this.setState({
                            content:event.target.value
                        })
                    }}
                    placeholder='请输入评论'
                    className='comment-input'
                    id='comment'
                ></textarea>
                <button onClick={(e)=>{this.fetch_submit(e)}} className='comment-btn'>发布</button>
                {this.state.data.map((item,key)=>(
                    <ul  key={key} style={{}}>
                            <li  className='animated fadeInUp'
                                style={{
                                    listStyle:'none', 
                                }}
                            > 
                                   <p className='person'>
                                        <img src='/img/用户.png'   alt='' style={{width:'17px',height:'17px',}}/>   
                                       {item.name} ：</p> 
                                    <p style={{width:'200px',overflow:'hidden'}} >aaaaaaaaaa{item.content}
                                    </p> 
                            <p id='timeshow'>时间：{item.time}</p>
                                    <button style={{}}  className='comment-btn2' onClick={(e)=>{this.fetch_delcomment(e)}} >删除</button>
                                           
                            </li> 
                            </ul>   
                        ))                      
                    }    
                     <Alert
                        msg={this.state.msg}
                        src={this.state.src}
                        toPath={this.state.fun}
                        btn={this.state.btn}
                    />                                  
            </div>
            
        )
        }
    }
    fetch_submit(e){
        let data = {

        };
        var timesign=this.state.timebig+this.state.time.toLocaleTimeString();
        data.type='insert';  
        data.id=this.props.data
        data.auterid=this.state.cookie_obj.userid;
        data.evaluation=document.getElementById('comment').value;
        data.timetamp=timesign;
        console.log(data.evaluation)
        console.log(data.id)
        console.log(data.auterid)
        console.log(data.timetamp)
        fetch('https://daitianfang.1459.top/api/v1/talk?id='+this.props.data,{
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
                        msg:'评论成功',
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
                        msg:'发布失败',
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

      fetch_delcomment(e){
        let data = {};
        data.type='del';
        data.id=this.props.data;
        data.timetamp=document.getElementById('timeshow').innerText;
        console.log(data.id)
        console.log(data.timetamp)
        fetch('https://daitianfang.1459.top/api/v1/talk?id='+this.props.data,{
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
                    msg:'取关成功',
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
                    msg:'取关失败',
                    btn:'确认',
                    src:'/images/success.png',
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
}
