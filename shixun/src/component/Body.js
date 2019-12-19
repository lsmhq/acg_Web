
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
                        <ul style={{padding:'0',border: '1px solid #cfcfcf'}} key={key} className='animated fadeInUp'>                           
                                <Link to={'/articlemsg/'+item.id} style={{fontSize:'12px',}}>
                                    <li style={{height:'90px' ,width:'100%', letterSpacing:'1.5px'}}>
                                        <img src={item.images} style={{width:'120px',height:'80px', float:'left',margin:'0px 10px 10px 10px'}} alt=''/>
                                        <h3 style={{}}>
                                        {item.auther}                               
                                        </h3> 
                                        <h4 style={{}}>
                                        {item.title}
                                        </h4>
                                    </li>                                  
                                </Link>                                                                                                               
                        </ul>    
                    ))
                } 
                <div style={{height:'55px'}}>
                    
                </div>  
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


