import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavBar, Icon} from 'antd-mobile';
import Box from '../component/Box';
import {Link,HashRouter as Router,} from 'react-router-dom';

export default class Person extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            cookie_obj:this.cookieToObj(document.cookie)
            
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
                <div>
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

                </div> 
        )
        }
        else{
            return (
                <div>                               
                     {/* 顶栏 */}
                     <NavBar
                        style={{backgroundColor:'rgb(255,64,129)'}}
                        mode="white"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back(-1)}               
                        >个人中心</NavBar>
                    
                    
                    {this.state.data.map((item,key)=>(
                    <div key={key}>
                    <div>                            
                    {/* 个人资料 */}
                        <div className="container">
                        <div className="bg" style={{
                            
                        }}>
                        
                        </div>
                        <div className="bg-mask"></div>                                                     
                            <div className="content">
                                <img className="avatar" src={"https:\\daitianfang.1459.top/images/avatar/"+item.avatarid+".jpg" } alt='' />
                                <div className="info">
                                <p>{item.name}</p>
                                <p>{item.signatrue}</p>
                                </div>
                            </div>
                        </div>
                        {/* 粉丝关注等级 */}
                        <div style={{backgroundColor:'rgb(0, 180, 204)',color:'black',
                            width:'100%',height:'50px'
                        }}>
                            <div className='person2'>
                            <Link to={'/funs/'+item.id}  style={{fontWeight:'bold',color:'white'}}>粉丝 <br/> {item.fans} </Link>
                            </div>
                            <div className='person2'>
                            <Link to={'/concern/'+item.id} style={{fontWeight:'bold',color:'white'}}>关注 <br/>  {item.fouce}  </Link>
                            </div>
                            <div className='person2'>
                                等级 <br/>  {item.level }
                            </div>
                            
                        </div>
                       
    
                        {/* 个人简介 */}
                        <form method='POST' style={{
                            width:'90%',
                            textAlign:'center',
                            margin:'0 5% 0 5%',
                            backgroundColor:''
                            
                        }}>
                            <p style={{marginTop:'10px'}}>
                                性别： <input type='text'  defaultValue={item.sex} style={{position:'relative'}} id='sex' name='sex'/>
                            </p><hr/>
                            <p style={{marginTop:'4px'}}>
                                爱好： <input type='text' defaultValue={item.hobby} style={{position:'relative'}} id='hobby' name='hobby'/>
                            </p><hr/>
                            <p style={{marginTop:'4px'}}>
                                家乡： <input type='text' defaultValue={item.hometown} style={{position:'relative'}} id='hometown' name='hometown'/>
                            </p><hr/>
                            <p style={{marginTop:'4px'}}>
                                生日： <input type='text' defaultValue={item.birthday} style={{position:'relative'}} id='birthday' name='birthday'/>
                            </p><hr/>
                            <p style={{marginTop:'4px'}}>
                                签名： <input type='text' defaultValue={item.signatrue} style={{position:'relative'}} id='signatrue' name='signatruey'/>
                            </p>
                            
                               
                            <input type='button' value='提交' id='update' name='' onClick={(e)=>{this.fetch_person(e)}}
                                style={{backgroundColor:'#FFC1C1',border:'none',width:'50px',height:'25px'}}
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
    fetch_person(){
        let data = {};
        data.type='update_font';
        let sex = ReactDOM.findDOMNode(document.getElementById('sex')).value;
        let hobby = ReactDOM.findDOMNode(document.getElementById('hobby')).value;
        let hometown = ReactDOM.findDOMNode(document.getElementById('hometown')).value;
        let birthday = ReactDOM.findDOMNode(document.getElementById('birthday')).value;
        let signatrue = ReactDOM.findDOMNode(document.getElementById('signatrue')).value;
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
                    alert('更改成功')
                    break;
                }
                case 'error':{
                    alert('更改失败')
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
    }
}
