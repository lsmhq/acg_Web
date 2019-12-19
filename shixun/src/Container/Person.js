import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavBar, Icon} from 'antd-mobile';
import Box from '../component/Box';
import {Link,HashRouter as Router,} from 'react-router-dom';
import Alert from '../component/Alert';
import ReactDom from 'react-dom';

export default class Person extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            cookie_obj:this.cookieToObj(document.cookie),
            fans:0,
            fouce:0,
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
        if(this.state.data.length===0){
            return(
                <div className='person0'>
                    {/* 顶栏 */}
                  
                    <NavBar
                        style={{backgroundColor:'rgb(255,64,129)'}}
                        mode="white"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back(-1)}               
                        >个人中心</NavBar>
                    
                     {/* 个人资料 */}
                     <div className="container">
                        <div className="bg" style={{
                            
                        }}>
                        
                        </div>
                        <div className="bg-mask"></div>                                                     
                            <div className="content">
                                <img className="avatar" src='/img/Logo.png' alt='' />
                                <div className="info">
                                <p>昵称</p>
                                <p>签名</p>
                                </div>
                            </div>
                        </div>

                   
                    <div style={{width:'100%'}}>
                        <h2 style={{marginTop:"40px",color:'green',textAlign:'center'}}>您还没有登录，请登录后访问个人中心</h2>
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
                    </div>
                    <div id='footer'>
                            <Link to='/apphome'>
                            <Box src='/img/首页.png' title='首页' />
                            </Link>
                            <Link to='/appaction'>
                            <Box src='/img/动态.png' title='动态' />
                            </Link>
                            <Link to='/appgood'>
                            <Box src='/img/商城.png' title='商城'/>
                            </Link>
                            <Link to='/person'>
                                <Box src='/img/个人中心.png' title='个人' />
                            </Link>                                               
                    </div>
                    <div style={{width:'100%',height:'400px'}}>

                    </div>

                </div> 
        )
        }
        else{
            return (
                <div className='person0'>                               
                     {/* 顶栏 */}
    
                     <NavBar
                        style={{backgroundColor:'rgb(255,64,129)',zIndex:'1000',position:'fixed',width:'100%'}}
                        mode="white"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back(-1)}               
                        >个人中心</NavBar>
                    
                    
                    {this.state.data.map((item,key)=>(
                    <div key={key}>
                    <div>                            
                    {/* 个人资料 */}
                        <div className="container">                                                   
                            <div className="content">
                                <input type='file' id='img_upload' name='img_upload' style={{display:'none'}} onChange={this.upLoad}/>
                                <img className="avatar" src={"https:\\daitianfang.1459.top/images/avatar/"+item.avatarid} alt='' onClick={this.upFile}/>
                                <div className="info">
                                <p style={{color:'rgb(255,64,129)',fontWeight:'bold'}}>{item.name}</p>
                                <p style={{color:'rgb(255,64,129)'}}>{item.signatrue}</p>
                                </div>
                            </div>
                        </div>
                        {/* 粉丝关注等级 */}
                        <div style={{
                            width:'100%',height:'50px',borderBottom:'2px solid #ccc',paddingBottom:'10px',margin:'auto'
                        }}>
                            <div className='person2'>
                            <Link to={'/funs/'+item.id}  style={{fontWeight:'bold',color:'rgb(255,64,129)'}}>粉丝 <br/> {this.state.fans} </Link>
                            </div>
                            <div className='person2'>
                            <Link to={'/concern/'+item.id} style={{fontWeight:'bold',color:'rgb(255,64,129)'}}>关注 <br/>  {this.state.fouce}  </Link>
                            </div>
                            <div className='person2'>
                                等级 <br/>  {item.level }
                            </div>
                            
                        </div>
                       
                        <Alert
                        msg={this.state.msg}
                        src={this.state.src}
                        toPath={this.state.fun}
                        btn={this.state.btn}
                    />
                        {/* 个人简介 */}
                        <form method='POST' style={{
                            width:'100%',
                            textAlign:'center',
                            backgroundColor:''
                            
                        }}>
                            <p style={{marginTop:'20px',marginLeft:'-40px'}}>
                                昵称： <input type='text'  defaultValue={item.name} style={{position:'relative',border:'0',borderBottom:'1px dashed rgba(255, 64,129)',backgroundColor:'transparent',textAlign:'center'}} id='name' name='name'/>
                            </p><br/>
                            <p style={{marginTop:'4px',marginLeft:'-40px'}}>
                                性别： <input type='text'  defaultValue={item.sex} style={{position:'relative',border:'0',borderBottom:'1px dashed rgba(255, 64,129)',backgroundColor:'transparent',textAlign:'center'}} id='sex' name='sex'/>
                            </p><br/>
                            <p style={{marginTop:'4px',marginLeft:'-40px'}}>
                                爱好： <input type='text' defaultValue={item.hobby} style={{position:'relative',border:'0',borderBottom:'1px dashed rgba(255, 64,129)',backgroundColor:'transparent',textAlign:'center'}} id='hobby' name='hobby'/>
                            </p><br/>
                            <p style={{marginTop:'4px',marginLeft:'-40px'}}>
                                家乡： <input type='text' defaultValue={item.hometown} style={{position:'relative',border:'0',borderBottom:'1px dashed rgba(255, 64,129)',backgroundColor:'transparent',textAlign:'center'}} id='hometown' name='hometown'/>
                            </p><br/>
                            <p style={{marginTop:'4px',marginLeft:'-40px'}}>
                                生日： <input type='text' defaultValue={item.birthday} style={{position:'relative',border:'0',borderBottom:'1px dashed rgba(255, 64,129)',backgroundColor:'transparent',textAlign:'center'}} id='birthday' name='birthday'/>
                            </p><br/>
                            <p style={{marginTop:'4px',marginLeft:'-40px'}}>
                                签名： <input type='text' defaultValue={item.signatrue} style={{position:'relative',border:'0',borderBottom:'1px dashed rgba(255, 64,129)',backgroundColor:'transparent',textAlign:'center'}} id='signatrue' name='signatruey'/>
                            </p><br/>
                            
                               
                            <input type='button' value='提交' id='update' name='' onClick={(e)=>{this.fetch_person(e)}}
                                style={{backgroundColor:'rgb(255,64,129)',border:'none',width:'50px',height:'25px',marginBottom:'70px',color:'white',borderRadius:'3px'}}
                            />
                        </form>

                        
                        {/* <div className='person3'>
                        <p style={{marginTop:'20px'}}>性别：{item.sex}</p><hr/>
                        <p style={{marginTop:'20px'}}>爱好：{item.hobby}</p><hr/>
                        <p style={{marginTop:'20px'}}>家乡：{item.hometown}</p><hr/>
                        <p style={{marginTop:'20px'}}>生日： {item.birthday} </p><hr/>
                        </div>
                        <div style={{margin:'auto',width:'60%'}}>
                        <textarea className='person4' placeholder='我的【个性】' />
                        </div> */}
                </div>
                
                    </div>
                       ))
                    }
                    <div id='footer'>
                            <Link to='/apphome'>
                            <Box src='/img/首页.png' title='首页' />
                            </Link>
                            <Link to='/appaction'>
                            <Box src='/img/动态.png' title='动态' />
                            </Link>
                            <Link to='/appgood'>
                            <Box src='/img/商城.png' title='商城'/>
                            </Link>
                            <Link to='/person'>
                                <Box src='/img/个人中心.png' title='个人' />
                            </Link>                                               
                    </div>
                </div>
            )
        }
       
    }   
    upLoad =()=>{
        let reader = new FileReader();
        let file = document.getElementById('img_upload').files[0];
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            document.getElementsByClassName('avatar')[0].src = reader.result;
            let data = {};
            data.type = 'update_img';
            data.images = reader.result;
            fetch('https://daitianfang.1459.top/api/v1/person',{
                method:'POST',
                mode:'cors',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            }).then(req=>{
                req.text()
            }).then(data=>{
                if(data === 'success'){
                    
                }else{
                    
                }
            })
        }

    }
    fetch_person(){
        let data = {};
        data.type='update_font';
        let name = ReactDOM.findDOMNode(document.getElementById('name')).value;
        let sex = ReactDOM.findDOMNode(document.getElementById('sex')).value;
        let hobby = ReactDOM.findDOMNode(document.getElementById('hobby')).value;
        let hometown = ReactDOM.findDOMNode(document.getElementById('hometown')).value;
        let birthday = ReactDOM.findDOMNode(document.getElementById('birthday')).value;
        let signatrue = ReactDOM.findDOMNode(document.getElementById('signatrue')).value;
        data.name = name;
        data.sex = sex;
        data.hobby = hobby;
        data.hometown = hometown;
        data.birthday = birthday;
        data.signatrue =signatrue;
        data.id=this.state.cookie_obj.userid;
        fetch('https://daitianfang.1459.top/api/v1/person',{
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
                        msg:'更改成功',
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
                        msg:'更改失败',
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
        fetch('https://daitianfang.1459.top/api/v1/person?id='+this.state.cookie_obj.userid)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
        fetch(`https://daitianfang.1459.top/api/v1/fans?id=${this.state.cookie_obj.userid}`).then(req=>req.json()).then(data=>{
        this.setState({
                fans:data.data.count
            })
        })
        fetch(`https://daitianfang.1459.top/api/v1/fouce?id=${this.state.cookie_obj.userid}`).then(req=>req.json()).then(data=>{
            this.setState({
                fouce:data.data.count
            })
        })
        
    }
    upFile = ()=>{
        document.getElementById('img_upload').click();
    }
}
