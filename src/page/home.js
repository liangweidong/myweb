import React,{Component} from 'react';
import { Image, View } from 'react-native';
import { Container, Content,DeckSwiper, Button, Text,Grid,Col,CardItem,Card,Row,  } from 'native-base';

import Carousel from 'antd-mobile/lib/carousel'
import WhiteSpace from 'antd-mobile/lib/white-space'

import HomeMainTab from '../component/homeMainTab'
import CaiType from '../component/caiType'
import OtherType from '../component/otherType'

import Line from '../component/line'

const cards = [
    require('../static/image/img.jpg'),
    require('../static/image/img_2.jpg'),
    require('../static/image/img.jpg'),
    require('../static/image/img_2.jpg'),
];
const cards3 = [
    'https://facebook.github.io/react/img/logo_og.png',
    'https://facebook.github.io/react/img/logo_og.png',
    'https://facebook.github.io/react/img/logo_og.png',
    'https://facebook.github.io/react/img/logo_og.png',
];
const cards2 = [
    {uri:'http://m.chart.ydniu.com/img/zst/ado_img.jpg'},
    {uri:'http://m.chart.ydniu.com/img/zst/ado_img.jpg'},
    {uri:'http://m.chart.ydniu.com/img/zst/ado_img.jpg'},
];
export default class Home extends Component {

    render(){
        return (
            <Container style={{borderTopWidth:20,borderColor:'#F57706',backgroundColor:'#eee'}}>
                <Content>
                    <View>
                        <Carousel autoplay={true} infinite>
                            {
                                cards3.map((imgitem,index)=>(<Image key={index} source={{uri:imgitem}} style={{height:120,width:400}} />))
                            }
                        </Carousel>
                        <WhiteSpace /> 
                    </View>
                    <HomeMainTab/>
                    <Line/>
                    <CaiType/>
                    <Line/>
                    <OtherType/>
                </Content>
            </Container>
        )
    }
}