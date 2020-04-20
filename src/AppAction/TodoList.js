import React, { Component } from 'react'
import './index.css'
import ListItem from './ListItem'
import {NavBar,Icon} from 'antd-mobile'
export default class TodoList extends Component {
    constructor(){
        super()
        this.state={
            list: [{
                name: '赵晓宇'
              },{
                name: '代天放'
              }, {
                name: '粟慧军'
              }, {
                name: '冯菲珂'
              }],
              buttonon:[{
                isToggleOn:true,
                display:'none'
              }],
            inputVal:''
        }
        this.handleClick=this.handleClick.bind(this)
    }
    deleteItem1(name) {
        const data = this.state.list.filter(element => element.name !== name)
        this.setState({
          list: data
        })
      }
      handleChange(e){
          this.setState({
              inputVal:e.target.value
          })
      }
      addTask() {
        if (!this.state.inputVal) return
        this.setState({
          list: [...this.state.list, {
            name: this.state.inputVal,
            status: 0
          }],
          inputVal: ''
        })
      }
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn,
          display: prevState.isToggleOn ? 'none': 'block'
        }));
      }
      // fetch_login=(e)=>{
      //   let data={};
      //   data.type='login';
      //   data.value=document.getElementsByClassName('input')[0].value;
      //   fetch('https://daitianfang.1459.top/login',{
      //     method:'POST',
      //     mode:'cors',
      //     headers:{'Content-Type':'application/json'},
      //     body:JSON.stringify(data)
      //   }).then(req=>{return req.text()}).then(data=>{
      //     if(data==='success'){
      //       this.props.history.push('/todolist');
      //     }
      //   })
      // }
    render() {
        return (
          <div>
            {/* 顶栏 */}
            <NavBar
                style={{backgroundColor:'rgb(255,64,129)'}}
                mode="white"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back(-1)}
                >动态</NavBar>
            <div className='reactTodoList'>
                <ListItem data={this.state.list} deleteItem={this.deleteItem1.bind(this)}/>
                <div>
                <footer>
                    <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)} style={{display:this.state.display}} placeholder="添加动态"/>
                    <button className='addTodo' onClick={this.addTask.bind(this)} style={{display:this.state.display}} type='submit'>发表</button>
                </footer>
                <div className='button1' >
                  <button onClick={this.handleClick} style={{backgroundColor:'transparent' }}><img src='/add.png' alt=""/></button>
                </div>
                </div>
                
                
            </div>
          </div>
        )
    }
}
