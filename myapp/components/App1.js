
import React,{useState, useEffect, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
  PixelRatio,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import ImageBg from './ImageBg';

const styles = StyleSheet.create({
  box:{
    width:"40%",
    height:100,
    margin: 10,
    backgroundColor:'blue'
  },
  txt:{
    color:"red",
  },
  size:{
    fontSize:30
  }

});
const App = () => {

  let isExit =false;
  let now =0;
  BackHandler.addEventListener('back',()=>{
    if(new Date().getTime());
    if(new Date().getTime()-now <2000){
      BackHandler.exitApp()
    }else{
      ToastAndroid.show('确定要退出吗',100);
      now =new Date().getTime();
      return true;
    }
  })
  // var tag = false;
  // BackHandler.addEventListener('back',()=>{
  //   if(tag) {
  //     BackHandler.exitApp();
  //     return false;
  //   }
  //   ToastAndroid.show('确定要退出吗',ToastAndroid.SHORT);
  //     tag=true;
    
  //   setTimeout(() => {
  //     tag=false;
  //   }, 2000);
  //   return true;
  // })
  //方法2
  // var j=0;
  // setTimeout(() => {
  //   j=0;
  // }, 2000);
  // BackHandler.addEventListener('back',()=>{
  //   j=j+1;
  //   if(j==1){
  //     ToastAndroid.show('确定退出吗',2000)
  //     return true;
  //   }
  //   else if(j==2){
  //     BackHandler.exitApp()
  //   }
  // })
  
  let [val, setVal] = useState('1');
  let [isFresh,setFresh]=useState(false);
  let data = [];
  // useEffect(()=>{
    for(var i=0;i<100;i++){
      data.push({key:i+'',title:i+'abc'})
    }

  // },[])
  
  let [da,setDa] = useState(data);
  let addData =()=>{
    for (var i=100;i<200;i++){
      data.push({key:i+'',title:i+'abc'})
    }
    setDa(data);
  }
  let upDateData=()=>{
    setFresh(true);
    setTimeout(()=>{
      setFresh(false);
    },2000)
  }
  
  // px:图片中最小的一格
  // dpi：（dot per inch）：每英寸有多少小格（1px）
  // dp：在安卓开发中用的单位，1dp等于像素密度为160dpi
  // dpi：   120    160    240    320    480
  // 密度比  0.75     1     1.5     2      3
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          {/* <View style={{
            width:34,
            height:34,
            borderRadius:17,
            overflow:'hidden'
          }}>
            <Button
              onPress={()=>{}}
              title="+"
            />
          </View>
          
          <TouchableOpacity
            style={{
              width:40,
              height:40,
              backgroundColor:'blue',
              alignItems:"center",
              justifyContent:'center',
              borderRadius:20,
            }}
          >
            <Text style={{color:'#fff',fontSize:20}}>
              +
            </Text>
          </TouchableOpacity> */}

          {/* 钉钉头部搜索框 */}
          
          {/* <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{flexDirection:'row',paddingLeft:20,width:300,height:40,backgroundColor:'#ddd',alignItems:'center',borderRadius:20}}>
              <Image style={{width:20,height:20}} source={require('./search.png')}/>
              <TextInput placeholder='搜索' style={{width:200,height:30,borderRadius:20}}/>           
            </View>
            
            <TouchableOpacity style={{borderRadius:20,width:40,height:40,borderColor:'gray',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'black',fontSize:20}}>+</Text>
            </TouchableOpacity>
          </View> */}

        {/* flex 布局 */}
        {/* 在 rn 中，组件 默认设置了 flex 属性，默认主轴是 竖轴 */}
        {/* justifyContent:定义主轴对齐方式 */}
        {/* alignItems:定义交叉轴对齐方式 */}
        {/* <View style={{
          flexDirection:'row',
          justifyContent:"space-evenly",
          flexWrap:'wrap'
        }}>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
        </View> */}


        {/* 受控组件 */}
        {/* <Text>{val}</Text>
        <TextInput 
          placeholder="请输入内容"
          onChangeText={(val)=>{setVal(val)}}
          style={{
            borderColor: 'red',
            height: 50,
            paddingLeft:30,
            borderWidth: 1,
            borderRadius: 24
          }}
        /> */}

        {/* 自定义组件 ImageBg */}
        {/* <ImageBg  
          source={require('./assets/rn.png')}
          style={{width:300,height:300}} 
        >
          <View style={styles.box}></View>
          <Text style={[styles.txt,styles.size]}>hello</Text>
        </ImageBg>

        <ImageBackground 
          style={{width:300,height:300}} 
          source={require('./assets/rn.png')
        }>
          <View style={styles.box}></View>
          <Text style={[styles.txt,styles.size]}>hello</Text>
        </ImageBackground> */}
        
        </ScrollView>
      {/* FlatList*/}
      {/* <FlatList 
      data={data}
      onRefresh={upDateData}
      onEndReached={addData}
      refreshing={isFresh}
      renderItem={({item,index})=>(
      <View><Text>{item.title}</Text></View>
      )}
      />
      <View style={{flexDirection:'row'}}></View> */}

      
      </SafeAreaView>
    </>
  );

};

export default App;
