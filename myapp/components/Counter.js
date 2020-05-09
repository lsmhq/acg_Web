//类组件

// import React, { Component } from 'react'
// import {View,Text,Button} from 'react-native'
// export default class Counter extends Component {
//     constructor(){
//         super();
//         this.state={
//             num:0
//         }
//     }
//     handle=()=>{
//         this.setState((state)=>{
//             return{
//                 num:++state.num
//             }
            
//         })
//     }
//     render() {
//         return (
//            <View>
//                <Text>{this.state.num}</Text>
//               <Button onPress={this.handle} title="+1"/>
//            </View>
//         )
//     }
// }


//函数组件

import React, { Component,useState} from 'react'
import { Button,Text,View } from 'react-native';

const Counter =() =>{
    let[num,setNum]= useState(0);
        return (
            <View>
                <Text>{num}</Text>
                <Button onPress={()=>{setNum(num+1)}} title='点击+1'/>
            </View>
        )
    
}

export default Counter;