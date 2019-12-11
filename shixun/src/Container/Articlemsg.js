import React, { Component } from 'react'
import {Icon,NavBar} from "antd-mobile";
import CommentApp from '../Comments/CommentApp';
import ArticleText from  './ArticleText'

export default class Articlemsg extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
   
    
    render() {
        
        
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    
                    >文章</NavBar>



                    {this.state.data.map((item,key)=>(
                        <div key={key}>
                            <img src={"https://daitianfang.1459.top"+item.images+"0.jpg"} alt='' style={{width:'100%',height:'180px',}} />
                            <div style={{margin:'20px 30px'}}>
                            <h2 style={{textAlign:'center'}}>{item.title}</h2>   
                            <h3 style={{textAlign:'center'}}>小编：{item.auther}</h3>
                           
                        </div>
                                                                      
                        <div>
                            <ArticleText url={"https://daitianfang.1459.top"+item.context+".json"}/>   
                            <hr/>
                        </div>
                        </div>                      
                    ))       
                }
                <br/> 
                <CommentApp/>     
            </div>
        )
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/chapter?type='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    
}
