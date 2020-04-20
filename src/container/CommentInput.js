import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentInput extends Component {
    // 组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头。把事件监听方法传给组件的时候，属性名用 on 开头。
    static propTypes = {
        onSubmit:PropTypes.func
    }
    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }

    componentDidMount(){
        this.textarea.focus()
    }

    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
    }
    handleSubmit () {
        if (this.props.onSubmit) {
          this.props.onSubmit({
              username:this.state.username,
              content:this.state.content,
              createdTime:+new Date()
          })
        }
        this.setState({ content: '' })
    }

    componentWillMount () {
        this._loadUsername()
      }
    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
      }
    _saveUsername (username) {
        localStorage.setItem('username', username)
    }
    
    
    handleUsernameChange (event) {
        this.setState({
          username: event.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
          content: event.target.value
        })
    }
    
   
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} 
                        onBlur = {this.handleUsernameBlur.bind(this)}
                        onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea)=>this.textarea=textarea} 
                        value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'><button onClick={this.handleSubmit.bind(this)}>发表评论</button></div>
            </div>
        )
    }
   
}
