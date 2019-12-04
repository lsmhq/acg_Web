import React, { Component } from 'react'
import {Link,BrowserRouter as Router,} from 'react-router-dom';


export default class Gird extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    
    render() {
        return (
            <Router>
                <div>
                {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',border: '1px solid #cfcfcf',}} key={key}>                           
                                <Link to={'/topics/'+item.id}  style={{fontSize:'14px',}}>
                                    <li style={{height:'90px' ,width:'100%'}}>
                                        <img src={item.author.avatar_url} style={{width:'80',height:'80px', float:'left',margin:'0px 10px 10px 10px'}} alt=''/>
                                        <p style={{paddingTop:'10px'}}>
                                        {item.title}                               
                                        </p> 
                                        <p style={{}}>
                                        {item.id}
                                        </p>
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                }
            </div>
            </Router>
            
        )
    }
}
