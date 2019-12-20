import React, { Component } from 'react'
import {NavBar, Icon,Card,} from 'antd-mobile';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import Alert from '../component/Alert';
import ReactDom from 'react-dom';
export default class Concern extends Component {
  constructor(){
    super();
    this.state = {
        data: [],
        msg:'',
        btn:'',
        src:'',
        fun:()=>{

        }

    }
}

  render() {
    
    if(this.state.data==null){
      return(
        <div>
          <NavBar
            style={{backgroundColor:'rgb(255,64,129)',
            position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'
          }}
            mode="white"
            icon={<Icon type="left" />}
            onLeftClick={() => window.history.back(-1)}
            >我的关注</NavBar>
        </div>  
      )
    }
    else{
      return (
        <div>
          {/* 顶栏 */}
          <NavBar
            style={{backgroundColor:'rgb(255,64,129)',
            position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
            mode="white"
            icon={<Icon type="left" />}
            onLeftClick={() => window.history.back(-1)}
            >我的关注</NavBar>
           {/* 我的关注 */}
           <Alert
                        msg={this.state.msg}
                        src={this.state.src}
                        toPath={this.state.fun}
                        btn={this.state.btn}
                    />
          <div style={{marginTop:'45px'}}>

          
           {this.state.data.map((item,index)=>(
                          <ul style={{padding:'0',border: '1px solid #cfcfcf',
                          marginBlockStart:'0' ,margin:'0px 0px 10px 0px'
                          }} key={index}>                           
                                  
                                      <li style={{height:'90px' ,width:'100%'}}>
                                      <button className='concern' onClick={(e)=>{this.fetch_concern(e)}} name={`col#${index}`}>取消关注</button>  
                                          <img src={"/images/avatar/"+item.avatarid} 
                                          style={{width:'60px',height:'60px', float:'left',borderRadius:'50%',
                                          margin:'15px 0px 10px 40px'}} alt=''/>
                                          
                                          <p style={{   float:'right',fontSize:'14px',fontWeight:'bold',
                                          width:'40%',overflow:'hidden'
  
                                          }}>
                                              {item.foucename} <br/>
                                              <br/>   
  
                                              <span style={{fontSize:'12px'}} id={`fouceid#${index}`}>
                                                  {item.fouceid}
                                              </span>
                                             
                                          </p>                                                                              
                                           
                                      </li>                                  
                                                                                                                                            
                          </ul>    
                      ))
                  }   
            </div>
          
          <div id='footerfuns'>
              <div className='boxfuns'>
                  <Link to={'/fans/'+this.props.match.params.id} >
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
    
  }
  componentDidMount(){
        
    fetch('https://daitianfang.1459.top/api/v1/fouce?id='+this.props.match.params.id)
    .then((res)=>res.json())
    .then((res)=>{
        this.setState({data:res.data.data});
    })
  }
  fetch_concern(e){
    let data = {};
    data.type='del';
    let fouceid=ReactDOM.findDOMNode(document.getElementById('fouceid#'+e.target.name.split('#')[1])).innerText;
    data.id=this.props.match.params.id
    data.fouceid=fouceid
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

