import React, { Component } from 'react'

export default class LunBo extends Component {
    constructor(props){
        super(props);
        this.state = {
            /*
            *轮播图片设置
            *   url: 图片路径
            *   to:图片链接去处
            *   styleNow:class类
            */ 
            imgUrl: [
                {
                    url: '/img/logo-大.png',
                    to: '',
                    styleNow: 'checkSwiper-new'
                },{
                    url: '/img/low.jpg',
                    to: '',
                    styleNow: 'checkSwiper-last'
                },{
                    url: '/img/logo-大.png',
                    to: '',
                    styleNow: 'checkSwiper-last'
                },{
                    url: '/img/low.jpg',
                    to: '',
                    styleNow: 'checkSwiper-last'
                }
            ],
            // 切换图片的按钮，下边是1,2,3,4个按钮分别对应的类名
            checkPoint: [
                'newPoint',
                'oldPoint',
                'oldPoint',
                'oldPoint'
            ]
        };
        // 点击按钮切换轮播图片的方法
        this.clickSwiperHandle = this.clickSwiperHandle.bind(this);
    }
    // 在此处开启定时器开始自动轮播
    componentDidMount(){
        let count=1;
        let sum = this.state.imgUrl.length;
        this.timerId = setInterval(
            () => {
                this.autoSwiper(count);
                count<sum-1?count++:count=0;
            },
            6000
        );
    }
    // 在此处去除定时器
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    // 轮播方法的内部实现
    autoSwiper(count) {
        let aimImgUrl = this.state.imgUrl;
        let newImgArr = [];
        let aimCheckPoint = this.state.checkPoint;
        let newCheckPoint = [];
        for(let i=0,len=this.state.imgUrl.length;i<len;i++){
            if(i!==count){
                if(i===count+1) {
                    newImgArr.push(this.checkSwiper(aimImgUrl[i],'checkSwiper-next'));
                }else {
                    newImgArr.push(this.checkSwiper(aimImgUrl[i],'checkSwiper-last'));
                }
            }else {
                newImgArr.push(this.checkSwiper(aimImgUrl[count],'checkSwiper-new'));
            }
        }
        for(let j=0,len=aimCheckPoint.length;j<len;j++){
            if(j!==count){
                newCheckPoint.push('oldPoint');
            }else {
                newCheckPoint.push('newPoint');
            }
        }
        this.setState({
            imgUrl: newImgArr,
            checkPoint: newCheckPoint
        });
    }
    // 切换每张图片state状态的方法
    checkSwiper(aim,classNm){
        let res = Object.assign({},aim,{styleNow: classNm});
        return res;
    }
    // 按钮点击方法内部实现
    clickSwiperHandle(count){
        clearInterval(this.timerId);
        this.autoSwiper(count);
        let sum = this.state.imgUrl.length;
        let num=count+1<=sum-1?count+1:0;
        this.timerId = setInterval(
            () => {
                this.autoSwiper(num);
                num<sum-1?num++:num=0;
            },
            6000
        );
    }
    // 渲染
    render(){
        let lists = this.state.imgUrl;
        let listItems = lists.map((item,index) =>
            <li key={index} className={item.styleNow}>
                <a href={item.to}>
                    <img src={item.url} alt=''/>
                </a>
            </li>
        );
        let pointsClass = this.state.checkPoint;
        let checkPoints = pointsClass.map( (item,index) =>
            <span key={index} className={item} onClick={(e) => this.clickSwiperHandle(index,e)}></span>
        );
        return (
            <div id="banner">
                <ul id="swiper">{listItems}</ul>
                <div className="checkBtn">
                    {checkPoints}
                </div>
            </div>
        );
    }
}