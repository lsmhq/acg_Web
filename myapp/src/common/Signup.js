import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Signup extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    signup = ()=>{
      if(this.state.username !='' && this.state.pwd !=''){
        myFetch.post('/signup',{
          username:this.state.username,
          pwd:this.state.pwd}
      ).then(res=>{
         if(res.data.status=='1'){
           ToastAndroid.show('账户已存在',100);
         }
         else if(res.data.status=='2') {
          ToastAndroid.show('连接错误',100);
         }
         else{
           AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              Actions.login();
            })
         }
         console.log(res.data)
              
      })
      }
      else{ToastAndroid.show('请输入账号或密码',100)}
      
  }
  login=()=>{
    Actions.login();
  } 
    render() {
        return (
            <View style={{flex:1,justifyContent: 'center'}}>
            <View
              style={{ alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder="用户名" 
                    onChangeText={this.userhandle}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="密码" 
                    secureTextEntry={true}
                />
              </View>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.signup}>
                    <Text>注册完成</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.login}>
                    <Text>返回登录</Text>
                </TouchableOpacity>
            </View>
          </View> 
        )
    }
}