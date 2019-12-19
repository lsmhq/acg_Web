import React, { Component } from 'react';
import {Icon} from 'antd-mobile'
import ReactDOM from 'react-dom'
import {Link,HashRouter as Router,} from 'react-router-dom';
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
        
        return (
            <Router>
                <div className='header'>                                                
                   
                    {this.state.data.map((item,key)=>(
                        
                        
                        <Link to='/leftmenu' key={key}> <img src={"https:\\daitianfang.1459.top/images/avatar/"+item.avatarid } className='logo'  alt=''/>
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
                    <Link to={'/apphome'} className='tab'>首页</Link>
                    <Link to={'/animat'} className='tab'>动画</Link>
                    <Link to='/comic' className='tab'>卡通</Link>
                    <Link to='/game' className='tab'>游戏</Link>
                    
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
        console.log(data.search)
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
            console.log(data)
            console.log(data[0].id)
            this.props.history.push('/articlemsg/'+data[0].id);
        })
    }   
}
