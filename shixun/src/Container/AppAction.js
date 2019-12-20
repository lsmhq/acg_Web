import React, { Component } from 'react'
import {Link,HashRouter as Router,Route} from 'react-router-dom';
import Box from '../component/Box';
import {NavBar,Icon, ImagePicker, WingBlank, } from 'antd-mobile'
import ReactDOM from 'react-dom'
import Alert from '../component/Alert';
import ReactDom from 'react-dom';
const data = [

];
export default class AppAction extends Component {
    constructor(){
        super();
        this.state = {
            files: data,
            multiple: false,
            cookie_obj:this.cookieToObj(document.cookie),
            time:time,
            msg:'',
            btn:'',
            src:'',
            fun:()=>{

            }
        }
        var today = new Date(),
            time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
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
      onChange = (files, type, index) => {
        this.setState({
          files:files,
        });
      }
      onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
      }

    render() {
    const {files} = this.state;

        return (
            <Router>
            
            <div className='actiona0'>
                <NavBar
                style={{backgroundColor:'rgb(255,64,129)',
                position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'
            }}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back(-1)}
                >动态</NavBar>
                <p style={{fontFamily:'SimHei',fontSize:'18px' ,fontWeight:'bold' ,marginTop:'45px' ,paddingTop:'10px'}}>添加图片：</p>
                <WingBlank>
                    
                    <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 1}
                    multiple={this.state.multiple}
                    />
                </WingBlank>
                <Alert
                        msg={this.state.msg}
                        src={this.state.src}
                        toPath={this.state.fun}
                        btn={this.state.btn}
                    />
                <div style={{marginTop:'10px'}}>
                    <p style={{fontFamily:'SimHei',fontSize:'18px',fontWeight:'bold'}}>标题：</p>
                    <input placeholder="不要超过20个字" className='actiona1' maxLength='20' id='title' />
                    
                    <div>
                    <p style={{fontFamily:'SimHei',fontSize:'18px',fontWeight:'bold'}}>文章类型：</p>
                    <select id='type' style={{marginLeft:'30px' ,width:'100px',height:'27px'}}>
                        <option value="comic">comic</option>
                        <option value="game">game</option>
                        <option value="animation">animation</option>
                    </select>
                    </div>
                    <p style={{fontFamily:'SimHei',fontSize:'18px',fontWeight:'bold'}} >内容：</p>
                    <textarea placeholder='请输入文章内容' id='context' className='actiona2'/>
                </div>
                
                <div style={{textAlign:"center"}}>
                <button type='submit' className='actiona3' onClick={(e)=>{this.fetch_add(e)}}>发布</button>
                </div>
                <div>
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
                <div style={{height:'100px',overflow:'hidden'}}>

                </div>

                </div>
            </Router>                                                 
        )
    }
    fetch_add(){
        let data = {};
        data.type='insert_font';
        let title = ReactDOM.findDOMNode(document.getElementById('title')).value;
        let context = ReactDOM.findDOMNode(document.getElementById('context')).value;
        let contexttype=document.getElementById('type').value;
        let images=this.state.files[0].url.split(';')[1]
        let images_type=this.state.files[0].url.split(';')[0]
        let timetamp=this.state.time
        let auther=decodeURIComponent(atob(this.state.cookie_obj.username)); 
        let autherid=this.state.cookie_obj.userid
        data.timetamp=timetamp
        data.auther=auther
        data.autherid=autherid
        data.images_type=images_type
        data.images=images
        data.contexttype=contexttype
        data.title = title;
        data.context = context;
        this.setState({
            msg:'上传中 · · ·',
            btn:'请稍后 · · ·',
            src:'/images/run.gif',
            fun:()=>{
                ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='none';
            }
        },()=>{
            ReactDom.findDOMNode(document.getElementById('login_alert')).style.display='block';
            fetch('https://daitianfang.1459.top/api/v1/chapter',{
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
                            msg:'发布成功',
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
                    case 'error':{
                        this.setState({
                            msg:'发布失败',
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
        })   
 
    }
}
