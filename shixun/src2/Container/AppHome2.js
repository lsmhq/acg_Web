import React, { Component } from 'react'
import { WingBlank, Carousel} from 'antd-mobile';
import Gird from './Gird'

export default class AppHome2 extends Component {
     state = {
        data: [],
        imgHeight: 176,

      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => { 
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                 <WingBlank style={{margin:'0'}}>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>

                <Gird/>
            </div>
        )
    }
}
