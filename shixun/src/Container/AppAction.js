import React, { Component } from 'react'
import {Link,HashRouter as Router,Route} from 'react-router-dom';
import Box from '../component/Box';
import {NavBar,Icon, Button,ImagePicker, WingBlank, SegmentedControl, Checkbox} from 'antd-mobile'
import ReactDOM from 'react-dom'

const data = [

];
export default class AppAction extends Component {
    state = {
        files: data,
        multiple: false,
      }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
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
                style={{backgroundColor:'rgb(255,64,129)'}}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back(-1)}
                >动态</NavBar>
                <p style={{fontFamily:'SimHei',fontSize:'18px' ,fontWeight:'bold' }}>添加图片：</p>
                <WingBlank>
                    
                    <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 8}
                    multiple={this.state.multiple}
                    />
                </WingBlank>
                <div style={{marginTop:'10px'}}>
                    <p style={{fontFamily:'SimHei',fontSize:'18px',fontWeight:'bold'}}>标题：</p>
                    <input placeholder="不要超过20个字" className='actiona1' maxLength='20' id='title' />
                    <div>
                    <p style={{fontFamily:'SimHei',fontSize:'18px',fontWeight:'bold'}}>文章类型：</p>
                    <Checkbox style={{marginRight:'15px',marginLeft:'20px'}} >Comic</Checkbox>
                    <Checkbox style={{marginRight:'15px'}}>Game</Checkbox>
                    <Checkbox style={{marginRight:'15px'}}>Animate</Checkbox>
                    <Checkbox style={{marginRight:'0px'}}>Activate</Checkbox>
                    </div>
                    <p style={{fontFamily:'SimHei',fontSize:'18px',fontWeight:'bold'}} id='context'>内容：</p>
                    <textarea placeholder='请输入文章内容' className='actiona2'/>
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
                </div>
            </Router>                                                 
        )
    }
    fetch_add(){
        let data = {};
        data.type='insert_font';
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
        fetch('https://daitianfang.1459.top/api/v1/',{
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
}
