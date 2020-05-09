import React, { Component } from 'react';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, SafeAreaView,StyleSheet,ToastAndroid,ScrollView} from 'react-native';
export default class Fabu extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            pages:1,
            answer:'已回复',
            uanswer:'待回复',
            
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=12&page='+this.state.pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch('https://cnodejs.org/api/v1/topics?limit=12&page='+this.state.pages)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    back = ()=>{
        var page = this.state.pages;
        page ++;
        this.setState({
            pages:page
        })
    }
    front = ()=>{
        var page = this.state.pages;
        if(page>1){
            page --;
            this.setState({
                pages:page
            })
        }else{
            ToastAndroid.show('当前为第一页', ToastAndroid.TOP);
        }

    }
    
    render(){
        return(
                <ScrollView>
                    {/* 顶栏 */}
                    <View style={styles.top}>
                        <Icon 
                            name='chevron-left'
                            color='white'
                            size={15}
                            style={{justifyContent:'center',alignItems:'center',marginLeft:20}}
                            onPress={()=>Actions.pop()}
                        />
                        <Text style={styles.top1}>我的发布</Text>
                        <Text style={styles.top2}>···</Text>
                    </View>
                    {/* 主体 */}
                    {
                        this.state.data.map((item)=>(
                            <View style={styles.body}>
                                <Text style={styles.titile}>{item.title.length<15?item.title:item.title.substr(0,15)+'···'}</Text>
                                <Text style={styles.create}>{item.create_at.substr(0,10)}</Text>
                                {Math.random()<0.5?<Text style={styles.answer}>已回复</Text>:<Text style={styles.uanswer}>待回复</Text>}
                            </View>
                        ))
                    }
                    {/* 翻页 */}
                    <View style={{flexDirection:'row'}}>
                        <Button style={styles.btn} onPress={()=>this.front()}>上一页</Button>
                        <Text style={styles.page}>第{this.state.pages}页</Text>
                        <Button style={styles.btn1} onPress={()=>this.back()}>下一页</Button>
                    </View>
                    
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flexDirection:'row',
        backgroundColor:'rgb(245,245,245)',
        paddingBottom:20
    },
    top:{
        backgroundColor:'rgb(242,48,48)',
        height:60,
        flexDirection:'row',
        alignItems:'center'
    },
    top1:{
        color:'white',
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100
    },
    top2:{
        color:'white',
        marginLeft:100,
        fontSize:30,
        alignItems:"center",
        justifyContent:'center'
    },
    
    titile:{
        fontSize:15,
        marginTop:10,
        width:200,
        marginLeft:20
    },
    create:{
        fontSize:15,
        marginTop:10,
    },
    answer:{
        fontSize:15,
        marginTop:10,
        marginLeft:20
    },
    uanswer:{
        fontSize:15,
        color:'rgb(242,48,48)',
        marginTop:10,
        marginLeft:20
    },
    btn:{
        backgroundColor:'rgb(242,48,48)',
        color:'white',
        borderRadius:10,
        width:100,
        marginLeft:10,
        marginTop:20,
        
    },

    btn1:{
        backgroundColor:'rgb(242,48,48)',
        color:'white',
        borderRadius:10,
        width:100,
        marginLeft:50,
        marginTop:20
    },
    page:{
        marginTop:20,
        marginLeft:50,
        fontSize:15
    }
})