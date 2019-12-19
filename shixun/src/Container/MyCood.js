import React, { Component } from 'react'
import {Link,HashRouter as Router,} from 'react-router-dom';
export default class MyCood extends Component {
    constructor(){
        super();
        this.state ={
            data:JSON.parse(localStorage.getItem('ShopCar'))
        }
    }
    render() {
        return (
            <div style={{marginTop:'45px'}}>
                {
                    this.state.data.map((item,index)=>{
                        return(                                                                                                                                                                                                                                                                                                         
                            <ul style={{padding:'0',}}  key={index}>   
                             <button  style={{float:'right',marginRight:'4.8%',border:'none',backgroundColor:'red',color:'white'}} name={`del#${index}`}
                                        onClick={(e)=>{this.fetch_del(e)}}
                                        >X</button>                        
                                <Link to={'/goodmsg/'+item.id}  style={{fontSize:'10px',}}>
                                    <li style={{height:'100px' ,width:'90%',border: '1px solid #cfcfcf',margin:' 0 5%',
                                    backgroundColor:"aliceblue",borderRadius:'3px'}}>
                                       
                                        <img src={"https:\\daitianfang.1459.top"+item.path} style={{width:'25%',height:'80%',float:'left',
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

                        )
                    })
                }
            </div>
        )
    }
    addgood(){

        if(localStorage.getItem('ShopCar')){
            
            let arr_data = JSON.parse(localStorage.getItem('ShopCar'));
            arr_data.push(this.state.data[0]);
            localStorage.setItem('ShopCar',JSON.stringify(arr_data));
        }else{
            localStorage.setItem('ShopCar',JSON.stringify(this.state.data));
        }
}
    fetch_del(e){
        if(localStorage.getItem('ShopCar')){
            
            let index = e.target.name.split('#')[1];
            this.state.data.splice(index,1);
            this.setState({
                data:this.state.data
            },()=>{
                localStorage.setItem('ShopCar',JSON.stringify(this.state.data))
            })
        }else{
            localStorage.setItem('ShopCar',JSON.stringify(this.state.data));
        }
    

    }

    componentDidMount(){
       
    }
}
