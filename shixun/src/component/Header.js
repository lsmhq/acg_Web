import React, { Component } from 'react';
import {Icon} from 'antd-mobile'
import ReactDOM from 'react-dom'
import {NavLink,Link,HashRouter as Router,} from 'react-router-dom';
export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            cookie_obj:this.cookieToObj(document.cookie),
            src:'',
            userdata:[], 
            value:'',
            head:''
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
                <Router>
                <div className='header'>                                                        
                        <Link to='/leftmenu' > <img src='/img/Logo.png' className='logo'  alt=''/>
                         </Link>
                    <button className='button'>
                        <Icon key="0" type="search" style={{ color:'#000'}} />
                    </button>  
                    <Link to='/searchmsg'>
                        <input type='text' style={{textAlign:'center'}} 
                        className='search' placeholder='搜一搜' id='search' name='search'  onChange={(e)=>this.changeEvent(e)}/>
                    </Link>                                                  
            </div>
            <div>
                 <div  className='nav1'>
                    <NavLink to={'/apphome'} className='tab' activeClassName='active'>首页</NavLink>
                    <NavLink to={'/animat'} className='tab' activeClassName = 'active'>动画</NavLink>
                    <NavLink to='/comic' className='tab' activeClassName = 'active'>卡通</NavLink>
                    <NavLink to='/game' className='tab' activeClassName = 'active'>游戏</NavLink>
                    <NavLink to='/video' className='tab' activeClassName = 'active'>视频</NavLink>
                </div>
            </div>    
            </Router>
            )
        }
        else{

        }
        return (
            <Router>
                <div className='header'>                                                
                   
                    {this.state.data.map((item,key)=>(
                        
                        
                        <Link to='/leftmenu' key={key}> <img src={"/images/avatar/"+item.avatarid } className='logo'  alt=''/>
                         </Link>
                             
                            
                    ))
                    } 
                   
                    <button className='button'>
                        <Icon key="0" type="search" style={{ color:'#000'}} />
                    </button>  
                    <Link to='/searchmsg'>
                        <input type='text' style={{textAlign:'center'}} 
                        className='search' placeholder='搜一搜' id='search' name='search'  onChange={(e)=>this.changeEvent(e)}/>
                    </Link>
                    
                                                                         
            </div>
            <div>
                 <div  className='nav1'>
                    <NavLink to={'/apphome'} className='tab' activeClassName = 'active'>首页</NavLink>
                    <NavLink to={'/animat'} className='tab' activeClassName = 'active'>动画</NavLink>
                    <NavLink to='/comic' className='tab' activeClassName = 'active'>卡通</NavLink>
                    <NavLink to='/game' className='tab' activeClassName = 'active'>游戏</NavLink>
                    <NavLink to='/video' className='tab' activeClassName = 'active'>视频</NavLink>
                </div>
            </div>    
            </Router>
            
        )
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/person?id='+this.state.cookie_obj.userid)
        .then((res)=>res.json())
        .then((res)=>{          
            this.setState({data:res.data});
        })
    }
    changeEvent(e){
        this.setState({value:e.target.value})      
    }
    fetch_select = (e)=>{
        let data = {
            search:''
        };
        let search=this.state.value
        data.search=search
        data.type = 'select';
        fetch('https://daitianfang.1459.top/api/v1/chapter?type=all',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },mode:"cors",
            body: JSON.stringify(data)
        }).then(req=>req.json()).then(data=>{
            this.setState({
                data:data
            })
            this.props.history.push('/articlemsg/'+data[0].id);
        })
    }   
}
