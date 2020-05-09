import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './src/common/SwiperPage';
import Services from './components/Services';
import Test from './components/Test';
import Own from './components/Own';
import Login from './src/common/Login';
import Signup from './src/common/Signup';
import Fabu from './components/Fabu';



console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
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
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}


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
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									title="首页"
									hideNavBar
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
									
								>
									<Scene key='home' component={Services}/>
								</Scene>
									

								{/* 商品分类 */}
								<Scene key='商品分类'
									hideNavBar
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
									
								>
									<Scene key="goods" component={Test}/>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='用户中心'
									hideDrawerButton
									hideNavBar
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='file'/>
										}	
								>
								<Scene key='userpage' component={Own}/>
								<Scene key='fabu' component={Fabu}/>
								</Scene>
								
							</Tabs>
						</Scene>
				</Lightbox>

				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key='signup' component={Signup}/>
			</Modal>
			</Overlay>
		</Router>
	);
};

export default App;