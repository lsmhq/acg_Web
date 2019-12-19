import React, { Component } from 'react';


export default class Alert extends Component {
    render() {
        return (
            <div id='login_alert' className='animated shake'>
                <img src={this.props.src!==''? this.props.src : '/images/failed.png'} width='80px'/>
                <span>{this.props.msg}</span>
                <input type='button' value={this.props.btn||'确认'} className='input_btn' style={{marginTop:'10px'}} onClick={(e)=>{this.props.toPath(e)}}/>
            </div>
        )
    };

}
