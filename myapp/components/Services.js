// 服务界面
import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, ScrollView, Dimensions, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from '@ant-design/react-native';
const styles = StyleSheet.create({
    box1:{
        backgroundColor:'rgb(242,48,48)',
        height:60,
        width:Dimensions.get("window").width
    },
    img: {
        width: Dimensions.get("window").width,
        height: 200,
    },
    box2:{
        width:Dimensions.get("window").width,
        height:100,
        backgroundColor:'white',
        marginTop:10,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:20
    },
    img1:{
        width:40,
        height:40,
        
    },
    btn:{
        marginTop:20,
        backgroundColor:'rgb(252,48,48)',
        width:350,
        justifyContent:'center',
        borderRadius:5,
        alignItems:'center',
        
        
    }
});
export default class Services extends Component {
    render() {
        return (
            <View style={{backgroundColor:'rgb(245,245,245)'}}>
                <ScrollView>
                    {/* 导航栏 */}
                    <View style={{flexDirection:'row',paddingLeft:20,height:80,backgroundColor:'rgb(242,48,48)',alignItems:'center'}}>
                        <View style={{backgroundColor:'rgb(251,184,184)',width:380,height:40,borderRadius:20,flexDirection:'row-reverse',alignItems:'center'}}>
                            <TextInput placeholder='请输入您要搜索的关键字' style={{width:300,height:40}} placeholderTextColor='white'/>
                            <View><Image style={{width:20,height:20}} source={require('./img/search.png')}/></View>
                        </View>
                        <Image source={require('./img/shopcar.png')} style={{width:25,height:25,justifyContent:'center',alignItems:'center',marginLeft:10}}/>  
                    </View>
                    
                    {/* 轮播图 */}
                    <View>
                    <Swiper
                        height={200}
                        horizontal={true}
                        paginationStyle={{bottom: 10}}
                        showsButtons={false}>
                        <Image source={require('./img/bg1.png')} style={styles.img}/>
                        <Image source={require('./img/bg2.png')} style={styles.img}/>
                        <Image source={require('./img/bg1.png')} style={styles.img}/>
                    </Swiper>
                    </View>

                    {/* 列表 */}
                    <View>
                        <View style={styles.box2}>
                            <View style={{width:80,height:80,borderRadius:40,backgroundColor:'rgb(255,204,204)',justifyContent:'center',alignItems:'center'}}><Image source={require('./img/lbg1.png')} style={styles.img1}/></View>
                            <View style={{width:350}}><Text style={{fontSize:20,marginLeft:50}}>居家维修保养</Text></View>
                            <Image style={{justifyContent:'flex-end'}} source={require('./img/left.png')}/>
                        </View>
                        <View style={styles.box2}>
                            <View style={{width:80,height:80,borderRadius:40,backgroundColor:'rgb(255,255,177)',justifyContent:'center',alignItems:'center'}}><Image source={require('./img/lbg2.png')} style={styles.img1}/></View>
                            <View style={{width:350}}><Text style={{fontSize:20,marginLeft:50}}>住宿优惠</Text></View>
                            <Image style={{justifyContent:'flex-end'}} source={require('./img/left.png')}/>
                        </View>
                        <View style={styles.box2}>
                            <View style={{width:80,height:80,borderRadius:40,backgroundColor:'rgb(191,230,168)',justifyContent:'center',alignItems:'center'}}><Image source={require('./img/lbg3.png')} style={styles.img1}/></View>
                            <View style={{width:350}}><Text style={{fontSize:20,marginLeft:50}}>出行接送</Text></View>
                            <Image style={{justifyContent:'flex-end'}} source={require('./img/left.png')}/>
                        </View>
                        <View style={styles.box2}>
                            <View style={{width:80,height:80,borderRadius:40,backgroundColor:'rgb(195,221,242)',justifyContent:'center',alignItems:'center'}}><Image source={require('./img/lbg4.png')} style={styles.img1}/></View>
                            <View style={{width:350}}><Text style={{fontSize:20,marginLeft:50}}>E族活动</Text></View>
                            <Image style={{justifyContent:'flex-end'}} source={require('./img/left.png')}/>
                        </View>  
                    </View>

                    {/* button */}
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Button style={styles.btn}><Text style={{color:'white'}}>发布需求</Text></Button>
                    </View>

                    <View style={{marginTop:40,justifyContent:'center',alignItems:'center',marginBottom:20}}>
                        <Text style={{color:'rgb(118,118,118)'}}>©E族之家 版权所有</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
