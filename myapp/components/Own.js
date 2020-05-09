// 个人中心界面
import ImagePicker from 'react-native-image-picker'
import React, { Component } from 'react'
import { TouchableOpacity,Animated,View,Text, ScrollView, Dimensions,StyleSheet, Image, ImageBackground,Button, AsyncStorage } from 'react-native'
import Fabu from './Fabu';
import { Scene, Actions } from 'react-native-router-flux';
import ImageCropPicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
    box1:{
        width:Dimensions.get('window').width,
        height:600,
        backgroundColor:'rgb(242,48,48)',
        flexDirection:'column'
    },
    box2:{
        width:Dimensions.get('window').width,
        height:400,
        marginTop:-10
    }
});

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

// var photoOptions = {
//     //底部弹出框选项
//     title: '请选择',
//     cancelButtonTitle: '取消',
//     takePhotoButtonTitle: '拍照',
//     chooseFromLibraryButtonTitle: '选择相册',
//     quality: 0.75,
//     allowsEditing: true,
//     noData: false,
//     storageOptions: {
//       skipBackup: true,
//       path: 'images'
//     }
//   }
  
export default class Own extends Component {
    constructor(props) {
    super();
    let data = [];
    for(var i=0; i<10; i++){
        data.push({tit:i,key:i});
    }
    this.state = {
        data,
        width: new Animated.Value(20),
        imageUrl:require('./img/photo.png')
    }
}
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
            }
          });
    }
    render() {
        return (
            <View style={{backgroundColor:'rgb(245,245,245)'}}>
                <ScrollView>
                    {/* 头像 + 个人中心 */}
                    <View style={styles.box1}>
                        <View style={{height:250,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        {/* <Image source={{ uri: this.state.imgURL }} style={{ width: 100, height: 100 , borderRadius:50}}></Image>
                        <Button onPress={this.cameraAction} title='拍照'></Button> */}
                        <View style={{backgroundColor:'rgb(242,48,48)'}}>
                        <View>
                            <TouchableOpacity onPress={()=>{this.takephoto()}}>
                                <Image 
                                    style={{width:100,height:100,borderRadius:50}} 
                                    source={this.state.imageUrl}
                                />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                        {/* <Button title='存储' onPress={this.storeData}></Button>
                        <Button title='获取' onPress={this.getData}></Button> */}
                            <Text style={{fontSize:20,color:'white',marginTop:20}}>BINNU DHILLON</Text>
                        </View>
                        <View style={{height:30}}><Image source={require('./img/pbg2.png')}/></View>
                        <View style={{height:20,marginTop:-15}}><Image source={require('./img/pbg1.png')}/></View>
                        <ImageBackground source={require('./img/pbg3.png')} style={styles.box2}>
                            <View 
                            style={{
                                paddingTop:40,
                                flexDirection:'row',
                                paddingLeft:20,
                                justifyContent:'flex-start',
                                alignItems:'center'}}>
                                <Image source={require('./img/my.png')} style={{width:25,height:30}}/>
                                <Text style={{marginLeft:20,fontSize:18}}>我的个人中心</Text>
                            </View>

                            <View 
                            style={{
                                borderTopWidth:0.5,
                                paddingTop:20,
                                borderColor:'rgb(166,166,166)',
                                marginTop:20,
                                flexDirection:'row',
                                justifyContent:'space-around',
                                
                            }}>
                                <View style={{flexDirection:'column',alignItems:'center'}}>
                                    <Image source={require('./img/accont.png')} style={{width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>账户管理</Text>
                                    <Image source={require('./img/order.png')} style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的订单</Text>
                                    <Image source={require('./img/collect.png')}  style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的收藏</Text>
                                </View>
                                <View style={{flexDirection:'column',alignItems:'center'}}>
                                    <Image source={require('./img/address.png')} style={{width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>收货地址</Text>
                                    <Image source={require('./img/erweima.png')} style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的二维码</Text>
                                    
                                </View>
                                <View style={{flexDirection:'column',alignItems:'center'}}>
                                    <Image source={require('./img/msg.png')} style={{width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的信息</Text>
                                    <Image source={require('./img/number.png')} style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的积分</Text>
                                </View>
                                
                            </View>
                        </ImageBackground>     
                    </View>
                   {/* E族活动 */}
                   <View 
                   style={{
                       backgroundColor:'white',
                       borderTopWidth:8,
                       borderColor:'rgb(245,245,245)',
                       paddingTop:20,
                       paddingBottom:20,
                       }}>
                        <View 
                            style={{
                                flexDirection:'row',
                                paddingLeft:20,
                                justifyContent:'flex-start',
                                alignItems:'center',
                                borderBottomWidth:1,
                                borderColor:'rgb(245,245,245)',
                                paddingBottom:20
                                }}>
                                <Image source={require('./img/ezu.png')} style={{width:28,height:28}}/>
                                <Text style={{marginLeft:20,fontSize:18}}>E族活动</Text>
                        </View>
                        <View 
                            style={{
                                marginTop:10,
                                flexDirection:'row',
                                justifyContent:'space-around',
                                
                            }}>
                                <View style={{flexDirection:'column',alignItems:'center'}}>
                                    <Image source={require('./img/weixiu.png')} style={{width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>居家维修保养</Text>
                                    <Image source={require('./img/zhusu.png')} style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的住宿优惠</Text>
                                </View>
                                <View style={{flexDirection:'column',alignItems:'center'}}>
                                    <Image source={require('./img/car.png')} style={{width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>出行接送</Text>
                                    <Image source={require('./img/activity.png')} style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的活动</Text>
                                </View>
                                <View style={{flexDirection:'column',alignItems:'center'}}>
                                    <Image source={require('./img/person.png')} style={{width:20,height:20}}/>
                                    <Text style={{marginTop:10}}>我的受赠人</Text>
                                    <Image source={require('./img/fabu.png')} style={{marginTop:20,width:20,height:20}}/>
                                    <Text style={{marginTop:10}} onPress={()=>Actions.fabu()}>我的发布</Text>
                                </View>
                            </View>
                    </View> 
                    <View style={{backgroundColor:'rgb(238,238,238)',height:100,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'gray'}}>BINNU DHILLON | 退出</Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}
