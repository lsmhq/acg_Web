import React, { Component } from 'react'
import {NavBar, Icon, TabsList, InputItem,Button,Card,WhiteSpace,TabBar} from 'antd-mobile';
import {Link} from 'react-router-dom'
export default class Chat extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    render() {
        return (
            <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}>
                        {
                            this.state.data.map((item)=>(
                                        <Link to={'/topics/'+item.id} style={{marginLeft:"20px",color:"#778087",fontSize:"14px"}}>{item.title}</Link>
                            ))
                        }
                    </NavBar>
            </div>
        )
    }
}
