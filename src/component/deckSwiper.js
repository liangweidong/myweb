import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {Content, Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text,Row,Grid } from 'native-base';

const cards = [
    {
        text: 'Card One', name: 'One', image: {uri:'http://m.chart.ydniu.com/img/zst/ado_img.jpg'},
    },
    {
        text: 'Card One', name: 'One', image: require('../static/image/img_2.jpg'),
    },
    {
        text: 'Card One', name: 'One', image: require('../static/image/img.jpg'),
    },
];

export default class DeckSwiperExample extends Component {

    render() {
        return (
            <Content>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 130 }} source={item.image} />
                    }
                />
            </Content>
        );
    }
}