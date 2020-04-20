import React, { Component } from 'react'
import CommentApp from './CommentApp'
import{NavBar,Icon} from 'antd-mobile'
export default class Action extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >动态</NavBar>
                <CommentApp/>
            </div>
        )
    }
}
