import React, { Component } from 'react'
import { Router, Scene, Tabs, Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'
import Main from './Pages/Main';
import Person from './Pages/Person';
import Shop from './Pages/Shop'
export default class Tabbars extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		return (
			<Router>
				<Scene key="root">
					<Tabs
						key='tabbar'
						hideNavBar
						activeTintColor="red"
						inactiveTintColor="gray"
						tabBarStyle={{ backgroundColor: 'white' }}
					>
						{/*首页 */}
						<Scene key='home'
							title='首页'
							icon={
								({ focused }) => <Icon
									color={focused ? 'red' : 'gray'}
									name="home"
								/>
							}
						>
							<Scene key='home' component={Main} hideNavBar />
							<Scene
								hideTabBar
								hideDrawerButton
								key='mylist'
								component={Main}
							/>
						</Scene>
						{/*动态 */}
						<Scene key='msg'
							title='动态'
							icon={
								({ focused }) => <Icon
									color={focused ? 'red' : 'gray'}
									name="shop"
								/>
							}

						>
							<Scene key="ms" component={} hideNavBar />
							<Scene
								key="msgdetail"
								hideTabBar
								component={Body}
							/>
						</Scene>
						{/* 商城 */}
						<Scene key='shop'
							title='商城'
							icon={
								({ focused }) => <Icon
									color={focused ? 'red' : 'gray'}
									name="shop"
								/>
							}

						>
							<Scene key="shop" component={Shop} hideNavBar />
							<Scene
								key="shop"
								hideTabBar
								component={Shop}
							/>
						</Scene>
						<Scene key='person'
							title='个人中心'
							icon={
								({ focused }) => <Icon
									color={focused ? 'red' : 'gray'}
									name="shop"
								/>
							}
						>
							<Scene key="person" component={Person} />
							<Scene
								key="person"
								hideTabBar
								component={Person}
							/>
						</Scene>
					</Tabs>
					<Scene
						key='login'
						component={Login}
						title='登录'
						init={true}
					/>
					<Scene
						key='loginin'
						component={Loginin}
						title='注册'
					/>
				</Scene>
			</Router>
		)
	}
}
