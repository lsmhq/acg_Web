import React, { Component,Fragment } from 'react'
import {NavBar,Icon,Button} from 'antd-mobile'
export default class Address extends Component {
    constructor(){
        super()
        this.state = {
           postList:[
           ],
           }
         }
    render() {
        return (
            <div>
            <div>
                {/* 顶栏 */}
                <NavBar
                style={{backgroundColor:'rgb(255,64,129)',
                position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back(-1)}
                >信息填写</NavBar>
            </div>
            <div style={{marginTop:'45px'}}>
            <Fragment>
                    <ol> 
                        {
                            this.state.postList.map((value,index)=>{
                            return (
                                <li className='address3' key={index}>{ value }
                                    <Button type="ghost" inline size="small" onClick={this.delete.bind(this,index)}style={{marginLeft:'5%'}}>删除</Button>
                                </li>
                            )
                            })
                        }
                    </ol>
                    <div className='address1'></div>
                    <div>
                        <textarea placeholder='请输入您的收货地址'
                        className='address2' 
                        value={ this.state.inputValue }
                        onChange={ this.handleInput.bind(this) } 
                        name="" id="">
                        </textarea> <br/>
                        <Button type="primary" onClick={ this.submit.bind(this) } style={{width:'60%',margin:'0 auto'}} >添加地址</Button>
                    </div>
                </Fragment>
            </div>         
            </div>
        )
    }
    submit(){
        console.log(0)
        this.setState({
          postList:[...this.state.postList,this.state.inputValue],
         inputValue:""
        })
      }
      handleInput(e){
        this.setState({
          inputValue:e.target.value,
        })
      }
      delete(index){
        let postList = [...this.state.postList]
        postList.splice(index,1)  
        this.setState({
          postList,
        })
      }
}
