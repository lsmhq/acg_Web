import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
export default class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            comments:[],
            cookie_obj:this.cookieToObj(document.cookie),
        }
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
    componentWillMount () {
        this._loadComments()
      }
      _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
          comments = JSON.parse(comments)
          this.setState({ comments })
        }
      }
      _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
      }
    handleSubmitComment (comment) {
        if(!comment) return
        if (!comment.content) return alert('请输入评论内容')
        const comments=this.state.comments
        comments.push(comment)
        this.setState({comments})
        this._saveComments(comments)
    }
    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }

    
    render() {
        if(this.state.cookie_obj.loginStatus !== 'b326b5062b2f0e69046810717534cb09'){
            return(
                <div style={{width:'100%',}}>
                        <h2 style={{marginTop:"40px",color:'green',textAlign:'center'}}>您还没有登录，请登录后进行评论</h2>
                        <Link  to='/' style={{ textAlign:'center',}}>
                           <button   style={{
                               fontSize:'16px',
                               width:'30%',
                               height:'50px',
                               border:'none',
                               borderRadius:'5px',
                               margin:'20px 35% 0 35%',
                               backgroundColor:' rgb(0, 180, 204)',
                               color:'white',
                               cursor: 'pointer',
                               fontWeight:'bolder'
                           }}>登录</button>
                        </Link>
                        <div style={{height:'100px',width:"100%"}}></div>
                    </div>

            
            )
        }
        else{
        return (
            <div className='wrapper'>
                <h3 style={{textAlign:'center',color:'red',margin:'0px'}}>评论席</h3>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList 
                comments={this.state.comments}
                onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
        }
    }
}
