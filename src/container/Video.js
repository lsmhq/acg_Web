import React, { Component } from 'react'
import {Icon,NavBar} from 'antd-mobile'
export default class Video extends Component {
    render() {
        return (
            <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >视频</NavBar>
            </div>
        )
    }
}
