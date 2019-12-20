import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Leftmenu extends Component {
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
                <div className='menu0'>

                
                    <div>
                       <div className='menu1'>
                            <img src='/img/Logo.png' style={{width:'70px',height:'70px',borderRadius:'50%'}} alt=''/>
                            <p>昵称</p>
                            <p style={{color:'orange',fontSize:'12px'}}>签名：</p>
                         </div> 
                    </div>
                     <div className='menu1'>
                     <ul className='menu2'>
                     <Link to='/apphome'>首页</Link>
                     </ul>
                     <ul className='menu2'>
                     <Link to='/person'>个人中心</Link>
                     </ul>
                     <ul className='menu2'>
                     <Link to='/appgood'>商城</Link>
                     </ul>
                     <ul className='menu2'>
                     <Link to='/person'>关注</Link>
                     </ul>
                     <ul className='menu2'>
                     <Link to='/person'>粉丝</Link>
                     </ul>
                     <ul className='menu2'>
                     <Link to='/aboutus'>关于我们</Link>
                     </ul>
                    
                 </div>
                 <div>
                 <Link to = '/setting'><img src='/img/setting.png' className='menu3'  alt=''/></Link>
                 
                </div>
                </div>
            )
        }
        else{
            return (
                <div className='menu0'>
                   <div>
                       
                  
                    {this.state.data.map((item,key)=>(
                        <div key={key}>
                           <div className='menu1'>
                                <img src={"https:\\daitianfang.1459.top/images/avatar/"+item.avatarid } style={{width:'70px',height:'70px',borderRadius:'50%'}} alt=''/>
                                <p style={{color:'black',fontSize:'17px'}}>昵称：{item.name}</p>
                                <p style={{color:'black',fontSize:'16px'}}>个性签名：{item.signatrue}</p>
                             </div>
                             <div className='menu1'>
                            <ul className='menu2'>
                            <Link to='/apphome'>首页</Link>
                            </ul>
                            <ul className='menu2'>
                            <Link to='/appgood'>商城</Link>
                            </ul>
                            <ul className='menu2'>
                            <Link to='/person'>个人中心</Link>
                            </ul>
                            <ul className='menu2'>
                            <Link to={'/concern/'+item.id}>关注</Link>
                            </ul>
                            <ul className='menu2'>
                            <Link to={'/fans/'+item.id}>粉丝</Link>
                            </ul>
                            <ul className='menu2'>
                            <Link to='/aboutus'>关于我们</Link>
                            </ul>
                            
                        </div> 
                        </div>
                            
                    ))
                    } 
                    
                        
    
                    </div>
                    <div>
                        <Link to = '/setting'><img src='/img/setting.png' className='menu3'  alt=''/></Link>
                        
                    </div>
                    </div>
            )  
        }
        
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/person?id='+this.state.cookie_obj.userid)
        .then((res)=>res.json())
        .then((res)=>{          
            this.setState({data:res.data});
        })
    }
}