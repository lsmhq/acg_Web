import React, { Component } from 'react'
import {Link,HashRouter as Router,} from 'react-router-dom';
export default class MyCood extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://daitianfang.1459.top/api/v1/goods?id=all')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    
    render() {
        
        return (
            <div>
                <Router>
                {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',}} key={key}>                           
                                <Link to={'/goodmsg/'+item.id}  style={{fontSize:'10px',}}>
                                    <li style={{height:'100px' ,width:'90%',border: '1px solid #cfcfcf',margin:' 0 5%',
                                    backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                        <button  style={{float:'right'}} 
                                        onClick={()=>
                                               document
                                        }>X</button>
                                        <img src={"https:\\daitianfang.1459.top"+item.path+".jpg"} style={{width:'25%',height:'80%',float:'left',
                                        margin:'10px 0 0 10%'}} alt='商品'/>
                                        
                                        <h3 style={{margin:'20px 0 0 150px'}}>
                                            商品名称：{item.name}
                                            <br/>
                                            <br/>
                                            <span style={{color:"orange"}}>
                                                价格：{item.price}元
                                            </span>
                                        </h3>
                                       

                                        
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                }
                 </Router>
            </div>
           
    
                
        )
    }
}
