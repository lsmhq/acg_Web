import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage,ToastAndroid, TouchableOpacity, Alert} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions,Router, } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }                       
                    
    login = ()=>{
      if(this.state.username !='' && this.state.pwd !=''){
        this.setState({isloading:true})
        myFetch.post('/login',{
          username:this.state.username,
          pwd:this.state.pwd}
      ).then(res=>{
         if(res.data.status=='1'){
           ToastAndroid.show('账户不存在',100);
         }
         else if(res.data.status=='2') {
          ToastAndroid.show('连接错误',100);
         }
         else{
           AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              this.setState({isloading:false})
              Actions.homePage();
            })
         }
         console.log(res.data)
              
      })
      }
      else{ToastAndroid.show('请输入账号或密码',100)}
      
  } 
    signup=()=>{
      Actions.signup();
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
                onPress={this.login}>
                <Text>登录</Text>
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
                onPress={this.signup}>
                <Text>前往注册</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View
              style={{
                width:'50%',
                marginLeft:"25%",
                marginRight:'25%',
                marginTop:20,
              }}
            ><Text 
              style={{fontSize:20,color:'black',alignItems:'center',justifyContent:'center'}}
            >正在登录请稍后</Text></View>
            :null
        }
      </View>
      
    );
  }
}