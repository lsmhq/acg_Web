import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import CommentApp from '../Comments/CommentApp';
import ArticleText from  './ArticleText'

export default class Articlemsg extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
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
   
    
    render() {
        
        
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    rightContent={
                    <div onClick={(e)=>{this.fetch_addfouce(e)}} >
                        
                        <img  src='/img/关注.png' style={{width:'30%',heightL:'30%',float:"right"}}  alt=''/>
                                    
                    </div>                        
                    }
                    
                    >文章</NavBar>



                    {this.state.data.map((item,key)=>(
                        <div key={key}>
                            <img src={"https://daitianfang.1459.top"+item.images} alt='' style={{width:'100%',height:'180px',}} />
                            <div style={{margin:'20px 30px'}}>
                            <h2 style={{textAlign:'center'}}>{item.title}</h2>   
                            <h3 id='auther  ' style={{textAlign:'center'}}>小编：<span id='auther'>{item.auther}</span></h3>
                            <h4  style={{textAlign:'center'}}>作者ID：<span id='autherid'>{item.id}</span></h4>
                           
                        </div>
                                                                      
                        <div>
                            <ArticleText url={"https://daitianfang.1459.top"+item.context+'.json'}/>   
                            <hr/>
                        </div>
                        </div>                      
                    ))       
                }
                <br/> 
                <CommentApp/>     
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
        console.log(data.id)
        console.log(data.fouceid)
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
                    alert('关注成功')
                    break;
                }
                case 'error':{
                    alert('关注失败')
                    break;
                }
            }
        })
      }
    
}
