import React, { Component } from 'react'

export default class ArticleText extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                content:[]}
        }
    }
    
    render() {
        return (
            <div>
                {this.state.data.content.map((item,index)=>{
                return (<p key={index}
                    style={{
                        margin:'20px',
                        marginTop:'30px',
                        fontSize:'14px',
                        letterSpacing:'4px',
                        fontFamily:'HYYaKuHeiW',
                        lineHeight:'40px'
                        
                    }}
                >&nbsp;&nbsp;&nbsp;{item.text}</p>)
                })}
            </div>
        )
    }
    componentDidMount(){
        fetch(this.props.url).then(req=>req.json()).then(val=>{
            this.setState({
                data:val
            },)
        })
        
    }
}
