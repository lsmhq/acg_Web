import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class MyCood extends Component {
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }
    render() {
        if(this.state.data.length === 0){
            return (
                <div style={{textAlign:'center'}}>
                    <div style={{height:"50px"}}></div>
                    <h3>购物车空空如也,真的不想买点什么吗</h3>
                </div>
            )
        }else{
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
                                           
                                            <img src={item.path} style={{width:'25%',height:'80%',float:'left',
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
        if(localStorage.getItem('ShopCar')){
            this.setState({
                data: JSON.parse(localStorage.getItem('ShopCar'))
            })
        }
    }
}
