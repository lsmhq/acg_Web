import React,{useState,useEffect} from 'react';
import {View,Text,Image,SafeAreaView,TextInput,StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  txt1:{  
    color:'red',
    fontSize:15
  },
  txt2:{
    fontSize:15
  },
  box:{
    width:220,
    height:280,
    backgroundColor:'white',
    justifyContent:'space-around',
    paddingTop:20,
    flexWrap:'wrap'
  }
});
const App = () => {

  return (
    <View style={{backgroundColor:'rgb(244,244,244)'}}>
    <SafeAreaView>
    <ScrollView>
    {/* search+tab*/}
    <View style={{backgroundColor:'white'}}>
      
          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
              <View style={{flexDirection:'row-reverse',paddingLeft:20,height:40,backgroundColor:'rgb(238,238,238)',alignItems:'center',borderRadius:5}}>
                <View><Image style={{width:20,height:20}} source={require('./search.png')}/></View>
                <TextInput placeholder='请输入商品名称' style={{width:380,height:30,borderRadius:20}} placeholderTextColor='rgb(166,166,166)'/>  
              </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20,marginBottom:20}}>
            <View><Text style={styles.txt1}>综合</Text></View>
            <View><Text style={styles.txt2}>销量</Text></View>
            <View><Text style={styles.txt2}>新品</Text></View>
            <View><Text style={styles.txt2}>价格</Text></View>
            <View><Text style={styles.txt2}>信用</Text></View>
          </View>
      
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
      <View style={styles.box}>
      <View style={{flexDirection:'row',justifyContent:'center'}}><Image style={{width:120,height:160}} source={require('./corn.jpg')}/></View>
        <View style={{marginTop:20,marginLeft:15}}><Text style={{color:'rgb(166,166,166)'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
        <View style={{marginLeft:15}}><Text style={{color:'red'}}>36.00</Text></View>
      </View>
      <View style={styles.box}>
      <View style={{flexDirection:'row',justifyContent:'center'}}><Image style={{width:160,height:160}} source={require('./kacha.jpg')}/></View>
          <View style={{marginTop:20,marginLeft:15}}><Text style={{color:'rgb(166,166,166)'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
          <View style={{marginLeft:15}}><Text style={{color:'red'}}>36.00</Text></View>
        </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
      <View style={styles.box}>
        <View style={{flexDirection:'row',justifyContent:'center'}}><Image style={{width:120,height:160}} source={require('./corn.jpg')}/></View>
        <View style={{marginTop:20,marginLeft:15}}><Text style={{color:'rgb(166,166,166)'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
        <View style={{marginLeft:15}}><Text style={{color:'red'}}>36.00</Text></View>
      </View>
      <View style={styles.box}>
      <View style={{flexDirection:'row',justifyContent:'center'}}><Image style={{width:160,height:160}} source={require('./kacha.jpg')}/></View>
          <View style={{marginTop:20,marginLeft:15}}><Text style={{color:'rgb(166,166,166)'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
          <View style={{marginLeft:15}}><Text style={{color:'red'}}>36.00</Text></View>
        </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
      <View style={styles.box}>
      <View style={{flexDirection:'row',justifyContent:'center'}}><Image style={{width:120,height:160}} source={require('./corn.jpg')}/></View>
        <View style={{marginTop:20,marginLeft:15}}><Text style={{color:'rgb(166,166,166)'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
        <View style={{marginLeft:15}}><Text style={{color:'red'}}>36.00</Text></View>
      </View>
      <View style={styles.box}>
      <View style={{flexDirection:'row',justifyContent:'center'}}><Image style={{width:160,height:160}} source={require('./kacha.jpg')}/></View>
          <View style={{marginTop:20,marginLeft:15}}><Text style={{color:'rgb(166,166,166)'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text></View>
          <View style={{marginLeft:15}}><Text style={{color:'red'}}>36.00</Text></View>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
};
export default App;