import React, { Component } from 'react'
import {Icon,Tabs} from "antd-mobile";
import AppAnimat from "./AppAnimat";
import AppGame from './AppGame';
import AppCartoon from './AppCartoon';
import AppHome2 from './AppHome2'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import ShopCar from './ShopCar';
    
const tabs2 = [
    { title: '主页', sub: '0' },
    { title: '动画', sub: '1' },
    { title: '卡通', sub: '2' },
    { title: '游戏', sub: '3' },
  ];
  
  const TabExample = () => (
    <div style={{width:'100%'}} >
         
      <Tabs tabs={tabs2}
        initialPage={0}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ backgroundColor: '#fff' }}>
            <AppHome2/>
  
        </div>
        <div style={{ backgroundColor: '#fff' }}>
            <AppAnimat/>
  
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <AppCartoon/> 
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              <AppGame/>
        </div>
      </Tabs>
     
    </div>
  );

export default class AppHome extends Component {
   
    render() {
        return (
          <Router>
            <div>
            <div>
              <Route path='/shopcar' Component={ShopCar} />
            </div>
                <div className='header'> 
                <img src='/img/Logo.png' className='logo' alt='头像' />
                    <button className='button'>
                    <Icon key="0" type="search" style={{ color:'#000'}} />
                    </button>  
                    <input type='search' className='search' placeholder='单行输入' ></input>
                </div>
                <TabExample/>
            
               
               
                

            </div>
          </Router>
            
            

           
        )
    }
}
