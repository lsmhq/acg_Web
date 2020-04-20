import React, { Component } from 'react'
import "./index.css"
export default class ListItem extends Component {
    deleteTask(name){
        this.props.deleteItem(name)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.data.map(element =>{
                            return (
                                <li>
                                <input placeholder='请输入文章标题'/>
                                <span>{element.name}</span>
                                {/* <button className='delete' onClick={this.deleteTask.bind(this,element.name)}><img src='/delete.png' alt=''/></button> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
