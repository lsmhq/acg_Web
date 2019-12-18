import React, { Component } from 'react'
import Body from '../Body';
import { WingBlank, Carousel} from 'antd-mobile';
export default class Main extends Component {
    render() {
        return (
            <div>
                 <WingBlank style={{margin:'0' ,marginTop:'120px',zIndex:'0'
                }}>
                 <Carousel style={{
                        background: '#fff',
                        overflow: 'hidden',
                    }}
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={1}
                        autoplay
                        infinite
                        >
                        {[1,2,3,4].map((val, index) => (
                            <a
                            key={val}
                            style={{
                                display: 'block',
                                position: 'relative',
                                
                            }}
                            >
                            <img
                                src={`/img/lun${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top',height:'180px' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>

                </WingBlank>

                
                <Body url='https://daitianfang.1459.top/api/v1/chapter?type=all'/>
                 
            </div>
        )
    }
}