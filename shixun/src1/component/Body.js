//首页 游戏动画
import React, { Component } from 'react';

export default class Body extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <ul>
                {this.state.data.map((item,index)=>{
                    return(
                        <li>
                            <div>
                                //文章结构
                            </div>
                        </li>       
                    )
                })}
            </ul>
        )
    }
    componentDidMount(){
        fetch(this.props.url).then(req=>req.json()).then(data=>{
            this.setState({
                data:data.data
            })
        })
        //
    }
}
