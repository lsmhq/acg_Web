import React, { Component } from 'react'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
export default class CommentApp extends Component {
    constructor(){
        super()   
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();    
        this.state={
            content:'',
            data:[],  
            timebig:date,         
            cookie_obj:this.cookieToObj(document.cookie),
            person_data:{}
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
        fetch('https://daitianfang.1459.top/api/v1/talk?id='+this.props.data)
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
            <div>
            <div className='wrapper'>
                
                <div style={{width:'100%',marginTop:'20px',height:'100px'}}>
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
                </div>
                {this.state.data.map((item,key)=>(
                    <ul  key={key} style={{}}>
                            <li  className='animated fadeInUp talk_li'
                                style={{
                                    listStyle:'none',
                                }}
                            > 
                                <div className='talk_container'><img src={`https://daitianfang.1459.top/images/avatar/4qG1yUvxWG.jpeg`} style={{width:'50px',height:'50px',}}/></div>
                                <div className='talk_container talk_content'>
                                    <p className='person' id='person'>{item.evalutor}</p>
                                    <p id='timeshow'>{item.timetemp}</p>
                                    <p  className='comments' >{item.evaluation}
                                    </p>
                                    <button className='comment-btn2' onClick={(time)=>{this.fetch_delcomment(item.timetemp)}}>×</button>
                                </div>     
                            </li> 
                            </ul>   
                        ))                      
                    }                                   
            </div>
            </div>
        )
        }
    }
    fetch_submit(e){
        let data = {

        };
        var timesign=this.state.timebig + new Date().toLocaleTimeString();
        data.type='insert';  
        data.id=this.props.data;
        data.auterid=this.state.cookie_obj.userid;
        data.evaluation=document.getElementById('comment').value;
        data.timetamp=timesign;
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
                    fetch(`https://daitianfang.1459.top/api/v1/person?id=${this.state.cookie_obj.userid}`).then(res=>res.json()).then((data)=>{
                        this.setState({
                            person_data:data.data[0]
                        })
                    })
                    this.componentDidMount();
                    break;
                }
                case 'error':{
                    
                    break;
                }
            }
        })
      }

      fetch_delcomment(time){
        let data = {};
        data.type='del';
        data.id=this.props.data;
        data.timetemp=time;
        console.log(data.id)
        console.log(data.timetemp)
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
