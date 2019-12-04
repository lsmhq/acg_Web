import React, { Component } from 'react'
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import { TabBar,} from "antd-mobile";
import AppHome from "./AppHome";
import AppGood from './AppGood';
import Person from './Person'



export default class AppTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab",
      pathname:'this.props.match.url'
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="white"
          tintColor="black"
          barTintColor="rgb(255 64 129)"
    
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/首页.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/首页_选中.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            title="动态"
            key="dynamic"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/动态.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/动态_选中.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "whiteTab"}
            onPress={() => {
              this.setState({
                selectedTab: "whiteTab"
              });
            }}
          >
            动态
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/商城.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/商城_选中.png )center center /  21px 21px no-repeat"
                }}
              />
            }
            title="商城"
            key="shop"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <AppGood/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/个人中心.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/img/个人中心_选中.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="个人中心"
            key="MY"
            // dot   //红点
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {

              this.setState({
                selectedTab: "greenTab",
                
              });
            }}
          >
          <Person/>
          </TabBar.Item>
          {/* <TabBar.Item
            icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(/img/精品.png) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(/img/精品.png) center center /  21px 21px no-repeat"
                  }}
                />
              }
              title="精品"
              key="Good"
              // dot   //红点
              selected={this.state.selectedTab === "YellowTab"}
              onPress={() => {
                this.setState({
                  selectedTab: "YellowTab"
                });
              }}
            >
              <AppGood/>
          </TabBar.Item> */}
        </TabBar>
        <Router>
            <Route path={'/person'} component={Person} />
        </Router>
        
      </div>
    );
  }
}