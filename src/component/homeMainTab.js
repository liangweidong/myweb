import React, { Component } from 'react';
import { Content,Container, Icon, DeckSwiper, Card, CardItem, Left, Body, Thumbnail,Row,Grid,Image,Col,Text,View,Button } from 'native-base';


export default class HomeMainTab extends Component {

    render() {
        return (
            <Content>
                <Grid style={styles.body}>
                    <Col style={styles.colStyle}>
                        <Button style={styles.itemBtn} full>
                            <Icon name="copy" style={styles.iconStyle}/>
                            <View>
                                <Text style={styles.lgText}>复制大厅</Text>
                                <Text style={styles.smText} >跟大咖一起玩</Text>
                            </View>
                        </Button>
                    </Col>
                    <Col style={styles.colStyle}>
                        <Button style={styles.itemBtn} full>
                            <Icon name="calendar" style={styles.iconStyle}/>
                            <View>
                                <Text style={styles.lgText}>专家推荐</Text>
                                <Text style={styles.smText} >提高中奖几率</Text>
                            </View>
                        </Button>
                    </Col>
                    <Col style={styles.colStyle}>
                        <Button style={styles.itemBtn} full>
                            <Icon name="stats" style={styles.iconStyle}/>
                            <View>
                                <Text style={styles.lgText}>走势遗漏</Text>
                                <Text style={styles.smText} >精准走势参考</Text>
                            </View>
                        </Button>
                    </Col>
                </Grid>
            </Content>
        );
    }
}

const styles = {
    body:{
        backgroundColor:'#fff',
    },
    colStyle:{
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyle:{
        color:'#666',
        fontSize:34,
        marginRight:5,
    },
    smText:{
        fontSize:11,
        color:"#888",
        marginTop:5
    },
    lgText:{
        fontSize:14
    },
    itemBtn:{
        backgroundColor:'#fff',

    }
};

