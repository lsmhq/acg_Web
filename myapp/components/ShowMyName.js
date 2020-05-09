import React, { Component } from 'react'
import { View,Text } from 'react-native'

const ShowMyName=  (props)=>{
    return (
        <View>
            <Text>Hello {props.name}</Text>
        </View>
    )
};
export default ShowMyName;

