import React, { Component } from 'react';
import { Container, Icon, Left, Body,Grid,Col,Text,View,Button,Row } from 'native-base';


export default class HomeMainTab extends Component {

    render() {
        return (
            <Container style={styles.body}>
                <Grid>
                    <Col>
                        <Button full light style={styles.buttonStyle}>
                            <Icon name="football" style={styles.iconStyle}/>
                            <Text style={styles.itemText}>北京单场</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button full light style={styles.buttonStyle}>
                            <Text style={styles.itemText}>胜负彩</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button full light style={styles.buttonStyle}>
                            <Icon name="football" style={styles.iconStyle}/>
                            <Text style={styles.itemText}>任选9场</Text>
                        </Button>
                    </Col>
                </Grid>
                <Grid>
                    <Col>
                        <Button full light style={styles.buttonStyle}>
                            <Text style={styles.itemText}>排列3</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button full light style={styles.buttonStyle}>
                            <Text style={styles.itemText}>活动公告</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button full light style={styles.buttonStyle}>
                            <Text style={styles.itemText}>秘籍</Text>
                        </Button>
                    </Col>
                </Grid>
            </Container>

        );
    }
}

const styles = {
    body:{
        backgroundColor:'#eee',
        height:100
    },
    buttonStyle:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        height:50
    },
    iconStyle:{
        fontSize:22
    },
    itemText:{
        fontSize:14
    },

};

