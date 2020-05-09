import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from '../src/home/Home';
import Goods from '../src/goods/Goods';
import Login from '../src/common/Login'
import User from '../src/userinfor/Userinfor';
import Userinfor from '../src/userinfor/Userinfor';


console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let now = 0;
	useEffect(()=>{
		AsyncStorage.clear()
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	},[])

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Scene key="root">
				<Tabs 
					key='tabbar'
					hideNavBar
					activeTintColor="red"
					inactiveTintColor="blue"
					tabBarStyle={{backgroundColor:'#ccc'}}
				>
					{/* 首页 */}
					<Scene key='home'
						title='首页'
						icon={
							({focused})=><Icon 
								color={focused?'red':'blue'} 
								name="home"
							/>
						}
					>
						<Scene key='home' hideNavBar={true} component={Services}/>
						
					</Scene>
					{/* 分类 */}
					<Scene key='msg'
						hideNavBar
						hideDrawerButton
						title='分类'
						icon={
							({focused})=><Icon 
								color={focused?'red':'blue'} 
								name="file"
							/>
						}
						
					>
						<Scene key="msg" component={Test}/>
					</Scene>
					{/* 个人中心 */}
					<Scene 
						key='doc'
						hideDrawerButton
						hideNavBar
						icon={({focused})=>
							<Icon 
								color={focused?'red':'blue'} 
								name='home'/>
							}
						title="个人中心"
					>
						<Scene key='person' component={Own}/>
						<Scene key='fabu' component={Fabu} hideTabBar />
					</Scene>						
				</Tabs>
			</Scene>
		</Router>
	);
};

export default App;