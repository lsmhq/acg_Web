import React, { Component,Fragment } from 'react'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
import { NavBar, Icon, Tabs,List, InputItem,Button,Switch,Card} from 'antd-mobile';
import Msg from './Msg';

export default class Address extends Component {
    constructor(){
      super()
      this.state={
        postList:[

        ],
      }
    }
    render() {
        return (
            <div>
 
                <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >收货地址</NavBar>

                </div>
                <Link to='/msg'><Button type='primary'>添加地址</Button></Link>
                   
            </div>

        )
    }

     } 
     
 