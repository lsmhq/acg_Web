import React, { Component } from 'react'
import {NavBar, Icon,Card,} from 'antd-mobile';
import {Link} from 'react-router-dom'
export default class Funs extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    
    render() {
        return (
            <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >我的粉丝</NavBar>
                
                {/* 我的粉丝 */}
                {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',border: '1px solid #cfcfcf',
                        marginBlockStart:'0' ,margin:'0px 0px 10px 0px'
                        }} key={key}>                           
                                <Link to={''} style={{fontSize:'12px',}}>
                                    <li style={{height:'90px' ,width:'100%'}}>
                                        <img src={"https:\\daitianfang.1459.top/images/avatar/"+item.avatarid+".jpg" } 
                                        style={{width:'60px',height:'60px', float:'left',borderRadius:'50%',
                                        margin:'15px 0px 10px 40px'}} alt=''/>
                                        <p style={{margin:'20px 140px 5px 0px',float:'right',fontSize:'14px',fontWeight:'bold'}}>
                                            {item.fanname} <br/>
                                            <br/>
                                            
                                            <span style={{fontSize:'12px'}}>
                                                {item.fanid}
                                            </span>
                                        </p> 
                                        
                                      
                                       
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                }   
            
                            
                           
                    
                {/* 跳转框 */}
                <div id='footerfuns'>
            <div className='boxfuns'>
                <Link to={'/funs/'+this.props.match.params.id} >
                    <img src='/img/funs.png' alt=''   className='footerimgfuns'/>
                    <span className='textfuns'>我的粉丝</span>
                </Link>
            </div>
            <div className='boxfuns'>
                <Link to={'/concern/'+this.props.match.params.id}>
                  <img src='/img/关注.png' alt='' className='footerimgfuns'/>
                  <span className='textfuns'>我的关注</span>
                </Link>
            </div>
                    
        </div>
                    
        </div>
            
        )
    }
    componentDidMount(){
        
        fetch('https://daitianfang.1459.top/api/v1/fans?id='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data.data});
        })
    }
}
