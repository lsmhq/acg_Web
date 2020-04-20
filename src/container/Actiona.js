import React, { Component } from 'react'
import {NavBar,Icon, Button,ImagePicker, WingBlank, SegmentedControl, Checkbox} from 'antd-mobile'

const data = [

];
export default class Actiona extends Component {
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
            <div className='actiona0'>
                <NavBar
                style={{backgroundColor:'rgb(255,64,129)'}}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back(-1)}
                >动态</NavBar>
                <p style={{fontFamily:'SimHei',fontSize:'16px'}}>添加图片：</p>
                <WingBlank>
                    
                    <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 8}
                    multiple={this.state.multiple}
                    />
                </WingBlank>
                <div style={{marginTop:'20px'}}>
                    <p style={{fontFamily:'SimHei',fontSize:'16px'}}>标题：</p>
                    <input placeholder="不要超过20个字" className='actiona1' maxLength='20' />
                    <div>
                    <p style={{fontFamily:'SimHei',fontSize:'16px'}}>文章类型：</p>
                    <Checkbox value='0' style={{marginRight:'20px',marginLeft:'30px'}} >Comic</Checkbox>
                    <Checkbox style={{marginRight:'20px'}}>Game</Checkbox>
                    <Checkbox style={{marginRight:'20px'}}>Animate</Checkbox>
                    </div>
                    <p style={{fontFamily:'SimHei',fontSize:'16px'}}>内容：</p>
                    <textarea placeholder='请输入文章内容' className='actiona2'/>
                </div>
                
                <div style={{textAlign:"center"}}>
                <button type='submit' className='actiona3'>发布</button>
                </div>
                <ol className='hot' style={{fontSize:'16px',color:'red',width:'100%'}}>
                    <li>蒜头王八</li>
                    <li>LOL转会详情</li>
                    <li>超级赛亚人之神</li>
                    <li>驱魔录</li>
                    <li>石纪元</li>
                    <li>蓝色灭火器</li>
                    <li>斗破苍穹</li>
                    <li>庆余年</li>
                    
                </ol>
            </div>
        )
    }
}
