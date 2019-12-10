
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Body extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
                 {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',border: '1px solid #cfcfcf',}} key={key}>                           
                                <Link to={''}  style={{fontSize:'12px',}}>
                                    <li style={{height:'90px' ,width:'100%'}}>
                                        <img src={item.auther} style={{width:'80',height:'80px', float:'left',margin:'0px 10px 10px 10px'}} alt=''/>
                                        <p style={{}}>
                                        {item.auther}                               
                                        </p> 
                                        <p style={{}}>
                                        {item.title}
                                        </p>
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                }   
            </div>
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


