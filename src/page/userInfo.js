import React,{Component} from 'react'
import {Image} from 'react-native'
import {Container,Content,View,Text,Icon,Row,Thumbnail,Col} from 'native-base'
import Grid from "antd-mobile/lib/grid"
import { Button } from 'react-native-elements'
import Header from '../component/header'
import Line from '../component/line'
export default class UserInfo extends Component{

    constructor(){
        super()
        this.state = {
            gridList:[
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
                {icon:"print",type:'foundation',text:"账户明细"},
            ]
        }
    }
    render(){
        return (
            <Container style={{backgroundColor:'#f2f2f2'}}>
                <Header hideLeft title="用户中心" />
                <Content >
                    <View>
                        <Row style={{backgroundColor:'#f57706',padding:20,alignItems:'center'}}>
                            <Thumbnail
                                style={{width: 80, height: 80, borderRadius: 40,marginRight:20}}
                                source={{uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBuWxcochnmMWN955S4Mh8cjMLwRZkEdIvX01rm940nW5G-kwO'}} />
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{
                                    color:'#fff',
                                    fontSize:20,
                                    paddingBottom:10,
                                }}>
                                        风平浪静等开奖
                                    </Text>
                                    <Icon name="md-open" style={{color:'#fff',fontSize:25,marginLeft:5,marginTop:-3}} />
                                </View>

                                <Text
                                    style={{
                                        color:"#fff"
                                    }}
                                >
                                    余额:
                                    <Text style={{color:"yellow"}}>0.07</Text>
                                    元
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <Col style={{marginRight:1,backgroundColor:"#fff"}}>
                                <Button
                                        backgroundColor="transparent"
                                        color="#f57706"
                                        title="充值"
                                        icon={{name:"yen",type:'font-awesome',color:'#f57706'}} />
                            </Col>
                            <Col style={{backgroundColor:"#fff"}}>
                                <Button
                                        backgroundColor="transparent"
                                        color="#069"
                                        title="提款"
                                        icon={{name:"print",type:'foundation',color:'#069'}} />
                            </Col>
                        </Row>
                        <Line></Line>
                        <View style={{height:200}}>
                            <Grid
                                data={this.state.gridList} columnNum={4}
                                renderItem={(dataItem,index)=>(
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                                        <Icon name="print" type='foundation' />
                                        <Text style={{color:'#333'}}>{dataItem.text}</Text>
                                    </View>
                                )}
                            />
                        </View>


                    </View>
                </Content>
            </Container>
        )
    }
}