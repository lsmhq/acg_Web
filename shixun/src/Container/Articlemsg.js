import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import CommentApp from '../Comments/CommentApp';
import ArticleText from  './ArticleText';
import Alert from '../component/Alert';
import ReactDom from 'react-dom';

export default class Articlemsg extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
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
   
    
    render() {
        
        
        return (
            <div style={{backgroundImage:'url("/img/background3.png")'}}>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    rightContent={
                    <div onClick={(e)=>{this.fetch_addfouce(e)}} >
                        
                        <img  src='/img/关注.png' style={{width:'30%',heightL:'30%',float:"right"}}  alt=''/>
                                        
                    </div>                        
                    }
                    
                >文章</NavBar>
                    <Alert
                        msg={this.state.msg}
                        src={this.state.src}
                        toPath={this.state.fun}
                        btn={this.state.btn}
                    />



                    {this.state.data.map((item,key)=>(
                        <div key={key}>
                            <img src={item.images} alt='' style={{width:'100%',height:'180px',marginTop:'45px'}} />
                            <div style={{margin:'20px 30px'}}>
                            <h3 style={{textAlign:'center'}}>{item.title}</h3>   
                            <h4 id='auther  ' style={{textAlign:'center'}}>小编：<span id='auther'>{item.auther}</span></h4>
                            <h4  style={{textAlign:'center'}}>作者ID：<span id='autherid'>{item.autherid}</span></h4>
                           
                        </div>
                                                                      
                        <div>
                            <ArticleText url={item.context+'.json'}/>   
                            <hr/>
                        </div>
                        </div>                      
                    ))       
                }
                <div style={{width:'100%',height:'100px'}}></div>
                <CommentApp data={this.props.match.params.id}/>     
            </div>
        )
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/chapter?type='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            
        })
        
    }
    fetch_addfouce(){
        let data = {

        };
        data.type='insert';  
        data.id=this.state.cookie_obj.userid;
        data.fouceid=document.getElementById('autherid').innerText
        fetch('https://daitianfang.1459.top/api/v1/fouce',{
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
                        msg:'关注成功',
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
                case 'error':{
                    this.setState({
                        msg:'关注失败',
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
    
}
