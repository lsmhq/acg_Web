
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Comment extends Component {
    static propTypes = {
       comment : PropTypes.object.isRequired,
       onDeleteComment:PropTypes.func,
       index:PropTypes.number
    }
    constructor () {
        super()
        this.state = { timeString: '' }
      }
      componentWillMount () {
        this._updateTimeString()
      }
      _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 120)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
      }
    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
          this._updateTimeString.bind(this),
          3000
        )
      }
    componentWillUnmount () {
        clearInterval(this._timer)
      }
    handleDeleteComment () {
        if (this.props.onDeleteComment) {
          this.props.onDeleteComment(this.props.index)
        }
      }
    
    render() {
        const {comment} = this.props
        return (
            <div className='comment' style={{borderBottom:'2px lightskyblue dashed',marginTop:'5px'}} >
              
                <div className='comment-user'  style={{zIndex:'-1',marginLeft:'50px'}}>
                    <span className='comment-username'>{comment.username}</span> ：
                </div>
                <p style={{zIndex:'-1',marginLeft:'50px'}}>{comment.content}</p>
                {/* <span className='comment-createdtime' style={{float:"right"}}>
                    {this.state.timeString}
                </span> */}
                <span style={{border:'blue',backgroundColor:'blue',color:'white',float:'right'}}  onClick={this.handleDeleteComment.bind(this)} >删除</span>
            </div>
        )
    }
}
