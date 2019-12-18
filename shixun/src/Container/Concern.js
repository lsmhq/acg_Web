import React, { Component } from 'react'
import {NavBar, Icon,Card,} from 'antd-mobile';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
export default class Concern extends Component {
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
          >我的关注</NavBar>
         {/* 我的关注 */}

         {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',border: '1px solid #cfcfcf',
                        marginBlockStart:'0' ,margin:'0px 0px 10px 0px'
                        }} key={key}>                           
                                
                                    <li style={{height:'90px' ,width:'100%'}}>
                                    <button className='concern' onClick={(e)=>{this.fetch_concern(e)}}>取消关注</button>  
                                        <img src={"https:\\daitianfang.1459.top/images/avatar/"+item.avatarid+".jpg" } 
                                        style={{width:'60px',height:'60px', float:'left',borderRadius:'50%',
                                        margin:'15px 0px 10px 40px'}} alt=''/>
                                        
                                        <p style={{margin:'20px 90px 5px 0px',float:'right',fontSize:'14px',fontWeight:'bold',

                                        }}>
                                            {item.foucename} <br/>
                                            <br/>   

                                            <span style={{fontSize:'12px'}} id='fouceid'>
                                                {item.fouceid}
                                            </span>
                                           
                                        </p>                                                                              
                                         
                                    </li>                                  
                                                                                                                                          
                        </ul>    
                    ))
                }   
        
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
        
    fetch('https://daitianfang.1459.top/api/v1/fouce?id='+this.props.match.params.id)
    .then((res)=>res.json())
    .then((res)=>{
        this.setState({data:res.data.data});
    })
  }
  fetch_concern(){
    let data = {};
    data.type='del';
    let fouceid=ReactDOM.findDOMNode(document.getElementById('fouceid')).innerText;
    data.id=this.props.match.params.id
    data.fouceid=fouceid
    console.log(data.fouceid)
    console.log(data.id)
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
                alert('取关成功')
                break;
            }
            case 'error':{
                alert('取关失败')
                break;
            }
        }
    })
  }
}

