import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text,Row,Grid ,Col} from 'native-base';

const cards = [
    {
        text: 'Card One', name: 'One', image: require('../static/image/img.jpg'),
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
            <Container style={styles.box} >
            </Container>
        );
    }
}
const styles = {
    box:{
        height:5,
    },
    colStyle:{
        margin:0.5,
        backgroundColor:"#fff"
    }
}