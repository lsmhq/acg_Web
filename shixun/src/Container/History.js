import React, { Component } from 'react'
import {NavBar, Icon, Tabs,WingBlank,Carousel,Grid,List, InputItem,Button,Card,WhiteSpace} from 'antd-mobile';
import {Link} from 'react-router-dom'
import CardBody from 'antd-mobile/lib/card/CardBody';
export default class History extends Component {
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
                <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >历史记录</NavBar>
                </div>
                {/* 历史记录 */}
                {
                        this.state.data.map((item,key)=>(
                            <Card key={key}>
                                <Card.Body>
                                    <img src={item.author.avatar_url} style={{width:'30px',height:'30px',float:"left"}}/>
                                    <Link to={'/topics/'+item.id} style={{marginLeft:"20px",color:"#778087",fontSize:"14px"}}>{item.title}</Link>
                                </Card.Body>
                            </Card>
                            
                           
                        ))
                    }
            </div>
        )
    }
}
