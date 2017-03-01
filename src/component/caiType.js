import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Content, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text,Row,Grid ,Col,Button} from 'native-base';
import {Actions} from 'react-native-router-flux'


export default class CaiType extends Component {

    constructor(){
        super();
        this.state = {
            isShowK3Type:false
        }
    }
    render() {
        return (
            <Content>
                <Row style={styles.box}>
                    <Col><Button style={styles.buttonStyle} full onPress={()=>{Actions.football()}}><Image style={styles.itemImg} source={require('../static/image/jczq.png')}  /><Text style={styles.textStyle}>竞彩足球</Text></Button></Col>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/jclq.png')}  /><Text style={styles.textStyle}>竞彩篮球</Text></Button></Col>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/jczq.png')}  /><Text style={styles.textStyle}>比分直播</Text></Button></Col>
                </Row>
                <Row style={styles.box}>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/ssq_55.png')}/><Text style={styles.textStyle}>双色球</Text></Button></Col>
                    <Col><Button style={this.state.isShowK3Type?styles.buttonOpenStyle:styles.buttonStyle} full
                            onPress={()=>{
                                this.setState({
                                    isShowK3Type:!this.state.isShowK3Type
                                })
                            }}
                         ><Image style={styles.itemImg} source={require('../static/image/k3.png')} /><Text style={styles.textStyle}>快3</Text></Button></Col>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/syx5.png')}  /><Text style={styles.textStyle}>11选5</Text></Button></Col>
                </Row>
                {this.state.isShowK3Type?(
                <Grid style={[styles.k3Type]}>
                    <Row>
                        <Col style={styles.k3Item}><Button style={styles.k3ItemBtn} full light onPress={()=>{Actions.k3()}}><Text>江苏快3</Text></Button></Col>
                        <Col style={styles.k3Item}><Button style={styles.k3ItemBtn} full light><Text>吉林快3</Text></Button></Col>
                        <Col style={styles.k3Item}><Button style={styles.k3ItemBtn} full light><Text>新新快3</Text></Button></Col>
                    </Row>
                    <Row>
                        <Col style={styles.k3Item}><Button style={styles.k3ItemBtn} full light><Text>广西快3</Text></Button></Col>
                        <Col style={styles.k3Item}><Button style={styles.k3ItemBtn} full light><Text>快3</Text></Button></Col>
                        <Col style={styles.k3Item}><Button style={styles.k3ItemBtn} full light><Text>河北快3</Text></Button></Col>
                    </Row>
                </Grid>
                ):null}
                <Row style={styles.box}>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/dlt.png')}   /><Text style={styles.textStyle}>大乐透</Text></Button></Col>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/sd.png')}    /><Text style={styles.textStyle}>福彩3D</Text></Button></Col>
                    <Col><Button style={styles.buttonStyle} full><Image style={styles.itemImg} source={require('../static/image/qlc.png')}   /><Text style={styles.textStyle}>快乐彩</Text></Button></Col>
                </Row>
            </Content>
        );
    }
}
const styles = {
    box:{
        height:90,
    },
    buttonStyle:{
        height:90,
        margin:0.5,
        borderBottomWidth:1,
        borderColor:'#eee',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    buttonOpenStyle:{
        height:90,
        margin:0.5,
        borderBottomWidth:1,
        borderColor:'#eee',
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    itemImg:{
        width:50,
        height:50
    },
    textStyle:{
        color:'#333',
        fontSize:14
    },
    k3Type:{

    },
    k3Item:{
        justifyContent:'center',
        alignItems:"center",
        height:40,
        backgroundColor:"#fff",
        margin:2,
    },
    k3ItemBtn:{
        height:40,
        backgroundColor:'#fff'
    }
}

