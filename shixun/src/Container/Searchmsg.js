import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import {Link} from 'react-router-dom'
export default class Searchmsg extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className='searchbg'>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    rightContent={
                        <Icon key="0" type="search" style={{ color:'#000'}} />                                           
                    }
                    >搜一搜</NavBar>
                    <div style={{marginTop:'45px'}}> 
                    <input type='search' id='search' style={{
                    width:'70%',height:'30px',textAlign:'center',margin:'15px 0 0 15%',borderRadius:'10px',border:'none'
                    }} placeholder='搜索文章'  onChange={(e)=>this.changeEvent(e)}></input>
                    <button style={{float:'right',width:'30px',height:'30px',
                    backgroundColor:'#FFC125 ' ,border:'none',margin:'15px 7px 0 0',borderRadius:'3px'

                    }} onClick={(e)=>{this.fetch_select(e)}}>
                        <Icon key="0" type="search" style={{ color:'white'}} />
                </button> 
                    </div>
                     

                <ol className='hot' style={{fontSize:'16px',color:'red',float:'left', marginLeft:'30px',height:'100%',}}>
                    <li>蒜头王八</li>
                    <li>LOL转会详情</li>
                    <li>超级赛亚人</li>
                    <li>驱魔录</li>
                    <li>石纪元</li>
                    <li>蓝色灭火器</li>
                    <li>斗破苍穹</li>
                    <li>庆余年</li>
                </ol>
                <div id='jg' style={{width:'100%',marginTop:'150px',}}>
                 {this.state.data.map((item,key)=>(
                     
                        <ul style={{padding:'0',border: '1px solid #cfcfcf'

                        }} key={key}>                           
                                <Link to={'/articlemsg/'+item.id} style={{fontSize:'12px',}}>
                                    <li style={{height:'90px' ,width:'100%',}}>
                                        <img src={item.images} style={{width:'120px',height:'80px', float:'left',margin:'0px 10px 10px 10px'}} alt=''/>
                                        <h3 style={{}}>
                                        {item.auther}                               
                                        </h3> 
                                        <h4 style={{}}>
                                        {item.title}
                                        </h4>
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>   
                  
                    ))
                }   
                  </div> 
                <div id='abc' style={{width:'100%',height:'430px'}}>

                </div>
            </div>
        )
    }
    changeEvent(e){
        this.setState({value:e.target.value})      
    }
    fetch_select = (e)=>{
        let abc = document.getElementById('abc');
        let jg = document.getElementById('jg');
        if(jg.clientHeight > 50){
            abc.style.display = 'none'
        }
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
            
        })
    }   
}
